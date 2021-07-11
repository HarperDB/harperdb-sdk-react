import { createContext } from "react";

import { HarperDBProviderProps } from "./harperdb-provider.entity";

const initialValue = {
  url: "",
  user: "",
  password: "",
} as const;

export const HarperDBContext = createContext<HarperDBProviderProps>(initialValue);

export const HarperDBProvider: React.FunctionComponent<HarperDBProviderProps> = ({ children, ...options }) => (
  <HarperDBContext.Provider value={options}>{children}</HarperDBContext.Provider>
);
