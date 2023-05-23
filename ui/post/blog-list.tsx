"use client";

import classNames from "classnames";
import { PostList } from "./list";
import { ChangeEvent, useState } from "react";
import { Post, allPosts } from "contentlayer/generated";
import { SearchInput } from "../search";
import { compareDesc } from "date-fns";

export const BlogPostList = () => {
  const posts = allPosts
    .filter((p) => p.status != "draft")
    .sort((a, b) => {
      return compareDesc(new Date(a.published), new Date(b.published));
    });
  const [search, setSearch] = useState("");

  const [showTopPosts, setShowTopPosts] = useState(true);
  const [results, setResults] = useState(posts);

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
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col pb-4">
        <SearchInput search={search} onChange={onChange} />
      </div>
      <section className="w-full space-y-5">
        <PostList posts={results} />
      </section>
    </div>
  );
};
