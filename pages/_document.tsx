import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-p-24 overflow-x-hidden h-screen scroll-smooth"
    >
      <Head>
        <meta name="theme-color" content="#262626" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src-elem vercel.live *.vercel.app emmacampbell.dev 'unsafe-inline'; connect-src vercel.live *.vercel.app  emmacampbell.dev vitals.vercel-insights.com; style-src 'self' 'unsafe-inline'"
        />
      </Head>
      <body className="bg-black h-screen antialiased scroll-smooth relative selection:bg-purple-500/90 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
