/* eslint-disable @typescript-eslint/no-explicit-any */

// ref: https://zhuanlan.zhihu.com/p/38687656

/** Get the first element */
export type TupleHead<T extends unknown[]> = T[0]

/** Remove the first element */
export type TupleTail<T extends unknown[]> = T extends [] ? [] :
  T extends [unknown] ? [] :
    T extends [unknown, ...infer U] ? U :
      unknown[]
// export type TupleTail<T extends any[]> = ((...t: T) => void) extends (x: any, ...t: infer R) => void ? R : never

export type TupleShift<T extends unknown[]> = TupleTail<T>

/** Get the last element */
export type TupleLast<T extends any[]> = T[TupleTail<T>['length']]

/** Remove the last element */
export type TupleRemoveLast<T extends any[]> = TypeAssert<Overwrite<TupleTail<T>, T>, any[]>

/** Insert element at first */
export type TupleUnshift<T extends unknown[], X> = [X, ...T]
// export type TupleUnshift<T extends any[], X> = ((x: X, ...t: T) => void) extends (...t: infer R) => void ? R : never

/** Append element at last */
export type TuplePush<T extends any[], X> = [...T, X]

/** Concat two tuples */
export type TupleConcat<A extends unknown[], B extends unknown[]> = [...A, ...B]
// export type TupleConcat<A extends any[], B extends any[]> = {
//   1: A,
//   0: TupleConcat<TuplePush<A, B[0]>, TupleTail<B>>,
// }[B extends [] ? 1 : 0]

// 用到的 helper 类型，简化代码和解决某些情况下的类型错误
export type TypeAssert<T, A> = T extends A ? T : never
// @ts-expect-error
export type Overwrite<T, S> = { [P in keyof T]: S[P] }


/**
 * Whether literal type is in Tuple contains literal,
 *
 * @example ```ts
 * type Foo = isInType<['ab', 'cd'], 'ab'>
 * ```
 * @returns boolean
 */
export type isInLiteralTuple<T extends (string | number | symbol)[], K extends string | number | symbol>
  = [Extract<T[number], K>] extends [never] ? false : true

export type TupleToUnion<T extends unknown[]> = T[number]


export type Reverse<Tuple extends any[]> = Reverse_<Tuple, []>
type Reverse_<Tuple extends any[], Result extends any[]> = {
  1: Result,
  0: Reverse_<TupleTail<Tuple>, TupleUnshift<Result, TupleHead<Tuple>>>,
}[Tuple extends [] ? 1 : 0]

