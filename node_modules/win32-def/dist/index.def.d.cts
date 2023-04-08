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

/**
 * @link https://docs.microsoft.com/en-us/windows/win32/secauthz/access-mask-format
 */
declare const ACCESS_MASK = Def.int32;
declare const ATOM = Def.uint16;
declare const DWORD = Def.uint32;
declare const PVOID: Def;
/**
 * `uint32` or `uint64` used as value usage (memory address) instead of PVOID (Buffer),
 * Use `HANDLE` (number) for params defintion of the api,
 * @see https://stackoverflow.com/questions/18266626/what-is-the-range-of-a-windows-handle-on-a-64-bits-application/29526711#29526711
 */
declare const HANDLE: Def;
/**
 * `HANDLE_PVOID` (Buffer) can be used for definition of Struct,
 */
declare const HANDLE_PVOID: Def;
declare const LONG_PTR: Def;
declare const ULONG_PTR: Def;
declare const VOID = Def.void;
declare const WCHAR = Def.uint16;
declare const WORD = Def.int16;
declare const BOOL = Def.int;
declare const BOOLEAN = Def.bool;
declare const BYTE = Def.byte;
declare const CALLBACK = Def.ptr;
declare const CCHAR = Def.uint8;
declare const CHAR = Def.uint8;
declare const COLORREF = Def.uint32;
declare const DWORDLONG = Def.uint64;
declare const DWORD_PTR: Def;
declare const DWORD32 = Def.uint32;
declare const DWORD64 = Def.uint64;
declare const FLOAT = Def.float;
declare const HACCEL: Def;
declare const HALF_PTR: Def;
declare const HBITMAP: Def;
declare const HBRUSH: Def;
declare const HCOLORSPACE: Def;
declare const HCONV: Def;
declare const HCONVLIST: Def;
declare const HCURSOR: Def;
declare const HDC: Def;
declare const HDDEDATA: Def;
declare const HDESK: Def;
declare const HDROP: Def;
declare const HDWP: Def;
declare const HENHMETAFILE: Def;
declare const HFILE: Def;
declare const HFONT: Def;
declare const HGDIOBJ: Def;
declare const HGLOBAL: Def;
declare const HHOOK: Def;
declare const HICON: Def;
declare const HINSTANCE: Def;
declare const HKEY: Def;
declare const HKL: Def;
declare const HLOCAL: Def;
declare const HMENU: Def;
declare const HMETAFILE: Def;
declare const HMODULE: Def;
declare const HMONITOR: Def;
declare const HPALETTE: Def;
declare const HPEN: Def;
declare const HRESULT = Def.long;
declare const HRGN: Def;
declare const HRSRC: Def;
declare const HSZ: Def;
declare const HWINEVENTHOOK: Def;
declare const HWINSTA: Def;
declare const HWND: Def;
/** A 32-bit signed integer */
declare const INT = Def.int;
declare const INT_PTR: Def;
declare const INT8 = Def.int8;
declare const INT16 = Def.int16;
declare const INT32 = Def.int32;
declare const INT64 = Def.int64;
declare const LANGID = Def.int16;
declare const LCID = Def.uint32;
declare const LCTYPE = Def.uint32;
declare const LGRPID = Def.uint32;
declare const LONG = Def.long;
declare const LONGLONG = Def.longlong;
declare const LONG32 = Def.int32;
declare const LONG64 = Def.int64;
declare const LPARAM: Def;
declare const LPBOOL = Def.int;
declare const LPBYTE = Def.bytePtr;
declare const LPCOLORREF = Def.uint32;
declare const LPCSTR = Def.uint8Ptr;
declare const LPCWSTR = Def.uint16Ptr;
declare const LPCTSTR = Def.uint16Ptr;
declare const LPVOID = Def.voidPtr;
declare const LPCVOID = Def.voidPtr;
declare const LPDWORD = Def.uint16Ptr;
declare const LPHANDLE: Def;
declare const LPINT = Def.intPtr;
declare const LPLONG = Def.int32Ptr;
declare const LPMSG = Def.ptr;
declare const LPPOINT = Def.ptr;
declare const LPSTR = Def.charPtr;
declare const LPWSTR = Def.uint16Ptr;
declare const LPTSTR = Def.uint16Ptr;
declare const LPWORD = Def.uint16Ptr;
declare const LRESULT: Def;
declare const NTSTATUS = Def.uint32;
declare const PBOOL = Def.intPtr;
declare const PBOOLEAN = Def.boolPtr;
declare const PBYTE = Def.bytePtr;
declare const PCHAR = Def.charPtr;
declare const PCSTR = Def.uint8Ptr;
declare const PCTSTR: Def;
declare const PCWSTR = Def.uint16Ptr;
declare const PDWORD = Def.uint32Ptr;
declare const PDWORDLONG = Def.uint64Ptr;
declare const PDWORD_PTR: Def;
declare const PDWORD32 = Def.uint32Ptr;
declare const PDWORD64 = Def.uint64Ptr;
declare const PFLOAT = Def.floatPtr;
declare const PHALF_PTR = Def.ptr;
declare const PHANDLE: Def;
declare const PHKEY: Def;
declare const PINT = Def.intPtr;
declare const PINT_PTR = Def.intPtrPtr;
declare const PINT8 = Def.int8Ptr;
declare const PINT16 = Def.int16Ptr;
declare const PINT32 = Def.int32Ptr;
declare const PINT64 = Def.int64Ptr;
declare const PLCID = Def.uint32Ptr;
declare const PLONG = Def.longPtr;
declare const PLONGLONG = Def.int64Ptr;
declare const PLONG_PTR = Def.ptr;
declare const PLONG32 = Def.int32Ptr;
declare const PLONG64 = Def.int64Ptr;
declare const POINTER_32 = Def.int32Ptr;
declare const POINTER_64: Def;
declare const POINTER_SIGNED = Def.ptr;
declare const POINTER_UNSIGNED = Def.ptr;
declare const PSHORT = Def.int16Ptr;
declare const PSIZE_T: Def;
declare const PSSIZE_T = Def.ptr;
declare const PSTR = Def.charPtr;
declare const PTBYTE = Def.int16Ptr;
declare const PTCHAR = Def.uint16Ptr;
declare const PTSTR = Def.uint16Ptr;
declare const PUCHAR = Def.ptr;
declare const PUHALF_PTR = Def.ptr;
declare const PUINT = Def.uintPtr;
declare const PUINT_PTR = Def.uintPtrPtr;
declare const PUINT8 = Def.uint8Ptr;
declare const PUINT16 = Def.uint16Ptr;
declare const PUINT32 = Def.uint32Ptr;
declare const PUINT64 = Def.uint64Ptr;
declare const PULONG = Def.uintPtr;
declare const PULONGLONG = Def.uint64Ptr;
declare const PULONG_PTR = Def.uint64PtrPtr;
declare const PULONG32 = Def.uintPtr;
declare const PULONG64 = Def.uint64Ptr;
declare const PUSHORT = Def.uint16Ptr;
declare const PWCHAR = Def.uint16Ptr;
declare const PWORD = Def.uint16Ptr;
declare const PWSTR = Def.uint16Ptr;
declare const QWORD = Def.uint64;
declare const SC_HANDLE: Def;
declare const SC_LOCK = Def.voidPtr;
declare const SERVICE_STATUS_HANDLE: Def;
declare const SHORT = Def.int16;
declare const SIZE_T: Def;
declare const SSIZE_T: Def;
declare const TBYTE = Def.int16;
declare const TCHAR = Def.uint16;
declare const UCHAR = Def.uchar;
declare const UHALF_PTR: Def;
declare const UINT = Def.uint;
declare const UINT_PTR: Def;
declare const UINT8 = Def.uint8;
declare const UINT16 = Def.uint16;
declare const UINT32 = Def.uint32;
declare const UINT64 = Def.uint64;
declare const ULONG = Def.uint;
declare const ULONGLONG = Def.uint64;
declare const ULONG32 = Def.uint32;
declare const ULONG64 = Def.uint64;
declare const USHORT = Def.ushort;
declare const USN = Def.longlong;
declare const WINEVENTPROC = Def.ptr;
declare const WNDENUMPROC = Def.ptr;
declare const WNDPROC = Def.ptr;
/**
 * Note: original be typedef UINT_PTR WPARAM;
 * CALLBACK WNDCLASSEX.lpfnWndProc may pass negative number and cause process exit.
 */
declare const WPARAM: Def;
declare const LPINITCOMMONCONTROLSEX = Def.ptr;
declare const LPWNDCLASSEX = Def.ptr;
declare const PWINDOWINFO = Def.ptr;
declare const PFILETIME = Def.ptr;
declare const LPFILETIME = Def.ptr;
declare const va_list = Def.charPtr;

/** https://msdn.microsoft.com/en-us/library/windows/desktop/dd162805(v=vs.85).aspx */
declare const POINT = Def.ptr;
/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/windef/ns-windef-pointl
 */
declare const POINTL = Def.ptr;
declare const PPOINTL = Def.ptr;
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-alttabinfo */
declare const ALTTABINFO = Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-copydatastruct */
declare const COPYDATASTRUCT = Def.ptr;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-taghardwareinput */
declare const HARDWAREINPUT = Def.ptr;
declare const INITCOMMONCONTROLSEX = Def.ptr;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagkeybdinput */
declare const KEYBDINPUT = Def.ptr;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagmouseinput */
declare const MOUSEINPUT = Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-msg */
declare const MSG = Def.ptr;
declare const PROCESS_BASIC_INFORMATION = Def.ptr;
declare const UNICODE_STRING = Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawhid */
declare const RAWHID = Def.ptr;
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawinputdevicelist */
declare const RAWINPUTDEVICELIST = Def.ptr;
declare const PRAWINPUTDEVICELIST = Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawinputheader */
declare const RAWINPUTHEADER = Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawkeyboard */
declare const RAWKEYBOARD = Def.ptr;
/** https://msdn.microsoft.com/zh-cn/library/windows/desktop/ms633577(v=vs.85).aspx */
declare const WNDCLASSEX = Def.ptr;
declare const RECT = Def.ptr;
declare const WINDOWINFO = Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/minwinbase/ns-minwinbase-filetime */
declare const FILETIME = Def.ptr;

/** https://docs.microsoft.com/zh-cn/windows/win32/api/wingdi/ns-wingdi-display_devicew */
declare const DISPLAY_DEVICEW = Def.ptr;
/**
 * Used for specifying characteristics of display and print devices in the Unicode (wide) character set.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-devmodew
 */
declare const DEVMODEW = Def.ptr;
/**
 * Specifies the name of an installed print processor.
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printprocessor-info-1
 */
declare const PRINTPROCESSOR_INFO_1 = Def.ptr;

declare const DOC_INFO_1 = Def.ptr;
/**
 * @link https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printer-defaults
 */
declare const PRINTER_DEFAULTS = Def.ptr;
declare const LPRINTER_DEFAULTS = Def.ptr;
declare const PRINTER_INFO_1 = Def.ptr;
declare const PPRINTER_INFO_1 = Def.ptr;
declare const PRINTER_INFO_2 = Def.ptr;
declare const PPRINTER_INFO_2 = Def.ptr;
declare const PRINTER_INFO_3 = Def.ptr;
declare const PPRINTER_INFO_3 = Def.ptr;
declare const PRINTER_INFO_4 = Def.ptr;
declare const PPRINTER_INFO_4 = Def.ptr;
declare const PRINTER_INFO_5 = Def.ptr;
declare const PPRINTER_INFO_5 = Def.ptr;
declare const PRINTER_INFO_6 = Def.ptr;
declare const PPRINTER_INFO_6 = Def.ptr;
declare const PRINTER_INFO_7 = Def.ptr;
declare const PPRINTER_INFO_7 = Def.ptr;
declare const PRINTER_INFO_8 = Def.ptr;
declare const PPRINTER_INFO_8 = Def.ptr;
declare const PRINTER_INFO_9 = Def.ptr;
declare const PPRINTER_INFO_9 = Def.ptr;

/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
declare const FLASHWINFO = Def.ptr;
/** https://docs.microsoft.com/zh-cn/windows/win32/api/wingdi/ns-wingdi-display_devicew */
declare const RID_DEVICE_INFO = Def.ptr;

declare const RID_DEVICE_INFO_DUMMYUNIONNAME = Def.ptr;

declare const DEVMODEW_DUMMYUNIONNAME = Def.ptr;
declare const DEVMODEW_DUMMYUNIONNAME2 = Def.ptr;

export { ACCESS_MASK, ALTTABINFO, ATOM, BOOL, BOOLEAN, BYTE, CALLBACK, CCHAR, CHAR, COLORREF, COPYDATASTRUCT, DEVMODEW, DEVMODEW_DUMMYUNIONNAME, DEVMODEW_DUMMYUNIONNAME2, DISPLAY_DEVICEW, DOC_INFO_1, DWORD, DWORD32, DWORD64, DWORDLONG, DWORD_PTR, Def, FILETIME, FLASHWINFO, FLOAT, HACCEL, HALF_PTR, HANDLE, HANDLE_PVOID, HARDWAREINPUT, HBITMAP, HBRUSH, HCOLORSPACE, HCONV, HCONVLIST, HCURSOR, HDC, HDDEDATA, HDESK, HDROP, HDWP, HENHMETAFILE, HFILE, HFONT, HGDIOBJ, HGLOBAL, HHOOK, HICON, HINSTANCE, HKEY, HKL, HLOCAL, HMENU, HMETAFILE, HMODULE, HMONITOR, HPALETTE, HPEN, HRESULT, HRGN, HRSRC, HSZ, HWINEVENTHOOK, HWINSTA, HWND, INITCOMMONCONTROLSEX, INT, INT16, INT32, INT64, INT8, INT_PTR, KEYBDINPUT, LANGID, LCID, LCTYPE, LGRPID, LONG, LONG32, LONG64, LONGLONG, LONG_PTR, LPARAM, LPBOOL, LPBYTE, LPCOLORREF, LPCSTR, LPCTSTR, LPCVOID, LPCWSTR, LPDWORD, LPFILETIME, LPHANDLE, LPINITCOMMONCONTROLSEX, LPINT, LPLONG, LPMSG, LPPOINT, LPRINTER_DEFAULTS, LPSTR, LPTSTR, LPVOID, LPWNDCLASSEX, LPWORD, LPWSTR, LRESULT, MOUSEINPUT, MSG, NTSTATUS, PBOOL, PBOOLEAN, PBYTE, PCHAR, PCSTR, PCTSTR, PCWSTR, PDWORD, PDWORD32, PDWORD64, PDWORDLONG, PDWORD_PTR, PFILETIME, PFLOAT, PHALF_PTR, PHANDLE, PHKEY, PINT, PINT16, PINT32, PINT64, PINT8, PINT_PTR, PLCID, PLONG, PLONG32, PLONG64, PLONGLONG, PLONG_PTR, POINT, POINTER_32, POINTER_64, POINTER_SIGNED, POINTER_UNSIGNED, POINTL, PPOINTL, PPRINTER_INFO_1, PPRINTER_INFO_2, PPRINTER_INFO_3, PPRINTER_INFO_4, PPRINTER_INFO_5, PPRINTER_INFO_6, PPRINTER_INFO_7, PPRINTER_INFO_8, PPRINTER_INFO_9, PRAWINPUTDEVICELIST, PRINTER_DEFAULTS, PRINTER_INFO_1, PRINTER_INFO_2, PRINTER_INFO_3, PRINTER_INFO_4, PRINTER_INFO_5, PRINTER_INFO_6, PRINTER_INFO_7, PRINTER_INFO_8, PRINTER_INFO_9, PRINTPROCESSOR_INFO_1, PROCESS_BASIC_INFORMATION, PSHORT, PSIZE_T, PSSIZE_T, PSTR, PTBYTE, PTCHAR, PTSTR, PUCHAR, PUHALF_PTR, PUINT, PUINT16, PUINT32, PUINT64, PUINT8, PUINT_PTR, PULONG, PULONG32, PULONG64, PULONGLONG, PULONG_PTR, PUSHORT, PVOID, PWCHAR, PWINDOWINFO, PWORD, PWSTR, QWORD, RAWHID, RAWINPUTDEVICELIST, RAWINPUTHEADER, RAWKEYBOARD, RECT, RID_DEVICE_INFO, RID_DEVICE_INFO_DUMMYUNIONNAME, SC_HANDLE, SC_LOCK, SERVICE_STATUS_HANDLE, SHORT, SIZE_T, SSIZE_T, TBYTE, TCHAR, UCHAR, UHALF_PTR, UINT, UINT16, UINT32, UINT64, UINT8, UINT_PTR, ULONG, ULONG32, ULONG64, ULONGLONG, ULONG_PTR, UNICODE_STRING, USHORT, USN, VOID, WCHAR, WINDOWINFO, WINEVENTPROC, WNDCLASSEX, WNDENUMPROC, WNDPROC, WORD, WPARAM, va_list };
