export interface HarperDbHookUtilFetchQueryProps {
  url: string;
  signal: AbortSignal;
  body: string;
  token: string;
}

export enum HarperDbHookUtilFetchQueryError {
  Url = "Url not exists",
  Body = "Body not exists",
  Token = "Token not exists",
}
