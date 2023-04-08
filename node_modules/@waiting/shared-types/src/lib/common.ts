/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */


export type ToTuple<T> = T extends any[] ? T : any[]


/**
 * Union tow types, with optional excluded keys
 * @example `Spread<T, K, 'foo'>` or `Spread<T, K, 'foo' | 'bar'>`
 * @see https://github.com/microsoft/TypeScript/pull/13288#issuecomment-412230721
 */
export type Spread<T1, T2, KeyExcludeOptinal = void>
  = { [K in Exclude<keyof T1, KeyExcludeOptinal | keyof T2>]: T1[K] }
  & { [K in Exclude<keyof T2, KeyExcludeOptinal>]: T2[K] }

/**
 * @example `type R = AllValues<Record<'uid', 'tbUserUid'>>`
 * @see https://stackoverflow.com/a/56416192
 */
export type AllValues<T extends Record<PropertyKey, PropertyKey>> = {
  [P in keyof T]: { key: P, value: T[P] }
}[keyof T]

/**
 * @example `type R = KeyFromValue<{uid: 'tbUserUid'}, 'tbUserUid'>` got `uid`
 * @ref https://stackoverflow.com/a/57726844
 */
export type KeyFromValue<T, V> = {
  [key in keyof T]: V extends T[key] ? key : never
}[KnownKeys<T> & keyof T]

/**
 * Invert key/value of type/interface
 * @example `type R = Invert<{x: 'a', y: 'b'}>` got `{a: 'x', b: 'y'}`
 * @example `type R = Invert<{x: 'a', y: 'b', z: 'a'}>` got `{a: 'x' | 'z', b: 'y'}`
 * @see https://stackoverflow.com/a/57726844
 */
export type Invert<T extends Record<string, string>> = {
  [K in T[KnownKeys<T> & (keyof T)]]: KeyFromValue<T, K>
}


/**
 * @see https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
 */
export type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
  ? true
  : false
/**
 * (Experimental) Equals two types which convert by FormatIntersect<>
 * ```
 */
export type EqualsExt<X, Y> = Equals<FormatIntersect<X>, FormatIntersect<Y>>

export type OverwriteNeverToUnknown<T> = {
  [fld in keyof T]: T[fld] extends never ? unknown : T[fld]
}

/* eslint-disable @typescript-eslint/ban-types */
/**
 * (Experimental) Rewrite members of intersect type into one type deeply
 *
 * @example ```ts
 * {foo: number} & {bar: string} => {foo: number, bar: string}
 * ```
 */
export type FormatIntersect<T, deep extends boolean = true> = T extends Record<string | number, any>
  ? T extends any[] | Function | Date
    ? T
    : { [K in keyof T]: deep extends true ? FormatIntersect<T[K], true> : T[K] }
  : T

/**
 * Retrieve keys
 * @see https://stackoverflow.com/a/51955852/2887218
 */
export type KnownKeys<T> = {
  [K in keyof T]: string extends K
    ? never : number extends K
      ? never : symbol extends K
        ? never : K
} extends { [_ in keyof T]: infer U } ? U : never

/**
 * Retrive types
 * @see https://stackoverflow.com/a/51955852/2887218
 */
export type ValuesOf<T> = T extends { [_ in keyof T]: infer U } ? U : never


type IfAny<T, Y, N> = 0 extends (1 & T) ? Y : N
/**
 * @link https://stackoverflow.com/a/55541672
 */
export type OverwriteAnyToUnknown<T> = IfAny<T, unknown, T>


/**
 * Restrict using either exclusively the keys of T or exclusively the keys of U.
 *
 * No unique keys of T can be used simultaneously with any unique keys of U.
 *
 * Example:
 * `const myVar: XOR<T, U>`
 *
 * More: https://github.com/maninak/ts-xor
 */
export type XOR<T, U> = (T | U) extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U

/**
* Get the keys of T without any keys of U.
*/
export type Without<T, U> = {
  [P in Exclude<keyof T, keyof U>]?: never
}

