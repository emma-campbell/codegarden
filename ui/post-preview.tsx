import { getPartialPost } from "@/lib/contentlayer";
import Link from "next/link";
import { PostMetrics } from "./post-metrics";
import { ReadingTime } from "./reading-time";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export const PostPreview = ({
  post,
}: {
  post: ReturnType<typeof getPartialPost>;
}) => {
  return (
    <>
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col w-full [&_h5]:hover:underline"
      >
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold">{post.title}</h5>
          <div className="flex flex-row justify-between font-medium text-gray-100 text-sm items-center">
            <div className="flex flex-row space-x-2">
              <PostMetrics slug={post.slug} />
              <p>&middot;</p>
              <ReadingTime
                minutes={post.readingTime?.minutes}
                words={post.readingTime?.words}
              />
            </div>
          </div>
        </div>
        <p className="text-md opacity-100 pt-2">{post.description}</p>
        <div className="pt-2 flex flex-row justify-between text-xs text-gray-100 font-medium items-center align-center">
          <p>{post.formattedDate.split(",")[0]}</p>
        </div>
      </Link>
    </>
  );
};
