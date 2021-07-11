import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

import { HarperDBContext } from "./feature/provider/harperdb-provider";

import { abort } from "./util/fetch-abort";
import { fetchQuery } from "./util/fetch-query";
import { generateToken } from "./util/fetch-token";

import type { ExecuteFetch, UseHarperDB } from "./use-harperpdb.entity";
import type { FetchQuery } from "./util/fetch-query.entity";

export function useHarperDB<T = unknown>({ query }: UseHarperDB) {
  const context = useContext(HarperDBContext);

  const abortController = useRef<AbortController>();

  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const body = useMemo(() => JSON.stringify(query), [query]);

  const token = useMemo(() => generateToken(context.user, context.password), [context.user, context.password]);

  const executeQuery = useCallback(fetchQuery, [context.url, context.user, context.password]);

  const executeFetch = useCallback(
    async ({ signal }: ExecuteFetch) => {
      const options: FetchQuery = { url: context.url, signal, body, token };

      const response = await executeQuery(options);

      if (response.data) setData(response.data);
      if (response.error) setError(response.error);
    },
    [context.url, body, token, executeQuery]
  );

  useEffect(
    function executeHttpRequest() {
      abortController.current = new AbortController();

      setLoading(true);
      executeFetch({ signal: abortController.current.signal });
      setLoading(false);

      return () => abort(abortController.current);
    },
    [query, executeFetch]
  );

  useEffect(function onUnmount() {
    return () => abort(abortController.current);
  }, []);

  return [data, loading, error];
}
