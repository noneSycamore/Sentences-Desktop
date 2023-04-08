import { load as hload } from '../helper.js';
import { apiDef } from './api.js';
export { apiDef };
export const dllName = "comctl32" /* DllNames.comctl32 */;
/**
 * @deprecated use promise instead
 * ```ts
 * import { Comctl32 } from 'win32-api/promise'
 * const comctl32 = Comctl32 .load()
 * const ret = await comctl32.InitCommonControlsEx(...)
 * ```
 */
export const load = (fns, settings) => hload(dllName, apiDef, fns, settings);
//# sourceMappingURL=index.js.map