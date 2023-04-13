import Blog from "@/container/blog";
import { getPosts } from "@/lib/content";

const Page = () => {
  const posts = getPosts();
  return <Blog posts={posts} />;
};

export default Page;
