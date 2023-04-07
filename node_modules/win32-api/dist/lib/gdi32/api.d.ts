import * as M from 'win32-def';
export interface Win32Fns {
    /**
     * Creates a bitmap compatible with the device that is associated with the specified device context.
     * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/nf-wingdi-createcompatiblebitmap
     */
    CreateCompatibleBitmap: (hdc: M.HDC, cx: M.INT, cy: M.INT) => M.HBITMAP;
    /**
     * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/nf-wingdi-createcompatibledc
     */
    CreateCompatibleDC: (hdc: M.HDC) => M.HDC;
}
export declare const apiDef: M.DllFuncs<Win32Fns>;
//# sourceMappingURL=api.d.ts.map