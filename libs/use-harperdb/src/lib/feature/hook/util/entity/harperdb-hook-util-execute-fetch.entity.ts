import { Observable } from "rxjs";

export interface HarperDbHookUtilExecuteFetchProps<T> {
  setRequestData: React.Dispatch<React.SetStateAction<T | undefined>>;
  setRequestError: React.Dispatch<React.SetStateAction<string | undefined>>;
  setRequestLoading: React.Dispatch<React.SetStateAction<boolean>>;
  optionSignal: AbortSignal;
  optionInterval: Observable<number> | undefined;
  optionUrl: string;
  optionBody: string;
  optionToken: string;
  onLoad?: () => void;
  onError?: () => void;
}
