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

var ref = require('ref-napi');
var StructDi = require('ref-struct-di');
var UnionDi = require('ref-union-di');
var assert = require('assert');

const config = {
    _WIN64: process.arch === 'x64',
};

/* eslint-disable id-length */
/**
 * @link https://tootallnate.github.io/ref/
 */
var Def;
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
})(Def = Def || (Def = {}));

// windows data types for ref module https://github.com/TooTallNate/ref
const { _WIN64 } = config;
/**
 * @link https://docs.microsoft.com/en-us/windows/win32/secauthz/access-mask-format
 */
const ACCESS_MASK = Def.int32;
const ATOM = Def.uint16;
const DWORD = Def.uint32;
const PVOID = _WIN64 ? Def.uint64Ptr : Def.uint32Ptr;
/**
 * `uint32` or `uint64` used as value usage (memory address) instead of PVOID (Buffer),
 * Use `HANDLE` (number) for params defintion of the api,
 * @see https://stackoverflow.com/questions/18266626/what-is-the-range-of-a-windows-handle-on-a-64-bits-application/29526711#29526711
 */
const HANDLE = _WIN64 ? Def.uint64 : Def.uint32;
const LONG_PTR = _WIN64 ? Def.int64 : Def.int32;
const ULONG_PTR = _WIN64 ? Def.int64 : Def.int32;
Def.void;
Def.uint16;
const WORD = Def.int16;
Def.int;
Def.bool;
const BYTE = Def.byte;
Def.ptr; // https://msdn.microsoft.com/en-us/library/windows/desktop/ms633573(v=vs.85).aspx
Def.uint8;
Def.uint8;
// export const CONST;
Def.uint64;
Def.uint32;
Def.uint64;
Def.float;
_WIN64 ? Def.int32 : Def.int16;
const HBRUSH = HANDLE;
const HCURSOR = HANDLE;
const HICON = HANDLE;
const HINSTANCE = HANDLE;
Def.long;
const HWND = HANDLE;
/** A 32-bit signed integer */
const INT = Def.int;
_WIN64 ? Def.int64 : Def.int32;
Def.int8;
Def.int16;
Def.int32;
Def.int64;
const LONG = Def.long;
Def.longlong;
Def.int32;
Def.int64;
const LPARAM = LONG_PTR;
Def.bytePtr;
Def.uint8Ptr;
Def.uint16Ptr;
const LPCTSTR = Def.uint16Ptr;
Def.voidPtr;
Def.uint16Ptr;
_WIN64 ? Def.int64Ptr : Def.int32Ptr;
Def.intPtr;
Def.int32Ptr;
const LPMSG = Def.ptr;
Def.ptr;
const LPSTR = Def.charPtr;
const LPWSTR = Def.uint16Ptr;
const LPTSTR = Def.uint16Ptr;
const LPWORD = Def.uint16Ptr;
Def.uint32;
Def.intPtr;
Def.boolPtr;
Def.bytePtr;
Def.charPtr;
Def.uint8Ptr;
_WIN64 ? Def.int16Ptr : Def.int8Ptr;
Def.uint16Ptr;
Def.uint32Ptr;
Def.uint64Ptr;
Def.uint32Ptr;
Def.uint64Ptr;
Def.floatPtr;
Def.ptr;
_WIN64 ? Def.uint64PtrPtr : Def.uint32PtrPtr;
_WIN64 ? Def.uint64PtrPtr : Def.uint32PtrPtr;
Def.intPtr;
Def.intPtrPtr;
Def.int8Ptr;
Def.int16Ptr;
Def.int32Ptr;
Def.int64Ptr;
Def.uint32Ptr;
Def.longPtr;
Def.int64Ptr;
Def.ptr;
Def.int32Ptr;
Def.int64Ptr;
// ? A 32-bit pointer. On a 32-bit system, this is a native pointer.
// On a 64-bit system, this is a truncated 64-bit pointer.
_WIN64 ? Def.int32Ptr : Def.int32Ptr;
// ? A 64-bit pointer. On a 64-bit system, this is a native pointer.
// On a 32-bit system, this is a sign-extended 32-bit pointer.
_WIN64 ? Def.int64Ptr : Def.int32Ptr;
Def.ptr;
Def.ptr;
Def.int16Ptr;
Def.ptr;
Def.charPtr;
Def.int16Ptr;
Def.uint16Ptr;
Def.uint16Ptr;
Def.ptr;
Def.ptr;
Def.uintPtr;
Def.uintPtrPtr;
Def.uint8Ptr;
Def.uint16Ptr;
Def.uint32Ptr;
Def.uint64Ptr;
Def.uintPtr;
Def.uint64Ptr;
Def.uint64PtrPtr;
Def.uintPtr;
Def.uint64Ptr;
Def.uint16Ptr;
Def.uint16Ptr;
Def.uint16Ptr;
const PWSTR = Def.uint16Ptr;
Def.uint64;
const SHORT = Def.int16;
Def.int16;
Def.uint16;
Def.uchar;
_WIN64 ? Def.uint32 : Def.uint16;
const UINT = Def.uint;
const UINT_PTR = _WIN64 ? Def.uint64 : Def.uint32;
Def.uint8;
Def.uint16;
Def.uint32;
Def.uint64;
const ULONG = Def.uint;
Def.uint64;
Def.uint32;
Def.uint64;
const USHORT = Def.ushort;
// export const WINAPI;
Def.ptr;
Def.ptr;
const WNDPROC = Def.ptr;
/**
 * Note: original be typedef UINT_PTR WPARAM;
 * CALLBACK WNDCLASSEX.lpfnWndProc may pass negative number and cause process exit.
 */
const WPARAM = UINT_PTR;
// A pointer to an INITCOMMONCONTROLSEX
Def.ptr;
Def.ptr; // A pointer to a WNDCLASSEX
Def.ptr; // A pointer to a WINDOWINFO structure
Def.ptr; // A pointer to a FILETIME
Def.ptr; // A pointer to a FILETIME
Def.charPtr;

/**
 * Fixed length "Buffer" type, for use in Struct type definitions.
 * Like `wchar Name[32]` in C,
 * `getter` and `setter` functions are provided to access the buffer contents.
 * The starting and tailing terminal-null of returned string via `getter` is removed.
 */
function wcharBuffer(charLength) {
    assert(charLength >= 0);
    return BufferTypeFactory(charLength * 2, 'ucs2');
}
/**
 * Fixed length "Buffer" type, for use in Struct type definitions.
 *
 * Optionally setting the `encoding` param will force to call
 * `toString(encoding)` on the buffer returning a String instead.
 *
 * @see https://github.com/TooTallNate/ref-struct/issues/28#issuecomment-265626611
 * @ref https://gist.github.com/TooTallNate/80ac2d94b950216a2705
 */
function BufferTypeFactory(byteLength, encoding) {
    assert(byteLength >= 0);
    const inst = Object.create(ref.types.byte, {
        constructor: {
            configurable: true,
            enumerable: false,
            writable: true,
            value: BufferTypeFactory,
        },
        size: {
            configurable: true,
            enumerable: true,
            writable: false,
            value: byteLength,
        },
        encoding: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: encoding,
        },
        get: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: getFn,
        },
        set: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: setFn,
        },
    });
    return inst;
}
function getFn(buffer, offset) {
    const buf = buffer.subarray(offset, offset + this.size);
    if (this.encoding) {
        const str = buf.toString(this.encoding);
        return str.replace(/^\0+|\0+$/ug, '');
    }
    return buf;
}
function setFn(buffer, offset, value) {
    let buf;
    if (typeof value === 'string') {
        assert(this.encoding, 'BufferType.encoding is required when setting a string');
        buf = Buffer.from(value, this.encoding);
    }
    else if (Array.isArray(value)) {
        buf = Buffer.from(value);
    }
    else if (Buffer.isBuffer(value)) {
        buf = value;
    }
    else {
        throw new TypeError('Buffer instance expected');
    }
    if (buf.length > this.size) {
        throw new Error(`Buffer given is ${buf.length} bytes, but only ${this.size} bytes available`);
    }
    buf.copy(buffer, offset);
}

/* eslint-disable import/no-extraneous-dependencies */
// const UnionDi = _UnionDi
const Union = UnionDi(ref);
function UnionType(input) {
    // @ts-ignore
    return Union(input);
}
const defaultStructCharOptions = {
    useStringBuffer: true,
    maxCharLength: 1024,
    CharDefs: [
        LPMSG,
        LPSTR,
        LPWSTR,
        LPTSTR,
        LPWORD,
    ],
};
const Struct = StructDi(ref);
function StructType(input, options) {
    const initType = genInitTyp(input, options);
    // @ts-ignore
    return Struct(initType);
}
function genInitTyp(input, options) {
    const opts = {
        ...defaultStructCharOptions,
        ...options,
    };
    const initType = {};
    Object.entries(input).forEach(([key, value]) => {
        if (opts.useStringBuffer
            && typeof value === 'string'
            && opts.CharDefs.includes(value)) {
            initType[key] = wcharBuffer(opts.maxCharLength);
        }
        else {
            // @TODO recursive convertion
            initType[key] = value;
        }
    });
    return initType;
}

/* eslint-disable id-length */
/**
 * Struct usage:
 *
 * import * as Struct from 'ref-struct';
 * import { DStruct as DS, DModel as M } from 'win32-api';
 *
 * const point: M.PointStruct = new Struct(DS.POINT)();
 * point.x = 100;
 * point.y = 200;
 * // const buf = point.ref()
 *
 */
/** https://msdn.microsoft.com/en-us/library/windows/desktop/dd162805(v=vs.85).aspx */
const POINT = {
    x: LONG,
    y: LONG,
};
/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/windef/ns-windef-pointl
 */
const POINTL = {
    x: LONG,
    y: LONG,
};
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-alttabinfo */
const ALTTABINFO = {
    cbSize: DWORD,
    cItems: INT,
    cColumns: INT,
    cRows: INT,
    iColFocus: INT,
    iRowFocus: INT,
    cxItem: INT,
    cyItem: INT,
    ptStart: StructType(POINT),
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-copydatastruct */
const COPYDATASTRUCT = {
    dwData: ULONG_PTR,
    cbData: DWORD,
    lpData: PVOID,
};
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-taghardwareinput */
const HARDWAREINPUT = {
    uMsg: DWORD,
    wParamL: WORD,
    wParamH: WORD,
};
const INITCOMMONCONTROLSEX = {
    dwSize: DWORD,
    dwICC: DWORD,
};
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagkeybdinput */
const KEYBDINPUT = {
    wVk: WORD,
    wScan: WORD,
    dwFlags: DWORD,
    time: DWORD,
    dwExtraInfo: ULONG_PTR,
};
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagmouseinput */
const MOUSEINPUT = {
    dx: LONG,
    dy: LONG,
    mouseData: DWORD,
    dwFlags: DWORD,
    time: DWORD,
    dwExtraInfo: ULONG_PTR,
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-msg */
const MSG = {
    hwnd: HWND,
    message: UINT,
    wParam: WPARAM,
    lParam: LPARAM,
    time: DWORD,
    pt: StructType(POINT),
    lPrivate: DWORD,
};
const PROCESS_BASIC_INFORMATION = {
    Reserved1: PVOID,
    PebBaseAddress: PVOID,
    Reserved2: PVOID,
    UniqueProcessId: ULONG_PTR,
    InheritedFromUniqueProcessId: PVOID,
};
const UNICODE_STRING = {
    Length: USHORT,
    MaximumLength: USHORT,
    Buffer: PWSTR,
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawhid */
const RAWHID = {
    dwSizeHid: DWORD,
    dwCount: DWORD,
    /** bRawData[1] */
    bRawData: BYTE,
};
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawinputdevicelist */
const RAWINPUTDEVICELIST = {
    hDevice: HANDLE,
    dwType: DWORD,
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawinputheader */
const RAWINPUTHEADER = {
    dwType: DWORD,
    dwSize: DWORD,
    hDevice: HANDLE,
    wParam: WPARAM,
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawkeyboard */
const RAWKEYBOARD = {
    MakeCode: USHORT,
    Flags: USHORT,
    Reserved: USHORT,
    VKey: USHORT,
    Message: UINT,
    ExtraInformation: ULONG,
};
/** https://msdn.microsoft.com/zh-cn/library/windows/desktop/ms633577(v=vs.85).aspx */
const WNDCLASSEX = {
    cbSize: UINT,
    style: UINT,
    // 'lpfnWndProc': ffi.Function('int32', ['pointer', 'uint32', 'int32', 'uint32']) ,
    lpfnWndProc: WNDPROC,
    cbClsExtra: INT,
    cbWndExtra: INT,
    hInstance: HINSTANCE,
    hIcon: HICON,
    hCursor: HCURSOR,
    hbrBackground: HBRUSH,
    lpszMenuName: LPCTSTR,
    lpszClassName: LPCTSTR,
    hIconSm: HICON,
};
const RECT = {
    left: LONG,
    top: LONG,
    right: LONG,
    bottom: LONG,
};
const WINDOWINFO = {
    cbSize: DWORD,
    rcWindow: RECT,
    rcClient: RECT,
    dwStyle: DWORD,
    dwExStyle: DWORD,
    dwWindowStatus: DWORD,
    cxWindowBorders: UINT,
    cyWindowBorders: UINT,
    atomWindowType: ATOM,
    wCreatorVersion: WORD,
};
/** https://docs.microsoft.com/en-us/windows/win32/api/minwinbase/ns-minwinbase-filetime */
const FILETIME = {
    dwLowDateTime: DWORD,
    dwHighDateTime: DWORD,
};

const DEVMODEW_DUMMYSTRUCTNAME = {
    dmOrientation: SHORT,
    dmPaperSize: SHORT,
    dmPaperLength: SHORT,
    dmPaperWidth: SHORT,
    dmScale: SHORT,
    dmCopies: SHORT,
    dmDefaultSource: SHORT,
    dmPrintQuality: SHORT,
};
const DEVMODEW_DUMMYSTRUCTNAME2 = {
    dmPosition: StructType(POINTL),
    dmDisplayOrientation: DWORD,
    dmDisplayFixedOutput: DWORD,
};
const DEVMODEW_DUMMYUNIONNAME = {
    DUMMYSTRUCTNAME: StructType(DEVMODEW_DUMMYSTRUCTNAME),
    dmPosition: StructType(POINTL),
    DUMMYSTRUCTNAME2: StructType(DEVMODEW_DUMMYSTRUCTNAME2),
};
const DEVMODEW_DUMMYUNIONNAME2 = {
    dmDisplayFlags: DWORD,
    dmNup: DWORD,
};

/** https://docs.microsoft.com/zh-cn/windows/win32/api/wingdi/ns-wingdi-display_devicew */
const DISPLAY_DEVICEW = {
    cb: DWORD,
    DeviceName: wcharBuffer(32),
    DeviceString: wcharBuffer(128),
    StateFlags: DWORD,
    DeviceID: wcharBuffer(128),
    DeviceKey: wcharBuffer(128),
};
/**
 * Used for specifying characteristics of display and print devices in the Unicode (wide) character set.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-devmodew
 */
const DEVMODEW = {
    dmDeviceName: wcharBuffer(128),
    dmSpecVersion: WORD,
    dmDriverVersion: WORD,
    dmSize: WORD,
    dmDriverExtra: WORD,
    dmFields: DWORD,
    DUMMYUNIONNAME: UnionType(DEVMODEW_DUMMYUNIONNAME),
    dmColor: SHORT,
    dmDuplex: SHORT,
    dmYResolution: SHORT,
    dmTTOption: SHORT,
    dmCollate: SHORT,
    /**
     * For printers, specifies the name of the form to use; such as "Letter" or "Legal".
     * This must be a name that can be obtain by calling the Win32 EnumForms function
     * (described in the Microsoft Window SDK documentation).
     */
    dmFormName: wcharBuffer(32),
    dmLogPixels: WORD,
    dmBitsPerPel: DWORD,
    dmPelsWidth: DWORD,
    dmPelsHeight: DWORD,
    DUMMYUNIONNAME2: UnionType(DEVMODEW_DUMMYUNIONNAME2),
    dmDisplayFrequency: DWORD,
    dmICMMethod: DWORD,
    dmICMIntent: DWORD,
    dmMediaType: DWORD,
    dmDitherType: DWORD,
    dmReserved1: DWORD,
    dmReserved2: DWORD,
    dmPanningWidth: DWORD,
    dmPanningHeight: DWORD,
};

/**
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/datatypes-info-1
 */
const DATATYPES_INFO_1 = {
    pName: LPTSTR,
};
/**
 * Describes a document that will be printed.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/doc-info-1
 */
const DOC_INFO_1 = {
    pDocName: LPTSTR,
    pOutputFile: LPTSTR,
    pDatatype: LPTSTR,
};
/**
 * Specifies the name of an installed print processor.
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printprocessor-info-1
 */
const PRINTPROCESSOR_INFO_1 = {
    pName: LPTSTR,
};
/**
 * Specifies the default data type, environment, initialization data, and access rights for a printer.
 * @link https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printer-defaults
 */
const PRINTER_DEFAULTS = {
    /**
     * Pointer to a null-terminated string that specifies the default data type for a printer.
     */
    pDatatype: LPTSTR,
    /**
     * Pointer to a DEVMODE structure that identifies the default environment and initialization data for a printer.
     */
    pDevMode: StructType(DEVMODEW),
    // pDevMode: LPDEVMODE,
    DesiredAccess: ACCESS_MASK,
};
/**
 * Specifies general printer information
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/printer-info-1
 */
const PRINTER_INFO_1 = {
    Flags: DWORD,
    pDescription: LPTSTR,
    pName: LPTSTR,
    pComment: LPTSTR,
};
/**
 * Specifies general printer information
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/printer-info-4
 * @description The structure can be used to retrieve minimal printer information on a call to EnumPrinters.
 *  Such a call is a fast and easy way to retrieve the names and attributes of all locally installed printers
 *  on a system and all remote printer connections that a user has established.
 */
const PRINTER_INFO_4 = {
    pPrinterName: LPTSTR,
    pServerName: LPTSTR,
    Attributes: DWORD,
};

const RID_DEVICE_INFO_DUMMYUNIONNAME = {
    mouse: DWORD,
    keyboard: DWORD,
    hid: DWORD,
};

// import * as UT from '../union/union.types.js'
/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
const FLASHWINFO = {
    cbSize: UINT,
    hwnd: HWND,
    dwFlags: DWORD,
    uCount: UINT,
    dwTimeout: DWORD,
};
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rid_device_info */
const RID_DEVICE_INFO = {
    cbSize: DWORD,
    dwType: DWORD,
    // DUMMYUNIONNAME: UnionType<UT.RID_DEVICE_INFO_DUMMYUNIONNAME>(RID_DEVICE_INFO_DUMMYUNIONNAME),
    DUMMYUNIONNAME: UnionType(RID_DEVICE_INFO_DUMMYUNIONNAME),
};

exports.ALTTABINFO = ALTTABINFO;
exports.COPYDATASTRUCT = COPYDATASTRUCT;
exports.DATATYPES_INFO_1 = DATATYPES_INFO_1;
exports.DEVMODEW = DEVMODEW;
exports.DISPLAY_DEVICEW = DISPLAY_DEVICEW;
exports.DOC_INFO_1 = DOC_INFO_1;
exports.FILETIME = FILETIME;
exports.FLASHWINFO = FLASHWINFO;
exports.HARDWAREINPUT = HARDWAREINPUT;
exports.INITCOMMONCONTROLSEX = INITCOMMONCONTROLSEX;
exports.KEYBDINPUT = KEYBDINPUT;
exports.MOUSEINPUT = MOUSEINPUT;
exports.MSG = MSG;
exports.POINT = POINT;
exports.POINTL = POINTL;
exports.PRINTER_DEFAULTS = PRINTER_DEFAULTS;
exports.PRINTER_INFO_1 = PRINTER_INFO_1;
exports.PRINTER_INFO_4 = PRINTER_INFO_4;
exports.PRINTPROCESSOR_INFO_1 = PRINTPROCESSOR_INFO_1;
exports.PROCESS_BASIC_INFORMATION = PROCESS_BASIC_INFORMATION;
exports.RAWHID = RAWHID;
exports.RAWINPUTDEVICELIST = RAWINPUTDEVICELIST;
exports.RAWINPUTHEADER = RAWINPUTHEADER;
exports.RAWKEYBOARD = RAWKEYBOARD;
exports.RECT = RECT;
exports.RID_DEVICE_INFO = RID_DEVICE_INFO;
exports.UNICODE_STRING = UNICODE_STRING;
exports.WINDOWINFO = WINDOWINFO;
exports.WNDCLASSEX = WNDCLASSEX;
//# sourceMappingURL=index.struct.cjs.map
