import * as M from 'win32-def';
import { FnName, LoadSettings } from 'win32-def';

interface Win32Fns {
    InitCommonControlsEx: (lpInitCtrls: M.LPINITCOMMONCONTROLSEX) => M.BOOL;
}
declare const apiDef: M.DllFuncs<Win32Fns>;

declare const dllName = DllNames.comctl32;
declare const load: (fns?: FnName[], settings?: LoadSettings) => M.PromiseFnModel<Win32Fns>;

export { Win32Fns, apiDef, dllName, load };
