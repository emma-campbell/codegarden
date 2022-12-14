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
      <div className="flex flex-col w-full bg-black/60 drop-shadow-md rounded-md px-4 py-4">
        <div className="flex flex-col">
          <h5 className="text-md font-semibold">{post.title}</h5>
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
        <p className="text-sm opacity-100 pt-2">{post.description}</p>
        <div className="pt-2 flex flex-row justify-between text-xs text-gray-100 font-medium items-center align-center">
          <p>{post.formattedDate.split(",")[0]}</p>
          <Link
            className="transition ease-in-out rounded-md px-2 py-1 hover:scale-[1.03] hover:bg-green-300 hover:text-white"
            href={`/blog/${post.slug}`}
          >
            <button className="flex flex-row content-center">
              <p>Read More</p>
              <ChevronRightIcon className="w-3 font-bold" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
