"use client";

import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { LoadingDots } from "./loading";
import { Metric } from "./metric";
import { usePostLikes } from "@/lib/usePostLikes";
import { usePolling } from "@/lib/usePolling";

export default function LikeCounter({ slug }) {
  const interval = 5000;
  const { shouldPoll, intersectionRef } = usePolling(interval);
  const { user, likes, isLoading, isError, increment, decrement } =
    usePostLikes(slug, {
      refreshInterval: shouldPoll ? interval : 0,
    });

  return (
    <div className="flex flex-row space-x-2">
      <div ref={intersectionRef}>
        {isError || isLoading ? <LoadingDots /> : <Metric stat={likes} />} likes
      </div>
      <button
        className={`${
          user
            ? "text-blue"
            : "hover:text-white/60 transform hover:scale-[1.1] transition-all"
        }`}
        onClick={() => {
          if (isLoading) return;

          if (user) {
            decrement();
          } else {
            increment();
          }
        }}
      >
        <HandThumbUpIcon className="w-4 md:w-5" />
      </button>
    </div>
  );
}
