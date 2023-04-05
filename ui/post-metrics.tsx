import { usePolling } from "@/lib/usePolling";
import { usePostLikes } from "@/lib/usePostLikes";
import { usePostViews } from "@/lib/usePostViews";
import { Metric } from "ui/metric";
import { LoadingDots } from "ui/loading";
import React from "react";

export const PostMetrics = ({ slug }: { slug: string }) => {
  const interval = 5000;
  const { shouldPoll, intersectionRef } = usePolling(interval);

  const {
    views,
    isLoading: viewsIsLoading,
    isError: viewsIsError,
  } = usePostViews(slug, {
    revalidateOnMount: false,
    refreshInterval: shouldPoll ? interval : 0,
    dedupingInterval: interval,
  });

  const {
    likes,
    isLoading: likesIsLoading,
    isError: likesIsError,
  } = usePostLikes(slug, {
    refreshInterval: shouldPoll ? interval : 0,
  });

  return (
    <>
      <div ref={intersectionRef}>
        {viewsIsError || viewsIsLoading ? (
          <LoadingDots />
        ) : (
          <Metric key={views} stat={views} />
        )}{" "}
        views
      </div>

      <div className="text-white-100/30">&middot;</div>

      <div>
        {likesIsError || likesIsLoading ? (
          <LoadingDots />
        ) : (
          <Metric key={likes} stat={likes} />
        )}{" "}
        likes
      </div>
    </>
  );
};
