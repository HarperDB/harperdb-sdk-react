export function harperDbHookUtilStringifyQuery<T = Record<string, unknown>>(query: T): string {
  return JSON.stringify(query);
}
