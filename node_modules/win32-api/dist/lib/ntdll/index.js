import { load as hload } from '../helper.js';
import { apiDef } from './api.js';
export { apiDef };
export const dllName = "ntdll" /* DllNames.ntdll */;
/**
 * @deprecated use promise instead
 * ```ts
 * import { Ntdll } from 'win32-api/promise'
 * const ntdll = Ntdll.load()
 * const ntStatus = await ntdll.NtQueryInformationProcess(...)
 * ```
 */
export const load = (fns, settings) => hload(dllName, apiDef, fns, settings);
//# sourceMappingURL=index.js.map