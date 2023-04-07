import * as W from 'win32-def/common.def';
export const apiDef = {
    EndDocPrinter: [W.BOOL, [W.HANDLE]],
    EndPagePrinter: [W.BOOL, [W.HANDLE]],
    WritePrinter: [W.BOOL, [W.HANDLE, W.LPVOID, W.DWORD, W.LPDWORD]],
};
//# sourceMappingURL=api.js.map