import { AppProps } from "next/app";
import Head from "next/head";

import "../styles.scss";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HarperDB | SSR</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
