"use client";

import { useArticleCount } from "@/lib/useArticleCount";
import { useStatistics } from "@/lib/useStatistics";
import { Post } from "@/types";
import { FeaturedPost } from "@/ui/featured-post";
import { Layout } from "@/ui/layout";
import { NavigationItem } from "@/ui/layout/navigation";
import { LoadingDots } from "@/ui/loading";
import { Metric } from "@/ui/metric";
import {
  ArrowRightCircleIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { FC, Suspense } from "react";

type HomeProps = {
  post?: any;
};

const nav: NavigationItem[] = [
  {
    label: "Blog",
    url: "/blog",
  },
];

export const Home = ({ post }: { post: Partial<Post> }) => {
  const { views, likes } = useStatistics();
  const { count, isError } = useArticleCount();
  return (
    <Layout navItems={nav}>
      <section className="flex flex-col justify-start">
        <div className="grid gap-5">
          <div className="flex flex-col">
            <h1 className="text-3xl w-fit font-extrabold font-[Raleway] bg-clip-text text-transparent bg-gradient-to-r from-blue to-purple md:text-4xl">
              Emma Campbell
            </h1>
            <h3 className="font-bold font-[Lato] text-white/60">
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
        <div className="pt-5">
          <div className="flex gap-2 font-[Lato] text-white/60">
            <ArrowTrendingUpIcon className="w-5" />
            <div className="flex space-x-1">
              <Suspense fallback={<LoadingDots />}>
                <Metric stat={views} />
              </Suspense>
              <p>views</p>
            </div>
          </div>

          <div className="flex gap-2 font-[Lato] text-white/60">
            <PencilSquareIcon className="w-5" />
            <div className="flex space-x-1">
              <Suspense fallback={<LoadingDots />}>
                <Metric stat={count} />
              </Suspense>
              <p>articles</p>
            </div>
          </div>

          <div className="flex gap-2 font-[Lato] text-white/60">
            <HeartIcon className="w-5" />
            <div className="flex space-x-1">
              <Suspense fallback={<LoadingDots />}>
                <Metric stat={likes} />
              </Suspense>
              <p>likes</p>
            </div>
          </div>
        </div>
      </section>
      {post != null ? (
        <section className="grid gap-2">
          <h1 className="text-2xl font-bold">Last Article</h1>
          <FeaturedPost key={post.slug} post={post} />
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
      ) : null}
    </Layout>
  );
};

export default Home;
