import { M } from './helper.js';
export interface EnumPrintersOptions<Lvl extends M.EnumPrinters_Level> {
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
//# sourceMappingURL=spoolss.types.d.ts.map