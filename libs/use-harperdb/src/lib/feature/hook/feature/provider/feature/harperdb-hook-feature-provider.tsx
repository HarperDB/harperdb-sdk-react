import { HarperDBHookFeatureContext } from "./harperdb-hook-feature-context";

import type { HarperDBHookProviderFeatureProviderProps } from "../entity/harperdb-hook-feature-provider.entity";

export const HarperDBHookFeatureProvider: React.FunctionComponent<HarperDBHookProviderFeatureProviderProps> = ({
  children,
  options,
}) => <HarperDBHookFeatureContext.Provider value={{ options }}>{children}</HarperDBHookFeatureContext.Provider>;
