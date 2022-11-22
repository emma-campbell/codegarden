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

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: ReturnType<typeof getPartialPost>;
}> = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: getPartialPost(post, allPosts),
    },
  };
};

const PostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXContent = useMDXComponent(post.body.code);
  const router = useRouter();

  const path = `/post/${post.slug}`;
  const url = `https://emmacampbell.dev${path}`;
  const title = `${post.title} | emmacampbell.dev`;
  const ogImage = generateSocialImage({
    title: post.title,
    cloudName: "emmacampbell",
    imagePublicId: "social_card.png",
    twitterName: "emmacampbelll14",
  });

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
              url: ogImage,
              width: 1600,
              height: 836,
              alt: post.title,
            },
          ],
        }}
      />
      <Layout alignNav={NavAlign.LEFT}>
        <div className="xl:!col-end-5">
          <h1 className="text-2xl font-black xl:text-3xl font-['Montserrat']">
            {post.title}
          </h1>
          <div className="mt-2 flex space-x-2 text-lg text-rose-100/50">
            <div>{post.formattedDate}</div>
          </div>
        </div>

        <div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-2 xl:block">
          <div className="space-y-6">
            {post.headings ? (
              <div className="space-y-2 text-sm">
                <div>
                  {post.headings.map((heading) => {
                    return (
                      <div key={heading.slug}>
                        <a
                          href={`#${heading.slug}`}
                          className={clsx(
                            "block underline-offset-2 transition-all hover:underline",
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
      </Layout>
    </>
  );
};

export default PostPage;
