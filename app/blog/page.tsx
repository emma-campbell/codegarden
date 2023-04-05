import Blog from "@/container/blog";
import { getPosts } from "@/lib/sanity";

const Page = async () => {
  const posts = await getPosts();
  return <Blog posts={posts} />;
};

export default Page;
