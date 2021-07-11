import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Subscription } from "rxjs";

import {
  harperDbHookUtilAbortController,
  harperDbHookUtilExecuteFetch,
  harperdbHookUtilIntervalUnsubscribe,
  useHarperDbHookUtilOptionsMaker,
} from "../util";

import { HarperDBHookFeatureContext } from "./provider";

import type { UseHarperDB } from "../entity/use-harperpdb.entity";

export function useHarperDB<T = unknown>(
  hookOptions: UseHarperDB
): [T | undefined, boolean, string | undefined, () => void] {
  const abortController = useRef<AbortController>();
  const intervalSubscription = useRef<Subscription>();

  const context = useContext(HarperDBHookFeatureContext);

  const [refresher, setRefresher] = useState<boolean>(false);
  const [requestData, setRequestData] = useState<T | undefined>();
  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<string | undefined>();

  const options = useHarperDbHookUtilOptionsMaker({ context, hookOptions });

  const trigger = useCallback(
    async function executeHttpRequest() {
      abortController.current = new AbortController();

      await harperDbHookUtilExecuteFetch({
        setRequestData,
        setRequestError,
        setRequestLoading,
        onLoad: options.onLoad,
        onError: options.onError,
        optionInterval: options.interval,
        optionSignal: abortController.current.signal,
        optionToken: options.token,
        optionBody: options.body,
        optionUrl: options.url,
      });

      return () => harperDbHookUtilAbortController(abortController.current);
    },
    [options]
  );

  useEffect(
    function makeRequest() {
      if (options.interval) {
        intervalSubscription.current = options.interval.subscribe({
          next: () => trigger(),
        });
      } else {
        trigger();
      }

      return () => harperdbHookUtilIntervalUnsubscribe(intervalSubscription.current);
    },
    [trigger, refresher, options.interval]
  );

  useEffect(function onUnmount() {
    return () => {
      harperDbHookUtilAbortController(abortController.current);
      harperdbHookUtilIntervalUnsubscribe(intervalSubscription.current);
    };
  }, []);

  return [requestData, requestLoading, requestError, () => setRefresher((prev) => !prev)];
}
