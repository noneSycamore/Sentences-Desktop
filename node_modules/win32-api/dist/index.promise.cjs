/**
 * win32-api
 * FFI definitions of windows win32 api for node-ffi
 *
 * @version 20.4.0
 * @author waiting
 * @license MIT
 * @link https://waitingsong.github.io/node-win32-api
 */

'use strict';

var assert = require('node:assert');
var node_fs = require('node:fs');
var ffi = require('ffi-napi');
require('ref-napi');
var win32Def = require('win32-def');
var W = require('win32-def/common.def');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var W__namespace = /*#__PURE__*/_interopNamespaceDefault(W);

/* eslint-disable @typescript-eslint/no-unsafe-argument */
process.arch.includes('64');
[
    win32Def.Def.float, win32Def.Def.int16, win32Def.Def.int32, win32Def.Def.int64, win32Def.Def.int8,
    win32Def.Def.uint16, win32Def.Def.uint32, win32Def.Def.uint64, win32Def.Def.uint8,
    win32Def.Def.long, win32Def.Def.ulong, win32Def.Def.longlong, win32Def.Def.ulonglong,
];
[
    win32Def.Def.boolPtr, win32Def.Def.bytePtr, win32Def.Def.charPtr, win32Def.Def.intPtr, win32Def.Def.int8Ptr,
    win32Def.Def.int16Ptr, win32Def.Def.int32Ptr, win32Def.Def.int64Ptr, win32Def.Def.floatPtr,
    win32Def.Def.longPtr, win32Def.Def.uintPtr, win32Def.Def.uint8Ptr,
    win32Def.Def.intPtrPtr, win32Def.Def.uint16Ptr, win32Def.Def.uint32Ptr, win32Def.Def.uint64Ptr,
    win32Def.Def.ulonglongPtr, win32Def.Def.voidPtr,
    win32Def.Def.uintPtrPtr, win32Def.Def.uint16PtrPtr, win32Def.Def.uint32PtrPtr, win32Def.Def.uint64PtrPtr,
    win32Def.Def.ulonglongPtrPtr, win32Def.Def.voidPtrPtr,
];
const dllInstMap = new Map(); // for DLL.load() with settings.singleton === true
// const hasAsyncProxy = '__hasAsyncProxy__'
function load$7(dllName, dllFuncs, fns, settings) {
    const st = parse_settings(settings);
    const name = dllName.endsWith('.drv')
        ? preprareDllFile(dllName)
        : dllName;
    if (st.singleton) {
        let inst = get_inst_by_name(name);
        if (!inst) {
            const ps = gen_api_opts(dllFuncs, fns);
            // ffi.Library.EXT = ext
            inst = ffi.Library(name, ps);
            set_inst_by_name(name, inst);
        }
        return inst;
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return ffi.Library(name, gen_api_opts(dllFuncs, fns));
    }
}
function preprareDllFile(file) {
    if (file.startsWith('file://')) {
        return file;
    }
    else if (file.startsWith('http://') || file.startsWith('https://')) {
        return file;
    }
    else if (file.startsWith('/')) {
        return file;
    }
    try {
        const stat = node_fs.statSync(file);
        if (stat.isFile()) {
            return file;
        }
    }
    catch {
        // void
    }
    const { HOME, WINDIR } = process.env;
    assert(HOME, 'HOME is not defined');
    assert(WINDIR, 'WINDIR is not defined');
    const sys32dir = `${WINDIR}/system32`;
    const path = `${sys32dir}/${file}`;
    const target = `${HOME}/${file}.dll`;
    const stat = node_fs.statSync(path);
    if (!stat.isFile()) {
        throw new Error(`${file} is not found in path: "${path}"`);
    }
    try {
        const stat2 = node_fs.statSync(target);
        if (stat2.isFile()) {
            return target;
        }
        node_fs.copyFileSync(path, target);
    }
    catch {
        node_fs.copyFileSync(path, target);
    }
    return target;
}
/**
 * Copy file from src to dest but change the file extension to ext
 */
// export async function copyFileWithDllExt(
//   src: string,
//   targetDir: string,
//   ext = 'dll',
// ): Promise<string> {
//   const [file] = basename(src).split('.')
//   assert(file)
//   const target = `${targetDir}/${file}.${ext}`
//   if (await isFileExists(target)) {
//     return target
//   }
//   await copyFile(src, target)
//   return target
// }
function loadAsync(dllName, dllFuncs, fns, settings) {
    const inst = load$7(dllName, dllFuncs, fns, settings);
    assert(inst);
    const instAsync = {};
    Object.entries(inst).forEach(([name, value]) => {
        if (!Object.hasOwn(inst, name)) {
            return;
        }
        if (typeof value !== 'function') {
            Object.defineProperty(instAsync, name, {
                enumerable: false,
                writable: true,
                configurable: true,
                value,
            });
        }
        const fnAsync = new Proxy(value, {
            // @ts-ignore
            apply(target, ctx, args) {
                // console.info({ target, ctx, args })
                return callFnAsync(target, args);
            },
        });
        Object.defineProperty(instAsync, name, {
            enumerable: false,
            writable: true,
            configurable: true,
            value: fnAsync,
        });
    });
    return instAsync;
}
async function callFnAsync(target, args) {
    assert(target);
    assert(typeof target.async === 'function');
    return new Promise((done, reject) => {
        const cb = (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            done(result);
        };
        // @ts-ignore
        Reflect.apply(target.async, null, [...args, cb]);
    });
}
/**
 * Generate function definitions via converting macro windows data type (like PVOID) to the expected value.
 * Skip assignment if property undefined
 */
function gen_api_opts(dllFuncs, fns) {
    const ret = {};
    if (fns && Array.isArray(fns) && fns.length) {
        for (const fn of fns) {
            if (!Object.hasOwn(dllFuncs, fn)) {
                continue;
            }
            // @ts-ignore
            const ps = dllFuncs[fn];
            assert(ps, `dellFuncs has no property mehod name "${fn}"`);
            Object.defineProperty(ret, fn, {
                value: ps,
                writable: false,
                enumerable: true,
                configurable: false,
            });
        }
    }
    else {
        for (const fn of Object.keys(dllFuncs)) {
            // @ts-ignore
            const ps = dllFuncs[fn];
            assert(ps, `dellFuncs has no property mehod name "${fn}"`);
            Object.defineProperty(ret, fn, {
                value: ps,
                writable: false,
                enumerable: true,
                configurable: false,
            });
        }
    }
    return ret;
}
function get_inst_by_name(dllName) {
    return dllInstMap.get(dllName);
}
function set_inst_by_name(dllName, inst) {
    dllInstMap.set(dllName, inst);
}
function parse_settings(settings) {
    const st = { ...win32Def.settingsDefault };
    // const st: LoadSettings = {
    //   singleton: true,
    //   _WIN64: true,
    // }
    if (typeof settings !== 'undefined' && Object.keys(settings).length) {
        Object.assign(st, settings);
    }
    return st;
}

const apiDef$6 = {
    InitCommonControlsEx: [W__namespace.BOOL, [W__namespace.LPINITCOMMONCONTROLSEX]],
};

const dllName$6 = "comctl32" /* DllNames.comctl32 */;
const load$6 = (fns, settings) => loadAsync(dllName$6, apiDef$6, fns, settings);

var index_promise$6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    apiDef: apiDef$6,
    dllName: dllName$6,
    load: load$6
});

const apiDef$5 = {
    // CreateBitmap: [W.HBITMAP, [W.INT, W.INT, W.UINT, W.UINT, W.VOID] ],
    CreateCompatibleBitmap: [W__namespace.HBITMAP, [W__namespace.HDC, W__namespace.INT, W__namespace.INT]],
    CreateCompatibleDC: [W__namespace.HDC, [W__namespace.HDC]],
};

const dllName$5 = "gdi32" /* DllNames.gdi32 */;
const load$5 = (fns, settings) => loadAsync(dllName$5, apiDef$5, fns, settings);

var index_promise$5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    apiDef: apiDef$5,
    dllName: dllName$5,
    load: load$5
});

const apiDef$4 = {
    FormatMessageW: [
        W__namespace.DWORD,
        [W__namespace.DWORD, W__namespace.LPCVOID, W__namespace.DWORD, W__namespace.DWORD, W__namespace.LPTSTR, W__namespace.DWORD, W__namespace.va_list],
    ],
    FreeConsole: [W__namespace.BOOL, []],
    GenerateConsoleCtrlEvent: [W__namespace.BOOL, [W__namespace.DWORD, W__namespace.DWORD]],
    /** err code: https://msdn.microsoft.com/zh-cn/library/windows/desktop/ms681381(v=vs.85).aspx */
    GetLastError: [W__namespace.DWORD, []],
    /** retrive value from buf by ret.ref().readUInt32() */
    GetModuleHandleW: [W__namespace.HMODULE, [W__namespace.LPCTSTR]],
    /** flags, optional LPCTSTR name, ref hModule */
    GetModuleHandleExW: [W__namespace.BOOL, [W__namespace.DWORD, W__namespace.LPCTSTR, W__namespace.HMODULE]],
    GetProcessHeaps: [W__namespace.DWORD, [W__namespace.DWORD, W__namespace.PHANDLE]],
    GetSystemTimes: [W__namespace.BOOL, [W__namespace.PFILETIME, W__namespace.PFILETIME, W__namespace.PFILETIME]],
    HeapFree: [W__namespace.BOOL, [W__namespace.HANDLE, W__namespace.DWORD, W__namespace.LPVOID]],
    OpenProcess: [W__namespace.HANDLE, [W__namespace.DWORD, W__namespace.BOOL, W__namespace.DWORD]],
    OutputDebugStringW: [W__namespace.VOID, [W__namespace.LPCTSTR]],
    SetLastError: [W__namespace.VOID, [W__namespace.DWORD]],
    SetThreadExecutionState: [W__namespace.INT, [W__namespace.INT]],
};

const dllName$4 = "kernel32" /* DllNames.kernel32 */;
const load$4 = (fns, settings) => loadAsync(dllName$4, apiDef$4, fns, settings);

var index_promise$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    apiDef: apiDef$4,
    dllName: dllName$4,
    load: load$4
});

const apiDef$3 = {
    NtQueryInformationProcess: [W__namespace.NTSTATUS, [W__namespace.HANDLE, W__namespace.DWORD32, W__namespace.PVOID, W__namespace.ULONG, W__namespace.PULONG]],
};

const dllName$3 = "ntdll" /* DllNames.ntdll */;
const load$3 = (fns, settings) => loadAsync(dllName$3, apiDef$3, fns, settings);

var index_promise$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    apiDef: apiDef$3,
    dllName: dllName$3,
    load: load$3
});

const apiDef$2 = {
    EndDocPrinter: [W__namespace.BOOL, [W__namespace.HANDLE]],
    EndPagePrinter: [W__namespace.BOOL, [W__namespace.HANDLE]],
    WritePrinter: [W__namespace.BOOL, [W__namespace.HANDLE, W__namespace.LPVOID, W__namespace.DWORD, W__namespace.LPDWORD]],
};

const dllName$2 = "winspool.drv" /* DllNames.winspool */;
const load$2 = (fns, settings) => loadAsync(dllName$2, apiDef$2, fns, settings);

var index_promise$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    apiDef: apiDef$2,
    dllName: dllName$2,
    load: load$2
});

const apiDef$1 = {
    BringWindowToTop: [W__namespace.BOOL, [W__namespace.HWND]],
    /** url: https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-clienttoscreen */
    ClientToScreen: [W__namespace.BOOL, [W__namespace.HWND, W__namespace.LPPOINT]],
    CloseWindow: [W__namespace.BOOL, [W__namespace.HWND]],
    CreateWindowExW: [
        W__namespace.HWND, [
            W__namespace.DWORD, W__namespace.LPCTSTR, W__namespace.LPCTSTR, W__namespace.DWORD,
            W__namespace.INT, W__namespace.INT, W__namespace.INT, W__namespace.INT,
            W__namespace.HWND, W__namespace.HMENU, W__namespace.HINSTANCE, W__namespace.LPVOID,
        ],
    ],
    DefWindowProcW: [W__namespace.LRESULT, [W__namespace.HWND, W__namespace.UINT, W__namespace.WPARAM, W__namespace.LPARAM]],
    DestroyWindow: [W__namespace.BOOL, [W__namespace.HWND]],
    DispatchMessageW: [W__namespace.LRESULT, [W__namespace.LPMSG]],
    /** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumdisplaydevicesw */
    EnumDisplayDevicesW: [W__namespace.BOOL, [W__namespace.LPCWSTR, W__namespace.DWORD, W__namespace.DISPLAY_DEVICEW, W__namespace.DWORD]],
    EnumThreadWindows: [W__namespace.BOOL, [W__namespace.DWORD, W__namespace.WNDENUMPROC, W__namespace.LPARAM]],
    EnumWindows: [W__namespace.BOOL, [W__namespace.WNDENUMPROC, W__namespace.LPARAM]],
    FindWindowExW: [W__namespace.HWND, [W__namespace.HWND, W__namespace.HWND, W__namespace.LPCTSTR, W__namespace.LPCTSTR]],
    FlashWindow: [W__namespace.BOOL, [W__namespace.HWND, W__namespace.BOOL]],
    FlashWindowEx: [W__namespace.BOOL, [W__namespace.FLASHWINFO]],
    GetAncestor: [W__namespace.HWND, [W__namespace.HWND, W__namespace.UINT]],
    GetAltTabInfoW: [W__namespace.BOOL, [W__namespace.HWND, W__namespace.INT, W__namespace.INT, W__namespace.LPWSTR, W__namespace.INT]],
    /**
     * Copies the caret's position to the specified POINT structure.
     * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getcaretpos
     */
    GetCaretPos: [W__namespace.BOOL, [W__namespace.LPPOINT]],
    GetClassInfoExW: [W__namespace.BOOL, [W__namespace.HINSTANCE, W__namespace.LPCTSTR, W__namespace.LPWNDCLASSEX]],
    GetForegroundWindow: [W__namespace.HWND, []],
    GetMessageW: [W__namespace.BOOL, [W__namespace.LPMSG, W__namespace.HWND, W__namespace.UINT, W__namespace.UINT]],
    GetParent: [W__namespace.HWND, [W__namespace.HWND]],
    GetRawInputDeviceInfoW: [W__namespace.UINT, [W__namespace.HANDLE, W__namespace.UINT, W__namespace.LPVOID, W__namespace.PUINT]],
    GetRawInputDeviceList: [W__namespace.INT, [W__namespace.PRAWINPUTDEVICELIST, W__namespace.PUINT, W__namespace.UINT]],
    GetTopWindow: [W__namespace.HWND, [W__namespace.HWND]],
    GetWindow: [W__namespace.HWND, [W__namespace.HWND, W__namespace.UINT]],
    GetWindowInfo: [W__namespace.BOOL, [W__namespace.HWND, W__namespace.PWINDOWINFO]],
    GetWindowLongW: [W__namespace.LONG, [W__namespace.HWND, W__namespace.INT]],
    /** only under x64 */
    GetWindowLongPtrW: [W__namespace.LONG_PTR, [W__namespace.HWND, W__namespace.INT]],
    GetWindowRect: [W__namespace.BOOL, [W__namespace.HWND, W__namespace.RECT]],
    GetWindowTextW: [W__namespace.INT, [W__namespace.HWND, W__namespace.LPTSTR, W__namespace.INT]],
    GetWindowThreadProcessId: [W__namespace.DWORD, [W__namespace.HWND, W__namespace.LPDWORD]],
    MonitorFromWindow: [W__namespace.HWND, [W__namespace.HANDLE, W__namespace.DWORD]],
    IsIconic: [W__namespace.BOOL, [W__namespace.HWND]],
    IsWindowVisible: [W__namespace.BOOL, [W__namespace.HWND]],
    PeekMessageW: [W__namespace.BOOL, [W__namespace.LPMSG, W__namespace.HWND, W__namespace.UINT, W__namespace.UINT, W__namespace.UINT]],
    PostMessageW: [W__namespace.BOOL, [W__namespace.HWND, W__namespace.UINT, W__namespace.WPARAM, W__namespace.LPARAM]],
    PrintWindow: [W__namespace.BOOL, [W__namespace.HWND, W__namespace.HDC, W__namespace.UINT]],
    RegisterClassExW: [W__namespace.ATOM, [W__namespace.WNDCLASSEX]],
    SendMessageW: [W__namespace.LRESULT, [W__namespace.HWND, W__namespace.UINT, W__namespace.WPARAM, W__namespace.LPARAM]],
    SetForegroundWindow: [W__namespace.BOOL, [W__namespace.HWND]],
    SetWindowPos: [W__namespace.BOOL, [W__namespace.HWND, W__namespace.HWND, W__namespace.INT, W__namespace.INT, W__namespace.INT, W__namespace.INT, W__namespace.UINT]],
    SetWindowTextW: [W__namespace.BOOL, [W__namespace.HWND, W__namespace.LPCTSTR]],
    SetWinEventHook: [W__namespace.HWINEVENTHOOK, [W__namespace.UINT, W__namespace.UINT, W__namespace.HMODULE, W__namespace.WINEVENTPROC, W__namespace.DWORD, W__namespace.DWORD, W__namespace.UINT]],
    ShowWindow: [W__namespace.BOOL, [W__namespace.HWND, W__namespace.INT]],
    TranslateMessage: [W__namespace.BOOL, [W__namespace.LPMSG]],
    TranslateMessageEx: [W__namespace.BOOL, [W__namespace.LPMSG]],
    UnhookWinEvent: [W__namespace.BOOL, [W__namespace.HWINEVENTHOOK]],
    UpdateWindow: [W__namespace.BOOL, [W__namespace.HWND]],
};
// export interface EnumWindows {
//   (lpEnumFunc: M.WNDENUMPROC, lParam: M.LPARAM): M.BOOL
//   async: (lpEnumFunc: M.WNDENUMPROC, lParam: M.LPARAM, cb: (err: Error) => void) => void
// }

/* eslint-disable no-bitwise */
// https://msdn.microsoft.com/en-us/library/windows/desktop/ms633548(v=vs.85).aspx
var CmdShow;
(function (CmdShow) {
    // Hides the window and activates another window.
    CmdShow[CmdShow["SW_HIDE"] = 0] = "SW_HIDE";
    // Activates and displays a window. If the window is minimized or maximized,
    // the system restores it to its original size and position.
    // An application should specify this flag when displaying the window for the first time.
    CmdShow[CmdShow["SW_SHOWNORMAL"] = 1] = "SW_SHOWNORMAL";
    // Activates the window and displays it as a minimized window.
    CmdShow[CmdShow["SW_SHOWMINIMIZED"] = 2] = "SW_SHOWMINIMIZED";
    // Activates the window and displays it as a maximized window.
    CmdShow[CmdShow["SW_SHOWMAXIMIZED"] = 3] = "SW_SHOWMAXIMIZED";
    // Maximizes the specified window.
    CmdShow[CmdShow["SW_MAXIMIZE"] = 3] = "SW_MAXIMIZE";
    // Displays a window in its most recent size and position.
    // This value is similar to SW_SHOWNORMAL, except that the window is not activated.
    CmdShow[CmdShow["SW_SHOWNOACTIVATE"] = 4] = "SW_SHOWNOACTIVATE";
    // Activates the window and displays it in its current size and position.
    CmdShow[CmdShow["SW_SHOW"] = 5] = "SW_SHOW";
    // Minimizes the specified window and activates the next top-level window in the Z order.
    CmdShow[CmdShow["SW_MINIMIZE"] = 6] = "SW_MINIMIZE";
    // Displays the window as a minimized window.
    // This value is similar to SW_SHOWMINIMIZED, except the window is not activated.
    CmdShow[CmdShow["SW_SHOWMINNOACTIVE"] = 7] = "SW_SHOWMINNOACTIVE";
    // Displays the window in its current size and position.
    // This value is similar to SW_SHOW, except that the window is not activated.
    CmdShow[CmdShow["SW_SHOWNA"] = 8] = "SW_SHOWNA";
    // Activates and displays the window.
    // If the window is minimized or maximized,
    // the system restores it to its original size and position.
    CmdShow[CmdShow["SW_RESTORE"] = 9] = "SW_RESTORE";
    // Sets the show state based on the SW_ value specified in the STARTUPINFO structure
    // passed to the CreateProcess function by the program that started the application.
    CmdShow[CmdShow["SW_SHOWDEFAULT"] = 10] = "SW_SHOWDEFAULT";
    // Minimizes a window, even if the thread that owns the window is not responding.
    // This flag should only be used when minimizing windows from a different thread.
    CmdShow[CmdShow["SW_FORCEMINIMIZE"] = 11] = "SW_FORCEMINIMIZE";
})(CmdShow = CmdShow || (CmdShow = {}));
// https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowpos
var CmdSetPos;
(function (CmdSetPos) {
    // values for hWndInsertAfter
    CmdSetPos[CmdSetPos["HWND_BOTTOM"] = 1] = "HWND_BOTTOM";
    CmdSetPos[CmdSetPos["HWND_NOTOPMOST"] = -2] = "HWND_NOTOPMOST";
    CmdSetPos[CmdSetPos["HWND_TOP"] = 0] = "HWND_TOP";
    CmdSetPos[CmdSetPos["HWND_TOPMOST"] = -1] = "HWND_TOPMOST";
    // values for uFlags
    CmdSetPos[CmdSetPos["SWP_ASYNCWINDOWPOS"] = 16384] = "SWP_ASYNCWINDOWPOS";
    CmdSetPos[CmdSetPos["SWP_DEFERERASE"] = 8192] = "SWP_DEFERERASE";
    CmdSetPos[CmdSetPos["SWP_DRAWFRAME"] = 32] = "SWP_DRAWFRAME";
    CmdSetPos[CmdSetPos["SWP_FRAMECHANGED"] = 32] = "SWP_FRAMECHANGED";
    CmdSetPos[CmdSetPos["SWP_HIDEWINDOW"] = 128] = "SWP_HIDEWINDOW";
    CmdSetPos[CmdSetPos["SWP_NOACTIVATE"] = 16] = "SWP_NOACTIVATE";
    CmdSetPos[CmdSetPos["SWP_NOCOPYBITS"] = 256] = "SWP_NOCOPYBITS";
    CmdSetPos[CmdSetPos["SWP_NOMOVE"] = 2] = "SWP_NOMOVE";
    CmdSetPos[CmdSetPos["SWP_NOOWNERZORDER"] = 512] = "SWP_NOOWNERZORDER";
    CmdSetPos[CmdSetPos["SWP_NOREDRAW"] = 8] = "SWP_NOREDRAW";
    CmdSetPos[CmdSetPos["SWP_NOREPOSITION"] = 512] = "SWP_NOREPOSITION";
    CmdSetPos[CmdSetPos["SWP_NOSENDCHANGING"] = 1024] = "SWP_NOSENDCHANGING";
    CmdSetPos[CmdSetPos["SWP_NOSIZE"] = 1] = "SWP_NOSIZE";
    CmdSetPos[CmdSetPos["SWP_NOZORDER"] = 4] = "SWP_NOZORDER";
    CmdSetPos[CmdSetPos["SWP_SHOWWINDOW"] = 64] = "SWP_SHOWWINDOW";
})(CmdSetPos = CmdSetPos || (CmdSetPos = {}));
/* --------- Window Styles ---------------- */
// https://msdn.microsoft.com/en-us/library/windows/desktop/ms632600(v=vs.85).aspx
const WS_BORDER = 0x00800000;
const WS_CAPTION = 0x00C00000;
const WS_CHILD = 0x40000000;
const WS_CLIPCHILDREN = 0x02000000;
const WS_CLIPSIBLINGS = 0x04000000;
const WS_DISABLED = 0x08000000;
const WS_DLGFRAME = 0x00400000;
const WS_GROUP = 0x00020000;
const WS_HSCROLL = 0x00100000;
const WS_ICONIC = 0x20000000;
const WS_MAXIMIZE = 0x01000000;
const WS_MAXIMIZEBOX = 0x00010000;
const WS_MINIMIZE = 0x20000000;
const WS_MINIMIZEBOX = 0x00020000;
const WS_OVERLAPPED = 0x00000000;
const WS_POPUP = 0x80000000; // The windows is a pop-up window
const WS_SIZEBOX = 0x00040000;
const WS_SYSMENU = 0x00080000; // The window has a window menu on its title bar.
const WS_TABSTOP = 0x00010000;
const WS_THICKFRAME = 0x00040000;
const WS_TILED = 0x00000000;
const WS_VISIBLE = 0x10000000;
const WS_VSCROLL = 0x00200000;
const WS_OVERLAPPEDWINDOW = WS_OVERLAPPED | WS_CAPTION | WS_SYSMENU
    | WS_THICKFRAME | WS_MINIMIZEBOX | WS_MAXIMIZEBOX;
const WS_POPUPWINDOW = WS_POPUP | WS_BORDER | WS_SYSMENU;
const WS_TILEDWINDOW = WS_OVERLAPPED | WS_CAPTION | WS_SYSMENU
    | WS_THICKFRAME | WS_MINIMIZEBOX | WS_MAXIMIZEBOX;
/* --------- Extended Window Styles ---------------- */
// https://docs.microsoft.com/en-us/windows/win32/winmsg/extended-window-styles
// https://msdn.microsoft.com/en-us/library/windows/desktop/ff700543(v=vs.85).aspx
const WS_EX_ACCEPTFILES = 0x00000010;
const WS_EX_APPWINDOW = 0x00040000;
const WS_EX_CLIENTEDGE = 0x00000200;
const WS_EX_COMPOSITED = 0x02000000;
const WS_EX_CONTEXTHELP = 0x00000400;
const WS_EX_CONTROLPARENT = 0x00010000;
const WS_EX_DLGMODALFRAME = 0x00000001;
const WS_EX_LAYERED = 0x00080000;
const WS_EX_LAYOUTRTL = 0x00400000;
const WS_EX_LEFT = 0x00000000;
const WS_EX_LEFTSCROLLBAR = 0x00004000;
const WS_EX_LTRREADING = 0x00000000;
const WS_EX_MDICHILD = 0x00000040;
const WS_EX_NOACTIVATE = 0x08000000;
const WS_EX_NOINHERITLAYOUT = 0x00100000;
const WS_EX_NOPARENTNOTIFY = 0x00000004;
const WS_EX_NOREDIRECTIONBITMAP = 0x00200000;
const WS_EX_RIGHT = 0x00001000;
const WS_EX_RIGHTSCROLLBAR = 0x00000000;
const WS_EX_RTLREADING = 0x00002000;
const WS_EX_STATICEDGE = 0x00020000;
const WS_EX_TOOLWINDOW = 0x00000080;
const WS_EX_TOPMOST = 0x00000008;
const WS_EX_TRANSPARENT = 0x00000020;
const WS_EX_WINDOWEDGE = 0x00000100;
const WS_EX_OVERLAPPEDWINDOW = WS_EX_WINDOWEDGE | WS_EX_CLIENTEDGE;
const WS_EX_PALETTEWINDOW = WS_EX_WINDOWEDGE | WS_EX_TOOLWINDOW | WS_EX_TOPMOST;
const PM_NOREMOVE = 0x0000;
const PM_REMOVE = 0x0001;
const PM_NOYIELD = 0x0002;
const CW_USEDEFAULT = 1 << 31;

var constants = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CW_USEDEFAULT: CW_USEDEFAULT,
    get CmdSetPos () { return CmdSetPos; },
    get CmdShow () { return CmdShow; },
    PM_NOREMOVE: PM_NOREMOVE,
    PM_NOYIELD: PM_NOYIELD,
    PM_REMOVE: PM_REMOVE,
    WS_BORDER: WS_BORDER,
    WS_CAPTION: WS_CAPTION,
    WS_CHILD: WS_CHILD,
    WS_CLIPCHILDREN: WS_CLIPCHILDREN,
    WS_CLIPSIBLINGS: WS_CLIPSIBLINGS,
    WS_DISABLED: WS_DISABLED,
    WS_DLGFRAME: WS_DLGFRAME,
    WS_EX_ACCEPTFILES: WS_EX_ACCEPTFILES,
    WS_EX_APPWINDOW: WS_EX_APPWINDOW,
    WS_EX_CLIENTEDGE: WS_EX_CLIENTEDGE,
    WS_EX_COMPOSITED: WS_EX_COMPOSITED,
    WS_EX_CONTEXTHELP: WS_EX_CONTEXTHELP,
    WS_EX_CONTROLPARENT: WS_EX_CONTROLPARENT,
    WS_EX_DLGMODALFRAME: WS_EX_DLGMODALFRAME,
    WS_EX_LAYERED: WS_EX_LAYERED,
    WS_EX_LAYOUTRTL: WS_EX_LAYOUTRTL,
    WS_EX_LEFT: WS_EX_LEFT,
    WS_EX_LEFTSCROLLBAR: WS_EX_LEFTSCROLLBAR,
    WS_EX_LTRREADING: WS_EX_LTRREADING,
    WS_EX_MDICHILD: WS_EX_MDICHILD,
    WS_EX_NOACTIVATE: WS_EX_NOACTIVATE,
    WS_EX_NOINHERITLAYOUT: WS_EX_NOINHERITLAYOUT,
    WS_EX_NOPARENTNOTIFY: WS_EX_NOPARENTNOTIFY,
    WS_EX_NOREDIRECTIONBITMAP: WS_EX_NOREDIRECTIONBITMAP,
    WS_EX_OVERLAPPEDWINDOW: WS_EX_OVERLAPPEDWINDOW,
    WS_EX_PALETTEWINDOW: WS_EX_PALETTEWINDOW,
    WS_EX_RIGHT: WS_EX_RIGHT,
    WS_EX_RIGHTSCROLLBAR: WS_EX_RIGHTSCROLLBAR,
    WS_EX_RTLREADING: WS_EX_RTLREADING,
    WS_EX_STATICEDGE: WS_EX_STATICEDGE,
    WS_EX_TOOLWINDOW: WS_EX_TOOLWINDOW,
    WS_EX_TOPMOST: WS_EX_TOPMOST,
    WS_EX_TRANSPARENT: WS_EX_TRANSPARENT,
    WS_EX_WINDOWEDGE: WS_EX_WINDOWEDGE,
    WS_GROUP: WS_GROUP,
    WS_HSCROLL: WS_HSCROLL,
    WS_ICONIC: WS_ICONIC,
    WS_MAXIMIZE: WS_MAXIMIZE,
    WS_MAXIMIZEBOX: WS_MAXIMIZEBOX,
    WS_MINIMIZE: WS_MINIMIZE,
    WS_MINIMIZEBOX: WS_MINIMIZEBOX,
    WS_OVERLAPPED: WS_OVERLAPPED,
    WS_OVERLAPPEDWINDOW: WS_OVERLAPPEDWINDOW,
    WS_POPUP: WS_POPUP,
    WS_POPUPWINDOW: WS_POPUPWINDOW,
    WS_SIZEBOX: WS_SIZEBOX,
    WS_SYSMENU: WS_SYSMENU,
    WS_TABSTOP: WS_TABSTOP,
    WS_THICKFRAME: WS_THICKFRAME,
    WS_TILED: WS_TILED,
    WS_TILEDWINDOW: WS_TILEDWINDOW,
    WS_VISIBLE: WS_VISIBLE,
    WS_VSCROLL: WS_VSCROLL
});

const dllName$1 = "user32" /* DllNames.user32 */;
const load$1 = (fns, settings) => loadAsync(dllName$1, apiDef$1, fns, settings);

var index_promise$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    apiDef: apiDef$1,
    constants: constants,
    dllName: dllName$1,
    load: load$1
});

const apiDef = {
    ClosePrinter: [W__namespace.BOOL, [W__namespace.HANDLE]],
    EndDocPrinter: [W__namespace.BOOL, [W__namespace.HANDLE]],
    EndPagePrinter: [W__namespace.BOOL, [W__namespace.HANDLE]],
    EnumPrintersW: [W__namespace.BOOL, [W__namespace.DWORD, W__namespace.LPTSTR, W__namespace.DWORD, W__namespace.LPBYTE, W__namespace.DWORD, W__namespace.LPDWORD, W__namespace.LPDWORD]],
    EnumPrintProcessorsW: [W__namespace.BOOL, [W__namespace.LPTSTR, W__namespace.LPTSTR, W__namespace.DWORD, W__namespace.LPBYTE, W__namespace.DWORD, W__namespace.LPDWORD, W__namespace.LPDWORD]],
    EnumPrintProcessorDatatypesW: [W__namespace.BOOL, [W__namespace.LPTSTR, W__namespace.LPTSTR, W__namespace.DWORD, W__namespace.LPBYTE, W__namespace.DWORD, W__namespace.LPDWORD, W__namespace.LPDWORD]],
    GetDefaultPrinterW: [W__namespace.BOOL, [W__namespace.LPTSTR, W__namespace.LPDWORD]],
    GetJobW: [W__namespace.BOOL, [W__namespace.HANDLE, W__namespace.DWORD, W__namespace.DWORD, W__namespace.LPBYTE, W__namespace.DWORD, W__namespace.LPDWORD]],
    GetPrinterW: [W__namespace.BOOL, [W__namespace.HANDLE, W__namespace.DWORD, W__namespace.LPBYTE, W__namespace.DWORD, W__namespace.LPDWORD]],
    OpenPrinterW: [W__namespace.BOOL, [W__namespace.LPTSTR, W__namespace.LPHANDLE, W__namespace.LPRINTER_DEFAULTS]],
    StartDocPrinterW: [W__namespace.DWORD, [W__namespace.HANDLE, W__namespace.DWORD, W__namespace.LPBYTE]],
    StartPagePrinter: [W__namespace.BOOL, [W__namespace.HANDLE]],
    WritePrinter: [W__namespace.BOOL, [W__namespace.HANDLE, W__namespace.LPVOID, W__namespace.DWORD, W__namespace.LPDWORD]],
};

const dllName = "winspool.drv" /* DllNames.winspool */;
const load = (fns, settings) => loadAsync(dllName, apiDef, fns, settings);

var index_promise = /*#__PURE__*/Object.freeze({
    __proto__: null,
    apiDef: apiDef,
    dllName: dllName,
    load: load
});

exports.Comctl32 = index_promise$6;
exports.Gdi32 = index_promise$5;
exports.Kernel32 = index_promise$4;
exports.Ntdll = index_promise$3;
exports.Spoolss = index_promise$2;
exports.User32 = index_promise$1;
exports.Winspool = index_promise;
//# sourceMappingURL=index.promise.cjs.map
