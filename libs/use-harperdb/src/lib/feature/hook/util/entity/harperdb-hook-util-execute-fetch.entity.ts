import { HarperDbHookUtilFetchQueryProps } from "./harperdb-hook-util-fetch-query.entity";

export interface HarperDbHookUtilExecuteFetchProps<T> extends HarperDbHookUtilFetchQueryProps {
  signal: AbortSignal;
  setRequestData: React.Dispatch<React.SetStateAction<T | undefined>>;
  setRequestError: React.Dispatch<React.SetStateAction<string | undefined>>;
  setRequestLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
