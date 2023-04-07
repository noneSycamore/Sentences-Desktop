import { ExpandFnModel, FnName, LoadSettings } from 'win32-def';
import { DllNames } from '../types.js';
import { apiDef, Win32Fns } from './api.js';
export { apiDef };
export { Win32Fns };
export declare const dllName = DllNames.kernel32;
/**
 * @deprecated use promise instead
 * ```ts
 * import { Kernel32 } from 'win32-api/promise'
 * const knl32 = Kernel32.load()
 * const times = await knl32.GetSystemTimes(...)
 * ```
 */
export declare const load: (fns?: FnName[], settings?: LoadSettings) => ExpandFnModel<Win32Fns>;
//# sourceMappingURL=index.d.ts.map