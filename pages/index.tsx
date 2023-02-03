import { generateSocialImage } from "@/lib/generateSocialImage";
import { useArticleCount } from "@/lib/useArticleCount";
import { useStatistics } from "@/lib/useStatistics";
import { FeaturedPost } from "@/ui/featured-post";
import { Layout } from "@/ui/layout";

import {
  ArrowRightCircleIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import Link from "next/link";

export async function getStaticProps() {
  const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    })
    .filter((p) => p.status === "published");

  const ogImage = generateSocialImage({
    title: `Emma's Digital Garden 🌱`,
    imagePublicId: "social_card.png",
    twitterName: "emmacampbelll14",
  });

  return { props: { posts: posts, image: ogImage } };
}

export const Home = ({ posts }) => {
  const { views, likes } = useStatistics();
  const { count, isError } = useArticleCount();
  return (
    <Layout>
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
            <p>{views} views</p>
          </div>

          <div className="flex gap-2 font-[Lato] text-white/60">
            <PencilSquareIcon className="w-5" />
            <p>{count} articles</p>
          </div>

          <div className="flex gap-2 font-[Lato] text-white/60">
            <HeartIcon className="w-5" />
            <p>{likes} likes</p>
          </div>
        </div>
      </section>
      <section className="grid gap-2">
        <h1 className="text-2xl font-bold">Last Article</h1>
        <FeaturedPost key={posts[0].slug} post={posts[0]} gradient={posts[0]} />
        <Link
          href="/blog"
          className="flex flex-row justify-start text-white/50 font-medium hover:underline [&>*]:hover:text-white transition-all"
        >
          <p>All Posts</p>
          <ArrowRightCircleIcon className="w-4" />
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
