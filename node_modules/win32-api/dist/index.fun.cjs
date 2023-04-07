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
var ref = require('ref-napi');
var win32Def = require('win32-def');
var W = require('win32-def/common.def');
var DS = require('win32-def/struct.def');

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
var DS__namespace = /*#__PURE__*/_interopNamespaceDefault(DS);

/* eslint-disable @typescript-eslint/no-unsafe-argument */
const isArch64 = process.arch.includes('64');
const defGroupNumber = [
    win32Def.Def.float, win32Def.Def.int16, win32Def.Def.int32, win32Def.Def.int64, win32Def.Def.int8,
    win32Def.Def.uint16, win32Def.Def.uint32, win32Def.Def.uint64, win32Def.Def.uint8,
    win32Def.Def.long, win32Def.Def.ulong, win32Def.Def.longlong, win32Def.Def.ulonglong,
];
const defGroupPointer = [
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
function load$3(dllName, dllFuncs, fns, settings) {
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
    const inst = load$3(dllName, dllFuncs, fns, settings);
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
function ucsBufferFrom(str) {
    if (typeof str === 'string' && str.length) {
        return Buffer.from(str + '\0', 'ucs2');
    }
    return ref.NULL;
}
function ucsBufferToString(buffer, charCount) {
    const str = typeof charCount === 'number'
        ? buffer.toString('ucs2', 0, charCount * 2)
        : buffer.toString('ucs2');
    return str.replace(/\0+$/u, '').replace(/^\0+/u, '');
}
/**
 * Split with null till next char (\0)
 */
function ucsBufferSplit(buffer, maxCount) {
    const ret = [];
    const row = [];
    const blen = buffer.byteLength;
    if (!blen) {
        return ret;
    }
    const count = maxCount ? maxCount : blen;
    for (let i = 0; i < blen;) {
        const t1 = ref.readCString(buffer, i);
        if (t1) {
            row.push(t1);
            i += t1.length * 2;
            continue;
        }
        else if (row.length > 0) {
            ret.push(row.join(''));
            row.length = 0;
        }
        else {
            i += 2;
        }
        if (ret.length >= count) {
            break;
        }
    }
    row.length = 0;
    return ret;
}
/**
 * Read string from address of ptr
 */
function ptrToString(ptrAddress, maxByteLength) {
    if (!ptrAddress) {
        return '';
    }
    assert(maxByteLength >= 2, 'maxByteLength is required');
    const tpl = ref.allocCString('', 'ucs2');
    const refType = tpl.ref().ref().type;
    const buf = Buffer.alloc(8);
    buf.writeInt64LE(ptrAddress.toString(), 0);
    buf.type = refType;
    const buf2 = buf.readPointer(0, maxByteLength);
    const [txt] = ucsBufferSplit(buf2, 1);
    const ret = txt ?? '';
    return ret;
}
/**
 * Retrieve struct from Buffer
 */
function bufferToStruct(src, structDef, maxCount = 1, pcbNeeded, align = 8) {
    const ret = [];
    const blen = pcbNeeded ? pcbNeeded : src.byteLength;
    assert(blen >= 16, 'Buffer too small');
    // const structDef = DS.PRINTER_INFO_1
    const keyLen = Object.keys(structDef).length;
    assert(keyLen >= 1, 'keyLen must be >= 1');
    const groupBtyeLen = keyLen * align;
    const bufByteLen = maxCount * groupBtyeLen;
    for (let i = 0; i < maxCount; i += 1) {
        const buf = Buffer.alloc(bufByteLen);
        src.copy(buf, 0, i * groupBtyeLen);
        const struct = retriveStruct(structDef, buf, blen, align);
        ret.push(struct);
    }
    return ret;
}
function retriveStruct(structDef, // DS.PRINTER_INFO_[L],
src, maxReadByteLength, align) {
    const struct = win32Def.StructFactory(structDef, { useStringBuffer: true });
    Object.entries(structDef).forEach(([key, defType], idx) => {
        const pos = idx * align;
        if (typeof defType === 'string') {
            const valOrAddr = readAddrValue(src, defType, pos);
            assert(typeof valOrAddr !== 'undefined');
            if (defGroupNumber.includes(defType)) { // number value
                // @ts-ignore
                struct[key] = valOrAddr;
            }
            else if (defGroupPointer.includes(defType)) { // pointer value
                const ptrVal = ptrToString(valOrAddr, maxReadByteLength);
                // @ts-ignore
                struct[key] = ptrVal;
            }
            else {
                throw new TypeError(`Unknown key: "${key}", type: "${defType}"`);
            }
        }
        else {
            throw new Error(`Not implemented, only Def type is supported: key: "${key}"`);
        }
    });
    return struct;
}
function readAddrValue(src, defType, pos) {
    let ret;
    if (defGroupPointer.includes(defType)) {
        ret = isArch64 ? src.readInt64LE(pos) : src.readInt32LE(pos);
    }
    else if (defGroupNumber.includes(defType)) {
        if (defType.includes('64')) {
            ret = src.readInt64LE(pos);
        }
        else if (defType.includes('32')) {
            ret = src.readInt32LE(pos);
        }
        else if (defType.includes('16')) {
            ret = src.readInt16LE(pos);
        }
        else {
            throw new Error(`Unknown defType: ${defType}`);
        }
    }
    else {
        throw new Error(`Unknown defType: ${defType}`);
    }
    return ret;
}

const apiDef$2 = {
    EndDocPrinter: [W__namespace.BOOL, [W__namespace.HANDLE]],
    EndPagePrinter: [W__namespace.BOOL, [W__namespace.HANDLE]],
    WritePrinter: [W__namespace.BOOL, [W__namespace.HANDLE, W__namespace.LPVOID, W__namespace.DWORD, W__namespace.LPDWORD]],
};

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

var DllNames;
(function (DllNames) {
    DllNames["comctl32"] = "comctl32";
    DllNames["gdi32"] = "gdi32";
    DllNames["kernel32"] = "kernel32";
    DllNames["ntdll"] = "ntdll";
    DllNames["spoolss"] = "spoolss";
    DllNames["user32"] = "user32";
    DllNames["winspool"] = "winspool.drv";
})(DllNames = DllNames || (DllNames = {}));

const dllName$5 = "winspool.drv" /* DllNames.winspool */;
const load$2 = (fns, settings) => loadAsync(dllName$5, apiDef$2, fns, settings);

const dllName$4 = "user32" /* DllNames.user32 */;
const load$1 = (fns, settings) => loadAsync(dllName$4, apiDef$1, fns, settings);

const dllName$3 = "winspool.drv" /* DllNames.winspool */;
const load = (fns, settings) => loadAsync(dllName$3, apiDef, fns, settings);

const loaders = new Map();
const mods = new Map();
loaders.set("spoolss" /* DllNames.spoolss */, load$2);
loaders.set("user32" /* DllNames.user32 */, load$1);
loaders.set("winspool.drv" /* DllNames.winspool */, load);
function getMod(name) {
    assert(name);
    const cache = mods.get(name);
    if (cache) {
        return cache;
    }
    const loader = loaders.get(name);
    if (!loader) {
        throw new TypeError(`Loader of "${name}" not found`);
    }
    const mod = loader();
    assert(mod);
    mods.set(name, mod);
    return mod;
}

// eslint-disable-next-line import/no-extraneous-dependencies
const dllName$2 = "user32" /* DllNames.user32 */;

/**
 * Retrieves a handle to the specified printer or print server or other types of handles in the print subsystem.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/openprinter
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/openprinter
 */
async function user32FindWindowEx(hwndParent, hwndChildAfter, lpszClass, lpszWindow) {
    const mod = getMod(dllName$2);
    const lpszClassBuf = ucsBufferFrom(lpszClass);
    const lpszWindowBuf = ucsBufferFrom(lpszWindow);
    const hWnd = await mod.FindWindowExW(hwndParent, hwndChildAfter, lpszClassBuf, lpszWindowBuf);
    return hWnd;
}
/**
 * @docs https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowtextw
 */
async function user32GetWindowText(hWnd, 
/** Not including the null character */
nMaxCount) {
    const mod = getMod(dllName$2);
    const len = nMaxCount + 1;
    const buf = Buffer.alloc(len * 2);
    const ret = await mod.GetWindowTextW(hWnd, buf, len);
    if (ret > 0) {
        const str = ucsBufferToString(buf, len);
        return str;
    }
    return '';
}

// eslint-disable-next-line import/no-extraneous-dependencies
const dllName$1 = "spoolss" /* DllNames.spoolss */;

async function spoolWritePrinter(hPrinter, pBuf, cbBuf) {
    const mod = getMod(dllName$1);
    assert(hPrinter);
    const pcWritten = Buffer.alloc(4);
    const ret = await mod.WritePrinter(hPrinter.toString(), pBuf, cbBuf, pcWritten);
    if (ret) {
        return pcWritten.readUint32LE();
    }
    return 0;
}
async function spoolEndDocPrinter(hPrinter) {
    const mod = getMod(dllName$1);
    assert(hPrinter);
    const ret = await mod.EndDocPrinter(hPrinter.toString());
    return !!ret;
}

const dllName = "winspool.drv" /* DllNames.winspool */;
function retriveStruct_PRINTER_INFO(pPrinter, Level, maxCount = 1, pcbNeeded) {
    assert(maxCount >= 1, 'maxCount must be >= 1');
    const pcb = typeof pcbNeeded === 'number'
        ? pcbNeeded
        : pPrinter.byteLength;
    assert(pcb >= 16, 'Buffer too small');
    let ret = [];
    switch (Level) {
        case 1: {
            const structDef = DS__namespace.PRINTER_INFO_1;
            // ret = loopRead(
            //   pPrinter,
            //   maxCount,
            //   pcb,
            //   1,
            //   structDef,
            // ) as M.PRINTER_INFO_X[L][]
            ret = bufferToStruct(pPrinter, structDef, maxCount, pcb);
            break;
        }
        case 4: {
            const structDef = DS__namespace.PRINTER_INFO_4;
            // ret = loopRead(
            //   pPrinter,
            //   maxCount,
            //   pcb,
            //   4,
            //   structDef,
            // ) as M.PRINTER_INFO_X[L][]
            ret = bufferToStruct(pPrinter, structDef, maxCount, pcb);
            break;
        }
        default:
            throw new Error(`Level not implemented:${Level}`);
    }
    return ret;
}
/*
function rpi1(
  addressBuffer: Buffer,
  maxByteLength: number,
): M.PRINTER_INFO_1 {

  const structDef = DS.PRINTER_INFO_1
  const blen = maxByteLength
  assert(blen >= 16, 'Buffer too small')

  // Flags: DWORD
  // pDescription: WCHAR_String
  // pName: WCHAR_String
  // pComment: WCHAR_String
  const struct = StructFactory<M.PRINTER_INFO_X[1]>(structDef)
  struct.Flags = addressBuffer.readUInt32LE(0)

  const addr1 = addressBuffer.readUInt64LE(8)
  struct.pDescription = ptrToString(addr1, blen)

  const addr2 = addressBuffer.readUInt64LE(16)
  struct.pName = ptrToString(addr2, blen)

  const addr3 = addressBuffer.readUInt64LE(24)
  struct.pName = ptrToString(addr3, blen)

  return struct
}


function rpi4(
  addressBuffer: Buffer,
  maxByteLength: number,
): M.PRINTER_INFO_4 {

  const structDef = DS.PRINTER_INFO_4
  const blen = maxByteLength

  assert(blen >= 16, 'Buffer too small')

  // const pbuf = Buffer.alloc(blen)
  // pPrinter.copy(pbuf, 0, 24)
  // const txtArr = ucsBufferSplit(pbuf)

  const struct = StructFactory<M.PRINTER_INFO_X[4]>(structDef)
  // pPrinterName: WCHAR_String
  // pServerName: WCHAR_String
  // Attributes: DWORD
  const addrPName = addressBuffer.readUInt64LE(0)
  struct.pPrinterName = ptrToString(addrPName, blen)

  const addrSName = addressBuffer.readUInt64LE(8)
  struct.pServerName = ptrToString(addrSName, blen)

  struct.Attributes = addressBuffer.readUInt32LE(16)

  return struct
}


type LoopFuncs<L extends M.PRINTER_INFO_LEVEL = M.PRINTER_INFO_LEVEL> = {
  [K in L]: (addressBuffer: Buffer, maxByteLength: number) => M.PRINTER_INFO_X[K]
}
const loopFuncs: LoopFuncs<1 | 4> = {
  1: rpi1,
  4: rpi4,
}

function loopRead<L extends M.PRINTER_INFO_LEVEL>(
  pPrinter: Buffer,
  maxCount: number,
  pcbNeeded: number,
  Level: L,
  structDef: object, // DS.PRINTER_INFO_[L],
): M.PRINTER_INFO_X[L][] {

  const ret: M.PRINTER_INFO_X[L][] = []

  const blen = pcbNeeded
  // const structDef = DS.PRINTER_INFO_1
  const keyLen = Object.keys(structDef).length
  assert(keyLen >= 1, 'keyLen must be >= 1')

  const itemLen = keyLen * 8 // byes
  const bufByteLen = maxCount * itemLen

  // @ts-expect-error
  const fn = loopFuncs[Level] as LoopFuncs[L]
  assert(typeof fn === 'function')

  for (let i = 0; i < maxCount; i += 1) {
    const buf = Buffer.alloc(bufByteLen)
    pPrinter.copy(buf, 0, i * itemLen)
    const struct = fn(buf, blen)
    ret.push(struct)
  }

  return ret
}
*/
function retriveStruct_PRINTPROCESSOR_INFO_1(pPrintProcessorInfo, count, pcb) {
    if (!pcb) {
        return [];
    }
    const structs = bufferToStruct(pPrintProcessorInfo, DS__namespace.PRINTPROCESSOR_INFO_1, count, pcb);
    return structs;
}
function retriveStruct_DATATYPES_INFO_1(pPrintProcessorInfo, count, pcb) {
    if (!pcb) {
        return [];
    }
    const structs = bufferToStruct(pPrintProcessorInfo, DS__namespace.DATATYPES_INFO_1, count, pcb);
    return structs;
}

async function winspoolClosePrinter(hPrinter) {
    assert(hPrinter);
    const mod = getMod(dllName);
    const ret = await mod.ClosePrinter(hPrinter.toString());
    return !!ret;
}
/**
 * Enumerates available printers, print servers, domains, or print providers.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/enumprinters
 */
async function winspoolEnumPrinters(options) {
    const mod = getMod(dllName);
    const name = ucsBufferFrom(options.Name);
    const level = options.Level;
    assert(level >= 1 && level <= 5, 'level must be >= 1 and <= 5');
    const cbBuf = options.cbBuf ?? 4096;
    assert(cbBuf > 2, 'cbBuf must be > 2');
    const pPrinterEnum = Buffer.alloc(cbBuf);
    const pcbNeeded = ref.alloc('uint32');
    const pcReturned = ref.alloc('uint32');
    const ret = await mod.EnumPrintersW(options.Flags, name, level, pPrinterEnum, cbBuf, pcbNeeded, pcReturned);
    const count = pcReturned.readUInt32LE();
    const pcb = pcbNeeded.readUInt32LE();
    if (ret && count) {
        const arr = retriveStruct_PRINTER_INFO(pPrinterEnum, level, count, pcb);
        return arr;
    }
    return [];
}
/**
 * Enumerates the print processors installed on the specified server.
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/enumprintprocessors
 */
async function winspoolEnumPrintProcessors(pName, pEnvironment) {
    const mod = getMod(dllName);
    const pNameBuf = ucsBufferFrom(pName);
    const pEnvironmentBuf = ucsBufferFrom(pEnvironment);
    const Level = 1;
    const pPrintProcessorInfo = Buffer.alloc(512);
    const cbBuf = pPrintProcessorInfo.byteLength;
    const pcbNeeded = ref.alloc('uint32');
    const pcReturned = ref.alloc('uint32');
    const ret = await mod.EnumPrintProcessorsW(pNameBuf, pEnvironmentBuf, Level, pPrintProcessorInfo, cbBuf, pcbNeeded, pcReturned);
    const count = pcReturned.readUInt32LE();
    const pcb = pcbNeeded.readUInt32LE();
    if (ret && count) {
        const arr = retriveStruct_PRINTPROCESSOR_INFO_1(pPrintProcessorInfo, count, pcb);
        return arr;
    }
    return [];
}
async function winspoolEnumPrintProcessorDatatypes(pName, pPrintProcessorName) {
    const mod = getMod(dllName);
    const pNameBuf = ucsBufferFrom(pName);
    const pPrintProcessorNameBuf = ucsBufferFrom(pPrintProcessorName);
    const Level = 1;
    const pDatatypes = Buffer.alloc(1024);
    const cbBuf = pDatatypes.byteLength;
    const pcbNeeded = ref.alloc('uint32');
    const pcReturned = ref.alloc('uint32');
    const ret = await mod.EnumPrintProcessorDatatypesW(pNameBuf, pPrintProcessorNameBuf, Level, pDatatypes, cbBuf, pcbNeeded, pcReturned);
    const count = pcReturned.readUInt32LE();
    const pcb = pcbNeeded.readUInt32LE();
    if (ret && count) {
        const arr = retriveStruct_DATATYPES_INFO_1(pDatatypes, count, pcb);
        return arr;
    }
    return [];
}
/**
 * Retrieves the printer name of the default printer for the current user on the local computer.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/getdefaultprinter
 */
async function winspoolGetDefaultPrinter(maxNameLength = 256) {
    const mod = getMod(dllName);
    assert(maxNameLength > 2);
    const len = maxNameLength + 1;
    const pszBuf = Buffer.alloc(len * 2);
    const pcchBuf = Buffer.alloc(4);
    pcchBuf.writeUint32LE(len);
    const ret = await mod.GetDefaultPrinterW(pszBuf, pcchBuf);
    if (!ret) {
        return '';
    }
    const pcch = pcchBuf.readUInt32LE();
    if (pcch > 0) {
        const size = pcch - 1;
        const psz = ucsBufferToString(pszBuf, size);
        return psz;
    }
    return '';
}
/**
 * Retrieves a handle to the specified printer or print server or other types of handles in the print subsystem.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/openprinter
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/openprinter
 */
async function winspoolOpenPrinter(printerName) {
    const mod = getMod(dllName);
    assert(printerName);
    const nameBuf = ucsBufferFrom(printerName);
    const ptr = Buffer.alloc(8);
    const ret = await mod.OpenPrinterW(nameBuf, ptr, ref.NULL);
    if (ret) {
        const hWnd = ptr.readBigInt64LE();
        return hWnd;
    }
    return 0;
}
/**
 * Retrieves information about a specified printer.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/getprinter
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/getprinter
 */
async function winspoolGetPrinter(hPrinter, Level, maxByteLength = 1024) {
    const mod = getMod(dllName);
    const pPrinter = Buffer.alloc(maxByteLength);
    const cbBuf = pPrinter.byteLength;
    const pcbNeeded = Buffer.alloc(8);
    const ret = await mod.GetPrinterW(hPrinter.toString(), Level, pPrinter, cbBuf, pcbNeeded);
    const pcb = pcbNeeded.readUInt32LE();
    if (ret) {
        const [struct] = retriveStruct_PRINTER_INFO(pPrinter, Level, 1, pcb);
        // const pPrinter2 = Buffer.alloc(pcb)
        // const cbBuf2 = pcb
        // const pcbNeeded2 = Buffer.alloc(8)
        // await mod.GetPrinterW(
        //   hPrinter.toString(),
        //   Level,
        //   pPrinter2,
        //   cbBuf2,
        //   pcbNeeded2,
        // )
        // const [struct] = retriveStruct_PRINTER_INFO(pPrinter2, Level, 1)
        return struct;
    }
    if (pcb > 0 && pcb > maxByteLength) {
        throw new Error(`maxByteLength is too small, increase to value grater than ${pcb}`);
    }
}
async function winspoolStartDocPrinter(hPrinter, pDocInfo) {
    const mod = getMod(dllName);
    assert(hPrinter);
    assert(pDocInfo);
    const Level = 1;
    const ret = await mod.StartDocPrinterW(hPrinter.toString(), Level, pDocInfo);
    return ret;
}
async function winspoolStartPagePrinter(hPrinter) {
    const mod = getMod(dllName);
    assert(hPrinter);
    const ret = await mod.StartPagePrinter(hPrinter.toString());
    return ret;
}
async function winspoolEndPagePrinter(hPrinter) {
    const mod = getMod(dllName);
    assert(hPrinter);
    const ret = await mod.EndPagePrinter(hPrinter.toString());
    return ret;
}

exports.spoolEndDocPrinter = spoolEndDocPrinter;
exports.spoolWritePrinter = spoolWritePrinter;
exports.user32FindWindowEx = user32FindWindowEx;
exports.user32GetWindowText = user32GetWindowText;
exports.winspoolClosePrinter = winspoolClosePrinter;
exports.winspoolEndPagePrinter = winspoolEndPagePrinter;
exports.winspoolEnumPrintProcessorDatatypes = winspoolEnumPrintProcessorDatatypes;
exports.winspoolEnumPrintProcessors = winspoolEnumPrintProcessors;
exports.winspoolEnumPrinters = winspoolEnumPrinters;
exports.winspoolGetDefaultPrinter = winspoolGetDefaultPrinter;
exports.winspoolGetPrinter = winspoolGetPrinter;
exports.winspoolOpenPrinter = winspoolOpenPrinter;
exports.winspoolStartDocPrinter = winspoolStartDocPrinter;
exports.winspoolStartPagePrinter = winspoolStartPagePrinter;
//# sourceMappingURL=index.fun.cjs.map
