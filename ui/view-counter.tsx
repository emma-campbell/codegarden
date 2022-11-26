import { useEffect } from "react";

import { usePolling } from "@/lib/usePolling";
import { usePostViews } from "@/lib/usePostViews";
import { LoadingDots } from "./loading";
import { Metric } from "./metric";

export default function ViewCounter({ slug }) {
  const interval = 5000;
  const { shouldPoll, intersectionRef } = usePolling(interval);

  const {
    views,
    isLoading: viewsIsLoading,
    isError: viewsIsError,
    increment: incrementViews,
  } = usePostViews(slug, {
    revalidateOnMount: false,
    refreshInterval: shouldPoll ? interval : 0,
    dedupingInterval: interval,
  });

  useEffect(() => {
    incrementViews();
  }, []);

  return (
    <div ref={intersectionRef}>
      {viewsIsError || viewsIsLoading ? (
        <LoadingDots />
      ) : (
        <Metric key={views} stat={views} />
      )}{" "}
      views
    </div>
  );
}
