import assert from 'node:assert';
import { getMod } from '../func.helper.js';
import { dllName, } from './helper.js';
export async function spoolWritePrinter(hPrinter, pBuf, cbBuf) {
    const mod = getMod(dllName);
    assert(hPrinter);
    const pcWritten = Buffer.alloc(4);
    const ret = await mod.WritePrinter(hPrinter.toString(), pBuf, cbBuf, pcWritten);
    if (ret) {
        return pcWritten.readUint32LE();
    }
    return 0;
}
export async function spoolEndDocPrinter(hPrinter) {
    const mod = getMod(dllName);
    assert(hPrinter);
    const ret = await mod.EndDocPrinter(hPrinter.toString());
    return !!ret;
}
//# sourceMappingURL=index.spoolss.js.map