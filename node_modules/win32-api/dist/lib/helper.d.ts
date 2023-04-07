import { DllFuncs, DllFuncsModel, Def, FnName, LoadSettings, PromiseFnModel, StructDefType, StructInstanceBase, HWND } from 'win32-def';
export declare const isArch64: boolean;
export declare const defGroupNumber: Def[];
export declare const defGroupPointer: Def[];
export declare function load<T>(dllName: string, dllFuncs: DllFuncs<T>, fns?: FnName[], settings?: LoadSettings): T;
/**
 * Copy file from src to dest but change the file extension to ext
 */
export declare function loadAsync<T>(dllName: string, dllFuncs: DllFuncs<T>, fns?: FnName[], settings?: LoadSettings): PromiseFnModel<T>;
/**
 * Generate function definitions via converting macro windows data type (like PVOID) to the expected value.
 * Skip assignment if property undefined
 */
export declare function gen_api_opts<T = DllFuncsModel>(dllFuncs: DllFuncs<T>, fns?: FnName[]): DllFuncs<T>;
/**
 * @example ```ts
 * const point = StructFactory<M.POINT_Struct>(DS.POINT)
 * point.x = 123
 * const lParam = point.ref().address()
 * const obj = retrieveStructFromPtrAddress<M.POINT_Struct>(lParam, DS.POINT)
 * obj && console.log({ objx: obj.x, objy: obj.y })
 * ```
 */
export declare function retrieveStructFromPtrAddress<R extends StructInstanceBase>(address: number, dataStructConst: StructDefType, maxCharLength?: number): R | undefined;
export declare function ucsBufferFrom(str: string | undefined | null): Buffer;
export declare function ucsBufferToString(buffer: Buffer, charCount?: number | undefined): string;
/**
 * Split with null till next char (\0)
 */
export declare function ucsBufferSplit(buffer: Buffer, maxCount?: number): string[];
/**
 * Read string from address of ptr
 */
export declare function ptrToString(ptrAddress: HWND, maxByteLength: number): string;
/**
 * Retrieve struct from Buffer
 */
export declare function bufferToStruct<T extends StructInstanceBase>(src: Buffer, structDef: StructDefType, maxCount?: number, pcbNeeded?: number, align?: 4 | 8): T[];
//# sourceMappingURL=helper.d.ts.map