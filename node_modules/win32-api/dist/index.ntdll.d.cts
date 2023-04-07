import * as M from 'win32-def';
import { FnName, LoadSettings } from 'win32-def';

interface Win32Fns {
    NtQueryInformationProcess: (ProcessHandle: M.HANDLE, ProcessInformationClass: number, ProcessInformation: M.PVOID, // _Out_
    ProcessInformationLength: M.ULONG, ReturnLength: M.PULONG | null) => M.NTSTATUS;
}
declare const apiDef: M.DllFuncs<Win32Fns>;

declare const dllName = DllNames.ntdll;
declare const load: (fns?: FnName[], settings?: LoadSettings) => M.PromiseFnModel<Win32Fns>;

export { Win32Fns, apiDef, dllName, load };
