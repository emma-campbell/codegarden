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

import "../styles/globals.css";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "emmacampbell.dev",
  description:
    "My personal garden where I write about the things I experience and learn",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className="scroll-p-24 overflow-x-hidden h-screen scroll-smooth"
    >
      <body className="bg-black h-screen antialiased scroll-smooth relative selection:bg-purple-500/90 selection:text-white">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
