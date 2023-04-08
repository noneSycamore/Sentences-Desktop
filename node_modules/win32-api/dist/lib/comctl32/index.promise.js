import { loadAsync as hload } from '../helper.js';
import { apiDef } from './api.js';
export { apiDef };
export const dllName = "comctl32" /* DllNames.comctl32 */;
export const load = (fns, settings) => hload(dllName, apiDef, fns, settings);
//# sourceMappingURL=index.promise.js.map