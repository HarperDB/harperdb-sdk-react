import { HarperDBProviderOptions } from "use-harperdb";

export const config: HarperDBProviderOptions = {
  options: {
    user: process.env.NEXT_PUBLIC_HARPERDB_USER,
    password: process.env.NEXT_PUBLIC_HARPERDB_PASSWORD,
    url: process.env.NEXT_PUBLIC_HARPERDB_URL,
  },
};
