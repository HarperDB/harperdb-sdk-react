import { harperDbHookUtilFetchQuery } from "./harperdb-hook-util-fetch-query";

import type { HarperDbHookUtilExecuteFetchProps } from "./entity/harperdb-hook-util-execute-fetch.entity";

export async function harperDbHookUtilExecuteFetch<T>(args: HarperDbHookUtilExecuteFetchProps<T>) {
  if (!args.optionInterval) {
    args.setRequestLoading(true);
  }

  const response = await harperDbHookUtilFetchQuery({
    signal: args.optionSignal,
    body: args.optionBody,
    token: args.optionToken,
    url: args.optionUrl,
    onError: args.onError,
    onLoad: args.onLoad,
  });

  if (response.data) args.setRequestData(response.data);
  if (response.error) args.setRequestError(response.error);

  if (!args.optionInterval) {
    args.setRequestLoading(false);
  }
}
