
/**
 * `/proc/(cpuinfo | meminfo | stat)`
 */
export interface ProcInfo {
  cpuinfo: ProcCpuinfo
  meminfo: ProcMeminfo
  diskstats: ProcDiskstats
  stat: ProcStat
}
export interface ProcCpuinfo {
  [key: string]: string
  processor: string
  vendor_id: string
  'cpu family': string
  model: string
  'model name': string
  stepping: string
  microcode: string
  'cpu MHz': string
  'cache size': string
  'physical id': string
  siblings: string
  'core id': string
  'cpu cores': string
  apicid: string
  'initial apicid': string
  fpu: string
  fpu_exception: string
  'cpuid level': string
  wp: string
  flags: string
  bugs: string
  bogomips: string
  'clflush size': string
  cache_alignment: string
  'address sizes': string
}
export interface ProcMeminfo {
  [key: string]: string
  MemTotal: string
  MemFree: string
  MemAvailable: string
  Buffers: string
  Cached: string
  SwapCached: string
  Active: string
  Inactive: string
  'Active(anon)': string
  'Inactive(anon)': string
  'Active(file)': string
  'Inactive(file)': string
  SwapTotal: string
  SwapFree: string
  Dirty: string
  Writeback: string
  AnonPages: string
  Mapped: string
  Shmem: string
  PageTables: string
  AnonHugePages: string
}
export interface ProcDiskstats {
  [key: string]: string
}
export interface ProcStat {
  [key: string]: string
  cpu: string
  intr: string
  ctxt: string
  btime: string
  processes: string
  procs_running: string
  procs_blocked: string
  softirq: string
}

