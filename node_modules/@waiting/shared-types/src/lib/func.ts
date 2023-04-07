/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Func {
  (...args: any[]): any | Promise<any>
  (this: any, ...args: any[]): any | Promise<any>
}

