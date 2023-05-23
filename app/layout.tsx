import "../styles/globals.css";

import { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Fira_Code } from "next/font/google";

import { Navigation } from "@/ui/layout/navigation";
import { Footer } from "@/ui/layout/footer";

const calSans = localFont({
  src: "../node_modules/cal-sans/fonts/webfonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
  weight: "100 900",
  display: "swap",
});

const inter = Inter({
  display: "swap",
  variable: "--font-inter",
  subsets: ["cyrillic"],
});

const firaCode = Fira_Code({
  display: "swap",
  variable: "--font-fira-code",
  subsets: ["cyrillic"],
});

const metadata: Metadata = {
  title: "emmacampbell.dev",
  description:
    "My personal garden where I write about the things I experience and learn",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`bg-black text-white ${inter.variable} ${calSans.variable} ${firaCode.variable}`}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto font-body">
        <Navigation />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
