/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */

// ref: https://github.com/microsoft/TypeScript/pull/40336#issuecomment-684122600


export type StrSplit<S extends string, D extends string> =
  string extends S ? string[] :
    S extends `${infer T}${D}${infer U}` ? [T, ...StrSplit<U, D>] :
      [S]

type V = string | number | boolean | bigint
export type TupleJoin<T extends V[], D extends string> =
  T extends [] ? '' :
    // @ts-ignore
    T extends [unknown] ? `${T[0]}` :
      // @ts-ignore
      T extends [unknown, ...infer U] ? `${T[0]}${D}${TupleJoin<U, D>}` :
        string

// export type StrJoin<T extends V[], D extends string> =
//   T extends [] ? '' :
//     T extends [V] ? `${T[0]}`: `${T[0]}${D}${StrJoin<TupleTail<T>, D>}`

// type FormatCapitalize<T extends unknown[]> =
//   T extends [] ? [] :
//     T extends [string] ? [`${Capitalize<T[0]>}`] :
//       T extends [string, ...infer U] ? [`${Capitalize<T[0]>}`, ...FormatCapitalize<U>] : []

// type FormatCamelCase<T extends unknown[]> =
//     T extends [] ? [] :
//       T extends [unknown] ? [T[0]] :
//         T extends [unknown, ...infer U] ? [T[0], ...FormatCapitalize<U>] : []

// export type SnakeToCamel<T extends string, D extends string = '_' | '-'> = TupleJoin<FormatCamelCase<StrSplit<T, D>>, ''>
// export type SnakeToPascal<T extends string, D extends string = '_' | '-'> = TupleJoin<FormatCapitalize<StrSplit<T, D>>, ''>



export type CamelToSnake<
  T extends string,
  D extends string = '_' >
  = string extends D
    ? never
    : T extends `${infer F extends D}${infer R}`
      ? `${F}${_CamelToSnake<R, D>}`
      : _CamelToSnake<T, D> extends `${D}${infer U}` ? U : _CamelToSnake<T, D>

type _CamelToSnake<T extends string, D extends string> = T extends `${infer U}${infer Rest}`
  ? U extends D
    ? `${U}${_CamelToSnake<Rest, D>}`
    : Uppercase<U> extends U
      ? `${D}${Lowercase<U>}${_CamelToSnake<Rest, D>}`
      : `${U}${_CamelToSnake<Rest, D>}`
  : Lowercase<T>


export type SnakeToCamel<
  T extends string,
  D extends string = '_',
  TrimStart extends boolean = false,
  TrimEnd extends boolean = false>
  = string extends D
    ? never
    : T extends `${infer F extends D}${infer R}`
      ? TrimStart extends true
        ? `${SnakeToCamel<R, D, true, TrimEnd>}`
        : `${F}${SnakeToCamel<R, D, false, TrimEnd>}`
      : TrimEnd extends true
        ? _SnakeToCamelWoTailing<T, D>
        : _SnakeToCamelWithTailing<T, D>

type _SnakeToCamelWoTailing<T extends string, D extends string> = T extends `${infer U}${infer R}`
  ? U extends D
    ? `${_SnakeToCamelWoTailing<Capitalize<R>, D>}`
    : `${U}${_SnakeToCamelWoTailing<R, D>}`
  : T

type _SnakeToCamelWithTailing<T extends string, D extends string> = T extends `${infer U}${infer R}`
  ? R extends ''
    ? U
    : U extends D
      ? `${_SnakeToCamelWithTailing<Capitalize<R>, D>}` extends `${infer U1 extends D}${infer R1}`
        ? `${U}${U1}${_SnakeToCamelWithTailing<Capitalize<R1>, D>}`
        : `${_SnakeToCamelWithTailing<Capitalize<R>, D>}`
      : `${U}${_SnakeToCamelWithTailing<R, D>}`
  : T

export type SnakeToPascal<
  T extends string,
  D extends string = '_',
  TrimStart extends boolean = false,
  TrimEnd extends boolean = false>
  = string extends D
    ? never
    : T extends `${infer F extends D}${infer R}`
      ? TrimStart extends true
        ? `${Capitalize<SnakeToPascal<R, D, true, TrimEnd>>}`
        : `${F}${Capitalize<SnakeToPascal<R, D, false, TrimEnd>>}`
      : TrimEnd extends true
        ? _SnakeToCamelWoTailing<Capitalize<T>, D>
        : _SnakeToCamelWithTailing<Capitalize<T>, D>


export type CamelKeys<
  T,
  D extends string = '_',
  Recursive extends boolean = false>
  = T extends object
    ? _CamelKeys<T, D, Recursive>
    : never

type _CamelKeys<
  T,
  D extends string = '_',
  Recursive extends boolean = false>
  = Recursive extends true
    ? RecursiveCamelKeys<T, D>
    : RecordCamelKeys<T, D>

export type RecursiveCamelKeys<T, D extends string = '_'> = {
  [K in keyof T as `${SnakeToCamel<K & string, D>}`]: T[K] extends Record<string, unknown>
    ? RecursiveCamelKeys<T[K], D>
    : T[K]
}
export type RecordCamelKeys<T, D extends string = '_'> = {
  [K in keyof T as `${SnakeToCamel<K & string, D>}`]: T[K]
}


export type PascalKeys<
  T,
  D extends string = '_',
  Recursive extends boolean = false>
  = T extends object
    ? _PascalKeys<T, D, Recursive>
    : never

type _PascalKeys<
  T,
  D extends string = '_',
  Recursive extends boolean = false>
  = Recursive extends true
    ? RecursivePascalKeys<T, D>
    : RecordPascalKeys<T, D>

export type RecursivePascalKeys<T, D extends string = '_'> = {
  [K in keyof T as `${SnakeToPascal<K & string, D>}`]: T[K] extends Record<string, unknown>
    ? RecursivePascalKeys<T[K], D>
    : T[K]
}
export type RecordPascalKeys<T, D extends string = '_'> = {
  [K in keyof T as `${SnakeToPascal<K & string, D>}`]: T[K]
}


export type SnakeKeys<
  T,
  D extends string = '_',
  Recursive extends boolean = false>
  = T extends object
    ? _SnakeKeys<T, D, Recursive>
    : never

type _SnakeKeys<
  T,
  D extends string = '_',
  Recursive extends boolean = false>
  = Recursive extends true
    ? RecursiveSnakeKeys<T, D>
    : RecordSnakeKeys<T, D>

export type RecursiveSnakeKeys<T, D extends string = '_'> = {
  [K in keyof T as `${CamelToSnake<K & string, D>}`]: T[K] extends Record<string, unknown>
    ? RecursiveSnakeKeys<T[K], D>
    : T[K]
}
export type RecordSnakeKeys<T, D extends string = '_'> = {
  [K in keyof T as `${CamelToSnake<K & string, D>}`]: T[K]
}
