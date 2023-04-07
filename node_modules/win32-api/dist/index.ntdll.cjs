/**
 * win32-api
 * FFI definitions of windows win32 api for node-ffi
 *
 * @version 20.4.0
 * @author waiting
 * @license MIT
 * @link https://waitingsong.github.io/node-win32-api
 */

'use strict';

var assert = require('node:assert');
var node_fs = require('node:fs');
var ffi = require('ffi-napi');
require('ref-napi');
var win32Def = require('win32-def');
var W = require('win32-def/common.def');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var W__namespace = /*#__PURE__*/_interopNamespaceDefault(W);

/* eslint-disable @typescript-eslint/no-unsafe-argument */
process.arch.includes('64');
[
    win32Def.Def.float, win32Def.Def.int16, win32Def.Def.int32, win32Def.Def.int64, win32Def.Def.int8,
    win32Def.Def.uint16, win32Def.Def.uint32, win32Def.Def.uint64, win32Def.Def.uint8,
    win32Def.Def.long, win32Def.Def.ulong, win32Def.Def.longlong, win32Def.Def.ulonglong,
];
[
    win32Def.Def.boolPtr, win32Def.Def.bytePtr, win32Def.Def.charPtr, win32Def.Def.intPtr, win32Def.Def.int8Ptr,
    win32Def.Def.int16Ptr, win32Def.Def.int32Ptr, win32Def.Def.int64Ptr, win32Def.Def.floatPtr,
    win32Def.Def.longPtr, win32Def.Def.uintPtr, win32Def.Def.uint8Ptr,
    win32Def.Def.intPtrPtr, win32Def.Def.uint16Ptr, win32Def.Def.uint32Ptr, win32Def.Def.uint64Ptr,
    win32Def.Def.ulonglongPtr, win32Def.Def.voidPtr,
    win32Def.Def.uintPtrPtr, win32Def.Def.uint16PtrPtr, win32Def.Def.uint32PtrPtr, win32Def.Def.uint64PtrPtr,
    win32Def.Def.ulonglongPtrPtr, win32Def.Def.voidPtrPtr,
];
const dllInstMap = new Map(); // for DLL.load() with settings.singleton === true
// const hasAsyncProxy = '__hasAsyncProxy__'
function load$1(dllName, dllFuncs, fns, settings) {
    const st = parse_settings(settings);
    const name = dllName.endsWith('.drv')
        ? preprareDllFile(dllName)
        : dllName;
    if (st.singleton) {
        let inst = get_inst_by_name(name);
        if (!inst) {
            const ps = gen_api_opts(dllFuncs, fns);
            // ffi.Library.EXT = ext
            inst = ffi.Library(name, ps);
            set_inst_by_name(name, inst);
        }
        return inst;
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return ffi.Library(name, gen_api_opts(dllFuncs, fns));
    }
}
function preprareDllFile(file) {
    if (file.startsWith('file://')) {
        return file;
    }
    else if (file.startsWith('http://') || file.startsWith('https://')) {
        return file;
    }
    else if (file.startsWith('/')) {
        return file;
    }
    try {
        const stat = node_fs.statSync(file);
        if (stat.isFile()) {
            return file;
        }
    }
    catch {
        // void
    }
    const { HOME, WINDIR } = process.env;
    assert(HOME, 'HOME is not defined');
    assert(WINDIR, 'WINDIR is not defined');
    const sys32dir = `${WINDIR}/system32`;
    const path = `${sys32dir}/${file}`;
    const target = `${HOME}/${file}.dll`;
    const stat = node_fs.statSync(path);
    if (!stat.isFile()) {
        throw new Error(`${file} is not found in path: "${path}"`);
    }
    try {
        const stat2 = node_fs.statSync(target);
        if (stat2.isFile()) {
            return target;
        }
        node_fs.copyFileSync(path, target);
    }
    catch {
        node_fs.copyFileSync(path, target);
    }
    return target;
}
/**
 * Copy file from src to dest but change the file extension to ext
 */
// export async function copyFileWithDllExt(
//   src: string,
//   targetDir: string,
//   ext = 'dll',
// ): Promise<string> {
//   const [file] = basename(src).split('.')
//   assert(file)
//   const target = `${targetDir}/${file}.${ext}`
//   if (await isFileExists(target)) {
//     return target
//   }
//   await copyFile(src, target)
//   return target
// }
function loadAsync(dllName, dllFuncs, fns, settings) {
    const inst = load$1(dllName, dllFuncs, fns, settings);
    assert(inst);
    const instAsync = {};
    Object.entries(inst).forEach(([name, value]) => {
        if (!Object.hasOwn(inst, name)) {
            return;
        }
        if (typeof value !== 'function') {
            Object.defineProperty(instAsync, name, {
                enumerable: false,
                writable: true,
                configurable: true,
                value,
            });
        }
        const fnAsync = new Proxy(value, {
            // @ts-ignore
            apply(target, ctx, args) {
                // console.info({ target, ctx, args })
                return callFnAsync(target, args);
            },
        });
        Object.defineProperty(instAsync, name, {
            enumerable: false,
            writable: true,
            configurable: true,
            value: fnAsync,
        });
    });
    return instAsync;
}
async function callFnAsync(target, args) {
    assert(target);
    assert(typeof target.async === 'function');
    return new Promise((done, reject) => {
        const cb = (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            done(result);
        };
        // @ts-ignore
        Reflect.apply(target.async, null, [...args, cb]);
    });
}
/**
 * Generate function definitions via converting macro windows data type (like PVOID) to the expected value.
 * Skip assignment if property undefined
 */
function gen_api_opts(dllFuncs, fns) {
    const ret = {};
    if (fns && Array.isArray(fns) && fns.length) {
        for (const fn of fns) {
            if (!Object.hasOwn(dllFuncs, fn)) {
                continue;
            }
            // @ts-ignore
            const ps = dllFuncs[fn];
            assert(ps, `dellFuncs has no property mehod name "${fn}"`);
            Object.defineProperty(ret, fn, {
                value: ps,
                writable: false,
                enumerable: true,
                configurable: false,
            });
        }
    }
    else {
        for (const fn of Object.keys(dllFuncs)) {
            // @ts-ignore
            const ps = dllFuncs[fn];
            assert(ps, `dellFuncs has no property mehod name "${fn}"`);
            Object.defineProperty(ret, fn, {
                value: ps,
                writable: false,
                enumerable: true,
                configurable: false,
            });
        }
    }
    return ret;
}
function get_inst_by_name(dllName) {
    return dllInstMap.get(dllName);
}
function set_inst_by_name(dllName, inst) {
    dllInstMap.set(dllName, inst);
}
function parse_settings(settings) {
    const st = { ...win32Def.settingsDefault };
    // const st: LoadSettings = {
    //   singleton: true,
    //   _WIN64: true,
    // }
    if (typeof settings !== 'undefined' && Object.keys(settings).length) {
        Object.assign(st, settings);
    }
    return st;
}

const apiDef = {
    NtQueryInformationProcess: [W__namespace.NTSTATUS, [W__namespace.HANDLE, W__namespace.DWORD32, W__namespace.PVOID, W__namespace.ULONG, W__namespace.PULONG]],
};

const dllName = "ntdll" /* DllNames.ntdll */;
const load = (fns, settings) => loadAsync(dllName, apiDef, fns, settings);

exports.apiDef = apiDef;
exports.dllName = dllName;
exports.load = load;
//# sourceMappingURL=index.ntdll.cjs.map
