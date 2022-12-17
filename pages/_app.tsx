// global styles
import "../styles/globals.css";

// fonts
import "@fontsource/fira-code";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

import { seo } from "@/lib/seo";
import { AnimatePresence } from "framer-motion";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

export async function getStaticProps() {
  return { seo: seo };
}

export default function App({
  Component,
  pageProps,
  router,
  seo,
}: AppProps & InferGetStaticPropsType<GetStaticProps>) {
  return (
    <>
      <DefaultSeo {...seo} />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
