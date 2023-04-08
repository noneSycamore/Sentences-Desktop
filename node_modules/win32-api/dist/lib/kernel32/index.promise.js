import { loadAsync as hload } from '../helper.js';
import { apiDef } from './api.js';
export { apiDef };
export const dllName = "kernel32" /* DllNames.kernel32 */;
export const load = (fns, settings) => hload(dllName, apiDef, fns, settings);
//# sourceMappingURL=index.promise.js.map