import { usePolling } from "@/lib/usePolling";
import { usePostLikes } from "@/lib/usePostLikes";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { LoadingDots } from "./loading";
import { Metric } from "./metric";

export default function LikeCounter({ slug }) {
  const interval = 5000;
  const { shouldPoll, intersectionRef } = usePolling(interval);

  const { user, likes, isError, isLoading, increment, decrement } =
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
