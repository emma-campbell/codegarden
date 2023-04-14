"use client";

import { useArticleCount } from "@/lib/useArticleCount";
import { useStatistics } from "@/lib/useStatistics";
import {
  ArrowTrendingUpIcon,
  HeartIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { Suspense } from "react";
import { LoadingDots } from "@/ui/loading";
import { Metric } from "@/ui/metric";

export const SiteMetrics = () => {
  const { views, likes } = useStatistics();
  const { count, isError } = useArticleCount();
  return (
    <>
      <div className="flex gap-2 font-[Lato] text-white/60">
        <ArrowTrendingUpIcon className="w-5" />
        <div className="flex space-x-1">
          <Suspense fallback={<LoadingDots />}>
            <Metric stat={views} />
          </Suspense>
          <p>views</p>
        </div>
      </div>

      <div className="flex gap-2 font-[Lato] text-white/60">
        <PencilSquareIcon className="w-5" />
        <div className="flex space-x-1">
          <Suspense fallback={<LoadingDots />}>
            <Metric stat={count} />
          </Suspense>
          <p>articles</p>
        </div>
      </div>

      <div className="flex gap-2 font-[Lato] text-white/60">
        <HeartIcon className="w-5" />
        <div className="flex space-x-1">
          <Suspense fallback={<LoadingDots />}>
            <Metric stat={likes} />
          </Suspense>
          <p>likes</p>
        </div>
      </div>
    </>
  );
};
