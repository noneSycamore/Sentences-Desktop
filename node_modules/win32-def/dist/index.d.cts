import { BigIntStr, TuplePush } from '@waiting/shared-types';
import ref from 'ref-napi';

type _POINTER = Buffer;
type WNDPROC = Buffer;
/** number: 32bit, bitint: 64bit  */
type PTR_Addr = number | BigIntStr;
/**
 * @link https://docs.microsoft.com/en-us/windows/win32/secauthz/access-mask-format
 */
type ACCESS_MASK = number;
type ATOM = number;
type DWORD = number;
type PVOID = Buffer;
/**
 * `uint32` or `uint64` used as value usage (memory address) instead of PVOID (Buffer),
 * Use `HANDLE` (number) for params defintion of the api,
 * @see https://stackoverflow.com/questions/18266626/what-is-the-range-of-a-windows-handle-on-a-64-bits-application/29526711#29526711
 */
type HANDLE = number | BigIntStr;
/**
 * `HANDLE_PVOID` (Buffer) can be used for definition of Struct,
 */
type HANDLE_PVOID = PVOID;
type LONG_PTR = PTR_Addr;
type ULONG_PTR = PTR_Addr;
type VOID = any;
type WCHAR = UINT16;
type WCHAR_String = string;
type PWCHAR_String = _POINTER;
type BOOL = number;
type BOOLEAN = boolean;
type BYTE = number;
/** https://msdn.microsoft.com/en-us/library/windows/desktop/ms633573(v=vs.85).aspx */
type CALLBACK = WNDPROC;
type CCHAR = UINT8;
type CHAR = UINT8;
type COLORREF = number;
type DWORDLONG = number;
type DWORD_PTR = ULONG_PTR;
type DWORD32 = number;
type DWORD64 = number;
type FLOAT = number;
type HACCEL = HANDLE;
type HALF_PTR = number;
type HBITMAP = HANDLE;
type HBRUSH = HANDLE;
type HCOLORSPACE = HANDLE;
type HCONV = HANDLE;
type HCONVLIST = HANDLE;
type HCURSOR = HANDLE;
type HDC = HANDLE;
type HDDEDATA = HANDLE;
type HDESK = HANDLE;
type HDROP = HANDLE;
type HDWP = HANDLE;
type HENHMETAFILE = HANDLE;
type HFILE = HANDLE;
type HFONT = HANDLE;
type HGDIOBJ = HANDLE;
type HGLOBAL = HANDLE;
type HHOOK = HANDLE;
type HICON = HANDLE;
type HINSTANCE = HANDLE;
type HKEY = HANDLE;
type HKL = HANDLE;
type HLOCAL = HANDLE;
type HMENU = HANDLE;
type HMETAFILE = HANDLE;
type HMODULE = HINSTANCE;
type HMONITOR = HANDLE;
type HPALETTE = HANDLE;
type HPEN = HANDLE;
type HRESULT = LONG;
type HRGN = HANDLE;
type HRSRC = HANDLE;
type HSZ = HANDLE;
type HWINEVENTHOOK = HANDLE;
type HWINSTA = HANDLE;
type HWND = HANDLE;
/** A 32-bit signed integer */
type INT = number;
type INT_PTR = PTR_Addr;
type INT8 = number;
type INT16 = number;
type INT32 = number;
type INT64 = BigIntStr;
type LANGID = WORD;
type LCID = DWORD;
type LCTYPE = DWORD;
type LGRPID = DWORD;
type LONG = number;
type LONGLONG = BigIntStr;
type LONG32 = number;
type LONG64 = BigIntStr;
type LPARAM = LONG_PTR;
type LPBOOL = _POINTER;
type LPBYTE = _POINTER;
type LPCOLORREF = _POINTER;
type LPCSTR = _POINTER;
type LPCWSTR = PUINT8;
type LPCTSTR = PUINT16;
type LPVOID = _POINTER;
type LPCVOID = LPVOID;
type LPDWORD = PUINT16;
type LPHANDLE = _POINTER;
type LPINT = PINT;
type LPLONG = PINT32;
type LPMSG = _POINTER;
type LPPOINT = _POINTER;
type LPSTR = _POINTER;
type LPWSTR = PUINT16;
type LPTSTR = _POINTER;
type LPWORD = PUINT16;
type LRESULT = number;
type NTSTATUS = UINT32;
type PBOOL = _POINTER;
type PBOOLEAN = _POINTER;
type PBYTE = _POINTER;
type PCHAR = _POINTER;
type PCSTR = PUINT8;
type PCTSTR = _POINTER;
type PCWSTR = PUINT16;
type PDWORD = PUINT32;
type PDWORDLONG = PUINT64;
type PDWORD_PTR = DWORD_PTR;
type PDWORD32 = _POINTER;
type PDWORD64 = _POINTER;
type PFLOAT = _POINTER;
type PHALF_PTR = _POINTER;
type PHANDLE = _POINTER;
type PHKEY = _POINTER;
type PINT = _POINTER;
type PINT_PTR = _POINTER;
type PINT8 = _POINTER;
type PINT16 = _POINTER;
type PINT32 = _POINTER;
type PINT64 = _POINTER;
type PLCID = _POINTER;
type PLONG = _POINTER;
type PLONGLONG = _POINTER;
type PLONG_PTR = _POINTER;
type PLONG32 = _POINTER;
type PLONG64 = _POINTER;
type POINTER_32 = _POINTER;
type POINTER_64 = _POINTER;
type POINTER_SIGNED = _POINTER;
type POINTER_UNSIGNED = _POINTER;
type PSHORT = _POINTER;
type PSIZE_T = _POINTER;
type PSSIZE_T = _POINTER;
type PSTR = _POINTER;
type PTBYTE = _POINTER;
type PTCHAR = _POINTER;
type PTSTR = _POINTER;
type PUCHAR = _POINTER;
type PUHALF_PTR = _POINTER;
type PUINT = _POINTER;
type PUINT_PTR = _POINTER;
type PUINT8 = _POINTER;
type PUINT16 = _POINTER;
type PUINT32 = _POINTER;
type PUINT64 = _POINTER;
type PULONG = _POINTER;
type PULONGLONG = _POINTER;
type PULONG_PTR = _POINTER;
type PULONG32 = _POINTER;
type PULONG64 = _POINTER;
type PUSHORT = _POINTER;
type PWCHAR = _POINTER;
type PWORD = _POINTER;
type PWSTR = _POINTER;
type QWORD = BigIntStr;
type SC_HANDLE = HANDLE;
type SC_LOCK = LPVOID;
type SERVICE_STATUS_HANDLE = HANDLE;
type SHORT = number;
type SIZE_T = number;
type SSIZE_T = number;
type TBYTE = number;
type TCHAR = string;
type UCHAR = string;
type UHALF_PTR = number;
type UINT = number;
type UINT_PTR = number | BigIntStr;
type UINT8 = number;
type UINT16 = number;
type UINT32 = number;
type UINT64 = BigIntStr;
type ULONG = number;
type ULONGLONG = BigIntStr;
type ULONG32 = number;
type ULONG64 = BigIntStr;
type USHORT = number;
type USN = LONGLONG;
type WINEVENTPROC = WNDPROC;
type WNDENUMPROC = WNDPROC;
type WORD = INT16;
type WPARAM = UINT_PTR;
type va_list = _POINTER;
interface StructInstanceBase {
    ref: () => Buffer;
}
interface UnionInstanceBase {
    ref: () => Buffer;
}
interface StringBuffer extends ref.Type<string> {
    size: number;
    encoding: BufferEncoding | void;
    set: (buffer: Buffer, offset: number, value: string | number[] | Buffer) => void;
}
/**
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/getprinter#parameters
 */
type PRINTER_INFO_LEVEL = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
/**
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/enumprinters
 */
type EnumPrinters_Level = 1 | 2 | 4 | 5;
/**
 * Convert Struct property to WCHAR_String if Buffer
 */
type StructPropToWCHAR<T> = {
    [P in keyof T]: T[P] extends Buffer ? WCHAR_String : T[P];
};
/**
 * Convert Struct property to Buffer if WCHAR_String
 */
type StructPropToBuffer<T> = {
    [P in keyof T]: T[P] extends WCHAR_String ? Buffer : T[P];
};

/**
 * @link https://tootallnate.github.io/ref/
 */
declare enum Def {
    bool = "bool",
    byte = "byte",
    int = "int",
    int8 = "int8",
    int16 = "int16",
    int32 = "int32",
    int64 = "int64",
    float = "float",
    long = "long",
    longlong = "longlong",
    ptr = "pointer",
    uchar = "uchar",
    uint = "uint",
    uint8 = "uint8",
    uint16 = "uint16",
    uint32 = "uint32",
    uint64 = "uint64",
    ulong = "ulong",
    ulonglong = "ulonglong",
    ushort = "ushort",
    void = "void",
    boolPtr = "bool*",
    bytePtr = "byte*",
    charPtr = "char*",
    intPtr = "int*",
    int8Ptr = "int8*",
    int16Ptr = "int16*",
    int32Ptr = "int32*",
    int64Ptr = "int64*",
    floatPtr = "float*",
    longPtr = "long*",
    uintPtr = "uint*",
    uint8Ptr = "uint8*",
    intPtrPtr = "int**",
    uint16Ptr = "uint16*",
    uint32Ptr = "uint32*",
    uint64Ptr = "uint64*",
    ulonglongPtr = "ulonglong*",
    voidPtr = "void*",
    uintPtrPtr = "uint**",
    uint16PtrPtr = "uint16**",
    uint32PtrPtr = "uint32**",
    uint64PtrPtr = "uint64**",
    ulonglongPtrPtr = "ulonglong**",
    voidPtrPtr = "void**"
}

type _WIN64 = boolean;
type _UNICODE = boolean;
interface StructDefType {
    [prop: string]: Def | StructDefType | StringBuffer | UnionInstanceBase | StructTypeConstructor;
}
type StructTypeConstructor<T = object> = new () => Record<keyof T, string | number | BigIntStr | Buffer>;
interface LoadSettings {
    singleton: boolean;
    _WIN64?: boolean;
}
/**
 * node-ffi-buffer extends from Buffer
 *
 * I don't found the way to merge the ffi-buffer types automatically
 * so have to copy the def from node-ffi-buffer.d.ts.
 * with it hWnd.ref() wihout error TS2339: Property 'ref' does not exist on type 'Buffer'.
 */
type PID = number;
type PPID = number;
type FnName = string;
type FnParam = string;
type FnRetType = FnParam;
type FnCallParam = FnParam;
type FnCallParams = FnCallParam[] | never[];
type FnParams = [FnRetType, FnCallParams];
type DllFuncs<T = DllFuncsModel> = Record<keyof T, FnParams>;
/**
 * usage:
 * ```ts
 * import { DModel as M, FModel as FM } from 'win32-def'
 * export interface Foo extends FM.DllFuncsModel {
 *   SDT_OpenPort(port: M.UINT): M.INT
 *   SDT_ClosePort(): M.INT
 * }
 * ```
 */
interface DllFuncsModel {
    [funcName: string]: SyncFnModel;
}
type SyncFnModel = (...args: any[]) => boolean | number | BigIntStr | Buffer | void;
type AsyncFnModel = (...args: any[]) => Promise<boolean | number | BigIntStr | Buffer | void>;
type AsyncSyncFuncModel = SyncFnModel & {
    async: (...args: any[]) => void;
};
interface AsyncFuncModel {
    [key: string]: AsyncFnModel;
}
/**
 * Expand FnModel with async()
 * typeof arguments and typeof argument result of callback(err: Error, result)
 *  will be retrieved from input method
 *
 * usage:
 * ```ts
 * export interface SDT extends DllFuncsModel {
 *  foo: {
 *    (msg: M.POINT): M.VOID,
 *    async(msg: M.POINT, cb: (err: Error, result: M.VOINT)): void,
 *  }
 *  bar: BarFn
 *  barz(port: M.INT): M.POINT
 * }
 * export interface BarFn extends AsyncSyncFuncModel {
 *  (port: M.INT): M.INT
 *  async(
 *    port: M.INT
 *    cb: (err: Error, code: M.INT) => void,
 *  ): void
 * }
 *
 * // Will append async() method to barz() with correct parameter's types of the (last) callback parameter of barz()
 * export type SDTFnModel = ExpandFnModel<SDT>
 * // So we can calling async method
 * const api: SDTFnModel = ....
 * api.barz.async(port, (err, result) => {
 *   // type of result will get correct typeof Buffer (according to ReresultType of api.barz) automatically
 * })
 * ```
 */
type ExpandFnModel<T> = {
    [K in keyof T]: 'async' extends keyof T[K] ? T[K] : T[K] extends AsyncSyncFuncModel ? T[K] : T[K] extends SyncFnModel ? T[K] & AppendSyncFnWithAsync<T[K]> : never;
};
interface AppendSyncFnWithAsync<Fn extends SyncFnModel> {
    async: (...args: TuplePush<Parameters<Fn>, (err: Error | null | undefined, result: ReturnType<Fn>) => any>) => void;
}
type PromiseFnModel<T> = {
    [K in keyof T]: T[K] extends AsyncFnModel ? T[K] : T[K] extends SyncFnModel ? (...args: Parameters<T[K]>) => Promise<ReturnType<T[K]>> : never;
};

declare const config: Config;
interface Config {
    _WIN64: boolean;
}
declare const settingsDefault: LoadSettings;

declare function UnionType<T extends StructDefType>(input: T): StructTypeConstructor<T>;
declare function UnionFactory<T>(input: StructDefType): T;
declare const defaultStructCharOptions: Required<StructCharOptions>;
declare function StructType<T extends StructDefType>(input: T, options?: StructCharOptions): StructTypeConstructor<T>;
declare function StructFactory<T>(input: StructDefType, options?: StructCharOptions): T;
interface StructCharOptions {
    /**
     * @default true
     * @description convert property of Struct from POINTER(like LPSTR, LPWSTR) to StringBuffer,
     * **Note: typeof value may be WCHAR_String instead of _POINTER**
     */
    useStringBuffer?: boolean;
    /**
     * @default 1024
     */
    maxCharLength?: number;
    /**
     * @default [LPMSG, LPSTR, LPWSTR, LPTSTR, LPWORD ]
     */
    CharDefs?: Def[];
}

/**
 * Fixed length "Buffer" type, for use in Struct type definitions.
 * Like `wchar Name[32]` in C,
 * `getter` and `setter` functions are provided to access the buffer contents.
 * The starting and tailing terminal-null of returned string via `getter` is removed.
 */
declare function wcharBuffer(charLength: number): StringBuffer;
/**
 * Fixed length "Buffer" type, for use in Struct type definitions.
 *
 * Optionally setting the `encoding` param will force to call
 * `toString(encoding)` on the buffer returning a String instead.
 *
 * @see https://github.com/TooTallNate/ref-struct/issues/28#issuecomment-265626611
 * @ref https://gist.github.com/TooTallNate/80ac2d94b950216a2705
 */
declare function BufferTypeFactory(byteLength: number, encoding?: BufferEncoding): StringBuffer;

/**
 * Struct usage:
 *
 * import * as Struct from 'ref-struct-napi';
 * import { DStruct as DS, DModel as M } from 'win32-api';
 *
 * const point: M.PointStruct = new Struct(DS.POINT)();
 * point.x = 100;
 * point.y = 200;
 * // const buf = point.ref()
 *
 */
/** https://msdn.microsoft.com/en-us/library/windows/desktop/dd162805(v=vs.85).aspx */
interface POINT extends StructInstanceBase {
    x: LONG;
    y: LONG;
}
/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/windef/ns-windef-pointl
 */
interface POINTL extends StructInstanceBase {
    x: LONG;
    y: LONG;
}
type PPOINTL = _POINTER;
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-alttabinfo */
interface ALTTABINFO extends StructInstanceBase {
    cbSize: DWORD;
    cItems: INT;
    cColumns: INT;
    cRows: INT;
    iColFocus: INT;
    iRowFocus: INT;
    cxItem: INT;
    cyItem: INT;
    ptStart: POINT;
}
type PALTTABINFO = _POINTER;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-copydatastruct */
interface COPYDATASTRUCT extends StructInstanceBase {
    dwData: ULONG_PTR;
    cbData: DWORD;
    lpData: PVOID;
}
type PCOPYDATASTRUCT = _POINTER;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-taghardwareinput */
interface HARDWAREINPUT extends StructInstanceBase {
    uMsg: DWORD;
    wParamL: WORD;
    wParamH: WORD;
}
type PHARDWAREINPUT = _POINTER;
interface INITCOMMONCONTROLSEX extends StructInstanceBase {
    dwSize: DWORD;
    dwICC: DWORD;
}
/** A pointer to an INITCOMMONCONTROLSEX */
type LPINITCOMMONCONTROLSEX = _POINTER;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagkeybdinput */
interface KEYBDINPUT extends StructInstanceBase {
    wVk: WORD;
    wScan: WORD;
    dwFlags: DWORD;
    time: DWORD;
    dwExtraInfo: ULONG_PTR;
}
type PKEYBDINPUT = _POINTER;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagmouseinput */
interface MOUSEINPUT extends StructInstanceBase {
    dx: LONG;
    dy: LONG;
    mouseData: DWORD;
    dwFlags: DWORD;
    time: DWORD;
    dwExtraInfo: ULONG_PTR;
}
type PMOUSEINPUT = _POINTER;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-msg */
interface MSG extends StructInstanceBase {
    hwnd: HWND;
    message: UINT;
    wParam: WPARAM;
    lParam: LPARAM;
    time: DWORD;
    pt: POINT;
    lPrivate: DWORD;
}
type PMSG = _POINTER;
interface PROCESS_BASIC_INFORMATION extends StructInstanceBase {
    Reserved1: PVOID;
    PebBaseAddress: PVOID;
    Reserved2: PVOID;
    UniqueProcessId: ULONG_PTR;
    InheritedFromUniqueProcessId: PVOID;
}
type PPROCESS_BASIC_INFORMATION = _POINTER;
interface UNICODE_STRING extends StructInstanceBase {
    Length: USHORT;
    MaximumLength: USHORT;
    Buffer: PWSTR;
}
type PUNICODE_STRING = _POINTER;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagrawhid */
interface RAWHID extends StructInstanceBase {
    dwSizeHid: DWORD;
    dwCount: DWORD;
    /** bRawData[1] */
    bRawData: BYTE;
}
type PRAWHID = _POINTER;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawinputdevicelist */
interface RAWINPUTDEVICELIST extends StructInstanceBase {
    hDevice: HANDLE;
    dwType: DWORD;
}
type PRAWINPUTDEVICELIST = _POINTER;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagrawinputheader */
interface RAWINPUTHEADER extends StructInstanceBase {
    dwType: DWORD;
    dwSize: DWORD;
    hDevice: HANDLE;
    wParam: WPARAM;
}
type PRAWINPUTHEADER = _POINTER;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagrawkeyboard */
interface RAWKEYBOARD extends StructInstanceBase {
    MakeCode: USHORT;
    Flags: USHORT;
    Reserved: USHORT;
    VKey: USHORT;
    Message: UINT;
    ExtraInformation: ULONG;
}
type PRAWKEYBOARD = _POINTER;
/** https://msdn.microsoft.com/zh-cn/library/windows/desktop/ms633577(v=vs.85).aspx */
interface WNDCLASSEX extends StructInstanceBase {
    cbSize: UINT;
    style: UINT;
    lpfnWndProc: WNDPROC;
    cbClsExtra: INT;
    cbWndExtra: INT;
    /** can be 0? */
    hInstance: HINSTANCE;
    hIcon: HICON;
    hCursor: HCURSOR;
    hbrBackground: HBRUSH;
    lpszMenuName: LPCTSTR;
    lpszClassName: LPCTSTR;
    hIconSm: HICON;
}
/** A pointer to a WNDCLASSEX */
type LPWNDCLASSEX = _POINTER;
interface RECT extends StructInstanceBase {
    left: LONG;
    top: LONG;
    right: LONG;
    bottom: LONG;
}
type LPRECT = _POINTER;
interface WINDOWINFO extends StructInstanceBase {
    cbSize: DWORD;
    rcWindow: VOID;
    rcClient: VOID;
    dwStyle: DWORD;
    dwExStyle: DWORD;
    dwWindowStatus: DWORD;
    cxWindowBorders: UINT;
    cyWindowBorders: UINT;
    atomWindowType: ATOM;
    wCreatorVersion: WORD;
}
/** A pointer to a WINDOWINFO structure */
type PWINDOWINFO = _POINTER;
/** https://docs.microsoft.com/en-us/windows/win32/api/minwinbase/ns-minwinbase-filetime */
interface FILETIME extends StructInstanceBase {
    dwLowDateTime: DWORD;
    dwHighDateTime: DWORD;
}
/** A pointer to a FILETIME */
type PFILETIME = _POINTER;
/** A pointer to a FILETIME */
type LPFILETIME = _POINTER;

interface DEVMODEW_DUMMYUNIONNAME extends UnionInstanceBase {
    DUMMYSTRUCTNAME: DEVMODEW_DUMMYSTRUCTNAME;
    dmPosition: POINTL;
    DUMMYSTRUCTNAME2: DEVMODEW_DUMMYSTRUCTNAME2;
}
interface DEVMODEW_DUMMYSTRUCTNAME extends StructInstanceBase {
    dmOrientation: SHORT;
    dmPaperSize: SHORT;
    dmPaperLength: SHORT;
    dmPaperWidth: SHORT;
    dmScale: SHORT;
    dmCopies: SHORT;
    dmDefaultSource: SHORT;
    dmPrintQuality: SHORT;
}
interface DEVMODEW_DUMMYSTRUCTNAME2 extends StructInstanceBase {
    dmPosition: POINTL;
    dmDisplayOrientation: DWORD;
    dmDisplayFixedOutput: DWORD;
}
interface DEVMODEW_DUMMYUNIONNAME2 extends UnionInstanceBase {
    dmDisplayFlags: DWORD;
    dmNup: DWORD;
}

/** https://docs.microsoft.com/zh-cn/windows/win32/api/wingdi/ns-wingdi-display_devicew */
interface DISPLAY_DEVICEW extends StructInstanceBase {
    cb: DWORD;
    DeviceName: WCHAR_String;
    DeviceString: WCHAR_String;
    StateFlags: DWORD;
    DeviceID: WCHAR_String;
    DeviceKey: WCHAR_String;
}
/** A pointer to DISPLAY_DEVICEW  */
type PDISPLAY_DEVICEW = _POINTER;
/** A pointer to DISPLAY_DEVICEW  */
type LPDISPLAY_DEVICEW = _POINTER;
/**
 * Used for specifying characteristics of display and print devices in the Unicode (wide) character set.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-devmodew
 */
interface DEVMODEW extends StructInstanceBase {
    dmDeviceName: WCHAR_String;
    dmSpecVersion: WORD;
    dmDriverVersion: WORD;
    dmSize: WORD;
    dmDriverExtra: WORD;
    dmFields: DWORD;
    DUMMYUNIONNAME: DEVMODEW_DUMMYUNIONNAME;
    dmColor: SHORT;
    dmDuplex: SHORT;
    dmYResolution: SHORT;
    dmTTOption: SHORT;
    dmCollate: SHORT;
    /**
     * For printers, specifies the name of the form to use; such as "Letter" or "Legal".
     * This must be a name that can be obtain by calling the Win32 EnumForms function
     * (described in the Microsoft Window SDK documentation).
     */
    dmFormName: WCHAR_String;
    dmLogPixels: WORD;
    dmBitsPerPel: DWORD;
    dmPelsWidth: DWORD;
    dmPelsHeight: DWORD;
    DUMMYUNIONNAME2: DEVMODEW_DUMMYUNIONNAME2;
    dmDisplayFrequency: DWORD;
    dmICMMethod: DWORD;
    dmICMIntent: DWORD;
    dmMediaType: DWORD;
    dmDitherType: DWORD;
    dmReserved1: DWORD;
    dmReserved2: DWORD;
    dmPanningWidth: DWORD;
    dmPanningHeight: DWORD;
}
type PDEVMODEW = _POINTER;
type NPDEVMODEW = _POINTER;
type LPDEVMODEW = _POINTER;

/**
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/datatypes-info-1
 */
interface DATATYPES_INFO_1 extends StructInstanceBase {
    pName: WCHAR_String;
}
type PDATATYPES_INFO_1 = _POINTER;
/**
 * Describes a document that will be printed.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/doc-info-1
 */
interface DOC_INFO_1 extends StructInstanceBase {
    pDocName: LPTSTR;
    pOutputFile: LPTSTR;
    pDatatype: LPTSTR;
}
type PDOC_INFO_1 = _POINTER;
/**
 * Specifies the name of an installed print processor.
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printprocessor-info-1
 */
interface PRINTPROCESSOR_INFO_1 extends StructInstanceBase {
    pName: WCHAR_String;
}
type PPRINTPROCESSOR_INFO_1 = _POINTER;
/**
 * Specifies the default data type, environment, initialization data, and access rights for a printer.
 * @link https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printer-defaults
 */
interface PRINTER_DEFAULTS extends StructInstanceBase {
    /**
     * Pointer to a null-terminated string that specifies the default data type for a printer.
     */
    pDatatype: WCHAR_String;
    /**
     * Pointer to a DEVMODE structure that identifies the default environment and initialization data for a printer.
     */
    pDevMode: DEVMODEW;
    DesiredAccess: ACCESS_MASK;
}
/** A pointer to PRINTER_DEFAULTS */
type PPRINTER_DEFAULTS = _POINTER;
type LPPRINTER_DEFAULTS = _POINTER;
/**
 * Specifies general printer information
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/getprinter#parameters
 */
interface PRINTER_INFO_X {
    1: PRINTER_INFO_1;
    4: PRINTER_INFO_4;
    [key: number]: StructInstanceBase;
}
/**
 * Specifies general printer information
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/printer-info-1
 */
interface PRINTER_INFO_1 extends StructInstanceBase {
    Flags: DWORD;
    pDescription: WCHAR_String;
    pName: WCHAR_String;
    pComment: WCHAR_String;
}
type PPRINTER_INFO_1 = _POINTER;
/**
 * Specifies general printer information
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/printer-info-4
 * @description The structure can be used to retrieve minimal printer information on a call to EnumPrinters.
 *  Such a call is a fast and easy way to retrieve the names and attributes of all locally installed printers
 *  on a system and all remote printer connections that a user has established.
 */
interface PRINTER_INFO_4 extends StructInstanceBase {
    pPrinterName: WCHAR_String;
    pServerName: WCHAR_String;
    Attributes: DWORD;
}
type PPRINTER_INFO_4 = _POINTER;

interface RID_DEVICE_INFO_DUMMYUNIONNAME extends UnionInstanceBase {
    mouse: DWORD;
    keyboard: DWORD;
    hid: DWORD;
}

/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
interface FLASHWINFO extends StructInstanceBase {
    cbSize: UINT;
    hwnd: HWND;
    dwFlags: DWORD;
    uCount: UINT;
    dwTimeout: DWORD;
}
type PFLASHWINFO = _POINTER;
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rid_device_info */
interface RID_DEVICE_INFO extends StructInstanceBase {
    cbSize: DWORD;
    dwType: DWORD;
    DUMMYUNIONNAME: RID_DEVICE_INFO_DUMMYUNIONNAME;
}
type PRID_DEVICE_INFO = _POINTER;

export { ACCESS_MASK, ALTTABINFO, ATOM, AsyncFnModel, AsyncFuncModel, AsyncSyncFuncModel, BOOL, BOOLEAN, BYTE, BufferTypeFactory, CALLBACK, CCHAR, CHAR, COLORREF, COPYDATASTRUCT, Config, DATATYPES_INFO_1, DEVMODEW, DEVMODEW_DUMMYUNIONNAME, DEVMODEW_DUMMYUNIONNAME2, DISPLAY_DEVICEW, DOC_INFO_1, DWORD, DWORD32, DWORD64, DWORDLONG, DWORD_PTR, Def, DllFuncs, DllFuncsModel, EnumPrinters_Level, ExpandFnModel, FILETIME, FLASHWINFO, FLOAT, FnCallParam, FnCallParams, FnName, FnParam, FnParams, FnRetType, HACCEL, HALF_PTR, HANDLE, HANDLE_PVOID, HARDWAREINPUT, HBITMAP, HBRUSH, HCOLORSPACE, HCONV, HCONVLIST, HCURSOR, HDC, HDDEDATA, HDESK, HDROP, HDWP, HENHMETAFILE, HFILE, HFONT, HGDIOBJ, HGLOBAL, HHOOK, HICON, HINSTANCE, HKEY, HKL, HLOCAL, HMENU, HMETAFILE, HMODULE, HMONITOR, HPALETTE, HPEN, HRESULT, HRGN, HRSRC, HSZ, HWINEVENTHOOK, HWINSTA, HWND, INITCOMMONCONTROLSEX, INT, INT16, INT32, INT64, INT8, INT_PTR, KEYBDINPUT, LANGID, LCID, LCTYPE, LGRPID, LONG, LONG32, LONG64, LONGLONG, LONG_PTR, LPARAM, LPBOOL, LPBYTE, LPCOLORREF, LPCSTR, LPCTSTR, LPCVOID, LPCWSTR, LPDEVMODEW, LPDISPLAY_DEVICEW, LPDWORD, LPFILETIME, LPHANDLE, LPINITCOMMONCONTROLSEX, LPINT, LPLONG, LPMSG, LPPOINT, LPPRINTER_DEFAULTS, LPRECT, LPSTR, LPTSTR, LPVOID, LPWNDCLASSEX, LPWORD, LPWSTR, LRESULT, LoadSettings, MOUSEINPUT, MSG, NPDEVMODEW, NTSTATUS, PALTTABINFO, PBOOL, PBOOLEAN, PBYTE, PCHAR, PCOPYDATASTRUCT, PCSTR, PCTSTR, PCWSTR, PDATATYPES_INFO_1, PDEVMODEW, PDISPLAY_DEVICEW, PDOC_INFO_1, PDWORD, PDWORD32, PDWORD64, PDWORDLONG, PDWORD_PTR, PFILETIME, PFLASHWINFO, PFLOAT, PHALF_PTR, PHANDLE, PHARDWAREINPUT, PHKEY, PID, PINT, PINT16, PINT32, PINT64, PINT8, PINT_PTR, PKEYBDINPUT, PLCID, PLONG, PLONG32, PLONG64, PLONGLONG, PLONG_PTR, PMOUSEINPUT, PMSG, POINT, POINTER_32, POINTER_64, POINTER_SIGNED, POINTER_UNSIGNED, POINTL, PPID, PPOINTL, PPRINTER_DEFAULTS, PPRINTER_INFO_1, PPRINTER_INFO_4, PPRINTPROCESSOR_INFO_1, PPROCESS_BASIC_INFORMATION, PRAWHID, PRAWINPUTDEVICELIST, PRAWINPUTHEADER, PRAWKEYBOARD, PRID_DEVICE_INFO, PRINTER_DEFAULTS, PRINTER_INFO_1, PRINTER_INFO_4, PRINTER_INFO_LEVEL, PRINTER_INFO_X, PRINTPROCESSOR_INFO_1, PROCESS_BASIC_INFORMATION, PSHORT, PSIZE_T, PSSIZE_T, PSTR, PTBYTE, PTCHAR, PTR_Addr, PTSTR, PUCHAR, PUHALF_PTR, PUINT, PUINT16, PUINT32, PUINT64, PUINT8, PUINT_PTR, PULONG, PULONG32, PULONG64, PULONGLONG, PULONG_PTR, PUNICODE_STRING, PUSHORT, PVOID, PWCHAR, PWCHAR_String, PWINDOWINFO, PWORD, PWSTR, PromiseFnModel, QWORD, RAWHID, RAWINPUTDEVICELIST, RAWINPUTHEADER, RAWKEYBOARD, RECT, RID_DEVICE_INFO, RID_DEVICE_INFO_DUMMYUNIONNAME, SC_HANDLE, SC_LOCK, SERVICE_STATUS_HANDLE, SHORT, SIZE_T, SSIZE_T, StringBuffer, StructCharOptions, StructDefType, StructFactory, StructInstanceBase, StructPropToBuffer, StructPropToWCHAR, StructType, StructTypeConstructor, SyncFnModel, TBYTE, TCHAR, UCHAR, UHALF_PTR, UINT, UINT16, UINT32, UINT64, UINT8, UINT_PTR, ULONG, ULONG32, ULONG64, ULONGLONG, ULONG_PTR, UNICODE_STRING, USHORT, USN, UnionFactory, UnionInstanceBase, UnionType, VOID, WCHAR, WCHAR_String, WINDOWINFO, WINEVENTPROC, WNDCLASSEX, WNDENUMPROC, WNDPROC, WORD, WPARAM, _POINTER, _UNICODE, _WIN64, config, defaultStructCharOptions, settingsDefault, va_list, wcharBuffer };
