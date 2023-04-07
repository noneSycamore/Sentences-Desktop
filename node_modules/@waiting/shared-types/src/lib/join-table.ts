/* eslint-disable @typescript-eslint/ban-types */
import type { RecordCamelKeys, RecordPascalKeys, RecordSnakeKeys } from './template-literal.js'


export enum CaseType {
  camel = 'camel',
  pascal = 'pascal',
  snake = 'snake',
  none = 'none'
}


export type JoinTableWithCaseConvert<
  T1 extends {},
  T2 extends {},
  Prefix extends string,
  CaseConvert extends CaseType>
  = CaseConvertTable<JoinTable<T1, T2, Prefix>, CaseConvert>

export type CaseConvertTable<T extends {}, CaseConvert extends CaseType> =
  CaseConvert extends CaseType.camel
    ? RecordCamelKeys<T>
    : CaseConvert extends CaseType.snake
      ? RecordSnakeKeys<T>
      : CaseConvert extends CaseType.pascal
        ? RecordPascalKeys<T>
        : T


export type JoinTable<T1 extends {}, T2 extends {}, Prefix extends string>
  = T1 & _JoinCover<T1, T2, Prefix> & _JoinDiff<T1, T2>

type _JoinCover<T1 extends object, T2 extends object, Prefix extends string> = {
  [K in keyof Pick<T2, keyof (T1 | T2)> as `${Prefix}_${K & string}`]: T2[K]
}
type _JoinDiff<T1 extends object, T2 extends object> = {
  [K in keyof Omit<T2, keyof (T1 | T2)>]: T2[K]
}


/**
 * Create scoped column name from all tables of D,
 * filter by Tb name like 'tb_user' | 'tb_order'
 */
export type DbScopedColsByKey<D extends {}, Tb extends keyof D = keyof D>
  = D extends Record<infer F extends (Tb extends string ? Tb : string), unknown> ?
    F extends unknown
      ? `${F}.${StrKey<D[F]>}`
      : never
    : never


/**
 * Create scoped column name from all tables of D,
 * filter by Tb Type
 */
export type DbScopedColsByTableType<D extends {}, T = undefined>
  = T extends undefined
    ? DbScopedColsByKey<D>
    : D extends Record<infer F extends string, unknown>
      ? F extends unknown
        ? T extends D[F]
          ? `${F}.${(keyof D[F]) & string}`
          : never
        : never
      : never


export type UnwrapArrayMember<T> = T extends (infer M)[] ? M : T
export type StrKey<T> = keyof T & string

/**
 * Splite `tb_user_bar.foo_id` to `tb_user_bar` and `foo_id`
 */
export type SplitScopedColumn<D, SCol> = SCol extends `${infer Tb extends StrKey<D>}.${infer Col}`
  ? [Tb, Col]
  : never

