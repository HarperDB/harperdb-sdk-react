import { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { HarperDBProvider } from "use-harperdb";

import { config } from "../config/harperdb";

import "../styles.scss";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HarperDB | SSR</title>
      </Head>
      <HarperDBProvider {...config}>
        <Component {...pageProps} />
      </HarperDBProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default CustomApp;
