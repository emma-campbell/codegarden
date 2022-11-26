import LikeCounter from "@/ui/likes-counter";
import { TagList } from "@/ui/tag-list";
import ViewCounter from "@/ui/view-counter";
import clsx from "clsx";
import { allPosts } from "contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { getPartialPost } from "../../lib/contentlayer";
import { generateSocialImage } from "../../lib/createOgImage";
import { Layout, NavAlign } from "../../ui/layout";
import { components } from "../../ui/mdx";
import { Series } from "../../ui/series";
import { SeriesNav } from "../../ui/series-navigation";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: ReturnType<typeof getPartialPost>;
  image: string;
}> = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const ogImage = generateSocialImage({
    title: post.title,
    date: post.formattedDate,
    imagePublicId: "social_card.png",
    twitterName: "spoonsandcode",
  });

  return {
    props: {
      post: getPartialPost(post, allPosts),
      image: ogImage,
    },
  };
};

const PostPage = ({
  post,
  image,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXContent = useMDXComponent(post.body.code);
  const router = useRouter();

  const path = `/blog/${post.slug}`;
  const url = `https://emmacampbell.dev${path}`;
  const title = `${post.title} | emmacampbell.dev`;

  const meta: any[] = [];
  if (post.tags) {
    meta.push({
      property: "keywords",
      content: post.tags.map(t => t.title).join(','),
    });
  }

  return (
    <>
      <NextSeo
        title={title}
        description={post.description ?? undefined}
        canonical={url}
        openGraph={{
          url,
          title,
          description: post.description ?? undefined,
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
        }}
        twitter={{
          handle: "@spoonsandcode",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={meta}
      />
      <Layout alignNav={NavAlign.LEFT}>
        <div className="xl:!col-end-5">
          <h1 className="text-2xl font-black xl:text-3xl">{post.title}</h1>
          <div className="mt-2 flex space-x-2 text-lg text-white/50">
            <div>{post.formattedDate}</div>
            <p>•</p>
            <ViewCounter slug={post.slug} />
            <p>•</p>
            <LikeCounter slug={post.slug} />
          </div>
        </div>

        <div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-2 xl:block">
          <div className="space-y-6">
            {post.headings ? (
              <div className="space-y-2 text-sm">
                <div className="uppercase text-white/30">On this page</div>
                {post.headings.map((heading) => {
                  return (
                    <div key={heading.slug}>
                      <a
                        href={`#${heading.slug}`}
                        className={clsx(
                          "block underline-offset-2 transition-all text-white/60 hover:underline hover:text-white",
                          {
                            "pl-2": heading.heading === 2,
                            "pl-4": heading.heading === 3,
                          }
                        )}
                      >
                        {heading.text}
                      </a>
                    </div>
                  );
                })}
              </div>
            ) : null}
            <div className="border-t border-white-200"></div>

            <div className="flex w-full justify-end">
              <div>
                <button
                  className="text-sm text-gray-100 hover:text-white"
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                    router.push(path, undefined, { shallow: true });
                  }}
                >
                  Back to top
                </button>
              </div>
            </div>
          </div>
        </div>

        {post.series && post.series.posts.length > 1 ? (
          <Series series={post.series} interactive={true} />
        ) : null}

        <MDXContent
          components={{
            ...components,
          }}
        />

        {post.tags ? <TagList tags={post.tags} /> : null}

        {post.series && post.series.posts.length > 1 ? (
          <SeriesNav series={post.series} />
        ) : null}
      </Layout>
    </>
  );
};

export default PostPage;
