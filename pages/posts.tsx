import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Layout } from "../ui/layout";
import { PostPreview } from "../ui/post-preview";
import { Search } from "../ui/search";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  }).filter(p => p.status === "published");

  return { props: { posts } };
}

export const Posts = ({ posts }) => {
  return (
    <Layout>
      <section className="flex flex-col w-full justify-start pb-5 align-bottom">
        <div className="flex flex-row w-full space-x-2">
          <h1 className="text-4xl font-black pb-4">
            Posts ✏️
          </h1>
        </div>
        {/* <div className="flex flex-col space-y-5">
          <Search />
        </div> */}
      </section>
      <section className="w-full space-y-5">
        {posts?.map((article) => {
          return (
            <div key={article.slug}>
              <PostPreview
                title={article.title}
                description={article.description}
                publishedAt={article.publishedAt}
                formattedDate={article.formattedDate}
                slug={article.slug}
                status={article.status}
              />
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Posts;
