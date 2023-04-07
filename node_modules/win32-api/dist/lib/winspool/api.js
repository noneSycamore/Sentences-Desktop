import * as W from 'win32-def/common.def';
export const apiDef = {
    ClosePrinter: [W.BOOL, [W.HANDLE]],
    EndDocPrinter: [W.BOOL, [W.HANDLE]],
    EndPagePrinter: [W.BOOL, [W.HANDLE]],
    EnumPrintersW: [W.BOOL, [W.DWORD, W.LPTSTR, W.DWORD, W.LPBYTE, W.DWORD, W.LPDWORD, W.LPDWORD]],
    EnumPrintProcessorsW: [W.BOOL, [W.LPTSTR, W.LPTSTR, W.DWORD, W.LPBYTE, W.DWORD, W.LPDWORD, W.LPDWORD]],
    EnumPrintProcessorDatatypesW: [W.BOOL, [W.LPTSTR, W.LPTSTR, W.DWORD, W.LPBYTE, W.DWORD, W.LPDWORD, W.LPDWORD]],
    GetDefaultPrinterW: [W.BOOL, [W.LPTSTR, W.LPDWORD]],
    GetJobW: [W.BOOL, [W.HANDLE, W.DWORD, W.DWORD, W.LPBYTE, W.DWORD, W.LPDWORD]],
    GetPrinterW: [W.BOOL, [W.HANDLE, W.DWORD, W.LPBYTE, W.DWORD, W.LPDWORD]],
    OpenPrinterW: [W.BOOL, [W.LPTSTR, W.LPHANDLE, W.LPRINTER_DEFAULTS]],
    StartDocPrinterW: [W.DWORD, [W.HANDLE, W.DWORD, W.LPBYTE]],
    StartPagePrinter: [W.BOOL, [W.HANDLE]],
    WritePrinter: [W.BOOL, [W.HANDLE, W.LPVOID, W.DWORD, W.LPDWORD]],
};
//# sourceMappingURL=api.js.map