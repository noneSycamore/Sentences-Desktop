/**
 * @link https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-flashwinfo
 */
export declare const FLASHWINFO: {
    readonly cbSize: import("../def.enum.js").Def.uint;
    readonly hwnd: import("../def.enum.js").Def.uint32 | import("../def.enum.js").Def.uint64;
    readonly dwFlags: import("../def.enum.js").Def.uint32;
    readonly uCount: import("../def.enum.js").Def.uint;
    readonly dwTimeout: import("../def.enum.js").Def.uint32;
};
/** https://docs.microsoft.com/zh-cn/windows/win32/api/winuser/ns-winuser-rid_device_info */
export declare const RID_DEVICE_INFO: {
    readonly cbSize: import("../def.enum.js").Def.uint32;
    readonly dwType: import("../def.enum.js").Def.uint32;
    readonly DUMMYUNIONNAME: import("../ffi.types.js").StructTypeConstructor<{
        mouse: import("../def.enum.js").Def;
        keyboard: import("../def.enum.js").Def;
        hid: import("../def.enum.js").Def;
    }>;
};
//# sourceMappingURL=winuser.def.d.ts.map