"use client";

import { Suspense, useEffect } from "react";

import { usePolling } from "@/lib/usePolling";
import { usePostViews } from "@/lib/usePostViews";
import { LoadingDots } from "./loading";
import { Metric } from "./metric";

export default function ViewCounter({ slug }) {
  const interval = 5000;
  const { shouldPoll, intersectionRef } = usePolling(interval);

  const { views, isLoading, isError, increment } = usePostViews(slug, {
    revalidateOnMount: false,
    refreshInterval: shouldPoll ? interval : 0,
    dedupingInterval: interval,
  });

  useEffect(() => {
    increment();
  }, []);

  return (
    <div className="flex space-x-1" ref={intersectionRef}>
      <Suspense fallback={<LoadingDots />}>
        <Metric key={views} stat={views} />
      </Suspense>
      <p>views</p>
    </div>
  );
}
