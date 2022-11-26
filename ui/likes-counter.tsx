import { usePolling } from "@/lib/usePolling";
import { usePostLikes } from "@/lib/usePostLikes";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
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
    <div className="flex flex-row space-x-2" ref={intersectionRef}>
      <div ref={intersectionRef}>
        {isError || isLoading ? <LoadingDots /> : <Metric stat={likes} />} likes
      </div>
      <button
        className={`hover:text-white/60 ${user ? "text-blue-300" : ""}`}
        onClick={() => {
          if (isLoading) return;

          if (user) {
            decrement();
          } else {
            increment();
          }
        }}
      >
        <HandThumbUpIcon className="w-5" />
      </button>
    </div>
  );
}
