import * as M from 'win32-def';
import { FnName, LoadSettings } from 'win32-def';

interface Win32Fns {
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
declare const apiDef: M.DllFuncs<Win32Fns>;

declare const dllName = DllNames.winspool;
declare const load: (fns?: FnName[], settings?: LoadSettings) => M.PromiseFnModel<Win32Fns>;

export { Win32Fns, apiDef, dllName, load };
