/* eslint-disable @typescript-eslint/no-explicit-any */

export type BigIntStr = bigint | string
// export type Decimal = number | string
export type Decimal = `${number}` | number | bigint

/**
 * ISO 8601 format,
 * new Date().toISOString()
 *
 * @example
 * - '2020-03-03T02:12:53.123Z'
 */
export type DateISOString = `${N4}-${N2}-${N2}T${N2}:${N2}:${N2}.${N3}Z`

/**
 * ISO 8601 format with timezone offset
 *
 * @example
 * - '2020-03-03T02:12:53.123Z'
 * - '2021-03-03T10:12:53.123+08:00'
 */
export type ISO8601String = DateISOString |
  `${N4}-${N2}-${N2}T${N2}:${N2}:${N2}.${N3}+${N2}:${N2}` |
  `${N4}-${N2}-${N2}T${N2}:${N2}:${N2}.${N3}-${N2}:${N2}`

type N4 = `${number}${number}${number}${number}`
type N3 = `${number}${number}${number}`
type N2 = `${number}${number}`

