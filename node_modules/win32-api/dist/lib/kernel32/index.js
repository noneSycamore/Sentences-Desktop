import { load as hload } from '../helper.js';
import { apiDef } from './api.js';
export { apiDef };
export const dllName = "kernel32" /* DllNames.kernel32 */;
/**
 * @deprecated use promise instead
 * ```ts
 * import { Kernel32 } from 'win32-api/promise'
 * const knl32 = Kernel32.load()
 * const times = await knl32.GetSystemTimes(...)
 * ```
 */
export const load = (fns, settings) => hload(dllName, apiDef, fns, settings);
//# sourceMappingURL=index.js.map