import { FnName, LoadSettings } from 'win32-def';
import { DllNames } from '../types.js';
import { apiDef, Win32Fns } from './api.js';
import * as constants from './constants.js';
export { apiDef };
export { constants };
export { Win32Fns };
export declare const dllName = DllNames.user32;
export declare const load: (fns?: FnName[], settings?: LoadSettings) => import("win32-def").PromiseFnModel<Win32Fns>;
//# sourceMappingURL=index.promise.d.ts.map