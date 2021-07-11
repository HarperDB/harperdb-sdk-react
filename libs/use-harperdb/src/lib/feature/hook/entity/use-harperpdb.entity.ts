export interface UseHarperDB {
  query: Record<string, unknown>;
  interval?: number;
  onLoad?: () => void;
  onError?: () => void;
}
