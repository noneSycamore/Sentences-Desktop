import { loadAsync as hload } from '../helper.js';
import { apiDef } from './api.js';
// for user32.constants
import * as constants from './constants.js';
export { apiDef };
export { constants };
export const dllName = "user32" /* DllNames.user32 */;
export const load = (fns, settings) => hload(dllName, apiDef, fns, settings);
//# sourceMappingURL=index.promise.js.map