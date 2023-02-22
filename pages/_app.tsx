// global styles
import "../styles/globals.css";

// fonts
import "@fontsource/fira-code";

import "@fontsource/raleway/100.css";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";

import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

import { seo } from "@/lib/seo";
import { AnimatePresence } from "framer-motion";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

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
      <Analytics />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
