"use client";

import classNames from "classnames";
import { PostList } from "./list";
import { ChangeEvent, useState } from "react";
import { Post, allPosts } from "contentlayer/generated";
import { SearchInput } from "../search";

export const BlogPostList = ({ popular }: { popular: Post[] }) => {
  const [search, setSearch] = useState("");

  const [showTopPosts, setShowTopPosts] = useState(true);
  const [results, setResults] = useState(allPosts);

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
        ? allPosts?.filter((p) => {
            return p.title.toLowerCase().includes(e.target.value.toLowerCase());
          })
        : allPosts
    );
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col pb-4">
        <SearchInput search={search} onChange={onChange} />
      </div>
      <section
        className={classNames(
          "w-full space-y-5 pb-4",
          showTopPosts ? null : "hidden"
        )}
      >
        <h2 className="text-xl md:text-2xl font-bold font-[Cal Sans]">
          Popular Posts
        </h2>
        <PostList posts={popular} />
      </section>
      <section className="w-full space-y-5">
        <h2 className="text-xl md:text-2xl font-bold font-[Cal Sans]">
          All Posts
        </h2>
        <PostList posts={results} />
      </section>
    </div>
  );
};
