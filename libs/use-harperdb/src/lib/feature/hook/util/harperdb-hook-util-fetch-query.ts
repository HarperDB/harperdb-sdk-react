import {
  HarperDbHookUtilFetchQueryProps,
  HarperDbHookUtilFetchQueryError,
} from "./entity/harperdb-hook-util-fetch-query.entity";

export async function harperDbHookUtilFetchQuery({ url, signal, body, token }: HarperDbHookUtilFetchQueryProps) {
  try {
    if (!url) return { error: HarperDbHookUtilFetchQueryError.Url };
    if (!body) return { error: HarperDbHookUtilFetchQueryError.Body };
    if (!token) return { error: HarperDbHookUtilFetchQueryError.Token };

    const fetchOptions: RequestInit = {
      method: "POST",
      signal,
      body,
      headers: {
        "Content-Type": "application/json",
        authorization: `Basic ${token}`,
      },
    };

    const response = await fetch(url, fetchOptions);
    const responseJson = await response.json();

    const data = responseJson.body || responseJson;

    if (response.ok) {
      return { data };
    }

    return { error: data.message };
  } catch ({ message }) {
    return { error: message };
  }
}
