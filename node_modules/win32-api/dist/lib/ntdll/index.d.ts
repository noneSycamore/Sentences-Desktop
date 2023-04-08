import { ExpandFnModel, FnName, LoadSettings } from 'win32-def';
import { DllNames } from '../types.js';
import { apiDef, Win32Fns } from './api.js';
export { apiDef };
export { Win32Fns };
export declare const dllName = DllNames.ntdll;
/**
 * @deprecated use promise instead
 * ```ts
 * import { Ntdll } from 'win32-api/promise'
 * const ntdll = Ntdll.load()
 * const ntStatus = await ntdll.NtQueryInformationProcess(...)
 * ```
 */
export declare const load: (fns?: FnName[], settings?: LoadSettings) => ExpandFnModel<Win32Fns>;
//# sourceMappingURL=index.d.ts.map