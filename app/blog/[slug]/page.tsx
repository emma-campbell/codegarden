import "server-only";

import { getPost, getSeries } from "@/lib/content";
import { Layout } from "@/ui/layout";
import { components } from "@/ui/mdx";
import { TableOfContents } from "@/ui/post/table-of-contents";
import { Series } from "@/ui/series";
import { ViewCounter } from "@/ui/view-counter";
import { allPosts } from "contentlayer/generated";
import moment from "moment";
import { getMDXComponent } from "next-contentlayer/hooks";
import { Suspense } from "react";

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
  return allPosts.map((p) => {
    slug: p.slug;
  });
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post: NonNullable<ReturnType<typeof getPost>> = getPost(slug);
  const Content = getMDXComponent(post.body.code);

  return (
    <>
      <Layout alignNav="left" navItems={NavItems}>
        {/* Title of the Post */}
        <div className="xl:!col-end-5">
          <h1 className="text-3xl md:text-5xl font-bold font-[Cal Sans]">
            {post.title}
          </h1>
          <div className="mt-2 flex space-x-1 text-xs text-white/50 sm:text-lg">
            <p>{moment(post.published, "YYYY-mm-dd").format("MMM Do, YYYY")}</p>
            <p>•</p>
            <ViewCounter slug={slug} track={true} />
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <TableOfContents
            headings={post.headings}
            path={`/blog/${post.slug}`}
          />

          {/* Post Series */}
          {post.series != null ? (
            <Series
              series={getSeries(post.series.title, post.slug)}
              interactive={true}
              current={slug}
            />
          ) : null}

          {/* Post Content */}
          <Content components={components} />
        </Suspense>
      </Layout>
    </>
  );
};

export default Page;
