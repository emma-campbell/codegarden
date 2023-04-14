import Link from "next/link";
import { PostMetrics } from "@/ui/post-metrics";
import { Suspense } from "react";
import { PostPreviewLoading } from "./loading";
import { getPost } from "@/lib/content";
import moment from "moment";

export const PostPreview = ({
  post,
}: {
  post: NonNullable<ReturnType<typeof getPost>>;
}) => {
  return (
    <>
      <Suspense fallback={<PostPreviewLoading />}>
        <Link
          href={`/blog/${post.slug}`}
          className="flex flex-col w-full [&_h5]:hover:underline transform hover:scale-[1.02] transition-all"
        >
          <div className="flex flex-col">
            <h5 className="text-md font-semibold font-[Cal Sans]">
              {post.title}
            </h5>
            <div className="flex flex-row justify-between font-medium text-white/50 text-sm items-center">
              <div className="flex flex-row space-x-2">
                <p>
                  {moment(post.published, "YYYY-MM-DD").format("MMM Do, YYYY")}
                </p>
                <p>&middot;</p>
                <PostMetrics slug={post.slug} />
                {/* <p>&middot;</p> */}
                {/* <ReadingTime
                minutes={post.readingTime?.minutes}
                words={post.readingTime?.words}
              /> */}
              </div>
            </div>
          </div>
        </Link>
      </Suspense>
    </>
  );
};
