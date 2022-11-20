import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-p-24">
      <Head>
        <meta name="theme-color" content="#262626" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/domnvvqdl/image/upload/v1668888307/Background_Blur_sirqpx.png"
        />
      </Head>
      <body className="bg-black antialiased selection:bg-purple-500/90 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
