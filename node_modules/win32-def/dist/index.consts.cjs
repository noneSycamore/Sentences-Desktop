/**
 * win32-def
 * win32 definitions for node-ffi
 *
 * @version 20.4.0
 * @author waiting
 * @license MIT
 * @link https://waitingsong.github.io/node-win32-api
 */

'use strict';

/**
 * Specifies the clockwise rotation of the display.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ne-wingdi-displayconfig_rotation
 */
exports.DISPLAYCONFIG_ROTATION = void 0;
(function (DISPLAYCONFIG_ROTATION) {
    DISPLAYCONFIG_ROTATION[DISPLAYCONFIG_ROTATION["DISPLAYCONFIG_ROTATION_IDENTITY"] = 1] = "DISPLAYCONFIG_ROTATION_IDENTITY";
    DISPLAYCONFIG_ROTATION[DISPLAYCONFIG_ROTATION["DISPLAYCONFIG_ROTATION_ROTATE90"] = 2] = "DISPLAYCONFIG_ROTATION_ROTATE90";
    DISPLAYCONFIG_ROTATION[DISPLAYCONFIG_ROTATION["DISPLAYCONFIG_ROTATION_ROTATE180"] = 3] = "DISPLAYCONFIG_ROTATION_ROTATE180";
    DISPLAYCONFIG_ROTATION[DISPLAYCONFIG_ROTATION["DISPLAYCONFIG_ROTATION_ROTATE270"] = 4] = "DISPLAYCONFIG_ROTATION_ROTATE270";
    DISPLAYCONFIG_ROTATION[DISPLAYCONFIG_ROTATION["DISPLAYCONFIG_ROTATION_FORCE_UINT32"] = 4294967295] = "DISPLAYCONFIG_ROTATION_FORCE_UINT32";
})(exports.DISPLAYCONFIG_ROTATION = exports.DISPLAYCONFIG_ROTATION || (exports.DISPLAYCONFIG_ROTATION = {}));
/**
 * Specifies the scaling transformation applied to content displayed
 * on a video present network (VidPN) present path.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ne-wingdi-displayconfig_scaling
 */
exports.DISPLAYCONFIG_SCALING = void 0;
(function (DISPLAYCONFIG_SCALING) {
    DISPLAYCONFIG_SCALING[DISPLAYCONFIG_SCALING["DISPLAYCONFIG_SCALING_IDENTITY"] = 1] = "DISPLAYCONFIG_SCALING_IDENTITY";
    DISPLAYCONFIG_SCALING[DISPLAYCONFIG_SCALING["DISPLAYCONFIG_SCALING_CENTERED"] = 2] = "DISPLAYCONFIG_SCALING_CENTERED";
    DISPLAYCONFIG_SCALING[DISPLAYCONFIG_SCALING["DISPLAYCONFIG_SCALING_STRETCHED"] = 3] = "DISPLAYCONFIG_SCALING_STRETCHED";
    DISPLAYCONFIG_SCALING[DISPLAYCONFIG_SCALING["DISPLAYCONFIG_SCALING_ASPECTRATIOCENTEREDMAX"] = 4] = "DISPLAYCONFIG_SCALING_ASPECTRATIOCENTEREDMAX";
    DISPLAYCONFIG_SCALING[DISPLAYCONFIG_SCALING["DISPLAYCONFIG_SCALING_CUSTOM"] = 5] = "DISPLAYCONFIG_SCALING_CUSTOM";
    DISPLAYCONFIG_SCALING[DISPLAYCONFIG_SCALING["DISPLAYCONFIG_SCALING_PREFERRED"] = 128] = "DISPLAYCONFIG_SCALING_PREFERRED";
    DISPLAYCONFIG_SCALING[DISPLAYCONFIG_SCALING["DISPLAYCONFIG_SCALING_FORCE_UINT32"] = 4294967295] = "DISPLAYCONFIG_SCALING_FORCE_UINT32";
})(exports.DISPLAYCONFIG_SCALING = exports.DISPLAYCONFIG_SCALING || (exports.DISPLAYCONFIG_SCALING = {}));
/**
 * Specifies the method that the display uses to create an image on a screen.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/wingdi/ne-wingdi-displayconfig_scanline_ordering
 */
exports.DISPLAYCONFIG_SCANLINE_ORDERING = void 0;
(function (DISPLAYCONFIG_SCANLINE_ORDERING) {
    DISPLAYCONFIG_SCANLINE_ORDERING[DISPLAYCONFIG_SCANLINE_ORDERING["DISPLAYCONFIG_SCANLINE_ORDERING_UNSPECIFIED"] = 0] = "DISPLAYCONFIG_SCANLINE_ORDERING_UNSPECIFIED";
    DISPLAYCONFIG_SCANLINE_ORDERING[DISPLAYCONFIG_SCANLINE_ORDERING["DISPLAYCONFIG_SCANLINE_ORDERING_PROGRESSIVE"] = 1] = "DISPLAYCONFIG_SCANLINE_ORDERING_PROGRESSIVE";
    DISPLAYCONFIG_SCANLINE_ORDERING[DISPLAYCONFIG_SCANLINE_ORDERING["DISPLAYCONFIG_SCANLINE_ORDERING_INTERLACED"] = 2] = "DISPLAYCONFIG_SCANLINE_ORDERING_INTERLACED";
    DISPLAYCONFIG_SCANLINE_ORDERING[DISPLAYCONFIG_SCANLINE_ORDERING["DISPLAYCONFIG_SCANLINE_ORDERING_INTERLACED_UPPERFIELDFIRST"] = 3] = "DISPLAYCONFIG_SCANLINE_ORDERING_INTERLACED_UPPERFIELDFIRST";
    DISPLAYCONFIG_SCANLINE_ORDERING[DISPLAYCONFIG_SCANLINE_ORDERING["DISPLAYCONFIG_SCANLINE_ORDERING_INTERLACED_LOWERFIELDFIRST"] = 3] = "DISPLAYCONFIG_SCANLINE_ORDERING_INTERLACED_LOWERFIELDFIRST";
    DISPLAYCONFIG_SCANLINE_ORDERING[DISPLAYCONFIG_SCANLINE_ORDERING["DISPLAYCONFIG_SCANLINE_ORDERING_FORCE_UINT32"] = 4294967295] = "DISPLAYCONFIG_SCANLINE_ORDERING_FORCE_UINT32";
})(exports.DISPLAYCONFIG_SCANLINE_ORDERING = exports.DISPLAYCONFIG_SCANLINE_ORDERING || (exports.DISPLAYCONFIG_SCANLINE_ORDERING = {}));

exports.PrinterEnumFlags = void 0;
(function (PrinterEnumFlags) {
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_DEFAULT"] = 1] = "PRINTER_ENUM_DEFAULT";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_LOCAL"] = 2] = "PRINTER_ENUM_LOCAL";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_CONNECTIONS"] = 4] = "PRINTER_ENUM_CONNECTIONS";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_FAVORITE"] = 4] = "PRINTER_ENUM_FAVORITE";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_NAME"] = 8] = "PRINTER_ENUM_NAME";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_REMOTE"] = 16] = "PRINTER_ENUM_REMOTE";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_SHARED"] = 32] = "PRINTER_ENUM_SHARED";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_NETWORK"] = 64] = "PRINTER_ENUM_NETWORK";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_EXPAND"] = 16384] = "PRINTER_ENUM_EXPAND";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_CONTAINER"] = 32768] = "PRINTER_ENUM_CONTAINER";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_ICONMASK"] = 16711680] = "PRINTER_ENUM_ICONMASK";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_ICON1"] = 65536] = "PRINTER_ENUM_ICON1";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_ICON2"] = 131072] = "PRINTER_ENUM_ICON2";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_ICON3"] = 262144] = "PRINTER_ENUM_ICON3";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_ICON4"] = 524288] = "PRINTER_ENUM_ICON4";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_ICON5"] = 1048576] = "PRINTER_ENUM_ICON5";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_ICON6"] = 2097152] = "PRINTER_ENUM_ICON6";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_ICON7"] = 4194304] = "PRINTER_ENUM_ICON7";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_ICON8"] = 8388608] = "PRINTER_ENUM_ICON8";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_HIDE"] = 16777216] = "PRINTER_ENUM_HIDE";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_CATEGORY_ALL"] = 33554432] = "PRINTER_ENUM_CATEGORY_ALL";
    PrinterEnumFlags[PrinterEnumFlags["PRINTER_ENUM_CATEGORY_3D"] = 67108864] = "PRINTER_ENUM_CATEGORY_3D";
})(exports.PrinterEnumFlags = exports.PrinterEnumFlags || (exports.PrinterEnumFlags = {}));

/**
 * Flash both the window caption and taskbar button.This is equivalent to setting the FLASHW_CAPTION | FLASHW_TRAY flags.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
const FLASHW_ALL = 0x00000003;
/**
 * Flash the window caption.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
const FLASHW_CAPTION = 0x00000001;
/**
 * Stop flashing. The system restores the window to its original state.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
const FLASHW_STOP = 0;
/**
 * Flash continuously, until the FLASHW_STOP flag is set.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
const FLASHW_TIMER = 0x00000004;
/**
 * Flash continuously until the window comes to the foreground.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
const FLASHW_TIMERNOFG = 0x0000000C;
/**
 * Flash the taskbar button.
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
const FLASHW_TRAY = 0x00000002;

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
const VK_LBUTTON = 0x01;
/** Right mouse button */
const VK_RBUTTON = 0x02;
/** Control-break processing */
const VK_CANCEL = 0x03;
/** Middle mouse button(three - button mouse) */
const VK_MBUTTON = 0x04;
/** X1 mouse button */
const VK_XBUTTON1 = 0x05;
/** X2 mouse button */
const VK_XBUTTON2 = 0x06;
/** BACKSPACE key */
const VK_BACK = 0x08;
/** TAB key */
const VK_TAB = 0x09;
/** CLEAR key */
const VK_CLEAR = 0x0C;
const VK_RETURN = 0x0D;
const VK_SHIFT = 0x10;
const VK_CONTROL = 0x11;
/** ALT key */
const VK_MENU = 0x12;
const VK_PAUSE = 0x13;
/** CAPS LOCK key */
const VK_CAPITAL = 0x14;
/** IME Kana mode */
const VK_KANA = 0x15;
/** IME Hanguel mode(maintained for compatibility; use VK_HANGUL)  */
const VK_HANGUEL = 0x15;
/** IME Hangul mode */
const VK_HANGUL = 0x15;
/** IME On */
const VK_IME_ON = 0x16;
const VK_JUNJA = 0x17;
const VK_FINAL = 0x18;
const VK_HANJA = 0x19;
const VK_KANJI = 0x19;
/** IME Off */
const VK_IME_OFF = 0x1A;
/** ESC key */
const VK_ESCAPE = 0x1B;
/** IME convert */
const VK_CONVERT = 0x1C;
/** IME nonconvert */
const VK_NONCONVERT = 0x1D;
/** IME accept */
const VK_ACCEPT = 0x1E;
/** IME mode change request */
const VK_MODECHANGE = 0x1F;
/** SPACEBAR */
const VK_SPACE = 0x20;
/** PAGE UP key */
const VK_PRIOR = 0x21;
/** PAGE DOWN key */
const VK_NEXT = 0x22;
/** END key */
const VK_END = 0x23;
/** HOME key */
const VK_HOME = 0x24;
/** LEFT ARROW key */
const VK_LEFT = 0x25;
/** UP ARROW key */
const VK_UP = 0x26;
/** RIGHT ARROW key */
const VK_RIGHT = 0x27;
/** DOWN ARROW key */
const VK_DOWN = 0x28;
/** SELECT key */
const VK_SELECT = 0x29;
/** PRINT key */
const VK_PRINT = 0x2A;
/** EXECUTE key */
const VK_EXECUTE = 0x2B;
/** PRINT SCREEN key */
const VK_SNAPSHOT = 0x2C;
/** INS key */
const VK_INSERT = 0x2D;
/** DEL key */
const VK_DELETE = 0x2E;
/** HELP key */
const VK_HELP = 0x2F;
/*
0x30 = 0 key
0x31 = 1 key
0x32 = 2 key
0x33 = 3 key
0x34 = 4 key
0x35 = 5 key
0x36 = 6 key
0x37 = 7 key
0x38 = 8 key
0x39 = 9 key
0x41 = A key
0x42 = B key
0x43 = C key
0x44 = D key
0x45 = E key
0x46 = F key
0x47 = G key
0x48 = H key
0x49 = I key
0x4A = J key
0x4B = K key
0x4C = L key
0x4D = M key
0x4E = N key
0x4F = O key
0x50 = P key
0x51 = Q key
0x52 = R key
0x53 = S key
0x54 = T key
0x55 = U key
0x56 = V key
0x57 = W key
0x58 = X key
0x59 = Y key
0x5A = Z key
*/
/** Left Windows key(Natural keyboard) */
const VK_LWIN = 0x5B;
/** Right Windows key(Natural keyboard) */
const VK_RWIN = 0x5C;
/** Applications key(Natural keyboard) */
const VK_APPS = 0x5D;
/** Computer Sleep key */
const VK_SLEEP = 0x5F;
/** Numeric keypad 0 key */
const VK_NUMPAD0 = 0x60;
/** Numeric keypad 1 key */
const VK_NUMPAD1 = 0x61;
/** Numeric keypad 2 key */
const VK_NUMPAD2 = 0x62;
/** Numeric keypad 3 key */
const VK_NUMPAD3 = 0x63;
/** Numeric keypad 4 key */
const VK_NUMPAD4 = 0x64;
/** Numeric keypad 5 key */
const VK_NUMPAD5 = 0x65;
/** Numeric keypad 6 key */
const VK_NUMPAD6 = 0x66;
/** Numeric keypad 7 key */
const VK_NUMPAD7 = 0x67;
/** Numeric keypad 8 key */
const VK_NUMPAD8 = 0x68;
/** Numeric keypad 9 key */
const VK_NUMPAD9 = 0x69;
/** Multiply key */
const VK_MULTIPLY = 0x6A;
/** Add key */
const VK_ADD = 0x6B;
/** Separator key */
const VK_SEPARATOR = 0x6C;
/** Subtract key */
const VK_SUBTRACT = 0x6D;
/** Decimal key */
const VK_DECIMAL = 0x6E;
/** Divide key */
const VK_DIVIDE = 0x6F;
/** F1 key */
const VK_F1 = 0x70;
const VK_F2 = 0x71;
const VK_F3 = 0x72;
const VK_F4 = 0x73;
const VK_F5 = 0x74;
const VK_F6 = 0x75;
const VK_F7 = 0x76;
const VK_F8 = 0x77;
const VK_F9 = 0x78;
const VK_F10 = 0x79;
const VK_F11 = 0x7A;
const VK_F12 = 0x7B;
const VK_F13 = 0x7C;
const VK_F14 = 0x7D;
const VK_F15 = 0x7E;
const VK_F16 = 0x7F;
const VK_F17 = 0x80;
const VK_F18 = 0x81;
const VK_F19 = 0x82;
const VK_F20 = 0x83;
const VK_F21 = 0x84;
const VK_F22 = 0x85;
const VK_F23 = 0x86;
const VK_F24 = 0x87;
/** NUM LOCK key */
const VK_NUMLOCK = 0x90;
/** SCROLL LOCK key */
const VK_SCROLL = 0x91;
/** Left SHIFT key */
const VK_LSHIFT = 0xA0;
/** Right SHIFT key */
const VK_RSHIFT = 0xA1;
/** Left CONTROL key */
const VK_LCONTROL = 0xA2;
/** Right CONTROL key */
const VK_RCONTROL = 0xA3;
/** Left ALT key */
const VK_LMENU = 0xA4;
/** Right ALT key */
const VK_RMENU = 0xA5;
/** Browser Back key */
const VK_BROWSER_BACK = 0xA6;
/** Browser Forward key */
const VK_BROWSER_FORWARD = 0xA7;
/** Browser Refresh key */
const VK_BROWSER_REFRESH = 0xA8;
/** Browser Stop key */
const VK_BROWSER_STOP = 0xA9;
/** Browser Search key */
const VK_BROWSER_SEARCH = 0xAA;
/** Browser Favorites key */
const VK_BROWSER_FAVORITES = 0xAB;
/** Browser Start and Home key */
const VK_BROWSER_HOME = 0xAC;
/** Volume Mute key */
const VK_VOLUME_MUTE = 0xAD;
/** Volume Down key */
const VK_VOLUME_DOWN = 0xAE;
/** Volume Up key */
const VK_VOLUME_UP = 0xAF;
/** Next Track key */
const VK_MEDIA_NEXT_TRACK = 0xB0;
/** Previous Track key */
const VK_MEDIA_PREV_TRACK = 0xB1;
/** Stop Media key  */
const VK_MEDIA_STOP = 0xB2;
/** Play / Pause Media key */
const VK_MEDIA_PLAY_PAUSE = 0xB3;
/** Start Mail key */
const VK_LAUNCH_MAIL = 0xB4;
/** Select Media key */
const VK_LAUNCH_MEDIA_SELECT = 0xB5;
/** Start Application 1 key */
const VK_LAUNCH_APP1 = 0xB6;
/** Start Application 2 key */
const VK_LAUNCH_APP2 = 0xB7;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the ';:' key  */
const VK_OEM_1 = 0xBA;
/** For any country / region, the '+' key */
const VK_OEM_PLUS = 0xBB;
/** For any country / region, the ',' key */
const VK_OEM_COMMA = 0xBC;
/** For any country / region, the '-' key */
const VK_OEM_MINUS = 0xBD;
/** For any country / region, the '.' key */
const VK_OEM_PERIOD = 0xBE;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '/?' key */
const VK_OEM_2 = 0xBF;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '`~' key  */
const VK_OEM_3 = 0xC0;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '[{' key */
const VK_OEM_4 = 0xDB;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '\|' key */
const VK_OEM_5 = 0xDC;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the ']}' key */
const VK_OEM_6 = 0xDD;
/**
 * Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard,
 * the 'single-quote/double-quote' key
 */
const VK_OEM_7 = 0xDE;
/** Used for miscellaneous characters; it can vary by keyboard. */
const VK_OEM_8 = 0xDF;
/** The <> keys on the US standard keyboard, or the \\| key on the non - US 102 - key keyboard  */
const VK_OEM_102 = 0xE2;
/** IME PROCESS key */
const VK_PROCESSKEY = 0xE5;
/**
 * Used to pass Unicode characters as if they were keystrokes.
 * The VK_PACKET key is the low word of a 32 - bit Virtual Key value used for non - keyboard input methods.
 * For more information, see Remark in KEYBDINPUT, SendInput, WM_KEYDOWN, and WM_KEYUP
 */
const VK_PACKET = 0xE7;
/** Attn key */
const VK_ATTN = 0xF6;
/** CrSel key */
const VK_CRSEL = 0xF7;
/** ExSel key */
const VK_EXSEL = 0xF8;
/** Erase EOF key */
const VK_EREOF = 0xF9;
/** Play key */
const VK_PLAY = 0xFA;
/** Zoom key */
const VK_ZOOM = 0xFB;
/** Reserved */
const VK_NONAME = 0xFC;
/** PA1 key */
const VK_PA1 = 0xFD;
/** Clear key */
const VK_OEM_CLEAR = 0xFE;

exports.FLASHW_ALL = FLASHW_ALL;
exports.FLASHW_CAPTION = FLASHW_CAPTION;
exports.FLASHW_STOP = FLASHW_STOP;
exports.FLASHW_TIMER = FLASHW_TIMER;
exports.FLASHW_TIMERNOFG = FLASHW_TIMERNOFG;
exports.FLASHW_TRAY = FLASHW_TRAY;
exports.VK_ACCEPT = VK_ACCEPT;
exports.VK_ADD = VK_ADD;
exports.VK_APPS = VK_APPS;
exports.VK_ATTN = VK_ATTN;
exports.VK_BACK = VK_BACK;
exports.VK_BROWSER_BACK = VK_BROWSER_BACK;
exports.VK_BROWSER_FAVORITES = VK_BROWSER_FAVORITES;
exports.VK_BROWSER_FORWARD = VK_BROWSER_FORWARD;
exports.VK_BROWSER_HOME = VK_BROWSER_HOME;
exports.VK_BROWSER_REFRESH = VK_BROWSER_REFRESH;
exports.VK_BROWSER_SEARCH = VK_BROWSER_SEARCH;
exports.VK_BROWSER_STOP = VK_BROWSER_STOP;
exports.VK_CANCEL = VK_CANCEL;
exports.VK_CAPITAL = VK_CAPITAL;
exports.VK_CLEAR = VK_CLEAR;
exports.VK_CONTROL = VK_CONTROL;
exports.VK_CONVERT = VK_CONVERT;
exports.VK_CRSEL = VK_CRSEL;
exports.VK_DECIMAL = VK_DECIMAL;
exports.VK_DELETE = VK_DELETE;
exports.VK_DIVIDE = VK_DIVIDE;
exports.VK_DOWN = VK_DOWN;
exports.VK_END = VK_END;
exports.VK_EREOF = VK_EREOF;
exports.VK_ESCAPE = VK_ESCAPE;
exports.VK_EXECUTE = VK_EXECUTE;
exports.VK_EXSEL = VK_EXSEL;
exports.VK_F1 = VK_F1;
exports.VK_F10 = VK_F10;
exports.VK_F11 = VK_F11;
exports.VK_F12 = VK_F12;
exports.VK_F13 = VK_F13;
exports.VK_F14 = VK_F14;
exports.VK_F15 = VK_F15;
exports.VK_F16 = VK_F16;
exports.VK_F17 = VK_F17;
exports.VK_F18 = VK_F18;
exports.VK_F19 = VK_F19;
exports.VK_F2 = VK_F2;
exports.VK_F20 = VK_F20;
exports.VK_F21 = VK_F21;
exports.VK_F22 = VK_F22;
exports.VK_F23 = VK_F23;
exports.VK_F24 = VK_F24;
exports.VK_F3 = VK_F3;
exports.VK_F4 = VK_F4;
exports.VK_F5 = VK_F5;
exports.VK_F6 = VK_F6;
exports.VK_F7 = VK_F7;
exports.VK_F8 = VK_F8;
exports.VK_F9 = VK_F9;
exports.VK_FINAL = VK_FINAL;
exports.VK_HANGUEL = VK_HANGUEL;
exports.VK_HANGUL = VK_HANGUL;
exports.VK_HANJA = VK_HANJA;
exports.VK_HELP = VK_HELP;
exports.VK_HOME = VK_HOME;
exports.VK_IME_OFF = VK_IME_OFF;
exports.VK_IME_ON = VK_IME_ON;
exports.VK_INSERT = VK_INSERT;
exports.VK_JUNJA = VK_JUNJA;
exports.VK_KANA = VK_KANA;
exports.VK_KANJI = VK_KANJI;
exports.VK_LAUNCH_APP1 = VK_LAUNCH_APP1;
exports.VK_LAUNCH_APP2 = VK_LAUNCH_APP2;
exports.VK_LAUNCH_MAIL = VK_LAUNCH_MAIL;
exports.VK_LAUNCH_MEDIA_SELECT = VK_LAUNCH_MEDIA_SELECT;
exports.VK_LBUTTON = VK_LBUTTON;
exports.VK_LCONTROL = VK_LCONTROL;
exports.VK_LEFT = VK_LEFT;
exports.VK_LMENU = VK_LMENU;
exports.VK_LSHIFT = VK_LSHIFT;
exports.VK_LWIN = VK_LWIN;
exports.VK_MBUTTON = VK_MBUTTON;
exports.VK_MEDIA_NEXT_TRACK = VK_MEDIA_NEXT_TRACK;
exports.VK_MEDIA_PLAY_PAUSE = VK_MEDIA_PLAY_PAUSE;
exports.VK_MEDIA_PREV_TRACK = VK_MEDIA_PREV_TRACK;
exports.VK_MEDIA_STOP = VK_MEDIA_STOP;
exports.VK_MENU = VK_MENU;
exports.VK_MODECHANGE = VK_MODECHANGE;
exports.VK_MULTIPLY = VK_MULTIPLY;
exports.VK_NEXT = VK_NEXT;
exports.VK_NONAME = VK_NONAME;
exports.VK_NONCONVERT = VK_NONCONVERT;
exports.VK_NUMLOCK = VK_NUMLOCK;
exports.VK_NUMPAD0 = VK_NUMPAD0;
exports.VK_NUMPAD1 = VK_NUMPAD1;
exports.VK_NUMPAD2 = VK_NUMPAD2;
exports.VK_NUMPAD3 = VK_NUMPAD3;
exports.VK_NUMPAD4 = VK_NUMPAD4;
exports.VK_NUMPAD5 = VK_NUMPAD5;
exports.VK_NUMPAD6 = VK_NUMPAD6;
exports.VK_NUMPAD7 = VK_NUMPAD7;
exports.VK_NUMPAD8 = VK_NUMPAD8;
exports.VK_NUMPAD9 = VK_NUMPAD9;
exports.VK_OEM_1 = VK_OEM_1;
exports.VK_OEM_102 = VK_OEM_102;
exports.VK_OEM_2 = VK_OEM_2;
exports.VK_OEM_3 = VK_OEM_3;
exports.VK_OEM_4 = VK_OEM_4;
exports.VK_OEM_5 = VK_OEM_5;
exports.VK_OEM_6 = VK_OEM_6;
exports.VK_OEM_7 = VK_OEM_7;
exports.VK_OEM_8 = VK_OEM_8;
exports.VK_OEM_CLEAR = VK_OEM_CLEAR;
exports.VK_OEM_COMMA = VK_OEM_COMMA;
exports.VK_OEM_MINUS = VK_OEM_MINUS;
exports.VK_OEM_PERIOD = VK_OEM_PERIOD;
exports.VK_OEM_PLUS = VK_OEM_PLUS;
exports.VK_PA1 = VK_PA1;
exports.VK_PACKET = VK_PACKET;
exports.VK_PAUSE = VK_PAUSE;
exports.VK_PLAY = VK_PLAY;
exports.VK_PRINT = VK_PRINT;
exports.VK_PRIOR = VK_PRIOR;
exports.VK_PROCESSKEY = VK_PROCESSKEY;
exports.VK_RBUTTON = VK_RBUTTON;
exports.VK_RCONTROL = VK_RCONTROL;
exports.VK_RETURN = VK_RETURN;
exports.VK_RIGHT = VK_RIGHT;
exports.VK_RMENU = VK_RMENU;
exports.VK_RSHIFT = VK_RSHIFT;
exports.VK_RWIN = VK_RWIN;
exports.VK_SCROLL = VK_SCROLL;
exports.VK_SELECT = VK_SELECT;
exports.VK_SEPARATOR = VK_SEPARATOR;
exports.VK_SHIFT = VK_SHIFT;
exports.VK_SLEEP = VK_SLEEP;
exports.VK_SNAPSHOT = VK_SNAPSHOT;
exports.VK_SPACE = VK_SPACE;
exports.VK_SUBTRACT = VK_SUBTRACT;
exports.VK_TAB = VK_TAB;
exports.VK_UP = VK_UP;
exports.VK_VOLUME_DOWN = VK_VOLUME_DOWN;
exports.VK_VOLUME_MUTE = VK_VOLUME_MUTE;
exports.VK_VOLUME_UP = VK_VOLUME_UP;
exports.VK_XBUTTON1 = VK_XBUTTON1;
exports.VK_XBUTTON2 = VK_XBUTTON2;
exports.VK_ZOOM = VK_ZOOM;
//# sourceMappingURL=index.consts.cjs.map
