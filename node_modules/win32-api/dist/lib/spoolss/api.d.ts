import * as M from 'win32-def';
export interface Win32Fns {
    /**
     * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/enddocprinter
     */
    EndDocPrinter: (hPrinter: M.HANDLE) => M.BOOL;
    EndPagePrinter: (hPrinter: M.HANDLE) => M.BOOL;
    /**
     *
     * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/writeprinter
     */
    WritePrinter: (hPrinter: M.HANDLE, pBuf: M.LPVOID, cbBuf: M.DWORD, pcWritten: M.LPDWORD) => M.BOOL;
}
export declare const apiDef: M.DllFuncs<Win32Fns>;
//# sourceMappingURL=api.d.ts.map