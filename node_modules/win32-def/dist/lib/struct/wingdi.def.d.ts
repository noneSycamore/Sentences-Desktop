/** https://docs.microsoft.com/zh-cn/windows/win32/api/wingdi/ns-wingdi-display_devicew */
export declare const DISPLAY_DEVICEW: {
    cb: import("../def.enum.js").Def;
    DeviceName: import("../common.types.js").StringBuffer;
    DeviceString: import("../common.types.js").StringBuffer;
    StateFlags: import("../def.enum.js").Def;
    DeviceID: import("../common.types.js").StringBuffer;
    DeviceKey: import("../common.types.js").StringBuffer;
};
/**
 * Used for specifying characteristics of display and print devices in the Unicode (wide) character set.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ns-wingdi-devmodew
 */
export declare const DEVMODEW: {
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
    /**
     * For printers, specifies the name of the form to use; such as "Letter" or "Legal".
     * This must be a name that can be obtain by calling the Win32 EnumForms function
     * (described in the Microsoft Window SDK documentation).
     */
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
};
//# sourceMappingURL=wingdi.def.d.ts.map