import { Post } from "@/types";
import Link from "next/link";
import { PostMetrics } from "@/ui/post-metrics";
import { Suspense } from "react";
import { PostPreviewLoading } from "./loading";

export const PostPreview = ({ post }: { post: Post }) => {
  return (
    <>
      <Suspense fallback={<PostPreviewLoading />}>
        <Link
          href={`/blog/${post.slug}`}
          className="flex flex-col w-full [&_h5]:hover:underline transform hover:scale-[1.02] transition-all"
        >
          <div className="flex flex-col">
            <h5 className="text-md font-bold font-[Raleway]">{post.title}</h5>
            <div className="flex flex-row justify-between font-medium text-white/50 text-sm items-center">
              <div className="flex flex-row space-x-2">
                <PostMetrics slug={post.slug} />
                {/* <p>&middot;</p> */}
                {/* <ReadingTime
                minutes={post.readingTime?.minutes}
                words={post.readingTime?.words}
              /> */}
              </div>
            </div>
          </div>
          <p className="text-sm opacity-100 text-white/70 pt-2">
            {post.description}
          </p>
          <div className="pt-2 flex flex-row justify-between text-xs text-white/50 font-medium items-center align-center">
            <p>{post.published}</p>
          </div>
        </Link>
      </Suspense>
    </>
  );
};
