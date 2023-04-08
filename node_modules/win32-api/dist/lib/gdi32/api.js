import * as W from 'win32-def/common.def';
export const apiDef = {
    // CreateBitmap: [W.HBITMAP, [W.INT, W.INT, W.UINT, W.UINT, W.VOID] ],
    CreateCompatibleBitmap: [W.HBITMAP, [W.HDC, W.INT, W.INT]],
    CreateCompatibleDC: [W.HDC, [W.HDC]],
};
//# sourceMappingURL=api.js.map