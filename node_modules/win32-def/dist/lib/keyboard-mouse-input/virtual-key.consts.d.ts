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
export declare const VK_LBUTTON = 1;
/** Right mouse button */
export declare const VK_RBUTTON = 2;
/** Control-break processing */
export declare const VK_CANCEL = 3;
/** Middle mouse button(three - button mouse) */
export declare const VK_MBUTTON = 4;
/** X1 mouse button */
export declare const VK_XBUTTON1 = 5;
/** X2 mouse button */
export declare const VK_XBUTTON2 = 6;
/** BACKSPACE key */
export declare const VK_BACK = 8;
/** TAB key */
export declare const VK_TAB = 9;
/** CLEAR key */
export declare const VK_CLEAR = 12;
export declare const VK_RETURN = 13;
export declare const VK_SHIFT = 16;
export declare const VK_CONTROL = 17;
/** ALT key */
export declare const VK_MENU = 18;
export declare const VK_PAUSE = 19;
/** CAPS LOCK key */
export declare const VK_CAPITAL = 20;
/** IME Kana mode */
export declare const VK_KANA = 21;
/** IME Hanguel mode(maintained for compatibility; use VK_HANGUL)  */
export declare const VK_HANGUEL = 21;
/** IME Hangul mode */
export declare const VK_HANGUL = 21;
/** IME On */
export declare const VK_IME_ON = 22;
export declare const VK_JUNJA = 23;
export declare const VK_FINAL = 24;
export declare const VK_HANJA = 25;
export declare const VK_KANJI = 25;
/** IME Off */
export declare const VK_IME_OFF = 26;
/** ESC key */
export declare const VK_ESCAPE = 27;
/** IME convert */
export declare const VK_CONVERT = 28;
/** IME nonconvert */
export declare const VK_NONCONVERT = 29;
/** IME accept */
export declare const VK_ACCEPT = 30;
/** IME mode change request */
export declare const VK_MODECHANGE = 31;
/** SPACEBAR */
export declare const VK_SPACE = 32;
/** PAGE UP key */
export declare const VK_PRIOR = 33;
/** PAGE DOWN key */
export declare const VK_NEXT = 34;
/** END key */
export declare const VK_END = 35;
/** HOME key */
export declare const VK_HOME = 36;
/** LEFT ARROW key */
export declare const VK_LEFT = 37;
/** UP ARROW key */
export declare const VK_UP = 38;
/** RIGHT ARROW key */
export declare const VK_RIGHT = 39;
/** DOWN ARROW key */
export declare const VK_DOWN = 40;
/** SELECT key */
export declare const VK_SELECT = 41;
/** PRINT key */
export declare const VK_PRINT = 42;
/** EXECUTE key */
export declare const VK_EXECUTE = 43;
/** PRINT SCREEN key */
export declare const VK_SNAPSHOT = 44;
/** INS key */
export declare const VK_INSERT = 45;
/** DEL key */
export declare const VK_DELETE = 46;
/** HELP key */
export declare const VK_HELP = 47;
/** Left Windows key(Natural keyboard) */
export declare const VK_LWIN = 91;
/** Right Windows key(Natural keyboard) */
export declare const VK_RWIN = 92;
/** Applications key(Natural keyboard) */
export declare const VK_APPS = 93;
/** Computer Sleep key */
export declare const VK_SLEEP = 95;
/** Numeric keypad 0 key */
export declare const VK_NUMPAD0 = 96;
/** Numeric keypad 1 key */
export declare const VK_NUMPAD1 = 97;
/** Numeric keypad 2 key */
export declare const VK_NUMPAD2 = 98;
/** Numeric keypad 3 key */
export declare const VK_NUMPAD3 = 99;
/** Numeric keypad 4 key */
export declare const VK_NUMPAD4 = 100;
/** Numeric keypad 5 key */
export declare const VK_NUMPAD5 = 101;
/** Numeric keypad 6 key */
export declare const VK_NUMPAD6 = 102;
/** Numeric keypad 7 key */
export declare const VK_NUMPAD7 = 103;
/** Numeric keypad 8 key */
export declare const VK_NUMPAD8 = 104;
/** Numeric keypad 9 key */
export declare const VK_NUMPAD9 = 105;
/** Multiply key */
export declare const VK_MULTIPLY = 106;
/** Add key */
export declare const VK_ADD = 107;
/** Separator key */
export declare const VK_SEPARATOR = 108;
/** Subtract key */
export declare const VK_SUBTRACT = 109;
/** Decimal key */
export declare const VK_DECIMAL = 110;
/** Divide key */
export declare const VK_DIVIDE = 111;
/** F1 key */
export declare const VK_F1 = 112;
export declare const VK_F2 = 113;
export declare const VK_F3 = 114;
export declare const VK_F4 = 115;
export declare const VK_F5 = 116;
export declare const VK_F6 = 117;
export declare const VK_F7 = 118;
export declare const VK_F8 = 119;
export declare const VK_F9 = 120;
export declare const VK_F10 = 121;
export declare const VK_F11 = 122;
export declare const VK_F12 = 123;
export declare const VK_F13 = 124;
export declare const VK_F14 = 125;
export declare const VK_F15 = 126;
export declare const VK_F16 = 127;
export declare const VK_F17 = 128;
export declare const VK_F18 = 129;
export declare const VK_F19 = 130;
export declare const VK_F20 = 131;
export declare const VK_F21 = 132;
export declare const VK_F22 = 133;
export declare const VK_F23 = 134;
export declare const VK_F24 = 135;
/** NUM LOCK key */
export declare const VK_NUMLOCK = 144;
/** SCROLL LOCK key */
export declare const VK_SCROLL = 145;
/** Left SHIFT key */
export declare const VK_LSHIFT = 160;
/** Right SHIFT key */
export declare const VK_RSHIFT = 161;
/** Left CONTROL key */
export declare const VK_LCONTROL = 162;
/** Right CONTROL key */
export declare const VK_RCONTROL = 163;
/** Left ALT key */
export declare const VK_LMENU = 164;
/** Right ALT key */
export declare const VK_RMENU = 165;
/** Browser Back key */
export declare const VK_BROWSER_BACK = 166;
/** Browser Forward key */
export declare const VK_BROWSER_FORWARD = 167;
/** Browser Refresh key */
export declare const VK_BROWSER_REFRESH = 168;
/** Browser Stop key */
export declare const VK_BROWSER_STOP = 169;
/** Browser Search key */
export declare const VK_BROWSER_SEARCH = 170;
/** Browser Favorites key */
export declare const VK_BROWSER_FAVORITES = 171;
/** Browser Start and Home key */
export declare const VK_BROWSER_HOME = 172;
/** Volume Mute key */
export declare const VK_VOLUME_MUTE = 173;
/** Volume Down key */
export declare const VK_VOLUME_DOWN = 174;
/** Volume Up key */
export declare const VK_VOLUME_UP = 175;
/** Next Track key */
export declare const VK_MEDIA_NEXT_TRACK = 176;
/** Previous Track key */
export declare const VK_MEDIA_PREV_TRACK = 177;
/** Stop Media key  */
export declare const VK_MEDIA_STOP = 178;
/** Play / Pause Media key */
export declare const VK_MEDIA_PLAY_PAUSE = 179;
/** Start Mail key */
export declare const VK_LAUNCH_MAIL = 180;
/** Select Media key */
export declare const VK_LAUNCH_MEDIA_SELECT = 181;
/** Start Application 1 key */
export declare const VK_LAUNCH_APP1 = 182;
/** Start Application 2 key */
export declare const VK_LAUNCH_APP2 = 183;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the ';:' key  */
export declare const VK_OEM_1 = 186;
/** For any country / region, the '+' key */
export declare const VK_OEM_PLUS = 187;
/** For any country / region, the ',' key */
export declare const VK_OEM_COMMA = 188;
/** For any country / region, the '-' key */
export declare const VK_OEM_MINUS = 189;
/** For any country / region, the '.' key */
export declare const VK_OEM_PERIOD = 190;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '/?' key */
export declare const VK_OEM_2 = 191;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '`~' key  */
export declare const VK_OEM_3 = 192;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '[{' key */
export declare const VK_OEM_4 = 219;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the '\|' key */
export declare const VK_OEM_5 = 220;
/** Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard, the ']}' key */
export declare const VK_OEM_6 = 221;
/**
 * Used for miscellaneous characters; it can vary by keyboard.For the US standard keyboard,
 * the 'single-quote/double-quote' key
 */
export declare const VK_OEM_7 = 222;
/** Used for miscellaneous characters; it can vary by keyboard. */
export declare const VK_OEM_8 = 223;
/** The <> keys on the US standard keyboard, or the \\| key on the non - US 102 - key keyboard  */
export declare const VK_OEM_102 = 226;
/** IME PROCESS key */
export declare const VK_PROCESSKEY = 229;
/**
 * Used to pass Unicode characters as if they were keystrokes.
 * The VK_PACKET key is the low word of a 32 - bit Virtual Key value used for non - keyboard input methods.
 * For more information, see Remark in KEYBDINPUT, SendInput, WM_KEYDOWN, and WM_KEYUP
 */
export declare const VK_PACKET = 231;
/** Attn key */
export declare const VK_ATTN = 246;
/** CrSel key */
export declare const VK_CRSEL = 247;
/** ExSel key */
export declare const VK_EXSEL = 248;
/** Erase EOF key */
export declare const VK_EREOF = 249;
/** Play key */
export declare const VK_PLAY = 250;
/** Zoom key */
export declare const VK_ZOOM = 251;
/** Reserved */
export declare const VK_NONAME = 252;
/** PA1 key */
export declare const VK_PA1 = 253;
/** Clear key */
export declare const VK_OEM_CLEAR = 254;
//# sourceMappingURL=virtual-key.consts.d.ts.map