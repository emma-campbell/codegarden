import Home from "@/container/home";
import { getLatestPost } from "@/lib/sanity";

const Page = async () => {
  const post = await getLatestPost();
  return <Home post={post} />;
};

export default Page;
