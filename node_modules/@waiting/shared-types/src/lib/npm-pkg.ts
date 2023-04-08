/**
 * For npm package.json
 *
 * @link https://docs.npmjs.com/files/package.json
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface NpmPkg {
  name: string
  version?: string
  description?: string
  bin?: NpmPkgStringObj
  browser?: string
  bugs?: NpmPkgStringObj
  bundledDependencies?: string[]
  config?: NpmPkgStringObj
  contributors?: NpmPkgPersion[]
  cpu?: string[]
  dependencies?: NpmPkgStringObj
  devDependencies?: NpmPkgStringObj
  engines?: NpmPkgStringObj
  es2015?: string
  keywords?: string[]
  homepage?: string
  license?: string
  main?: string | string[]
  man?: string | string[]
  module?: string
  optionalDependencies?: NpmPkgStringObj
  os?: string[]
  peerDependencies?: NpmPkgStringObj
  /** @deprecated */
  preferGlobal?: boolean
  private?: boolean
  publishConfig?: NpmPkgPublishConfig
  repository: NpmPkgRepository | string
  scripts?: NpmPkgStringObj
  types?: string
  [key: string]: any
}

export interface NpmPkgPublishConfig {
  access: boolean
  registry: string
  tag: string
  [key: string]: string | boolean
}

export interface NpmPkgRepository {
  type: 'git' | 'svn' | 'hg'
  url: string
  directory?: string
}

export interface NpmPkgPersion {
  name: string
  url?: string
  email?: string
}

export interface NpmPkgStringObj {
  [name: string]: string
}

