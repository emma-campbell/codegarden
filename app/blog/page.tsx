import { Layout } from "@/ui/layout";
import { NavAlign, NavigationItem } from "@/ui/layout/navigation";
import { BlogPostList } from "@/ui/post/blog-list";
import { Post, allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Writing | Emma Campbell",
  description: "Search through the articles I have written.",
};

const nav: NavigationItem[] = [
  {
    label: "Home",
    url: "/",
  },
];

async function getPopularPosts(): Promise<Post[]> {
  const data = headers();
  const protocol = data.get("x-forwarded-proto");
  const host = data.get("host");

  const res = await fetch(`${protocol}://${host}/popular`);
  return res.json();
}

const Page = async () => {
  const popular = await getPopularPosts();

  return (
    <Layout navItems={nav}>
      <section>
        <h1 className="text-3xl w-fit md:text-4xl font-bold font-[Cal Sans] pb-2">
          Blog
        </h1>
        <div className="space-y-2">
          <p className="text-white/80">
            I&apos;ve written {allPosts?.length} articles since I started this
            blog in November 2022. I write about things like web development,
            health information technology, and managing chronic illness.
          </p>
          <p className="text-white/80">
            Use the search bar below to filter articles by their titles.
          </p>
        </div>
      </section>
      <BlogPostList popular={popular} />
    </Layout>
  );
};

export default Page;
