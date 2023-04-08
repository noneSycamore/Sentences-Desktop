import { BigIntStr, TuplePush as Push } from '@waiting/shared-types';
import { StringBuffer, UnionInstanceBase } from './common.types.js';
import { Def } from './def.enum.js';
export type _WIN64 = boolean;
export type _UNICODE = boolean;
export interface StructDefType {
    [prop: string]: Def | StructDefType | StringBuffer | UnionInstanceBase | StructTypeConstructor;
}
export type StructTypeConstructor<T = object> = new () => Record<keyof T, string | number | BigIntStr | Buffer>;
export interface LoadSettings {
    singleton: boolean;
    _WIN64?: boolean;
}
/**
 * node-ffi-buffer extends from Buffer
 *
 * I don't found the way to merge the ffi-buffer types automatically
 * so have to copy the def from node-ffi-buffer.d.ts.
 * with it hWnd.ref() wihout error TS2339: Property 'ref' does not exist on type 'Buffer'.
 */
export type PID = number;
export type PPID = number;
export type FnName = string;
export type FnParam = string;
export type FnRetType = FnParam;
export type FnCallParam = FnParam;
export type FnCallParams = FnCallParam[] | never[];
export type FnParams = [FnRetType, FnCallParams];
export type DllFuncs<T = DllFuncsModel> = Record<keyof T, FnParams>;
/**
 * usage:
 * ```ts
 * import { DModel as M, FModel as FM } from 'win32-def'
 * export interface Foo extends FM.DllFuncsModel {
 *   SDT_OpenPort(port: M.UINT): M.INT
 *   SDT_ClosePort(): M.INT
 * }
 * ```
 */
export interface DllFuncsModel {
    [funcName: string]: SyncFnModel;
}
export type SyncFnModel = (...args: any[]) => boolean | number | BigIntStr | Buffer | void;
export type AsyncFnModel = (...args: any[]) => Promise<boolean | number | BigIntStr | Buffer | void>;
export type AsyncSyncFuncModel = SyncFnModel & {
    async: (...args: any[]) => void;
};
export interface AsyncFuncModel {
    [key: string]: AsyncFnModel;
}
/**
 * Expand FnModel with async()
 * typeof arguments and typeof argument result of callback(err: Error, result)
 *  will be retrieved from input method
 *
 * usage:
 * ```ts
 * export interface SDT extends DllFuncsModel {
 *  foo: {
 *    (msg: M.POINT): M.VOID,
 *    async(msg: M.POINT, cb: (err: Error, result: M.VOINT)): void,
 *  }
 *  bar: BarFn
 *  barz(port: M.INT): M.POINT
 * }
 * export interface BarFn extends AsyncSyncFuncModel {
 *  (port: M.INT): M.INT
 *  async(
 *    port: M.INT
 *    cb: (err: Error, code: M.INT) => void,
 *  ): void
 * }
 *
 * // Will append async() method to barz() with correct parameter's types of the (last) callback parameter of barz()
 * export type SDTFnModel = ExpandFnModel<SDT>
 * // So we can calling async method
 * const api: SDTFnModel = ....
 * api.barz.async(port, (err, result) => {
 *   // type of result will get correct typeof Buffer (according to ReresultType of api.barz) automatically
 * })
 * ```
 */
export type ExpandFnModel<T> = {
    [K in keyof T]: 'async' extends keyof T[K] ? T[K] : T[K] extends AsyncSyncFuncModel ? T[K] : T[K] extends SyncFnModel ? T[K] & AppendSyncFnWithAsync<T[K]> : never;
};
interface AppendSyncFnWithAsync<Fn extends SyncFnModel> {
    async: (...args: Push<Parameters<Fn>, (err: Error | null | undefined, result: ReturnType<Fn>) => any>) => void;
}
export type PromiseFnModel<T> = {
    [K in keyof T]: T[K] extends AsyncFnModel ? T[K] : T[K] extends SyncFnModel ? (...args: Parameters<T[K]>) => Promise<ReturnType<T[K]>> : never;
};
export {};
//# sourceMappingURL=ffi.types.d.ts.map