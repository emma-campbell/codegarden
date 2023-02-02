import { useArticleCount } from "@/lib/useArticleCount";
import { usePopularArticles } from "@/lib/usePopularArticles";
import classNames from "classnames";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { ChangeEvent, useState } from "react";
import { Layout } from "../ui/layout";
import { PostPreview } from "../ui/post-preview";
import { SearchInput } from "../ui/search";

export async function getStaticProps() {
  const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    })
    .filter((p) => p.status === "published");

  return { props: { posts } };
}

export const Blog = ({ posts }) => {
  const [search, setSearch] = useState("");

  const [showTopPosts, setShowTopPosts] = useState(true);
  const [results, setResults] = useState(posts);

  const { topPosts, isLoading, isError } = usePopularArticles();
  const {
    count,
    isLoading: countIsLoading,
    isError: countIsError,
  } = useArticleCount();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != "") {
      setShowTopPosts(false);
    } else {
      setShowTopPosts(true);
    }
    e.preventDefault();
    setSearch(e.target.value);

    setResults(
      e.target.value != ""
        ? posts.filter((p) => {
            return p.title.toLowerCase().includes(e.target.value.toLowerCase());
          })
        : posts
    );
  };

  return (
    <Layout>
      <section className="flex flex-col ">
        <h1 className="text-3xl w-fit md:text-4xl font-extrabold font-[Raleway] bg-clip-text text-transparent bg-gradient-to-r from-blue to-purple">
          Blog
        </h1>
        <div className="space-y-2">
          <p className="text-white/80">
            I&apos;ve written {count} articles since I started this blog in
            November 2022. I write about things like web development, health
            information technology, and managing chronic illness.
          </p>
          <p className="text-white/80">
            Use the search bar below to filter articles by their titles.
          </p>
          <div className="flex flex-col space-y-5">
            <SearchInput search={search} onChange={onChange} />
          </div>
        </div>
      </section>
      <section
        className={classNames(
          "w-full space-y-5",
          showTopPosts ? null : "hidden"
        )}
      >
        <h2 className="text-xl md:text-2xl font-bold">Popular Posts</h2>
        {topPosts?.map((article) => {
          return <PostPreview key={article?.slug} post={article} />;
        })}
      </section>
      <section className="w-full space-y-5">
        <h2 className="text-xl md:text-2xl font-bold">All Posts</h2>
        {results?.map((article) => {
          return <PostPreview key={article.slug} post={article} />;
        })}
      </section>
    </Layout>
  );
};

export default Blog;
