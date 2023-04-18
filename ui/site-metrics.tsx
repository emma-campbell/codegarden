"use client";

import { fetcher } from "@/lib/fetcher";
import { LoadingDots } from "@/ui/loading";
import { Metric } from "@/ui/metric";
import {
  ArrowTrendingUpIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { allPosts } from "contentlayer/generated";
import { Suspense } from "react";
import useSWR from "swr";

export const SiteMetrics = () => {
  const { data } = useSWR<Number>("/views", fetcher);
  const count = allPosts.length;

  return (
    <>
      <div className="flex gap-2 font-medium font-[Open Sans] text-white/60">
        <ArrowTrendingUpIcon className="w-5" />
        <div className="flex space-x-1">
          <Suspense fallback={<LoadingDots />}>
            <Metric stat={data as number} />
          </Suspense>
          <p>views</p>
        </div>
      </div>

      <div className="flex gap-2 font-medium font-[Open Sans] text-white/60">
        <PencilSquareIcon className="w-5" />
        <div className="flex space-x-1">
          <Suspense fallback={<LoadingDots />}>
            <Metric stat={count} />
          </Suspense>
          <p>articles</p>
        </div>
      </div>
    </>
  );
};
