import { FeaturedPost } from "@/ui/post/featured";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/ui/animation/section";
import { container, content } from "@/lib/variants";
import { AnimatedDiv } from "@/ui/animation/div";
import { AnimatedText } from "@/ui/animation/p";
import { Suspense } from "react";
import Loading from "./loading";
import { PostPreviewLoading } from "@/ui/post/loading";

export const metadata: Metadata = {
  title: "Home | Emma Campbell",
  description: "My personal slice of the internet.",
};

const Page = () => {
  return (
    <>
      <AnimatedSection
        className="flex flex-col justify-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <AnimatedDiv variants={content}>
          <h1 className="text-5xl font-bold font-heading sm:text-[96px] leading-extra-tight">
            Emma
          </h1>
          <h1 className="text-5xl font-bold font-heading sm:text-[96px] leading-extra-tight pb-12">
            Campbell
          </h1>
        </AnimatedDiv>
        <AnimatedText className="font-medium text-white/80" variants={content}>
          I am a <b>software engineer</b>, currently working at{" "}
          <b>Hugo Health</b>. Building functional, performant, and impactful
          applications is at the heart of what I do. I love to learn and teach,
          mainly by writing about the things that I do.
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        className="flex flex-col justify-start mt-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <AnimatedDiv variants={content}>
          <h3 className="font-bold font-heading text-xl text-white/60 pb-4">
            Trending Article
          </h3>
        </AnimatedDiv>
        <Suspense fallback={<PostPreviewLoading />}>
          <FeaturedPost />
        </Suspense>
        <Link
          href="/blog"
          className=" text-white/60 transition-all fade hover:text-white/95"
        >
          <AnimatedText className="font-semibold flex" variants={content}>
            All Posts <ArrowRightIcon className="w-4" />
          </AnimatedText>
        </Link>
      </AnimatedSection>
    </>
  );
};

export default Page;
