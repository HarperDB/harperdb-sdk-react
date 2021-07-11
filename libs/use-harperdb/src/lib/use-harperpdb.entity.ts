export interface UseHarperDB {
  query: Record<string, string>;
}

export interface ExecuteFetch {
  signal: AbortSignal;
}
