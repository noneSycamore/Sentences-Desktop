/// <reference types="node" resolution-mode="require"/>
import { StringBuffer } from './common.types.js';
/**
 * Fixed length "Buffer" type, for use in Struct type definitions.
 * Like `wchar Name[32]` in C,
 * `getter` and `setter` functions are provided to access the buffer contents.
 * The starting and tailing terminal-null of returned string via `getter` is removed.
 */
export declare function wcharBuffer(charLength: number): StringBuffer;
/**
 * Fixed length "Buffer" type, for use in Struct type definitions.
 *
 * Optionally setting the `encoding` param will force to call
 * `toString(encoding)` on the buffer returning a String instead.
 *
 * @see https://github.com/TooTallNate/ref-struct/issues/28#issuecomment-265626611
 * @ref https://gist.github.com/TooTallNate/80ac2d94b950216a2705
 */
export declare function BufferTypeFactory(byteLength: number, encoding?: BufferEncoding): StringBuffer;
//# sourceMappingURL=fixed-buffer.d.ts.map