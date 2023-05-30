import "server-only";

import { getPost, getSeries } from "@/lib/content";
import { components } from "@/ui/mdx";
import { TableOfContents } from "@/ui/post/table-of-contents";
import { Series } from "@/ui/series";
import { ViewCounter } from "@/ui/view-counter";
import { allPosts } from "contentlayer/generated";
import moment from "moment";
import { getMDXComponent } from "next-contentlayer/hooks";
import { Suspense } from "react";

export async function generateStaticParams() {
  return allPosts
    .filter((p) => p.status != "draft")
    .map((p) => {
      slug: p.slug;
    });
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  return {
    title: `${post.title} | Emma Campbell`,
    description: post.description,
    authors: {
      name: "Emma Campbell",
      url: "https://emmacampbell.dev",
    },
    keywords: post.tags?.map((tag) => tag.value),
    creator: "Emma Campbell",
    twitter: {
      card: "summary_large_image",
      creator: "@spoonsandcode",
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const post: NonNullable<ReturnType<typeof getPost>> = getPost(slug);
  const Content = getMDXComponent(post.body.code);

  return (
    <div className="space-y-2">
      <section>
        <h1 className="font-bold font-heading text-5xl sm:text-[72px] leading-extra-tight relative max-w-4xl pb-2">
          {post.title}
        </h1>
        <div className="mt-2 flex space-x-1 text-xs text-white/60 sm:text-lg font-mono font-semibold">
          <p>{moment(post.published).format("MMM Do, YYYY")}</p>
          <p>•</p>
          <ViewCounter slug={slug} track={true} />
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <TableOfContents headings={post.headings} path={`/blog/${post.slug}`} />

        {/* Post Series */}
        {post.series != null ? (
          <Series
            series={getSeries(post.series.title, post.slug)}
            interactive={true}
            current={slug}
          />
        ) : null}

        {/* Post Content */}
        <div className="space-y-4 font-medium text-white/80 [&_h1,h2,h3,h4]:text-white">
          <Content components={components} />
        </div>
      </Suspense>
    </div>
  );
};

export default Page;
