/**
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/datatypes-info-1
 */
export declare const DATATYPES_INFO_1: {
    readonly pName: import("../def.enum.js").Def.uint16Ptr;
};
/**
 * Describes a document that will be printed.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/doc-info-1
 */
export declare const DOC_INFO_1: {
    readonly pDocName: import("../def.enum.js").Def.uint16Ptr;
    readonly pOutputFile: import("../def.enum.js").Def.uint16Ptr;
    readonly pDatatype: import("../def.enum.js").Def.uint16Ptr;
};
/**
 * Specifies the name of an installed print processor.
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printprocessor-info-1
 */
export declare const PRINTPROCESSOR_INFO_1: {
    readonly pName: import("../def.enum.js").Def.uint16Ptr;
};
/**
 * Specifies the default data type, environment, initialization data, and access rights for a printer.
 * @link https://docs.microsoft.com/zh-cn/windows/win32/printdocs/printer-defaults
 */
export declare const PRINTER_DEFAULTS: {
    /**
     * Pointer to a null-terminated string that specifies the default data type for a printer.
     */
    readonly pDatatype: import("../def.enum.js").Def.uint16Ptr;
    /**
     * Pointer to a DEVMODE structure that identifies the default environment and initialization data for a printer.
     */
    readonly pDevMode: import("../ffi.types.js").StructTypeConstructor<{
        dmDeviceName: import("../common.types.js").StringBuffer;
        dmSpecVersion: import("../def.enum.js").Def;
        dmDriverVersion: import("../def.enum.js").Def;
        dmSize: import("../def.enum.js").Def;
        dmDriverExtra: import("../def.enum.js").Def;
        dmFields: import("../def.enum.js").Def;
        DUMMYUNIONNAME: import("../ffi.types.js").StructTypeConstructor<{
            DUMMYSTRUCTNAME: import("../ffi.types.js").StructTypeConstructor<{
                dmOrientation: import("../def.enum.js").Def;
                dmPaperSize: import("../def.enum.js").Def;
                dmPaperLength: import("../def.enum.js").Def;
                dmPaperWidth: import("../def.enum.js").Def;
                dmScale: import("../def.enum.js").Def;
                dmCopies: import("../def.enum.js").Def;
                dmDefaultSource: import("../def.enum.js").Def;
                dmPrintQuality: import("../def.enum.js").Def;
            }>;
            dmPosition: import("../ffi.types.js").StructTypeConstructor<{
                readonly x: import("../def.enum.js").Def.long;
                readonly y: import("../def.enum.js").Def.long;
            }>;
            DUMMYSTRUCTNAME2: import("../ffi.types.js").StructTypeConstructor<{
                dmPosition: import("../ffi.types.js").StructTypeConstructor<{
                    readonly x: import("../def.enum.js").Def.long;
                    readonly y: import("../def.enum.js").Def.long;
                }>;
                dmDisplayOrientation: import("../def.enum.js").Def;
                dmDisplayFixedOutput: import("../def.enum.js").Def;
            }>;
        }>;
        dmColor: import("../def.enum.js").Def;
        dmDuplex: import("../def.enum.js").Def;
        dmYResolution: import("../def.enum.js").Def;
        dmTTOption: import("../def.enum.js").Def;
        dmCollate: import("../def.enum.js").Def;
        dmFormName: import("../common.types.js").StringBuffer;
        dmLogPixels: import("../def.enum.js").Def;
        dmBitsPerPel: import("../def.enum.js").Def;
        dmPelsWidth: import("../def.enum.js").Def;
        dmPelsHeight: import("../def.enum.js").Def;
        DUMMYUNIONNAME2: import("../ffi.types.js").StructTypeConstructor<{
            dmDisplayFlags: import("../def.enum.js").Def;
            dmNup: import("../def.enum.js").Def;
        }>;
        dmDisplayFrequency: import("../def.enum.js").Def;
        dmICMMethod: import("../def.enum.js").Def;
        dmICMIntent: import("../def.enum.js").Def;
        dmMediaType: import("../def.enum.js").Def;
        dmDitherType: import("../def.enum.js").Def;
        dmReserved1: import("../def.enum.js").Def;
        dmReserved2: import("../def.enum.js").Def;
        dmPanningWidth: import("../def.enum.js").Def;
        dmPanningHeight: import("../def.enum.js").Def;
    }>;
    readonly DesiredAccess: import("../def.enum.js").Def.int32;
};
/**
 * Specifies general printer information
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/printer-info-1
 */
export declare const PRINTER_INFO_1: {
    readonly Flags: import("../def.enum.js").Def.uint32;
    readonly pDescription: import("../def.enum.js").Def.uint16Ptr;
    readonly pName: import("../def.enum.js").Def.uint16Ptr;
    readonly pComment: import("../def.enum.js").Def.uint16Ptr;
};
/**
 * Specifies general printer information
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/printer-info-4
 * @description The structure can be used to retrieve minimal printer information on a call to EnumPrinters.
 *  Such a call is a fast and easy way to retrieve the names and attributes of all locally installed printers
 *  on a system and all remote printer connections that a user has established.
 */
export declare const PRINTER_INFO_4: {
    readonly pPrinterName: import("../def.enum.js").Def.uint16Ptr;
    readonly pServerName: import("../def.enum.js").Def.uint16Ptr;
    readonly Attributes: import("../def.enum.js").Def.uint32;
};
//# sourceMappingURL=winspool.def.d.ts.map