import { M } from './helper.js';
import { EnumPrintersOptions } from './winspool.types.js';
export declare function winspoolClosePrinter(hPrinter: M.HANDLE): Promise<boolean>;
/**
 * Enumerates available printers, print servers, domains, or print providers.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/enumprinters
 */
export declare function winspoolEnumPrinters<Level extends M.EnumPrinters_Level>(options: EnumPrintersOptions<Level>): Promise<M.PRINTER_INFO_X[Level][]>;
/**
 * Enumerates the print processors installed on the specified server.
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/enumprintprocessors
 */
export declare function winspoolEnumPrintProcessors(pName?: string, pEnvironment?: string): Promise<M.PRINTPROCESSOR_INFO_1[]>;
export declare function winspoolEnumPrintProcessorDatatypes(pName?: string, pPrintProcessorName?: string): Promise<M.DATATYPES_INFO_1[]>;
/**
 * Retrieves the printer name of the default printer for the current user on the local computer.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/getdefaultprinter
 */
export declare function winspoolGetDefaultPrinter(maxNameLength?: number): Promise<string>;
/**
 * Retrieves a handle to the specified printer or print server or other types of handles in the print subsystem.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/openprinter
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/openprinter
 */
export declare function winspoolOpenPrinter(printerName: string): Promise<M.HANDLE>;
/**
 * Retrieves information about a specified printer.
 * @docs https://docs.microsoft.com/en-us/windows/win32/printdocs/getprinter
 * @docs https://docs.microsoft.com/zh-cn/windows/win32/printdocs/getprinter
 */
export declare function winspoolGetPrinter<Level extends M.PRINTER_INFO_LEVEL>(hPrinter: M.HANDLE, Level: Level, maxByteLength?: number): Promise<M.PRINTER_INFO_X[Level] | undefined>;
export declare function winspoolStartDocPrinter(hPrinter: M.HANDLE, pDocInfo: M.LPBYTE): Promise<M.DWORD>;
export declare function winspoolStartPagePrinter(hPrinter: M.HANDLE): Promise<M.DWORD>;
export declare function winspoolEndPagePrinter(hPrinter: M.HANDLE): Promise<M.DWORD>;
//# sourceMappingURL=index.winspool.d.ts.map