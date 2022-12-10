import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { generateSocialImage } from "@/lib/generateSocialImage";
import { FeaturedPost } from "@/ui/featured-post";
import { Layout } from "@/ui/layout";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { NextSeo } from "next-seo";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
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

const gradients = [
  "from-green-300 to-orange-300",
  "from-orange-300 to-yellow-300",
  "from-yellow-300 to-green-300",
];

export const Home = ({ posts, image }) => {
  return (
    <Layout>
      <section className="flex flex-col w-fit justify-start">
        <div className="flex flex-col">
          <h1 className="text-4xl font-black pb-4">Emma Campbell 🤟</h1>
        </div>
        <div className="flex flex-col space-y-5 text-white/80 text-sm">
          <p>
            I am a 24 year old software engineer living in Arlington, Virginia.
            I have my B.A in Computer Science from the University of Rochester,
            and spend a lot of my time building digital health data systems that
            help facilitate critical research with{" "}
            <a href="https://hugo.health">Hugo Health</a>.
          </p>
          <p>
            This is a space where I write about the things I learn, the things I
            struggle with, and the things that I feel. As someone who is
            learning to manage chronic illness, I find pride in helping to share
            what I learn, and as someone who tries to take on technical
            challenges daily, I like to share what I find.
          </p>
          <p>Thank you, and welcome to my digital garden 🌱</p>
        </div>
      </section>
      <section className="flex flex-col w-fit justify-start">
        <div className="flex flex-row w-full pb-2 pt-2">
          <h1 className="text-2xl font-black">Latest Writing</h1>
        </div>
        <div className="flex flex-col gap-6 md:flex-row mb-4">
          {posts?.slice(0, 3).map((article, i) => {
            return (
              <FeaturedPost
                key={article.slug}
                post={article}
                gradient={gradients[i]}
              />
            );
          })}
        </div>
        <Link
          href="/blog"
          className="flex flex-row justify-start text-gray-100 font-medium hover:underline hover:[&>*]text-white transition-all"
        >
          <p>All Posts</p>
          <ArrowRightCircleIcon className="w-4" />
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
