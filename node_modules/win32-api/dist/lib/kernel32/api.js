import * as W from 'win32-def/common.def';
export const apiDef = {
    FormatMessageW: [
        W.DWORD,
        [W.DWORD, W.LPCVOID, W.DWORD, W.DWORD, W.LPTSTR, W.DWORD, W.va_list],
    ],
    FreeConsole: [W.BOOL, []],
    GenerateConsoleCtrlEvent: [W.BOOL, [W.DWORD, W.DWORD]],
    /** err code: https://msdn.microsoft.com/zh-cn/library/windows/desktop/ms681381(v=vs.85).aspx */
    GetLastError: [W.DWORD, []],
    /** retrive value from buf by ret.ref().readUInt32() */
    GetModuleHandleW: [W.HMODULE, [W.LPCTSTR]],
    /** flags, optional LPCTSTR name, ref hModule */
    GetModuleHandleExW: [W.BOOL, [W.DWORD, W.LPCTSTR, W.HMODULE]],
    GetProcessHeaps: [W.DWORD, [W.DWORD, W.PHANDLE]],
    GetSystemTimes: [W.BOOL, [W.PFILETIME, W.PFILETIME, W.PFILETIME]],
    HeapFree: [W.BOOL, [W.HANDLE, W.DWORD, W.LPVOID]],
    OpenProcess: [W.HANDLE, [W.DWORD, W.BOOL, W.DWORD]],
    OutputDebugStringW: [W.VOID, [W.LPCTSTR]],
    SetLastError: [W.VOID, [W.DWORD]],
    SetThreadExecutionState: [W.INT, [W.INT]],
};
//# sourceMappingURL=api.js.map