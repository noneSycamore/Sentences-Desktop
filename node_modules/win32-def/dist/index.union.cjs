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
Def.int32;
Def.uint16;
const DWORD = Def.uint32;
_WIN64 ? Def.uint64Ptr : Def.uint32Ptr;
/**
 * `uint32` or `uint64` used as value usage (memory address) instead of PVOID (Buffer),
 * Use `HANDLE` (number) for params defintion of the api,
 * @see https://stackoverflow.com/questions/18266626/what-is-the-range-of-a-windows-handle-on-a-64-bits-application/29526711#29526711
 */
const HANDLE = _WIN64 ? Def.uint64 : Def.uint32;
const LONG_PTR = _WIN64 ? Def.int64 : Def.int32;
_WIN64 ? Def.int64 : Def.int32;
Def.void;
Def.uint16;
Def.int16;
Def.int;
Def.bool;
Def.byte;
Def.ptr; // https://msdn.microsoft.com/en-us/library/windows/desktop/ms633573(v=vs.85).aspx
Def.uint8;
Def.uint8;
// export const CONST;
Def.uint64;
Def.uint32;
Def.uint64;
Def.float;
_WIN64 ? Def.int32 : Def.int16;
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
Def.uint16Ptr;
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
Def.uint16Ptr;
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
Def.uint;
Def.uint64;
Def.uint32;
Def.uint64;
Def.ushort;
// export const WINAPI;
Def.ptr;
Def.ptr;
Def.ptr;
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

const RID_DEVICE_INFO_DUMMYUNIONNAME = {
    mouse: DWORD,
    keyboard: DWORD,
    hid: DWORD,
};

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
UnionDi(ref);
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
({
    cbSize: DWORD,
    cItems: INT,
    cColumns: INT,
    cRows: INT,
    iColFocus: INT,
    iRowFocus: INT,
    cxItem: INT,
    cyItem: INT,
    ptStart: StructType(POINT),
});
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-msg */
({
    hwnd: HWND,
    message: UINT,
    wParam: WPARAM,
    lParam: LPARAM,
    time: DWORD,
    pt: StructType(POINT),
    lPrivate: DWORD,
});

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

exports.DEVMODEW_DUMMYUNIONNAME = DEVMODEW_DUMMYUNIONNAME;
exports.DEVMODEW_DUMMYUNIONNAME2 = DEVMODEW_DUMMYUNIONNAME2;
exports.RID_DEVICE_INFO_DUMMYUNIONNAME = RID_DEVICE_INFO_DUMMYUNIONNAME;
//# sourceMappingURL=index.union.cjs.map
