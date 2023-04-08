import * as M from 'win32-def';
export interface Win32Fns {
    NtQueryInformationProcess: (ProcessHandle: M.HANDLE, ProcessInformationClass: number, ProcessInformation: M.PVOID, // _Out_
    ProcessInformationLength: M.ULONG, ReturnLength: M.PULONG | null) => M.NTSTATUS;
}
export declare const apiDef: M.DllFuncs<Win32Fns>;
//# sourceMappingURL=api.d.ts.map