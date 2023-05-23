import { BlogPostList } from "@/ui/post/blog-list";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Emma Campbell",
  description: "Search through the articles I have written.",
};

const Page = async () => {
  return (
    <>
      <section className="pb-8">
        <h1 className="text-5xl lg:text-[96px] font-heading font-bold leading-extra-tight pb-8">
          Blog
        </h1>
        <p className="text-white/80">
          I&apos;ve written {allPosts?.length} articles since I started this
          blog in November 2022. My writing isn&apos;t just related to coding. I
          also try to write about the tricks I&apos;ve learned to manage my ADHD
          and psoriatic arthritis to (sorta) function as an adult.
        </p>
      </section>
      <BlogPostList />
    </>
  );
};

export default Page;
