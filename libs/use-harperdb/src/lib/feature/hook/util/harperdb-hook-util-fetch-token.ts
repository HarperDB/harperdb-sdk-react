export function harperDbHookUtilGenerateToken(user: string, password: string): string {
  const baseStr = `${user}:${password}`;

  if (typeof window !== "undefined") {
    return window.btoa(baseStr);
  }

  return Buffer.from(baseStr, "base64").toString("base64");
}
