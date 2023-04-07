import ref from 'ref-napi';
import { DllNames, DStruct as DS, DModel as M } from '../../index.js';
import { Winspool as DLL } from '../../index.promise.js';
export { M, DS, ref, };
export declare const dllName = DllNames.winspool;
export type Win32Fns = DLL.Win32Fns;
export declare function retriveStruct_PRINTER_INFO<L extends M.PRINTER_INFO_LEVEL>(pPrinter: Buffer, Level: L, maxCount?: number, pcbNeeded?: number): M.PRINTER_INFO_X[L][];
export declare function retriveStruct_PRINTPROCESSOR_INFO_1(pPrintProcessorInfo: Buffer, count: number, pcb: number): M.PRINTPROCESSOR_INFO_1[];
export declare function retriveStruct_DATATYPES_INFO_1(pPrintProcessorInfo: Buffer, count: number, pcb: number): M.DATATYPES_INFO_1[];
//# sourceMappingURL=helper.d.ts.map