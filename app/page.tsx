import { FeaturedPost } from "app/featured-post";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Home | Emma Campbell",
  description: "My personal slice of the internet.",
};

const Page = async () => {
  return (
    <>
      <section className="flex flex-col justify-start">
        <h1 className="text-5xl font-bold font-heading sm:text-[96px] leading-extra-tight">
          Emma
        </h1>
        <h1 className="text-5xl font-bold font-heading sm:text-[96px] leading-extra-tight pb-12">
          Campbell
        </h1>
        <p className="font-medium text-white/80">
          I am a <b>software engineer</b>, currently working at{" "}
          <b>Hugo Health</b>. Building functional, performant, and impactful
          applications is at the heart of what I do. I love to learn and teach,
          mainly by writing about the things that I do.
        </p>
      </section>
      <section className="flex flex-col justify-start mt-8">
        <h3 className="font-bold font-heading text-xl text-white/60 pb-4">
          Trending Article
        </h3>
        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Async Server Component */}
          <FeaturedPost />
        </Suspense>
        <Link
          href="/blog"
          className=" text-white/60 transition-all fade hover:text-white/95"
        >
          <p className="font-semibold flex">
            All Posts <ArrowRightIcon className="w-4" />
          </p>
        </Link>
      </section>
    </>
  );
};

export default Page;
