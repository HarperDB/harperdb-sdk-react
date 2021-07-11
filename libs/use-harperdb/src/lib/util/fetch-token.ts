export function generateToken(user: string, password: string): string {
  return window.btoa(`${user}:${password}`);
}
