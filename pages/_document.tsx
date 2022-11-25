import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-p-24">
      <Head>
        <meta name="theme-color" content="#262626" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/emmacampbell/image/upload/v1668909709/bgblur_u33jee.png"
        />
      </Head>
      <body className="bg-black antialiased selection:bg-purple-500/90 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
