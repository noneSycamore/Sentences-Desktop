import { load as hload } from '../helper.js';
import { apiDef } from './api.js';
// for user32.constants
import * as constants from './constants.js';
export { apiDef };
export { constants };
export const dllName = "user32" /* DllNames.user32 */;
/**
 * @deprecated use promise instead
 * ```ts
 * import { User32 } from 'win32-api/promise'
 * const user32 = User32.load()
 * const hWnd = await user32.FindWindowExW(...)
 * ```
 */
export const load = (fns, settings) => hload(dllName, apiDef, fns, settings);
//# sourceMappingURL=index.js.map