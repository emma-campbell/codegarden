"use client";

import { useEnabledOnFirstIntersection } from "@/lib/useEnabledOnFirstIntersection";
import cn from "classnames";
import Link from "next/link";
import { FC } from "react";

import { PostMetrics } from "./post-metrics";

type FeaturedPostProps = {
  post: any;
};

export const FeaturedPost: FC<FeaturedPostProps> = ({ post }) => {
  const { enabled, intersectionRef } = useEnabledOnFirstIntersection();

  return (
    <div
      className={cn(
        "transform hover:scale-[1.02] transition-all",
        "rounded-xl w-full bg-gradient-to-r p-1 shadow-surface-elevation-high",
        "from-blue to-purple"
      )}
      ref={intersectionRef}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="flex flex-col bg-black rounded-lg px-4 py-2 justify-between h-full">
          <div className="tracking-tight mb-6">
            <h4 className="font-bold w-full text-lg">{post.title}</h4>
            <p className="text-white/60 text-sm">{post.published}</p>
          </div>
          <div className="flex flex-row space-x-1 text-white/40 text-sm">
            {enabled ? <PostMetrics slug={post.slug} /> : null}
          </div>
        </div>
      </Link>
    </div>
  );
};
