import { PostPreview } from "@/ui/post-preview";
import { compareDesc } from "date-fns";
import { Layout } from "@/ui/layout";
import { allPosts } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { generateSocialImage } from "@/lib/createOgImage";

export async function getStaticProps() {
  const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    })
    .filter((p) => p.status === "published");

  return { props: { posts } };
}

export const Home = ({ posts }) => {
  const socialImage: string = generateSocialImage({
    title: `Emma's Digital Garden 🌱`,
    cloudName: "emmacampbell",
    imagePublicId: "social_card.png",
    twitterName: "emmacampbelll14",
  });

  return (
    <Layout>
      <NextSeo
        title={`Emma's Digital Garden 🌱 ${SITE_NAME}`}
        description={SITE_DESCRIPTION}
        openGraph={{
          url: SITE_URL,
          title: SITE_NAME,
          description: SITE_DESCRIPTION,
          images: [
            {
              url: socialImage,
              width: 1200,
              height: 630,
              alt: SITE_NAME,
            },
          ],
        }}
      />
      <section className="flex flex-col w-fit justify-start">
        <div className="flex flex-col">
          <h1 className="text-4xl font-['Montserrat'] font-black pb-4">
            Emma 🤟
          </h1>
        </div>
        <div className="flex flex-col space-y-5">
          <p className="text-sm font-['Work_Sans']">
            I am a 24 year old software engineer living in Arlington, Virginia.
            I have my B.A in Computer Science from the University of Rochester,
            and spend a lot of my time building digital health data systems that
            help facilitate critical research with{" "}
            <a href="https://hugo.health">Hugo Health</a>.
          </p>
          <p className="text-sm font-['Work_Sans']">
            This is a space where I write about the things I learn, the things I
            struggle with, and the things that I feel. As someone who is
            learning to manage chronic illness, I find pride in helping to share
            what I learn, and as someone who tries to take on technical
            challenges daily, I like to share what I find.
          </p>
          <p className="text-sm font-['Work_Sans']">
            Thank you, and welcome to my digital garden 🌱
          </p>
        </div>
      </section>
      <section className="flex flex-col w-fit justify-start">
        <div className="flex flex-row w-full justify-end pb-2 pt-2">
          <h1 className="text-2xl font-['Montserrat'] font-black">
            Latest Writing
          </h1>
        </div>
        {posts?.slice(0, 4).map((article) => {
          return (
            <>
              <div key={article.slug} className="pb-2">
                <PostPreview
                  title={article.title}
                  description={article.description}
                  publishedAt={article.publishedAt}
                  formattedDate={article.formattedDate}
                  slug={article.slug}
                  status={article.status}
                />
              </div>
            </>
          );
        })}
      </section>
    </Layout>
  );
};

export default Home;
