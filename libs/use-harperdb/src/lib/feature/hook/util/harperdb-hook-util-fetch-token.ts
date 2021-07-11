export function harperDbHookUtilGenerateToken(user: string, password: string): string {
  return window.btoa(`${user}:${password}`);
}
