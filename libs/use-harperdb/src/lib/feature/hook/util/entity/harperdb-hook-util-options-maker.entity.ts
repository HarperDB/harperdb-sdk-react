import type { UseHarperDB } from "../../entity/use-harperpdb.entity";
import type { HarperDBHookProviderFeatureProviderProps } from "../../feature/provider/entity/harperdb-hook-feature-provider.entity";

export interface UseHarperDbHookUtilOptionsMakerProps {
  context: HarperDBHookProviderFeatureProviderProps;
  query: UseHarperDB["query"];
}
