// global styles
import "../styles/globals.css";
// fonts
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/work-sans/100.css";
import "@fontsource/work-sans/200.css";
import "@fontsource/work-sans/300.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/800.css";
import "@fontsource/work-sans/900.css";

import type { AppProps } from "next/app";
import { Layout } from "../ui/layout";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
