import Blog from "@/container/blog";
import { getPosts } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Emma Campbell",
  description: "Search through the articles I have written.",
};

const Page = () => {
  const posts = getPosts();
  return <Blog posts={posts} />;
};

export default Page;
