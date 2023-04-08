import * as M from 'win32-def';
export interface Win32Fns {
    InitCommonControlsEx: (lpInitCtrls: M.LPINITCOMMONCONTROLSEX) => M.BOOL;
}
export declare const apiDef: M.DllFuncs<Win32Fns>;
//# sourceMappingURL=api.d.ts.map