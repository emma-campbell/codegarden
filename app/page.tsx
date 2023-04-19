import { FeaturedPost } from "@/ui/featured-post";
import { Layout } from "@/ui/layout";
import { NavigationItem } from "@/ui/layout/navigation";
import { SiteMetrics } from "@/ui/metrics/site";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";

const nav: NavigationItem[] = [
  {
    label: "Blog",
    url: "/blog",
  },
];

export const metadata: Metadata = {
  title: "Home | Emma Campbell",
  description: "My personal slice of the internet.",
};

const Page = async () => {
  const Post: JSX.Element = await FeaturedPost();
  const metrics: JSX.Element = await SiteMetrics();

  return (
    <Layout navItems={nav}>
      <section className="flex flex-col justify-start">
        <div className="grid gap-5 pb-5">
          <div className="flex flex-col">
            <h1 className="text-3xl w-fit font-bold font-[Cal Sans] md:text-4xl">
              Emma Campbell
            </h1>
            <h3 className="font-medium text-white/60">
              Software Engineer | APIs, Platform, and Data Integrations
            </h3>
          </div>

          <p className="font-medium text-white/80">
            Hey 👋 I&apos;m Emma and this is my digital space on the internet
            where I like to write about things in my life. Things like building
            software or managing chronic illness. In my freetime, I enjoy
            reading, spending time with my dog, and listening to (or making)
            music.
          </p>
        </div>
        <Suspense>{metrics}</Suspense>
      </section>

      <section className="grid gap-2">
        {Post}
        <Link
          href={{
            pathname: "/blog",
          }}
          className="flex flex-row justify-start text-white/50 font-medium hover:underline [&>*]:hover:text-white transition-all"
        >
          <p>All Posts</p>
          <ArrowRightCircleIcon className="w-4" />
        </Link>
      </section>
    </Layout>
  );
};

export default Page;
