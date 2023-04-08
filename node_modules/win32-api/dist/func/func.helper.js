import assert from 'node:assert';
import { Spoolss, User32, Winspool, } from '../index.promise.js';
const loaders = new Map();
const mods = new Map();
loaders.set("spoolss" /* DllNames.spoolss */, Spoolss.load);
loaders.set("user32" /* DllNames.user32 */, User32.load);
loaders.set("winspool.drv" /* DllNames.winspool */, Winspool.load);
export function getMod(name) {
    assert(name);
    const cache = mods.get(name);
    if (cache) {
        return cache;
    }
    const loader = loaders.get(name);
    if (!loader) {
        throw new TypeError(`Loader of "${name}" not found`);
    }
    const mod = loader();
    assert(mod);
    mods.set(name, mod);
    return mod;
}
//# sourceMappingURL=func.helper.js.map