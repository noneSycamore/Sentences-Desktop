/* eslint-disable import/no-extraneous-dependencies */
import ref from 'ref-napi';
import StructDi from 'ref-struct-di';
import UnionDi from 'ref-union-di';
import { LPMSG, LPSTR, LPTSTR, LPWORD, LPWSTR } from './common.def.js';
import { wcharBuffer } from './fixed-buffer.js';
// const UnionDi = _UnionDi
const Union = UnionDi(ref);
export function UnionType(input) {
    // @ts-ignore
    return Union(input);
}
export function UnionFactory(input) {
    // @ts-ignore
    return new Union(input)();
}
export const defaultStructCharOptions = {
    useStringBuffer: true,
    maxCharLength: 1024,
    CharDefs: [
        LPMSG,
        LPSTR,
        LPWSTR,
        LPTSTR,
        LPWORD,
    ],
};
const Struct = StructDi(ref);
export function StructType(input, options) {
    const initType = genInitTyp(input, options);
    // @ts-ignore
    return Struct(initType);
}
export function StructFactory(input, options) {
    const initType = genInitTyp(input, options);
    // @ts-ignore
    return new Struct(initType)();
}
function genInitTyp(input, options) {
    const opts = {
        ...defaultStructCharOptions,
        ...options,
    };
    const initType = {};
    Object.entries(input).forEach(([key, value]) => {
        if (opts.useStringBuffer
            && typeof value === 'string'
            && opts.CharDefs.includes(value)) {
            initType[key] = wcharBuffer(opts.maxCharLength);
        }
        else {
            // @TODO recursive convertion
            initType[key] = value;
        }
    });
    return initType;
}
//# sourceMappingURL=helper.js.map