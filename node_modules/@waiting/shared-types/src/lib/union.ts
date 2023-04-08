/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Note: order of result is not exact
 * @example ```
 *  type LongerUnion = { name: 'shanon' } | 1 | 2 | 3
 *  type TestType = UnionToTuple<LongerUnion> // [3, 2, {name: 'shanon'}, 1]
 * ```
 * @see https://stackoverflow.com/a/55858763
 */

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never


