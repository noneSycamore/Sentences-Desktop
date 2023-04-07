import { ExpandFnModel, FnName, LoadSettings } from 'win32-def';
import { DllNames } from '../types.js';
import { apiDef, Win32Fns } from './api.js';
export { apiDef };
export { Win32Fns };
export declare const dllName = DllNames.comctl32;
/**
 * @deprecated use promise instead
 * ```ts
 * import { Comctl32 } from 'win32-api/promise'
 * const comctl32 = Comctl32 .load()
 * const ret = await comctl32.InitCommonControlsEx(...)
 * ```
 */
export declare const load: (fns?: FnName[], settings?: LoadSettings) => ExpandFnModel<Win32Fns>;
//# sourceMappingURL=index.d.ts.map