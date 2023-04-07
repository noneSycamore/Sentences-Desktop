import * as M from 'win32-def';

/**
 * Retrieves a handle to the specified printer or print server or other types of handles in the print subsystem.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/openprinter
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/openprinter
 */
declare function user32FindWindowEx(hwndParent: M.HWND, hwndChildAfter: M.HWND, lpszClass: string | null, lpszWindow: string | null): Promise<M.HWND>;
/**
 * @docs https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowtextw
 */
declare function user32GetWindowText(hWnd: M.HWND, 
/** Not including the null character */
nMaxCount: M.INT): Promise<string>;

declare function spoolWritePrinter(hPrinter: M.HANDLE, pBuf: M.LPVOID, cbBuf: M.DWORD): Promise<M.DWORD>;
declare function spoolEndDocPrinter(hPrinter: M.HANDLE): Promise<boolean>;

interface EnumPrintersOptions<Lvl extends M.EnumPrinters_Level> {
    /**
     * PrinterEnumFlags
     * @see https://docs.microsoft.com/en-us/windows/win32/printdocs/printer-enum-flags
     */
    Flags: number;
    Name?: string;
    Level: Lvl;
    /**
     * @default 4096
     */
    cbBuf?: number;
}

declare function winspoolClosePrinter(hPrinter: M.HANDLE): Promise<boolean>;
/**
 * Enumerates available printers, print servers, domains, or print providers.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/enumprinters
 */
declare function winspoolEnumPrinters<Level extends M.EnumPrinters_Level>(options: EnumPrintersOptions<Level>): Promise<M.PRINTER_INFO_X[Level][]>;
/**
 * Enumerates the print processors installed on the specified server.
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/enumprintprocessors
 */
declare function winspoolEnumPrintProcessors(pName?: string, pEnvironment?: string): Promise<M.PRINTPROCESSOR_INFO_1[]>;
declare function winspoolEnumPrintProcessorDatatypes(pName?: string, pPrintProcessorName?: string): Promise<M.DATATYPES_INFO_1[]>;
/**
 * Retrieves the printer name of the default printer for the current user on the local computer.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/getdefaultprinter
 */
declare function winspoolGetDefaultPrinter(maxNameLength?: number): Promise<string>;
/**
 * Retrieves a handle to the specified printer or print server or other types of handles in the print subsystem.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/openprinter
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/openprinter
 */
declare function winspoolOpenPrinter(printerName: string): Promise<M.HANDLE>;
/**
 * Retrieves information about a specified printer.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/getprinter
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/getprinter
 */
declare function winspoolGetPrinter<Level extends M.PRINTER_INFO_LEVEL>(hPrinter: M.HANDLE, Level: Level, maxByteLength?: number): Promise<M.PRINTER_INFO_X[Level] | undefined>;
declare function winspoolStartDocPrinter(hPrinter: M.HANDLE, pDocInfo: M.LPBYTE): Promise<M.DWORD>;
declare function winspoolStartPagePrinter(hPrinter: M.HANDLE): Promise<M.DWORD>;
declare function winspoolEndPagePrinter(hPrinter: M.HANDLE): Promise<M.DWORD>;

export { EnumPrintersOptions, spoolEndDocPrinter, spoolWritePrinter, user32FindWindowEx, user32GetWindowText, winspoolClosePrinter, winspoolEndPagePrinter, winspoolEnumPrintProcessorDatatypes, winspoolEnumPrintProcessors, winspoolEnumPrinters, winspoolGetDefaultPrinter, winspoolGetPrinter, winspoolOpenPrinter, winspoolStartDocPrinter, winspoolStartPagePrinter };
