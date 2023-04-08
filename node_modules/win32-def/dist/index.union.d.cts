import { BigIntStr } from '@waiting/shared-types';

/**
 * @link https://tootallnate.github.io/ref/
 */
declare enum Def {
    bool = "bool",
    byte = "byte",
    int = "int",
    int8 = "int8",
    int16 = "int16",
    int32 = "int32",
    int64 = "int64",
    float = "float",
    long = "long",
    longlong = "longlong",
    ptr = "pointer",
    uchar = "uchar",
    uint = "uint",
    uint8 = "uint8",
    uint16 = "uint16",
    uint32 = "uint32",
    uint64 = "uint64",
    ulong = "ulong",
    ulonglong = "ulonglong",
    ushort = "ushort",
    void = "void",
    boolPtr = "bool*",
    bytePtr = "byte*",
    charPtr = "char*",
    intPtr = "int*",
    int8Ptr = "int8*",
    int16Ptr = "int16*",
    int32Ptr = "int32*",
    int64Ptr = "int64*",
    floatPtr = "float*",
    longPtr = "long*",
    uintPtr = "uint*",
    uint8Ptr = "uint8*",
    intPtrPtr = "int**",
    uint16Ptr = "uint16*",
    uint32Ptr = "uint32*",
    uint64Ptr = "uint64*",
    ulonglongPtr = "ulonglong*",
    voidPtr = "void*",
    uintPtrPtr = "uint**",
    uint16PtrPtr = "uint16**",
    uint32PtrPtr = "uint32**",
    uint64PtrPtr = "uint64**",
    ulonglongPtrPtr = "ulonglong**",
    voidPtrPtr = "void**"
}

declare const RID_DEVICE_INFO_DUMMYUNIONNAME: {
    mouse: Def;
    keyboard: Def;
    hid: Def;
};

type StructTypeConstructor<T = object> = new () => Record<keyof T, string | number | BigIntStr | Buffer>;

declare const DEVMODEW_DUMMYUNIONNAME: {
    DUMMYSTRUCTNAME: StructTypeConstructor<{
        dmOrientation: Def;
        dmPaperSize: Def;
        dmPaperLength: Def;
        dmPaperWidth: Def;
        dmScale: Def;
        dmCopies: Def;
        dmDefaultSource: Def;
        dmPrintQuality: Def;
    }>;
    dmPosition: StructTypeConstructor<{
        readonly x: Def.long;
        readonly y: Def.long;
    }>;
    DUMMYSTRUCTNAME2: StructTypeConstructor<{
        dmPosition: StructTypeConstructor<{
            readonly x: Def.long;
            readonly y: Def.long;
        }>;
        dmDisplayOrientation: Def;
        dmDisplayFixedOutput: Def;
    }>;
};
declare const DEVMODEW_DUMMYUNIONNAME2: {
    dmDisplayFlags: Def;
    dmNup: Def;
};

export { DEVMODEW_DUMMYUNIONNAME, DEVMODEW_DUMMYUNIONNAME2, RID_DEVICE_INFO_DUMMYUNIONNAME };
