/**
 * Complex structure see:
 * https://github.com/waitingsong/node-win32-api/blob/master/packages/win32-api/src/data-struct-ext/
*/
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
export declare const POINT: {
    readonly x: import("../def.enum.js").Def.long;
    readonly y: import("../def.enum.js").Def.long;
};
/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/windef/ns-windef-pointl
 */
export declare const POINTL: {
    readonly x: import("../def.enum.js").Def.long;
    readonly y: import("../def.enum.js").Def.long;
};
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-alttabinfo */
export declare const ALTTABINFO: {
    readonly cbSize: import("../def.enum.js").Def.uint32;
    readonly cItems: import("../def.enum.js").Def.int;
    readonly cColumns: import("../def.enum.js").Def.int;
    readonly cRows: import("../def.enum.js").Def.int;
    readonly iColFocus: import("../def.enum.js").Def.int;
    readonly iRowFocus: import("../def.enum.js").Def.int;
    readonly cxItem: import("../def.enum.js").Def.int;
    readonly cyItem: import("../def.enum.js").Def.int;
    readonly ptStart: import("../ffi.types.js").StructTypeConstructor<{
        readonly x: import("../def.enum.js").Def.long;
        readonly y: import("../def.enum.js").Def.long;
    }>;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-copydatastruct */
export declare const COPYDATASTRUCT: {
    readonly dwData: import("../def.enum.js").Def.int32 | import("../def.enum.js").Def.int64;
    readonly cbData: import("../def.enum.js").Def.uint32;
    readonly lpData: import("../def.enum.js").Def.uint32Ptr | import("../def.enum.js").Def.uint64Ptr;
};
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-taghardwareinput */
export declare const HARDWAREINPUT: {
    readonly uMsg: import("../def.enum.js").Def.uint32;
    readonly wParamL: import("../def.enum.js").Def.int16;
    readonly wParamH: import("../def.enum.js").Def.int16;
};
export declare const INITCOMMONCONTROLSEX: {
    readonly dwSize: import("../def.enum.js").Def.uint32;
    readonly dwICC: import("../def.enum.js").Def.uint32;
};
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagkeybdinput */
export declare const KEYBDINPUT: {
    readonly wVk: import("../def.enum.js").Def.int16;
    readonly wScan: import("../def.enum.js").Def.int16;
    readonly dwFlags: import("../def.enum.js").Def.uint32;
    readonly time: import("../def.enum.js").Def.uint32;
    readonly dwExtraInfo: import("../def.enum.js").Def.int32 | import("../def.enum.js").Def.int64;
};
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagmouseinput */
export declare const MOUSEINPUT: {
    readonly dx: import("../def.enum.js").Def.long;
    readonly dy: import("../def.enum.js").Def.long;
    readonly mouseData: import("../def.enum.js").Def.uint32;
    readonly dwFlags: import("../def.enum.js").Def.uint32;
    readonly time: import("../def.enum.js").Def.uint32;
    readonly dwExtraInfo: import("../def.enum.js").Def.int32 | import("../def.enum.js").Def.int64;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-msg */
export declare const MSG: {
    readonly hwnd: import("../def.enum.js").Def.uint32 | import("../def.enum.js").Def.uint64;
    readonly message: import("../def.enum.js").Def.uint;
    readonly wParam: import("../def.enum.js").Def.uint32 | import("../def.enum.js").Def.uint64;
    readonly lParam: import("../def.enum.js").Def.int32 | import("../def.enum.js").Def.int64;
    readonly time: import("../def.enum.js").Def.uint32;
    readonly pt: import("../ffi.types.js").StructTypeConstructor<{
        readonly x: import("../def.enum.js").Def.long;
        readonly y: import("../def.enum.js").Def.long;
    }>;
    readonly lPrivate: import("../def.enum.js").Def.uint32;
};
export declare const PROCESS_BASIC_INFORMATION: {
    readonly Reserved1: import("../def.enum.js").Def.uint32Ptr | import("../def.enum.js").Def.uint64Ptr;
    readonly PebBaseAddress: import("../def.enum.js").Def.uint32Ptr | import("../def.enum.js").Def.uint64Ptr;
    readonly Reserved2: import("../def.enum.js").Def.uint32Ptr | import("../def.enum.js").Def.uint64Ptr;
    readonly UniqueProcessId: import("../def.enum.js").Def.int32 | import("../def.enum.js").Def.int64;
    readonly InheritedFromUniqueProcessId: import("../def.enum.js").Def.uint32Ptr | import("../def.enum.js").Def.uint64Ptr;
};
export declare const UNICODE_STRING: {
    readonly Length: import("../def.enum.js").Def.ushort;
    readonly MaximumLength: import("../def.enum.js").Def.ushort;
    readonly Buffer: import("../def.enum.js").Def.uint16Ptr;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawhid */
export declare const RAWHID: {
    readonly dwSizeHid: import("../def.enum.js").Def.uint32;
    readonly dwCount: import("../def.enum.js").Def.uint32;
    /** bRawData[1] */
    readonly bRawData: import("../def.enum.js").Def.byte;
};
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawinputdevicelist */
export declare const RAWINPUTDEVICELIST: {
    readonly hDevice: import("../def.enum.js").Def.uint32 | import("../def.enum.js").Def.uint64;
    readonly dwType: import("../def.enum.js").Def.uint32;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawinputheader */
export declare const RAWINPUTHEADER: {
    readonly dwType: import("../def.enum.js").Def.uint32;
    readonly dwSize: import("../def.enum.js").Def.uint32;
    readonly hDevice: import("../def.enum.js").Def.uint32 | import("../def.enum.js").Def.uint64;
    readonly wParam: import("../def.enum.js").Def.uint32 | import("../def.enum.js").Def.uint64;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawkeyboard */
export declare const RAWKEYBOARD: {
    readonly MakeCode: import("../def.enum.js").Def.ushort;
    readonly Flags: import("../def.enum.js").Def.ushort;
    readonly Reserved: import("../def.enum.js").Def.ushort;
    readonly VKey: import("../def.enum.js").Def.ushort;
    readonly Message: import("../def.enum.js").Def.uint;
    readonly ExtraInformation: import("../def.enum.js").Def.uint;
};
/** https://msdn.microsoft.com/zh-cn/library/windows/desktop/ms633577(v=vs.85).aspx */
export declare const WNDCLASSEX: {
    readonly cbSize: import("../def.enum.js").Def.uint;
    readonly style: import("../def.enum.js").Def.uint;
    readonly lpfnWndProc: import("../def.enum.js").Def.ptr;
    readonly cbClsExtra: import("../def.enum.js").Def.int;
    readonly cbWndExtra: import("../def.enum.js").Def.int;
    readonly hInstance: import("../def.enum.js").Def.uint32 | import("../def.enum.js").Def.uint64;
    readonly hIcon: import("../def.enum.js").Def.uint32 | import("../def.enum.js").Def.uint64;
    readonly hCursor: import("../def.enum.js").Def.uint32 | import("../def.enum.js").Def.uint64;
    readonly hbrBackground: import("../def.enum.js").Def.uint32 | import("../def.enum.js").Def.uint64;
    readonly lpszMenuName: import("../def.enum.js").Def.uint16Ptr;
    readonly lpszClassName: import("../def.enum.js").Def.uint16Ptr;
    readonly hIconSm: import("../def.enum.js").Def.uint32 | import("../def.enum.js").Def.uint64;
};
export declare const RECT: {
    readonly left: import("../def.enum.js").Def.long;
    readonly top: import("../def.enum.js").Def.long;
    readonly right: import("../def.enum.js").Def.long;
    readonly bottom: import("../def.enum.js").Def.long;
};
export declare const WINDOWINFO: {
    readonly cbSize: import("../def.enum.js").Def.uint32;
    readonly rcWindow: {
        readonly left: import("../def.enum.js").Def.long;
        readonly top: import("../def.enum.js").Def.long;
        readonly right: import("../def.enum.js").Def.long;
        readonly bottom: import("../def.enum.js").Def.long;
    };
    readonly rcClient: {
        readonly left: import("../def.enum.js").Def.long;
        readonly top: import("../def.enum.js").Def.long;
        readonly right: import("../def.enum.js").Def.long;
        readonly bottom: import("../def.enum.js").Def.long;
    };
    readonly dwStyle: import("../def.enum.js").Def.uint32;
    readonly dwExStyle: import("../def.enum.js").Def.uint32;
    readonly dwWindowStatus: import("../def.enum.js").Def.uint32;
    readonly cxWindowBorders: import("../def.enum.js").Def.uint;
    readonly cyWindowBorders: import("../def.enum.js").Def.uint;
    readonly atomWindowType: import("../def.enum.js").Def.uint16;
    readonly wCreatorVersion: import("../def.enum.js").Def.int16;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/minwinbase/ns-minwinbase-filetime */
export declare const FILETIME: {
    readonly dwLowDateTime: import("../def.enum.js").Def.uint32;
    readonly dwHighDateTime: import("../def.enum.js").Def.uint32;
};
//# sourceMappingURL=struct.def.d.ts.map