/**
 * Flash both the window caption and taskbar button.This is equivalent to setting the FLASHW_CAPTION | FLASHW_TRAY flags.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
export declare const FLASHW_ALL = 3;
/**
 * Flash the window caption.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
export declare const FLASHW_CAPTION = 1;
/**
 * Stop flashing. The system restores the window to its original state.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
export declare const FLASHW_STOP = 0;
/**
 * Flash continuously, until the FLASHW_STOP flag is set.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
export declare const FLASHW_TIMER = 4;
/**
 * Flash continuously until the window comes to the foreground.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
export declare const FLASHW_TIMERNOFG = 12;
/**
 * Flash the taskbar button.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
export declare const FLASHW_TRAY = 2;
//# sourceMappingURL=winuser.const.d.ts.map