import { Def } from './def.enum.js';
import { StructDefType, StructTypeConstructor } from './ffi.types.js';
export declare function UnionType<T extends StructDefType>(input: T): StructTypeConstructor<T>;
export declare function UnionFactory<T>(input: StructDefType): T;
export declare const defaultStructCharOptions: Required<StructCharOptions>;
export declare function StructType<T extends StructDefType>(input: T, options?: StructCharOptions): StructTypeConstructor<T>;
export declare function StructFactory<T>(input: StructDefType, options?: StructCharOptions): T;
export interface StructCharOptions {
    /**
     * @default true
     * @description convert property of Struct from POINTER(like LPSTR, LPWSTR) to StringBuffer,
     * **Note: typeof value may be WCHAR_String instead of _POINTER**
     */
    useStringBuffer?: boolean;
    /**
     * @default 1024
     */
    maxCharLength?: number;
    /**
     * @default [LPMSG, LPSTR, LPWSTR, LPTSTR, LPWORD ]
     */
    CharDefs?: Def[];
}
//# sourceMappingURL=helper.d.ts.map