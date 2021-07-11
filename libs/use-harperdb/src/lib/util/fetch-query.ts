import { FetchQuery } from "./fetch-query.entity";

export async function fetchQuery({ url, signal, body, token }: FetchQuery) {
  try {
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
