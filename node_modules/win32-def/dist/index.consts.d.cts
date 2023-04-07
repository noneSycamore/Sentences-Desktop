/**
 * Specifies the clockwise rotation of the display.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ne-wingdi-displayconfig_rotation
 */
declare const enum DISPLAYCONFIG_ROTATION {
    DISPLAYCONFIG_ROTATION_IDENTITY = 1,
    DISPLAYCONFIG_ROTATION_ROTATE90 = 2,
    DISPLAYCONFIG_ROTATION_ROTATE180 = 3,
    DISPLAYCONFIG_ROTATION_ROTATE270 = 4,
    DISPLAYCONFIG_ROTATION_FORCE_UINT32 = 4294967295
}
/**
 * Specifies the scaling transformation applied to content displayed
 * on a video present network (VidPN) present path.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ne-wingdi-displayconfig_scaling
 */
declare const enum DISPLAYCONFIG_SCALING {
    DISPLAYCONFIG_SCALING_IDENTITY = 1,
    DISPLAYCONFIG_SCALING_CENTERED = 2,
    DISPLAYCONFIG_SCALING_STRETCHED = 3,
    DISPLAYCONFIG_SCALING_ASPECTRATIOCENTEREDMAX = 4,
    DISPLAYCONFIG_SCALING_CUSTOM = 5,
    DISPLAYCONFIG_SCALING_PREFERRED = 128,
    DISPLAYCONFIG_SCALING_FORCE_UINT32 = 4294967295
}
/**
 * Specifies the method that the display uses to create an image on a screen.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ne-wingdi-displayconfig_scanline_ordering
 */
declare const enum DISPLAYCONFIG_SCANLINE_ORDERING {
    DISPLAYCONFIG_SCANLINE_ORDERING_UNSPECIFIED = 0,
    DISPLAYCONFIG_SCANLINE_ORDERING_PROGRESSIVE = 1,
    DISPLAYCONFIG_SCANLINE_ORDERING_INTERLACED = 2,
    DISPLAYCONFIG_SCANLINE_ORDERING_INTERLACED_UPPERFIELDFIRST = 3,
    DISPLAYCONFIG_SCANLINE_ORDERING_INTERLACED_LOWERFIELDFIRST = 3,
    DISPLAYCONFIG_SCANLINE_ORDERING_FORCE_UINT32 = 4294967295
}

declare enum PrinterEnumFlags {
    PRINTER_ENUM_DEFAULT = 1,
    PRINTER_ENUM_LOCAL = 2,
    PRINTER_ENUM_CONNECTIONS = 4,
    PRINTER_ENUM_FAVORITE = 4,
    PRINTER_ENUM_NAME = 8,
    PRINTER_ENUM_REMOTE = 16,
    PRINTER_ENUM_SHARED = 32,
    PRINTER_ENUM_NETWORK = 64,
    PRINTER_ENUM_EXPAND = 16384,
    PRINTER_ENUM_CONTAINER = 32768,
    PRINTER_ENUM_ICONMASK = 16711680,
    PRINTER_ENUM_ICON1 = 65536,
    PRINTER_ENUM_ICON2 = 131072,
    PRINTER_ENUM_ICON3 = 262144,
    PRINTER_ENUM_ICON4 = 524288,
    PRINTER_ENUM_ICON5 = 1048576,
    PRINTER_ENUM_ICON6 = 2097152,
    PRINTER_ENUM_ICON7 = 4194304,
    PRINTER_ENUM_ICON8 = 8388608,
    PRINTER_ENUM_HIDE = 16777216,
    PRINTER_ENUM_CATEGORY_ALL = 33554432,
    PRINTER_ENUM_CATEGORY_3D = 67108864
}

/**
 * Flash both the window caption and taskbar button.This is equivalent to setting the FLASHW_CAPTION | FLASHW_TRAY flags.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
declare const FLASHW_ALL = 3;
/**
 * Flash the window caption.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
declare const FLASHW_CAPTION = 1;
/**
 * Stop flashing. The system restores the window to its original state.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
declare const FLASHW_STOP = 0;
/**
 * Flash continuously, until the FLASHW_STOP flag is set.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
declare const FLASHW_TIMER = 4;
/**
 * Flash continuously until the window comes to the foreground.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
declare const FLASHW_TIMERNOFG = 12;
/**
 * Flash the taskbar button.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
declare const FLASHW_TRAY = 2;

/**
 * Virtual-Key Codes
 *
 * @description The following table shows the symbolic constant names, hexadecimal values,
 * and mouse or keyboard equivalents for the virtual-key codes used by the system.
 * The codes are listed in numeric order.
 * @link https://docs.microsoft.com/zh-cn/windows/win32/inputdev/virtual-key-codes?redirectedfrom=MSDN
 * @link https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes?redirectedfrom=MSDN
 */
/** Left mouse button */
declare const VK_LBUTTON = 1;
/** Right mouse button */
declare const VK_RBUTTON = 2;
/** Control-break processing */
declare const VK_CANCEL = 3;
/** Middle mouse button(three - button mouse) */
declare const VK_MBUTTON = 4;
/** X1 mouse button */
declare const VK_XBUTTON1 = 5;
/** X2 mouse button */
declare const VK_XBUTTON2 = 6;
/** BACKSPACE key */
declare const VK_BACK = 8;
/** TAB key */
declare const VK_TAB = 9;
/** CLEAR key */
declare const VK_CLEAR = 12;
declare const VK_RETURN = 13;
declare const VK_SHIFT = 16;
declare const VK_CONTROL = 17;
/** ALT key */
declare const VK_MENU = 18;
declare const VK_PAUSE = 19;
/** CAPS LOCK key */
declare const VK_CAPITAL = 20;
/** IME Kana mode */
declare const VK_KANA = 21;
/** IME Hanguel mode(maintained for compatibility; use VK_HANGUL)  */
declare const VK_HANGUEL = 21;
/** IME Hangul mode */
declare const VK_HANGUL = 21;
/** IME On */
declare const VK_IME_ON = 22;
declare const VK_JUNJA = 23;
declare const VK_FINAL = 24;
declare const VK_HANJA = 25;
declare const VK_KANJI = 25;
/** IME Off */
declare const VK_IME_OFF = 26;
/** ESC key */
declare const VK_ESCAPE = 27;
/** IME convert */
declare const VK_CONVERT = 28;
/** IME nonconvert */
declare const VK_NONCONVERT = 29;
/** IME accept */
declare const VK_ACCEPT = 30;
/** IME mode change request */
declare const VK_MODECHANGE = 31;
/** SPACEBAR */
declare const VK_SPACE = 32;
/** PAGE UP key */
declare const VK_PRIOR = 33;
/** PAGE DOWN key */
declare const VK_NEXT = 34;
/** END key */
declare const VK_END = 35;
/** HOME key */
declare const VK_HOME = 36;
/** LEFT ARROW key */
declare const VK_LEFT = 37;
/** UP ARROW key */
declare const VK_UP = 38;
/** RIGHT ARROW key */
declare const VK_RIGHT = 39;
/** DOWN ARROW key */
declare const VK_DOWN = 40;
/** SELECT key */
declare const VK_SELECT = 41;
/** PRINT key */
declare const VK_PRINT = 42;
/** EXECUTE key */
declare const VK_EXECUTE = 43;
/** PRINT SCREEN key */
declare const VK_SNAPSHOT = 44;
/** INS key */
declare const VK_INSERT = 45;
/** DEL key */
declare const VK_DELETE = 46;
/** HELP key */
declare const VK_HELP = 47;
/** Left Windows key(Natural keyboard) */
declare const VK_LWIN = 91;
/** Right Windows key(Natural keyboard) */
declare const VK_RWIN = 92;
/** Applications key(Natural keyboard) */
declare const VK_APPS = 93;
/** Computer Sleep key */
declare const VK_SLEEP = 95;
/** Numeric keypad 0 key */
declare const VK_NUMPAD0 = 96;
/** Numeric keypad 1 key */
declare const VK_NUMPAD1 = 97;
/** Numeric keypad 2 key */
declare const VK_NUMPAD2 = 98;
/** Numeric keypad 3 key */
declare const VK_NUMPAD3 = 99;
/** Numeric keypad 4 key */
declare const VK_NUMPAD4 = 100;
/** Numeric keypad 5 key */
declare const VK_NUMPAD5 = 101;
/** Numeric keypad 6 key */
declare const VK_NUMPAD6 = 102;
/** Numeric keypad 7 key */
declare const VK_NUMPAD7 = 103;
/** Numeric keypad 8 key */
declare const VK_NUMPAD8 = 104;
/** Numeric keypad 9 key */
declare const VK_NUMPAD9 = 105;
/** Multiply key */
declare const VK_MULTIPLY = 106;
/** Add key */
declare const VK_ADD = 107;
/** Separator key */
declare const VK_SEPARATOR = 108;
/** Subtract key */
declare const VK_SUBTRACT = 109;
/** Decimal key */
declare const VK_DECIMAL = 110;
/** Divide key */
declare const VK_DIVIDE = 111;
/** F1 key */
declare const VK_F1 = 112;
declare const VK_F2 = 113;
declare const VK_F3 = 114;
declare const VK_F4 = 115;
declare const VK_F5 = 116;
declare const VK_F6 = 117;
declare const VK_F7 = 118;
declare const VK_F8 = 119;
declare const VK_F9 = 120;
declare const VK_F10 = 121;
declare const VK_F11 = 122;
declare const VK_F12 = 123;
declare const VK_F13 = 124;
declare const VK_F14 = 125;
declare const VK_F15 = 126;
declare const VK_F16 = 127;
declare const VK_F17 = 128;
declare const VK_F18 = 129;
declare const VK_F19 = 130;
declare const VK_F20 = 131;
declare const VK_F21 = 132;
declare const VK_F22 = 133;
declare const VK_F23 = 134;
declare const VK_F24 = 135;
/** NUM LOCK key */
declare const VK_NUMLOCK = 144;
/** SCROLL LOCK key */
declare const VK_SCROLL = 145;
/** Left SHIFT key */
declare const VK_LSHIFT = 160;
/** Right SHIFT key */
declare const VK_RSHIFT = 161;
/** Left CONTROL key */
declare const VK_LCONTROL = 162;
/** Right CONTROL key */
declare const VK_RCONTROL = 163;
/** Left ALT key */
declare const VK_LMENU = 164;
/** Right ALT key */
declare const VK_RMENU = 165;
/** Browser Back key */
declare const VK_BROWSER_BACK = 166;
/** Browser Forward key */
declare const VK_BROWSER_FORWARD = 167;
/** Browser Refresh key */
declare const VK_BROWSER_REFRESH = 168;
/** Browser Stop key */
declare const VK_BROWSER_STOP = 169;
/** Browser Search key */
declare const VK_BROWSER_SEARCH = 170;
/** Browser Favorites key */
declare const VK_BROWSER_FAVORITES = 171;
/** Browser Start and Home key */
declare const VK_BROWSER_HOME = 172;
/** Volume Mute key */
declare const VK_VOLUME_MUTE = 173;
/** Volume Down key */
declare const VK_VOLUME_DOWN = 174;
/** Volume Up key */
declare const VK_VOLUME_UP = 175;
/** Next Track key */
declare const VK_MEDIA_NEXT_TRACK = 176;
/** Previous Track key */
declare const VK_MEDIA_PREV_TRACK = 177;
/** Stop Media key  */
declare const VK_MEDIA_STOP = 178;
/** Play / Pause Media key */
declare const VK_MEDIA_PLAY_PAUSE = 179;
/** Start Mail key */
declare const VK_LAUNCH_MAIL = 180;
/** Select Media key */
declare const VK_LAUNCH_MEDIA_SELECT = 181;
/** Start Application 1 key */
declare const VK_LAUNCH_APP1 = 182;
/** Start Application 2 key */
declare const VK_LAUNCH_APP2 = 183;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the ';:' key  */
declare const VK_OEM_1 = 186;
/** For any country / region, the '+' key */
declare const VK_OEM_PLUS = 187;
/** For any country / region, the ',' key */
declare const VK_OEM_COMMA = 188;
/** For any country / region, the '-' key */
declare const VK_OEM_MINUS = 189;
/** For any country / region, the '.' key */
declare const VK_OEM_PERIOD = 190;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '/?' key */
declare const VK_OEM_2 = 191;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '`~' key  */
declare const VK_OEM_3 = 192;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '[{' key */
declare const VK_OEM_4 = 219;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '\|' key */
declare const VK_OEM_5 = 220;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the ']}' key */
declare const VK_OEM_6 = 221;
/**
 * Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard,
 * the 'single-quote/double-quote' key
 */
declare const VK_OEM_7 = 222;
/** Used for miscellaneous characters; it can vary by keyboard. */
declare const VK_OEM_8 = 223;
/** The <> keys on the US standard keyboard, or the \\| key on the non - US 102 - key keyboard  */
declare const VK_OEM_102 = 226;
/** IME PROCESS key */
declare const VK_PROCESSKEY = 229;
/**
 * Used to pass Unicode characters as if they were keystrokes.
 * The VK_PACKET key is the low word of a 32 - bit Virtual Key value used for non - keyboard input methods.
 * For more information, see Remark in KEYBDINPUT, SendInput, WM_KEYDOWN, and WM_KEYUP
 */
declare const VK_PACKET = 231;
/** Attn key */
declare const VK_ATTN = 246;
/** CrSel key */
declare const VK_CRSEL = 247;
/** ExSel key */
declare const VK_EXSEL = 248;
/** Erase EOF key */
declare const VK_EREOF = 249;
/** Play key */
declare const VK_PLAY = 250;
/** Zoom key */
declare const VK_ZOOM = 251;
/** Reserved */
declare const VK_NONAME = 252;
/** PA1 key */
declare const VK_PA1 = 253;
/** Clear key */
declare const VK_OEM_CLEAR = 254;

export { DISPLAYCONFIG_ROTATION, DISPLAYCONFIG_SCALING, DISPLAYCONFIG_SCANLINE_ORDERING, FLASHW_ALL, FLASHW_CAPTION, FLASHW_STOP, FLASHW_TIMER, FLASHW_TIMERNOFG, FLASHW_TRAY, PrinterEnumFlags, VK_ACCEPT, VK_ADD, VK_APPS, VK_ATTN, VK_BACK, VK_BROWSER_BACK, VK_BROWSER_FAVORITES, VK_BROWSER_FORWARD, VK_BROWSER_HOME, VK_BROWSER_REFRESH, VK_BROWSER_SEARCH, VK_BROWSER_STOP, VK_CANCEL, VK_CAPITAL, VK_CLEAR, VK_CONTROL, VK_CONVERT, VK_CRSEL, VK_DECIMAL, VK_DELETE, VK_DIVIDE, VK_DOWN, VK_END, VK_EREOF, VK_ESCAPE, VK_EXECUTE, VK_EXSEL, VK_F1, VK_F10, VK_F11, VK_F12, VK_F13, VK_F14, VK_F15, VK_F16, VK_F17, VK_F18, VK_F19, VK_F2, VK_F20, VK_F21, VK_F22, VK_F23, VK_F24, VK_F3, VK_F4, VK_F5, VK_F6, VK_F7, VK_F8, VK_F9, VK_FINAL, VK_HANGUEL, VK_HANGUL, VK_HANJA, VK_HELP, VK_HOME, VK_IME_OFF, VK_IME_ON, VK_INSERT, VK_JUNJA, VK_KANA, VK_KANJI, VK_LAUNCH_APP1, VK_LAUNCH_APP2, VK_LAUNCH_MAIL, VK_LAUNCH_MEDIA_SELECT, VK_LBUTTON, VK_LCONTROL, VK_LEFT, VK_LMENU, VK_LSHIFT, VK_LWIN, VK_MBUTTON, VK_MEDIA_NEXT_TRACK, VK_MEDIA_PLAY_PAUSE, VK_MEDIA_PREV_TRACK, VK_MEDIA_STOP, VK_MENU, VK_MODECHANGE, VK_MULTIPLY, VK_NEXT, VK_NONAME, VK_NONCONVERT, VK_NUMLOCK, VK_NUMPAD0, VK_NUMPAD1, VK_NUMPAD2, VK_NUMPAD3, VK_NUMPAD4, VK_NUMPAD5, VK_NUMPAD6, VK_NUMPAD7, VK_NUMPAD8, VK_NUMPAD9, VK_OEM_1, VK_OEM_102, VK_OEM_2, VK_OEM_3, VK_OEM_4, VK_OEM_5, VK_OEM_6, VK_OEM_7, VK_OEM_8, VK_OEM_CLEAR, VK_OEM_COMMA, VK_OEM_MINUS, VK_OEM_PERIOD, VK_OEM_PLUS, VK_PA1, VK_PACKET, VK_PAUSE, VK_PLAY, VK_PRINT, VK_PRIOR, VK_PROCESSKEY, VK_RBUTTON, VK_RCONTROL, VK_RETURN, VK_RIGHT, VK_RMENU, VK_RSHIFT, VK_RWIN, VK_SCROLL, VK_SELECT, VK_SEPARATOR, VK_SHIFT, VK_SLEEP, VK_SNAPSHOT, VK_SPACE, VK_SUBTRACT, VK_TAB, VK_UP, VK_VOLUME_DOWN, VK_VOLUME_MUTE, VK_VOLUME_UP, VK_XBUTTON1, VK_XBUTTON2, VK_ZOOM };
