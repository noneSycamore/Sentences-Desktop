/**
 * win32-def
 * win32 definitions for node-ffi
 *
 * @version 20.4.0
 * @author waiting
 * @license MIT
 * @link https://waitingsong.github.io/node-win32-api
 */

'use strict';

const config = {
    _WIN64: process.arch === 'x64',
};

/* eslint-disable id-length */
/**
 * @link https://tootallnate.github.io/ref/
 */
exports.Def = void 0;
(function (Def) {
    Def["bool"] = "bool";
    Def["byte"] = "byte";
    Def["int"] = "int";
    Def["int8"] = "int8";
    Def["int16"] = "int16";
    Def["int32"] = "int32";
    Def["int64"] = "int64";
    Def["float"] = "float";
    Def["long"] = "long";
    Def["longlong"] = "longlong";
    Def["ptr"] = "pointer";
    Def["uchar"] = "uchar";
    Def["uint"] = "uint";
    Def["uint8"] = "uint8";
    Def["uint16"] = "uint16";
    Def["uint32"] = "uint32";
    Def["uint64"] = "uint64";
    Def["ulong"] = "ulong";
    Def["ulonglong"] = "ulonglong";
    Def["ushort"] = "ushort";
    Def["void"] = "void";
    Def["boolPtr"] = "bool*";
    Def["bytePtr"] = "byte*";
    Def["charPtr"] = "char*";
    Def["intPtr"] = "int*";
    Def["int8Ptr"] = "int8*";
    Def["int16Ptr"] = "int16*";
    Def["int32Ptr"] = "int32*";
    Def["int64Ptr"] = "int64*";
    Def["floatPtr"] = "float*";
    Def["longPtr"] = "long*";
    Def["uintPtr"] = "uint*";
    Def["uint8Ptr"] = "uint8*";
    Def["intPtrPtr"] = "int**";
    Def["uint16Ptr"] = "uint16*";
    Def["uint32Ptr"] = "uint32*";
    Def["uint64Ptr"] = "uint64*";
    Def["ulonglongPtr"] = "ulonglong*";
    Def["voidPtr"] = "void*";
    Def["uintPtrPtr"] = "uint**";
    Def["uint16PtrPtr"] = "uint16**";
    Def["uint32PtrPtr"] = "uint32**";
    Def["uint64PtrPtr"] = "uint64**";
    Def["ulonglongPtrPtr"] = "ulonglong**";
    Def["voidPtrPtr"] = "void**";
})(exports.Def = exports.Def || (exports.Def = {}));

// windows data types for ref module https://github.com/TooTallNate/ref
const { _WIN64 } = config;
/**
 * @link https://docs.microsoft.com/en-us/windows/win32/secauthz/access-mask-format
 */
const ACCESS_MASK = exports.Def.int32;
const ATOM = exports.Def.uint16;
const DWORD = exports.Def.uint32;
const PVOID = _WIN64 ? exports.Def.uint64Ptr : exports.Def.uint32Ptr;
/**
 * `uint32` or `uint64` used as value usage (memory address) instead of PVOID (Buffer),
 * Use `HANDLE` (number) for params defintion of the api,
 * @see https://stackoverflow.com/questions/18266626/what-is-the-range-of-a-windows-handle-on-a-64-bits-application/29526711#29526711
 */
const HANDLE = _WIN64 ? exports.Def.uint64 : exports.Def.uint32;
/**
 * `HANDLE_PVOID` (Buffer) can be used for definition of Struct,
 */
const HANDLE_PVOID = PVOID;
const LONG_PTR = _WIN64 ? exports.Def.int64 : exports.Def.int32;
const ULONG_PTR = _WIN64 ? exports.Def.int64 : exports.Def.int32;
const VOID = exports.Def.void;
const WCHAR = exports.Def.uint16;
const WORD = exports.Def.int16;
const BOOL = exports.Def.int;
const BOOLEAN = exports.Def.bool;
const BYTE = exports.Def.byte;
const CALLBACK = exports.Def.ptr; // https://msdn.microsoft.com/en-us/library/windows/desktop/ms633573(v=vs.85).aspx
const CCHAR = exports.Def.uint8;
const CHAR = exports.Def.uint8;
const COLORREF = DWORD;
// export const CONST;
const DWORDLONG = exports.Def.uint64;
const DWORD_PTR = ULONG_PTR;
const DWORD32 = exports.Def.uint32;
const DWORD64 = exports.Def.uint64;
const FLOAT = exports.Def.float;
const HACCEL = HANDLE;
const HALF_PTR = _WIN64 ? exports.Def.int32 : exports.Def.int16;
const HBITMAP = HANDLE;
const HBRUSH = HANDLE;
const HCOLORSPACE = HANDLE;
const HCONV = HANDLE;
const HCONVLIST = HANDLE;
const HCURSOR = HANDLE;
const HDC = HANDLE;
const HDDEDATA = HANDLE;
const HDESK = HANDLE;
const HDROP = HANDLE;
const HDWP = HANDLE;
const HENHMETAFILE = HANDLE;
const HFILE = HANDLE;
const HFONT = HANDLE;
const HGDIOBJ = HANDLE;
const HGLOBAL = HANDLE;
const HHOOK = HANDLE;
const HICON = HANDLE;
const HINSTANCE = HANDLE;
const HKEY = HANDLE;
const HKL = HANDLE;
const HLOCAL = HANDLE;
const HMENU = HANDLE;
const HMETAFILE = HANDLE;
const HMODULE = HINSTANCE;
const HMONITOR = HANDLE;
const HPALETTE = HANDLE;
const HPEN = HANDLE;
const HRESULT = exports.Def.long;
const HRGN = HANDLE;
const HRSRC = HANDLE;
const HSZ = HANDLE;
const HWINEVENTHOOK = HANDLE;
const HWINSTA = HANDLE;
const HWND = HANDLE;
/** A 32-bit signed integer */
const INT = exports.Def.int;
const INT_PTR = _WIN64 ? exports.Def.int64 : exports.Def.int32;
const INT8 = exports.Def.int8;
const INT16 = exports.Def.int16;
const INT32 = exports.Def.int32;
const INT64 = exports.Def.int64;
const LANGID = WORD;
const LCID = DWORD;
const LCTYPE = DWORD;
const LGRPID = DWORD;
const LONG = exports.Def.long;
const LONGLONG = exports.Def.longlong;
const LONG32 = exports.Def.int32;
const LONG64 = exports.Def.int64;
const LPARAM = LONG_PTR;
const LPBOOL = BOOL;
const LPBYTE = exports.Def.bytePtr;
const LPCOLORREF = DWORD;
const LPCSTR = exports.Def.uint8Ptr;
const LPCWSTR = exports.Def.uint16Ptr;
const LPCTSTR = exports.Def.uint16Ptr;
const LPVOID = exports.Def.voidPtr;
const LPCVOID = LPVOID;
const LPDWORD = exports.Def.uint16Ptr;
const LPHANDLE = _WIN64 ? exports.Def.int64Ptr : exports.Def.int32Ptr;
const LPINT = exports.Def.intPtr;
const LPLONG = exports.Def.int32Ptr;
const LPMSG = exports.Def.ptr;
const LPPOINT = exports.Def.ptr;
const LPSTR = exports.Def.charPtr;
const LPWSTR = exports.Def.uint16Ptr;
const LPTSTR = exports.Def.uint16Ptr;
const LPWORD = exports.Def.uint16Ptr;
const LRESULT = LONG_PTR;
const NTSTATUS = exports.Def.uint32;
const PBOOL = exports.Def.intPtr;
const PBOOLEAN = exports.Def.boolPtr;
const PBYTE = exports.Def.bytePtr;
const PCHAR = exports.Def.charPtr;
const PCSTR = exports.Def.uint8Ptr;
const PCTSTR = _WIN64 ? exports.Def.int16Ptr : exports.Def.int8Ptr;
const PCWSTR = exports.Def.uint16Ptr;
const PDWORD = exports.Def.uint32Ptr;
const PDWORDLONG = exports.Def.uint64Ptr;
const PDWORD_PTR = DWORD_PTR;
const PDWORD32 = exports.Def.uint32Ptr;
const PDWORD64 = exports.Def.uint64Ptr;
const PFLOAT = exports.Def.floatPtr;
const PHALF_PTR = exports.Def.ptr;
const PHANDLE = _WIN64 ? exports.Def.uint64PtrPtr : exports.Def.uint32PtrPtr;
const PHKEY = _WIN64 ? exports.Def.uint64PtrPtr : exports.Def.uint32PtrPtr;
const PINT = exports.Def.intPtr;
const PINT_PTR = exports.Def.intPtrPtr;
const PINT8 = exports.Def.int8Ptr;
const PINT16 = exports.Def.int16Ptr;
const PINT32 = exports.Def.int32Ptr;
const PINT64 = exports.Def.int64Ptr;
const PLCID = exports.Def.uint32Ptr;
const PLONG = exports.Def.longPtr;
const PLONGLONG = exports.Def.int64Ptr;
const PLONG_PTR = exports.Def.ptr;
const PLONG32 = exports.Def.int32Ptr;
const PLONG64 = exports.Def.int64Ptr;
// ? A 32-bit pointer. On a 32-bit system, this is a native pointer.
// On a 64-bit system, this is a truncated 64-bit pointer.
const POINTER_32 = _WIN64 ? exports.Def.int32Ptr : exports.Def.int32Ptr;
// ? A 64-bit pointer. On a 64-bit system, this is a native pointer.
// On a 32-bit system, this is a sign-extended 32-bit pointer.
const POINTER_64 = _WIN64 ? exports.Def.int64Ptr : exports.Def.int32Ptr;
const POINTER_SIGNED = exports.Def.ptr;
const POINTER_UNSIGNED = exports.Def.ptr;
const PSHORT = exports.Def.int16Ptr;
const PSIZE_T = ULONG_PTR;
const PSSIZE_T = exports.Def.ptr;
const PSTR = exports.Def.charPtr;
const PTBYTE = exports.Def.int16Ptr;
const PTCHAR = exports.Def.uint16Ptr;
const PTSTR = exports.Def.uint16Ptr;
const PUCHAR = exports.Def.ptr;
const PUHALF_PTR = exports.Def.ptr;
const PUINT = exports.Def.uintPtr;
const PUINT_PTR = exports.Def.uintPtrPtr;
const PUINT8 = exports.Def.uint8Ptr;
const PUINT16 = exports.Def.uint16Ptr;
const PUINT32 = exports.Def.uint32Ptr;
const PUINT64 = exports.Def.uint64Ptr;
const PULONG = exports.Def.uintPtr;
const PULONGLONG = exports.Def.uint64Ptr;
const PULONG_PTR = exports.Def.uint64PtrPtr;
const PULONG32 = exports.Def.uintPtr;
const PULONG64 = exports.Def.uint64Ptr;
const PUSHORT = exports.Def.uint16Ptr;
const PWCHAR = exports.Def.uint16Ptr;
const PWORD = exports.Def.uint16Ptr;
const PWSTR = exports.Def.uint16Ptr;
const QWORD = exports.Def.uint64;
const SC_HANDLE = HANDLE;
const SC_LOCK = LPVOID;
const SERVICE_STATUS_HANDLE = HANDLE;
const SHORT = exports.Def.int16;
const SIZE_T = ULONG_PTR;
const SSIZE_T = LONG_PTR;
const TBYTE = exports.Def.int16;
const TCHAR = exports.Def.uint16;
const UCHAR = exports.Def.uchar;
const UHALF_PTR = _WIN64 ? exports.Def.uint32 : exports.Def.uint16;
const UINT = exports.Def.uint;
const UINT_PTR = _WIN64 ? exports.Def.uint64 : exports.Def.uint32;
const UINT8 = exports.Def.uint8;
const UINT16 = exports.Def.uint16;
const UINT32 = exports.Def.uint32;
const UINT64 = exports.Def.uint64;
const ULONG = exports.Def.uint;
const ULONGLONG = exports.Def.uint64;
const ULONG32 = exports.Def.uint32;
const ULONG64 = exports.Def.uint64;
const USHORT = exports.Def.ushort;
const USN = LONGLONG;
// export const WINAPI;
const WINEVENTPROC = exports.Def.ptr;
const WNDENUMPROC = exports.Def.ptr;
const WNDPROC = exports.Def.ptr;
/**
 * Note: original be typedef UINT_PTR WPARAM;
 * CALLBACK WNDCLASSEX.lpfnWndProc may pass negative number and cause process exit.
 */
const WPARAM = UINT_PTR;
// A pointer to an INITCOMMONCONTROLSEX
const LPINITCOMMONCONTROLSEX = exports.Def.ptr;
const LPWNDCLASSEX = exports.Def.ptr; // A pointer to a WNDCLASSEX
const PWINDOWINFO = exports.Def.ptr; // A pointer to a WINDOWINFO structure
const PFILETIME = exports.Def.ptr; // A pointer to a FILETIME
const LPFILETIME = exports.Def.ptr; // A pointer to a FILETIME
const va_list = exports.Def.charPtr;

/** https://msdn.microsoft.com/en-us/library/windows/desktop/dd162805(v=vs.85).aspx */
const POINT = exports.Def.ptr;
/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/windef/ns-windef-pointl
 */
const POINTL = exports.Def.ptr;
const PPOINTL = exports.Def.ptr;
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-alttabinfo */
const ALTTABINFO = exports.Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-copydatastruct */
const COPYDATASTRUCT = exports.Def.ptr;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-taghardwareinput */
const HARDWAREINPUT = exports.Def.ptr;
const INITCOMMONCONTROLSEX = exports.Def.ptr;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagkeybdinput */
const KEYBDINPUT = exports.Def.ptr;
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagmouseinput */
const MOUSEINPUT = exports.Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-msg */
const MSG = exports.Def.ptr;
const PROCESS_BASIC_INFORMATION = exports.Def.ptr;
const UNICODE_STRING = exports.Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawhid */
const RAWHID = exports.Def.ptr;
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawinputdevicelist */
const RAWINPUTDEVICELIST = exports.Def.ptr;
const PRAWINPUTDEVICELIST = exports.Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawinputheader */
const RAWINPUTHEADER = exports.Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawkeyboard */
const RAWKEYBOARD = exports.Def.ptr;
/** https://msdn.microsoft.com/zh-cn/library/windows/desktop/ms633577(v=vs.85).aspx */
const WNDCLASSEX = exports.Def.ptr;
const RECT = exports.Def.ptr;
const WINDOWINFO = exports.Def.ptr;
/** https://docs.microsoft.com/en-us/windows/win32/api/minwinbase/ns-minwinbase-filetime */
const FILETIME = exports.Def.ptr;

/** https://docs.microsoft.com/zh-cn/windows/win32/api/wingdi/ns-wingdi-display_devicew */
const DISPLAY_DEVICEW = exports.Def.ptr;
/**
 * Used for specifying characteristics of display and print devices in the Unicode (wide) character set.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-devmodew
 */
const DEVMODEW = exports.Def.ptr;
/**
 * Specifies the name of an installed print processor.
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printprocessor-info-1
 */
const PRINTPROCESSOR_INFO_1 = exports.Def.ptr;

const DOC_INFO_1 = exports.Def.ptr;
/**
 * @link https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printer-defaults
 */
const PRINTER_DEFAULTS = exports.Def.ptr;
const LPRINTER_DEFAULTS = exports.Def.ptr;
const PRINTER_INFO_1 = exports.Def.ptr;
const PPRINTER_INFO_1 = exports.Def.ptr;
const PRINTER_INFO_2 = exports.Def.ptr;
const PPRINTER_INFO_2 = exports.Def.ptr;
const PRINTER_INFO_3 = exports.Def.ptr;
const PPRINTER_INFO_3 = exports.Def.ptr;
const PRINTER_INFO_4 = exports.Def.ptr;
const PPRINTER_INFO_4 = exports.Def.ptr;
const PRINTER_INFO_5 = exports.Def.ptr;
const PPRINTER_INFO_5 = exports.Def.ptr;
const PRINTER_INFO_6 = exports.Def.ptr;
const PPRINTER_INFO_6 = exports.Def.ptr;
const PRINTER_INFO_7 = exports.Def.ptr;
const PPRINTER_INFO_7 = exports.Def.ptr;
const PRINTER_INFO_8 = exports.Def.ptr;
const PPRINTER_INFO_8 = exports.Def.ptr;
const PRINTER_INFO_9 = exports.Def.ptr;
const PPRINTER_INFO_9 = exports.Def.ptr;

/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
const FLASHWINFO = exports.Def.ptr;
/** https://docs.microsoft.com/zh-cn/windows/win32/api/wingdi/ns-wingdi-display_devicew */
const RID_DEVICE_INFO = exports.Def.ptr;

const RID_DEVICE_INFO_DUMMYUNIONNAME = exports.Def.ptr;

const DEVMODEW_DUMMYUNIONNAME = exports.Def.ptr;
const DEVMODEW_DUMMYUNIONNAME2 = exports.Def.ptr;

exports.ACCESS_MASK = ACCESS_MASK;
exports.ALTTABINFO = ALTTABINFO;
exports.ATOM = ATOM;
exports.BOOL = BOOL;
exports.BOOLEAN = BOOLEAN;
exports.BYTE = BYTE;
exports.CALLBACK = CALLBACK;
exports.CCHAR = CCHAR;
exports.CHAR = CHAR;
exports.COLORREF = COLORREF;
exports.COPYDATASTRUCT = COPYDATASTRUCT;
exports.DEVMODEW = DEVMODEW;
exports.DEVMODEW_DUMMYUNIONNAME = DEVMODEW_DUMMYUNIONNAME;
exports.DEVMODEW_DUMMYUNIONNAME2 = DEVMODEW_DUMMYUNIONNAME2;
exports.DISPLAY_DEVICEW = DISPLAY_DEVICEW;
exports.DOC_INFO_1 = DOC_INFO_1;
exports.DWORD = DWORD;
exports.DWORD32 = DWORD32;
exports.DWORD64 = DWORD64;
exports.DWORDLONG = DWORDLONG;
exports.DWORD_PTR = DWORD_PTR;
exports.FILETIME = FILETIME;
exports.FLASHWINFO = FLASHWINFO;
exports.FLOAT = FLOAT;
exports.HACCEL = HACCEL;
exports.HALF_PTR = HALF_PTR;
exports.HANDLE = HANDLE;
exports.HANDLE_PVOID = HANDLE_PVOID;
exports.HARDWAREINPUT = HARDWAREINPUT;
exports.HBITMAP = HBITMAP;
exports.HBRUSH = HBRUSH;
exports.HCOLORSPACE = HCOLORSPACE;
exports.HCONV = HCONV;
exports.HCONVLIST = HCONVLIST;
exports.HCURSOR = HCURSOR;
exports.HDC = HDC;
exports.HDDEDATA = HDDEDATA;
exports.HDESK = HDESK;
exports.HDROP = HDROP;
exports.HDWP = HDWP;
exports.HENHMETAFILE = HENHMETAFILE;
exports.HFILE = HFILE;
exports.HFONT = HFONT;
exports.HGDIOBJ = HGDIOBJ;
exports.HGLOBAL = HGLOBAL;
exports.HHOOK = HHOOK;
exports.HICON = HICON;
exports.HINSTANCE = HINSTANCE;
exports.HKEY = HKEY;
exports.HKL = HKL;
exports.HLOCAL = HLOCAL;
exports.HMENU = HMENU;
exports.HMETAFILE = HMETAFILE;
exports.HMODULE = HMODULE;
exports.HMONITOR = HMONITOR;
exports.HPALETTE = HPALETTE;
exports.HPEN = HPEN;
exports.HRESULT = HRESULT;
exports.HRGN = HRGN;
exports.HRSRC = HRSRC;
exports.HSZ = HSZ;
exports.HWINEVENTHOOK = HWINEVENTHOOK;
exports.HWINSTA = HWINSTA;
exports.HWND = HWND;
exports.INITCOMMONCONTROLSEX = INITCOMMONCONTROLSEX;
exports.INT = INT;
exports.INT16 = INT16;
exports.INT32 = INT32;
exports.INT64 = INT64;
exports.INT8 = INT8;
exports.INT_PTR = INT_PTR;
exports.KEYBDINPUT = KEYBDINPUT;
exports.LANGID = LANGID;
exports.LCID = LCID;
exports.LCTYPE = LCTYPE;
exports.LGRPID = LGRPID;
exports.LONG = LONG;
exports.LONG32 = LONG32;
exports.LONG64 = LONG64;
exports.LONGLONG = LONGLONG;
exports.LONG_PTR = LONG_PTR;
exports.LPARAM = LPARAM;
exports.LPBOOL = LPBOOL;
exports.LPBYTE = LPBYTE;
exports.LPCOLORREF = LPCOLORREF;
exports.LPCSTR = LPCSTR;
exports.LPCTSTR = LPCTSTR;
exports.LPCVOID = LPCVOID;
exports.LPCWSTR = LPCWSTR;
exports.LPDWORD = LPDWORD;
exports.LPFILETIME = LPFILETIME;
exports.LPHANDLE = LPHANDLE;
exports.LPINITCOMMONCONTROLSEX = LPINITCOMMONCONTROLSEX;
exports.LPINT = LPINT;
exports.LPLONG = LPLONG;
exports.LPMSG = LPMSG;
exports.LPPOINT = LPPOINT;
exports.LPRINTER_DEFAULTS = LPRINTER_DEFAULTS;
exports.LPSTR = LPSTR;
exports.LPTSTR = LPTSTR;
exports.LPVOID = LPVOID;
exports.LPWNDCLASSEX = LPWNDCLASSEX;
exports.LPWORD = LPWORD;
exports.LPWSTR = LPWSTR;
exports.LRESULT = LRESULT;
exports.MOUSEINPUT = MOUSEINPUT;
exports.MSG = MSG;
exports.NTSTATUS = NTSTATUS;
exports.PBOOL = PBOOL;
exports.PBOOLEAN = PBOOLEAN;
exports.PBYTE = PBYTE;
exports.PCHAR = PCHAR;
exports.PCSTR = PCSTR;
exports.PCTSTR = PCTSTR;
exports.PCWSTR = PCWSTR;
exports.PDWORD = PDWORD;
exports.PDWORD32 = PDWORD32;
exports.PDWORD64 = PDWORD64;
exports.PDWORDLONG = PDWORDLONG;
exports.PDWORD_PTR = PDWORD_PTR;
exports.PFILETIME = PFILETIME;
exports.PFLOAT = PFLOAT;
exports.PHALF_PTR = PHALF_PTR;
exports.PHANDLE = PHANDLE;
exports.PHKEY = PHKEY;
exports.PINT = PINT;
exports.PINT16 = PINT16;
exports.PINT32 = PINT32;
exports.PINT64 = PINT64;
exports.PINT8 = PINT8;
exports.PINT_PTR = PINT_PTR;
exports.PLCID = PLCID;
exports.PLONG = PLONG;
exports.PLONG32 = PLONG32;
exports.PLONG64 = PLONG64;
exports.PLONGLONG = PLONGLONG;
exports.PLONG_PTR = PLONG_PTR;
exports.POINT = POINT;
exports.POINTER_32 = POINTER_32;
exports.POINTER_64 = POINTER_64;
exports.POINTER_SIGNED = POINTER_SIGNED;
exports.POINTER_UNSIGNED = POINTER_UNSIGNED;
exports.POINTL = POINTL;
exports.PPOINTL = PPOINTL;
exports.PPRINTER_INFO_1 = PPRINTER_INFO_1;
exports.PPRINTER_INFO_2 = PPRINTER_INFO_2;
exports.PPRINTER_INFO_3 = PPRINTER_INFO_3;
exports.PPRINTER_INFO_4 = PPRINTER_INFO_4;
exports.PPRINTER_INFO_5 = PPRINTER_INFO_5;
exports.PPRINTER_INFO_6 = PPRINTER_INFO_6;
exports.PPRINTER_INFO_7 = PPRINTER_INFO_7;
exports.PPRINTER_INFO_8 = PPRINTER_INFO_8;
exports.PPRINTER_INFO_9 = PPRINTER_INFO_9;
exports.PRAWINPUTDEVICELIST = PRAWINPUTDEVICELIST;
exports.PRINTER_DEFAULTS = PRINTER_DEFAULTS;
exports.PRINTER_INFO_1 = PRINTER_INFO_1;
exports.PRINTER_INFO_2 = PRINTER_INFO_2;
exports.PRINTER_INFO_3 = PRINTER_INFO_3;
exports.PRINTER_INFO_4 = PRINTER_INFO_4;
exports.PRINTER_INFO_5 = PRINTER_INFO_5;
exports.PRINTER_INFO_6 = PRINTER_INFO_6;
exports.PRINTER_INFO_7 = PRINTER_INFO_7;
exports.PRINTER_INFO_8 = PRINTER_INFO_8;
exports.PRINTER_INFO_9 = PRINTER_INFO_9;
exports.PRINTPROCESSOR_INFO_1 = PRINTPROCESSOR_INFO_1;
exports.PROCESS_BASIC_INFORMATION = PROCESS_BASIC_INFORMATION;
exports.PSHORT = PSHORT;
exports.PSIZE_T = PSIZE_T;
exports.PSSIZE_T = PSSIZE_T;
exports.PSTR = PSTR;
exports.PTBYTE = PTBYTE;
exports.PTCHAR = PTCHAR;
exports.PTSTR = PTSTR;
exports.PUCHAR = PUCHAR;
exports.PUHALF_PTR = PUHALF_PTR;
exports.PUINT = PUINT;
exports.PUINT16 = PUINT16;
exports.PUINT32 = PUINT32;
exports.PUINT64 = PUINT64;
exports.PUINT8 = PUINT8;
exports.PUINT_PTR = PUINT_PTR;
exports.PULONG = PULONG;
exports.PULONG32 = PULONG32;
exports.PULONG64 = PULONG64;
exports.PULONGLONG = PULONGLONG;
exports.PULONG_PTR = PULONG_PTR;
exports.PUSHORT = PUSHORT;
exports.PVOID = PVOID;
exports.PWCHAR = PWCHAR;
exports.PWINDOWINFO = PWINDOWINFO;
exports.PWORD = PWORD;
exports.PWSTR = PWSTR;
exports.QWORD = QWORD;
exports.RAWHID = RAWHID;
exports.RAWINPUTDEVICELIST = RAWINPUTDEVICELIST;
exports.RAWINPUTHEADER = RAWINPUTHEADER;
exports.RAWKEYBOARD = RAWKEYBOARD;
exports.RECT = RECT;
exports.RID_DEVICE_INFO = RID_DEVICE_INFO;
exports.RID_DEVICE_INFO_DUMMYUNIONNAME = RID_DEVICE_INFO_DUMMYUNIONNAME;
exports.SC_HANDLE = SC_HANDLE;
exports.SC_LOCK = SC_LOCK;
exports.SERVICE_STATUS_HANDLE = SERVICE_STATUS_HANDLE;
exports.SHORT = SHORT;
exports.SIZE_T = SIZE_T;
exports.SSIZE_T = SSIZE_T;
exports.TBYTE = TBYTE;
exports.TCHAR = TCHAR;
exports.UCHAR = UCHAR;
exports.UHALF_PTR = UHALF_PTR;
exports.UINT = UINT;
exports.UINT16 = UINT16;
exports.UINT32 = UINT32;
exports.UINT64 = UINT64;
exports.UINT8 = UINT8;
exports.UINT_PTR = UINT_PTR;
exports.ULONG = ULONG;
exports.ULONG32 = ULONG32;
exports.ULONG64 = ULONG64;
exports.ULONGLONG = ULONGLONG;
exports.ULONG_PTR = ULONG_PTR;
exports.UNICODE_STRING = UNICODE_STRING;
exports.USHORT = USHORT;
exports.USN = USN;
exports.VOID = VOID;
exports.WCHAR = WCHAR;
exports.WINDOWINFO = WINDOWINFO;
exports.WINEVENTPROC = WINEVENTPROC;
exports.WNDCLASSEX = WNDCLASSEX;
exports.WNDENUMPROC = WNDENUMPROC;
exports.WNDPROC = WNDPROC;
exports.WORD = WORD;
exports.WPARAM = WPARAM;
exports.va_list = va_list;
//# sourceMappingURL=index.def.cjs.map
