import { createContext } from "react";

import type { HarperDBHookProviderFeatureProviderProps } from "../entity/harperdb-hook-feature-provider.entity";

const initialValue: HarperDBHookProviderFeatureProviderProps = {
  options: { url: "", user: "", password: "" },
};

export const HarperDBHookFeatureContext = createContext<HarperDBHookProviderFeatureProviderProps>(initialValue);
