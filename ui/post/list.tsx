import { Post } from "@/types";
import { PostPreview } from "@/ui/post/preview";

export const PostList = ({ posts }: { posts?: Post[] }) => {
  return (
    <>
      {posts?.map((article) => {
        return <PostPreview key={article.slug} post={article} />;
      })}
    </>
  );
};
