import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import useAsyncEffect from 'use-async-effect';
import useInterval from 'use-interval';

export const HarperDBContext = createContext({});

export const HarperDBProvider = ({ url, user, password, children }) => (
  <HarperDBContext.Provider value={{ user, password, url }}>
    {children}
  </HarperDBContext.Provider>
);

export const useHarperDB = ({ query, interval }) => {
  const { url, user, password } = useContext(HarperDBContext);
  const [lastInterval, setLastInterval] = useState(false);
  const [result, setResult] = useState({ loading: false, error: false, data: false });

  const queryBody = useMemo(() => JSON.stringify(query), [query]);
  const refresh = () => setLastInterval(Date.now());
  let abortController;

  const executeQuery = useCallback(async ({ stringifiedQuery, signal }) => {
    try {
      const request = await fetch(`${url}`, {
        method: 'POST',
        signal,
        body: stringifiedQuery,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Basic ${btoa(`${user}:${password}`)}`,
        },
      });

      const json = await request.json();
      const response = json.body || json;

      if (response.error) {
        return { error: response.message };
      }

      return { data: response };
    } catch (e) {
      return { error: e.message };
    }
  }, [url, user, password]);

  useAsyncEffect(
    async () => {
      abortController = new AbortController()
      setResult({ ...result, loading: true });
      const response = await executeQuery({ stringifiedQuery: queryBody, signal: abortController.signal });
      setResult({ ...result, ...response, loading: false });
    },
    () => abortController && abortController.abort(),
    [queryBody, lastInterval]
  );

  if (interval) useInterval(refresh, interval);

  return [ result.data, result.loading, result.error, refresh ];
}
