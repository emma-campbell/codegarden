import { getPost, getPosts } from "@/lib/sanity";
import { Post, Series } from "@/types";
import { Layout } from "@/ui/layout";
import LikeCounter from "@/ui/likes-counter";
import { SeriesList } from "@/ui/series";
import ViewCounter from "@/ui/view-counter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/ui/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import {
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from "@/lib/rehypePrettyCode";
import { TableOfContents } from "@/ui/post/table-of-contents";

const NavItems = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/blog",
    label: "Blog",
  },
];

export async function generateStaticParams() {
  const posts: Post[] = await getPosts();
  return posts.map((p) => {
    slug: p.slug;
  });
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post: Post = await getPost(slug);

  return (
    <>
      <Layout alignNav="left" navItems={NavItems}>
        {/* Title of the Post */}
        <div className="xl:!col-end-5">
          <h1 className="text-3xl md:text-5xl font-extrabold">{post.title}</h1>
          <div className="mt-2 flex space-x-1 text-xs text-white/50 sm:text-lg">
            <p>{post.published}</p>
            <p>•</p>
            <ViewCounter slug={slug} />
            <p>•</p>
            <LikeCounter slug={slug} />
          </div>
        </div>

        <TableOfContents body={post.content} path={`/blog/${slug}`} />

        {/* Post Series */}

        {post.series.length > 0 ? (
          <SeriesList
            series={post.series[0]}
            interactive={true}
            current={slug}
          />
        ) : null}

        {/* Post Content */}
        {/* @ts-expect-error */}
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [rehypePrettyCode, rehypePrettyCodeOptions],
                [rehypePrettyCodeClasses],
              ],
            },
          }}
        />
      </Layout>
    </>
  );
};

export default Page;
