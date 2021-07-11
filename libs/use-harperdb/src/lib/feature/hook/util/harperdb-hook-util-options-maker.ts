import { useMemo } from "react";

import { harperDbHookUtilGenerateToken } from "./harperdb-hook-util-fetch-token";
import { harperDbHookUtilStringifyQuery } from "./harperdb-hook-util-stringify-query";

import type { UseHarperDB } from "../entity/use-harperpdb.entity";
import type { UseHarperDbHookUtilOptionsMakerProps } from "./entity/harperdb-hook-util-options-maker.entity";

export function useHarperDbHookUtilOptionsMaker({ context, query }: UseHarperDbHookUtilOptionsMakerProps) {
  const options = useMemo(
    () => ({
      url: context.options.url,
      token: harperDbHookUtilGenerateToken(context.options.user, context.options.password),
      body: harperDbHookUtilStringifyQuery<UseHarperDB["query"]>(query),
    }),
    [context.options.user, context.options.password, context.options.url, query]
  );

  return options;
}
