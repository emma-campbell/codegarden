"use client";

import { usePopularArticles } from "@/lib/usePopularArticles";
import { getPosts } from "@/lib/content";
import { Layout } from "@/ui/layout";
import { NavAlign, NavigationItem } from "@/ui/layout/navigation";
import { PostList } from "@/ui/post/list";
import { SearchInput } from "@/ui/search";
import classNames from "classnames";
import { ChangeEvent, FC, useState } from "react";

const nav: NavigationItem[] = [
  {
    label: "Home",
    url: "/",
  },
];

export const Blog = ({ posts }: { posts: ReturnType<typeof getPosts> }) => {
  const [search, setSearch] = useState("");

  const [showTopPosts, setShowTopPosts] = useState(true);
  const [results, setResults] = useState(posts);

  const { topPosts, isLoading, isError } = usePopularArticles();

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
        ? posts?.filter((p) => {
            return p.title.toLowerCase().includes(e.target.value.toLowerCase());
          })
        : posts
    );
  };

  return (
    <Layout navItems={nav} alignNav={NavAlign.RIGHT}>
      <section>
        <h1 className="text-3xl w-fit md:text-4xl font-bold font-[Cal Sans] pb-2">
          Blog
        </h1>
        <div className="space-y-2">
          <p className="text-white/80">
            I&apos;ve written {posts?.length} articles since I started this blog
            in November 2022. I write about things like web development, health
            information technology, and managing chronic illness.
          </p>
          <p className="text-white/80 pb-4">
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
        <h2 className="text-xl md:text-2xl font-bold font-[Cal Sans]">
          Popular Posts
        </h2>
        <PostList posts={topPosts} />
      </section>
      <section className="w-full space-y-5">
        <h2 className="text-xl md:text-2xl font-bold font-[Cal Sans]">
          All Posts
        </h2>
        <PostList posts={results} />
      </section>
    </Layout>
  );
};

export default Blog;
