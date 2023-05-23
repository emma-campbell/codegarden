import { FeaturedPost } from "@/ui/featured-post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Emma Campbell",
  description: "My personal slice of the internet.",
};

const Page = async () => {
  const Post: JSX.Element = await FeaturedPost();
  // const metrics: JSX.Element = await SiteMetrics();

  return (
    <>
      <section className="flex flex-col justify-start">
        <h1 className="font-bold font-heading md:text-[96px] leading-extra-tight">
          Emma
        </h1>
        <h1 className="font-bold font-heading md:text-[96px] leading-extra-tight pb-12">
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
        {Post}
      </section>
    </>
  );
};

export default Page;
