import { useMemo } from "react";
import { interval } from "rxjs";

import { harperDbHookUtilGenerateToken } from "./harperdb-hook-util-fetch-token";
import { harperDbHookUtilStringifyQuery } from "./harperdb-hook-util-stringify-query";

import type { UseHarperDB } from "../entity/use-harperpdb.entity";
import type { UseHarperDbHookUtilOptionsMakerProps } from "./entity/harperdb-hook-util-options-maker.entity";

export function useHarperDbHookUtilOptionsMaker(args: UseHarperDbHookUtilOptionsMakerProps) {
  const options = useMemo(
    () => ({
      url: args.context.options.url,
      token: harperDbHookUtilGenerateToken(args.context.options.user, args.context.options.password),
      body: harperDbHookUtilStringifyQuery<UseHarperDB["query"]>(args.hookOptions.query),
      interval: args.hookOptions.interval ? interval(args.hookOptions.interval) : undefined,
      onLoad: args.hookOptions.onLoad,
      onError: args.hookOptions.onError,
    }),
    [
      args.context.options.user,
      args.context.options.password,
      args.context.options.url,
      args.hookOptions.query,
      args.hookOptions.interval,
      args.hookOptions.onLoad,
      args.hookOptions.onError,
    ]
  );

  return options;
}
