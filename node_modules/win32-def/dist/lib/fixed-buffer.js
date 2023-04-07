import assert from 'assert';
// eslint-disable-next-line import/no-extraneous-dependencies
import { types } from 'ref-napi';
/**
 * Fixed length "Buffer" type, for use in Struct type definitions.
 * Like `wchar Name[32]` in C,
 * `getter` and `setter` functions are provided to access the buffer contents.
 * The starting and tailing terminal-null of returned string via `getter` is removed.
 */
export function wcharBuffer(charLength) {
    assert(charLength >= 0);
    return BufferTypeFactory(charLength * 2, 'ucs2');
}
/**
 * Fixed length "Buffer" type, for use in Struct type definitions.
 *
 * Optionally setting the `encoding` param will force to call
 * `toString(encoding)` on the buffer returning a String instead.
 *
 * @see https://github.com/TooTallNate/ref-struct/issues/28#issuecomment-265626611
 * @ref https://gist.github.com/TooTallNate/80ac2d94b950216a2705
 */
export function BufferTypeFactory(byteLength, encoding) {
    assert(byteLength >= 0);
    const inst = Object.create(types.byte, {
        constructor: {
            configurable: true,
            enumerable: false,
            writable: true,
            value: BufferTypeFactory,
        },
        size: {
            configurable: true,
            enumerable: true,
            writable: false,
            value: byteLength,
        },
        encoding: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: encoding,
        },
        get: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: getFn,
        },
        set: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: setFn,
        },
    });
    return inst;
}
function getFn(buffer, offset) {
    const buf = buffer.subarray(offset, offset + this.size);
    if (this.encoding) {
        const str = buf.toString(this.encoding);
        return str.replace(/^\0+|\0+$/ug, '');
    }
    return buf;
}
function setFn(buffer, offset, value) {
    let buf;
    if (typeof value === 'string') {
        assert(this.encoding, 'BufferType.encoding is required when setting a string');
        buf = Buffer.from(value, this.encoding);
    }
    else if (Array.isArray(value)) {
        buf = Buffer.from(value);
    }
    else if (Buffer.isBuffer(value)) {
        buf = value;
    }
    else {
        throw new TypeError('Buffer instance expected');
    }
    if (buf.length > this.size) {
        throw new Error(`Buffer given is ${buf.length} bytes, but only ${this.size} bytes available`);
    }
    buf.copy(buffer, offset);
}
//# sourceMappingURL=fixed-buffer.js.map