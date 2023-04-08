import { loadAsync as hload } from '../helper.js';
import { apiDef } from './api.js';
export { apiDef };
export const dllName = "ntdll" /* DllNames.ntdll */;
export const load = (fns, settings) => hload(dllName, apiDef, fns, settings);
//# sourceMappingURL=index.promise.js.map