import { useCallback, useContext, useEffect, useRef, useState } from "react";

import {
  harperDbHookUtilAbortController,
  harperDbHookUtilExecuteFetch,
  useHarperDbHookUtilOptionsMaker,
} from "../util";
import { HarperDBHookFeatureContext } from "./provider";

import type { UseHarperDB } from "../entity/use-harperpdb.entity";

export function useHarperDB<T = unknown>({ query }: UseHarperDB) {
  const abortController = useRef<AbortController>();

  const context = useContext(HarperDBHookFeatureContext);

  const [requestData, setRequestData] = useState<T | undefined>();
  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<string | undefined>();

  const options = useHarperDbHookUtilOptionsMaker({ context, query });

  const trigger = useCallback(
    async function executeHttpRequest() {
      abortController.current = new AbortController();

      await harperDbHookUtilExecuteFetch({
        setRequestData,
        setRequestError,
        setRequestLoading,
        signal: abortController.current.signal,
        ...options,
      });

      return () => harperDbHookUtilAbortController(abortController.current);
    },
    [options]
  );

  useEffect(
    function makeRequest() {
      trigger();
    },
    [trigger]
  );

  useEffect(function onUnmount() {
    return () => harperDbHookUtilAbortController(abortController.current);
  }, []);

  return [requestData, requestLoading, requestError, trigger];
}
