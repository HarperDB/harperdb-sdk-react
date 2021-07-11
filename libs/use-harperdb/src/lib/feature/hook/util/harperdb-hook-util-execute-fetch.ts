import { harperDbHookUtilFetchQuery } from "./harperdb-hook-util-fetch-query";

import type { HarperDbHookUtilExecuteFetchProps } from "./entity/harperdb-hook-util-execute-fetch.entity";

export async function harperDbHookUtilExecuteFetch<T>({
  setRequestData,
  setRequestError,
  setRequestLoading,
  ...queryProps
}: HarperDbHookUtilExecuteFetchProps<T>) {
  setRequestLoading(true);

  const response = await harperDbHookUtilFetchQuery(queryProps);

  if (response.data) setRequestData(response.data);
  if (response.error) setRequestError(response.error);

  setRequestLoading(false);
}
