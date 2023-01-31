import { generateSocialImage } from "@/lib/generateSocialImage";
import { FeaturedPost } from "@/ui/featured-post";
import { Layout } from "@/ui/layout";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

import Link from "next/link";

const Socials = [
  {
    name: "Github",
    url: "https://github.com/emma-campbell",
    icon: BsGithub,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/ec-campbell/",
    icon: BsLinkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/spoonsandcode",
    icon: BsTwitter,
  },
];

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

export const Home = ({ posts }) => {
  return (
    <Layout>
      <section className="flex flex-col w-fit justify-start">
        <div className="flex flex-col mb-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Emma Campbell 🤟
          </h1>
          <p className="text-white/60 pb-2">
            {"Hey! I'm Emma, a "}
            <b>Software Engineer</b>
            {" at "}
            <a
              className="underline decoration-white/70 underline-offset-2 transition-all hover:text-green-200 hover:decoration-green-200"
              href="https://hugo.health"
            >
              Hugo Health
            </a>
            {" on the API and Data Integrations team. I am passionate about building tools that" +
              " facilitate open health data protocols and help patients access their own health data," +
              " with my own chronic illness experience helping to propel my fight."}
          </p>
        </div>
        <div className="flex w-1/4 justify-between">
          {Socials.map((s) => {
            return (
              <a href={s.url} key={s.name}>
                <s.icon className="text-white/70 w-6 h-6 hover:text-white" />
              </a>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col w-fit justify-start">
        <div className="flex flex-row w-full pb-2 pt-2">
          <h1 className="text-2xl font-bold">Latest Writing</h1>
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
          className="flex flex-row justify-start text-gray-100 font-medium hover:underline [&>*]:hover:text-white transition-all"
        >
          <p>All Posts</p>
          <ArrowRightCircleIcon className="w-4" />
        </Link>
      </section>
    </Layout>
  );
};

export default Home;
