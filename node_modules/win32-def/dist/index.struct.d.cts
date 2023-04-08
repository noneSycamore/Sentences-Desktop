import { BigIntStr } from '@waiting/shared-types';
import ref from 'ref-napi';

interface StringBuffer extends ref.Type<string> {
    size: number;
    encoding: BufferEncoding | void;
    set: (buffer: Buffer, offset: number, value: string | number[] | Buffer) => void;
}

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

type StructTypeConstructor<T = object> = new () => Record<keyof T, string | number | BigIntStr | Buffer>;

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
declare const POINT: {
    readonly x: Def.long;
    readonly y: Def.long;
};
/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/windef/ns-windef-pointl
 */
declare const POINTL: {
    readonly x: Def.long;
    readonly y: Def.long;
};
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-alttabinfo */
declare const ALTTABINFO: {
    readonly cbSize: Def.uint32;
    readonly cItems: Def.int;
    readonly cColumns: Def.int;
    readonly cRows: Def.int;
    readonly iColFocus: Def.int;
    readonly iRowFocus: Def.int;
    readonly cxItem: Def.int;
    readonly cyItem: Def.int;
    readonly ptStart: StructTypeConstructor<{
        readonly x: Def.long;
        readonly y: Def.long;
    }>;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-copydatastruct */
declare const COPYDATASTRUCT: {
    readonly dwData: Def.int32 | Def.int64;
    readonly cbData: Def.uint32;
    readonly lpData: Def.uint32Ptr | Def.uint64Ptr;
};
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-taghardwareinput */
declare const HARDWAREINPUT: {
    readonly uMsg: Def.uint32;
    readonly wParamL: Def.int16;
    readonly wParamH: Def.int16;
};
declare const INITCOMMONCONTROLSEX: {
    readonly dwSize: Def.uint32;
    readonly dwICC: Def.uint32;
};
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagkeybdinput */
declare const KEYBDINPUT: {
    readonly wVk: Def.int16;
    readonly wScan: Def.int16;
    readonly dwFlags: Def.uint32;
    readonly time: Def.uint32;
    readonly dwExtraInfo: Def.int32 | Def.int64;
};
/** https://docs.microsoft.com/en-us/windows/desktop/api/winuser/ns-winuser-tagmouseinput */
declare const MOUSEINPUT: {
    readonly dx: Def.long;
    readonly dy: Def.long;
    readonly mouseData: Def.uint32;
    readonly dwFlags: Def.uint32;
    readonly time: Def.uint32;
    readonly dwExtraInfo: Def.int32 | Def.int64;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-msg */
declare const MSG: {
    readonly hwnd: Def.uint32 | Def.uint64;
    readonly message: Def.uint;
    readonly wParam: Def.uint32 | Def.uint64;
    readonly lParam: Def.int32 | Def.int64;
    readonly time: Def.uint32;
    readonly pt: StructTypeConstructor<{
        readonly x: Def.long;
        readonly y: Def.long;
    }>;
    readonly lPrivate: Def.uint32;
};
declare const PROCESS_BASIC_INFORMATION: {
    readonly Reserved1: Def.uint32Ptr | Def.uint64Ptr;
    readonly PebBaseAddress: Def.uint32Ptr | Def.uint64Ptr;
    readonly Reserved2: Def.uint32Ptr | Def.uint64Ptr;
    readonly UniqueProcessId: Def.int32 | Def.int64;
    readonly InheritedFromUniqueProcessId: Def.uint32Ptr | Def.uint64Ptr;
};
declare const UNICODE_STRING: {
    readonly Length: Def.ushort;
    readonly MaximumLength: Def.ushort;
    readonly Buffer: Def.uint16Ptr;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawhid */
declare const RAWHID: {
    readonly dwSizeHid: Def.uint32;
    readonly dwCount: Def.uint32;
    /** bRawData[1] */
    readonly bRawData: Def.byte;
};
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rawinputdevicelist */
declare const RAWINPUTDEVICELIST: {
    readonly hDevice: Def.uint32 | Def.uint64;
    readonly dwType: Def.uint32;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawinputheader */
declare const RAWINPUTHEADER: {
    readonly dwType: Def.uint32;
    readonly dwSize: Def.uint32;
    readonly hDevice: Def.uint32 | Def.uint64;
    readonly wParam: Def.uint32 | Def.uint64;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-rawkeyboard */
declare const RAWKEYBOARD: {
    readonly MakeCode: Def.ushort;
    readonly Flags: Def.ushort;
    readonly Reserved: Def.ushort;
    readonly VKey: Def.ushort;
    readonly Message: Def.uint;
    readonly ExtraInformation: Def.uint;
};
/** https://msdn.microsoft.com/zh-cn/library/windows/desktop/ms633577(v=vs.85).aspx */
declare const WNDCLASSEX: {
    readonly cbSize: Def.uint;
    readonly style: Def.uint;
    readonly lpfnWndProc: Def.ptr;
    readonly cbClsExtra: Def.int;
    readonly cbWndExtra: Def.int;
    readonly hInstance: Def.uint32 | Def.uint64;
    readonly hIcon: Def.uint32 | Def.uint64;
    readonly hCursor: Def.uint32 | Def.uint64;
    readonly hbrBackground: Def.uint32 | Def.uint64;
    readonly lpszMenuName: Def.uint16Ptr;
    readonly lpszClassName: Def.uint16Ptr;
    readonly hIconSm: Def.uint32 | Def.uint64;
};
declare const RECT: {
    readonly left: Def.long;
    readonly top: Def.long;
    readonly right: Def.long;
    readonly bottom: Def.long;
};
declare const WINDOWINFO: {
    readonly cbSize: Def.uint32;
    readonly rcWindow: {
        readonly left: Def.long;
        readonly top: Def.long;
        readonly right: Def.long;
        readonly bottom: Def.long;
    };
    readonly rcClient: {
        readonly left: Def.long;
        readonly top: Def.long;
        readonly right: Def.long;
        readonly bottom: Def.long;
    };
    readonly dwStyle: Def.uint32;
    readonly dwExStyle: Def.uint32;
    readonly dwWindowStatus: Def.uint32;
    readonly cxWindowBorders: Def.uint;
    readonly cyWindowBorders: Def.uint;
    readonly atomWindowType: Def.uint16;
    readonly wCreatorVersion: Def.int16;
};
/** https://docs.microsoft.com/en-us/windows/win32/api/minwinbase/ns-minwinbase-filetime */
declare const FILETIME: {
    readonly dwLowDateTime: Def.uint32;
    readonly dwHighDateTime: Def.uint32;
};

/** https://docs.microsoft.com/zh-cn/windows/win32/api/wingdi/ns-wingdi-display_devicew */
declare const DISPLAY_DEVICEW: {
    cb: Def;
    DeviceName: StringBuffer;
    DeviceString: StringBuffer;
    StateFlags: Def;
    DeviceID: StringBuffer;
    DeviceKey: StringBuffer;
};
/**
 * Used for specifying characteristics of display and print devices in the Unicode (wide) character set.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-devmodew
 */
declare const DEVMODEW: {
    dmDeviceName: StringBuffer;
    dmSpecVersion: Def;
    dmDriverVersion: Def;
    dmSize: Def;
    dmDriverExtra: Def;
    dmFields: Def;
    DUMMYUNIONNAME: StructTypeConstructor<{
        DUMMYSTRUCTNAME: StructTypeConstructor<{
            dmOrientation: Def;
            dmPaperSize: Def;
            dmPaperLength: Def;
            dmPaperWidth: Def;
            dmScale: Def;
            dmCopies: Def;
            dmDefaultSource: Def;
            dmPrintQuality: Def;
        }>;
        dmPosition: StructTypeConstructor<{
            readonly x: Def.long;
            readonly y: Def.long;
        }>;
        DUMMYSTRUCTNAME2: StructTypeConstructor<{
            dmPosition: StructTypeConstructor<{
                readonly x: Def.long;
                readonly y: Def.long;
            }>;
            dmDisplayOrientation: Def;
            dmDisplayFixedOutput: Def;
        }>;
    }>;
    dmColor: Def;
    dmDuplex: Def;
    dmYResolution: Def;
    dmTTOption: Def;
    dmCollate: Def;
    /**
     * For printers, specifies the name of the form to use; such as "Letter" or "Legal".
     * This must be a name that can be obtain by calling the Win32 EnumForms function
     * (described in the Microsoft Window SDK documentation).
     */
    dmFormName: StringBuffer;
    dmLogPixels: Def;
    dmBitsPerPel: Def;
    dmPelsWidth: Def;
    dmPelsHeight: Def;
    DUMMYUNIONNAME2: StructTypeConstructor<{
        dmDisplayFlags: Def;
        dmNup: Def;
    }>;
    dmDisplayFrequency: Def;
    dmICMMethod: Def;
    dmICMIntent: Def;
    dmMediaType: Def;
    dmDitherType: Def;
    dmReserved1: Def;
    dmReserved2: Def;
    dmPanningWidth: Def;
    dmPanningHeight: Def;
};

/**
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/datatypes-info-1
 */
declare const DATATYPES_INFO_1: {
    readonly pName: Def.uint16Ptr;
};
/**
 * Describes a document that will be printed.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/doc-info-1
 */
declare const DOC_INFO_1: {
    readonly pDocName: Def.uint16Ptr;
    readonly pOutputFile: Def.uint16Ptr;
    readonly pDatatype: Def.uint16Ptr;
};
/**
 * Specifies the name of an installed print processor.
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printprocessor-info-1
 */
declare const PRINTPROCESSOR_INFO_1: {
    readonly pName: Def.uint16Ptr;
};
/**
 * Specifies the default data type, environment, initialization data, and access rights for a printer.
 * @link https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printer-defaults
 */
declare const PRINTER_DEFAULTS: {
    /**
     * Pointer to a null-terminated string that specifies the default data type for a printer.
     */
    readonly pDatatype: Def.uint16Ptr;
    /**
     * Pointer to a DEVMODE structure that identifies the default environment and initialization data for a printer.
     */
    readonly pDevMode: StructTypeConstructor<{
        dmDeviceName: StringBuffer;
        dmSpecVersion: Def;
        dmDriverVersion: Def;
        dmSize: Def;
        dmDriverExtra: Def;
        dmFields: Def;
        DUMMYUNIONNAME: StructTypeConstructor<{
            DUMMYSTRUCTNAME: StructTypeConstructor<{
                dmOrientation: Def;
                dmPaperSize: Def;
                dmPaperLength: Def;
                dmPaperWidth: Def;
                dmScale: Def;
                dmCopies: Def;
                dmDefaultSource: Def;
                dmPrintQuality: Def;
            }>;
            dmPosition: StructTypeConstructor<{
                readonly x: Def.long;
                readonly y: Def.long;
            }>;
            DUMMYSTRUCTNAME2: StructTypeConstructor<{
                dmPosition: StructTypeConstructor<{
                    readonly x: Def.long;
                    readonly y: Def.long;
                }>;
                dmDisplayOrientation: Def;
                dmDisplayFixedOutput: Def;
            }>;
        }>;
        dmColor: Def;
        dmDuplex: Def;
        dmYResolution: Def;
        dmTTOption: Def;
        dmCollate: Def;
        dmFormName: StringBuffer;
        dmLogPixels: Def;
        dmBitsPerPel: Def;
        dmPelsWidth: Def;
        dmPelsHeight: Def;
        DUMMYUNIONNAME2: StructTypeConstructor<{
            dmDisplayFlags: Def;
            dmNup: Def;
        }>;
        dmDisplayFrequency: Def;
        dmICMMethod: Def;
        dmICMIntent: Def;
        dmMediaType: Def;
        dmDitherType: Def;
        dmReserved1: Def;
        dmReserved2: Def;
        dmPanningWidth: Def;
        dmPanningHeight: Def;
    }>;
    readonly DesiredAccess: Def.int32;
};
/**
 * Specifies general printer information
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/printer-info-1
 */
declare const PRINTER_INFO_1: {
    readonly Flags: Def.uint32;
    readonly pDescription: Def.uint16Ptr;
    readonly pName: Def.uint16Ptr;
    readonly pComment: Def.uint16Ptr;
};
/**
 * Specifies general printer information
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/printer-info-4
 * @description The structure can be used to retrieve minimal printer information on a call to EnumPrinters.
 *  Such a call is a fast and easy way to retrieve the names and attributes of all locally installed printers
 *  on a system and all remote printer connections that a user has established.
 */
declare const PRINTER_INFO_4: {
    readonly pPrinterName: Def.uint16Ptr;
    readonly pServerName: Def.uint16Ptr;
    readonly Attributes: Def.uint32;
};

/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
declare const FLASHWINFO: {
    readonly cbSize: Def.uint;
    readonly hwnd: Def.uint32 | Def.uint64;
    readonly dwFlags: Def.uint32;
    readonly uCount: Def.uint;
    readonly dwTimeout: Def.uint32;
};
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rid_device_info */
declare const RID_DEVICE_INFO: {
    readonly cbSize: Def.uint32;
    readonly dwType: Def.uint32;
    readonly DUMMYUNIONNAME: StructTypeConstructor<{
        mouse: Def;
        keyboard: Def;
        hid: Def;
    }>;
};

export { ALTTABINFO, COPYDATASTRUCT, DATATYPES_INFO_1, DEVMODEW, DISPLAY_DEVICEW, DOC_INFO_1, FILETIME, FLASHWINFO, HARDWAREINPUT, INITCOMMONCONTROLSEX, KEYBDINPUT, MOUSEINPUT, MSG, POINT, POINTL, PRINTER_DEFAULTS, PRINTER_INFO_1, PRINTER_INFO_4, PRINTPROCESSOR_INFO_1, PROCESS_BASIC_INFORMATION, RAWHID, RAWINPUTDEVICELIST, RAWINPUTHEADER, RAWKEYBOARD, RECT, RID_DEVICE_INFO, UNICODE_STRING, WINDOWINFO, WNDCLASSEX };
