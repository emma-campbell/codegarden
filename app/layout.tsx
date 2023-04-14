// fonts
import "@fontsource/fira-code";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

import "cal-sans";

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
