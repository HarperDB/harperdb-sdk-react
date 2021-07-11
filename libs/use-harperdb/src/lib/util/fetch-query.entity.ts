export interface FetchQuery {
  url: string;
  signal: AbortSignal;
  body: string;
  token: string;
}
