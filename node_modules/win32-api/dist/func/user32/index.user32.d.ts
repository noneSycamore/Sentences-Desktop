import { M } from './helper.js';
/**
 * Retrieves a handle to the specified printer or print server or other types of handles in the print subsystem.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/openprinter
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/openprinter
 */
export declare function user32FindWindowEx(hwndParent: M.HWND, hwndChildAfter: M.HWND, lpszClass: string | null, lpszWindow: string | null): Promise<M.HWND>;
/**
 * @docs https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowtextw
 */
export declare function user32GetWindowText(hWnd: M.HWND, 
/** Not including the null character */
nMaxCount: M.INT): Promise<string>;
//# sourceMappingURL=index.user32.d.ts.map