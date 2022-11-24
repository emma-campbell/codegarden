import Link from "next/link";
import { FC } from "react";
import { getPartialPost } from "../lib/contentlayer";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

type SeriesNavProps = {
  series: NonNullable<ReturnType<typeof getPartialPost>["series"]>;
};

export const SeriesNav: FC<SeriesNavProps> = ({ series }) => {
  const published = series.posts?.filter((post) => post.status === "published");

  const index = published?.findIndex((post) => post?.isCurrent);

  const prev = index != 0 ? published?.at(index - 1) : null;
  const next = index + 1 < published?.length ? published?.at(index + 1) : null;

  return (
    <div className="grid grid-rows-1 grid-cols-2 gap-x-3">
      {prev ? (
        <Link href={`/post/${prev?.slug}`}>
          <button className="h-48 text-left border-2 border-white/50 rounded-md px-4 py-2 hover:border-white">
            <h4 className="font-medium text-right">{prev?.title}</h4>
            <div className="flex flex-row justify-between">
              <ChevronDoubleLeftIcon className="w-4 text-gray-100 text-left" />
              <span className="text-sm text-right uppercase text-gray-100">
                Previous
              </span>
            </div>
          </button>
        </Link>
      ) : (
        <span></span>
      )}
      {next ? (
        <Link href={`/post/${next?.slug}`}>
          <button className="h-48 w-full text-left border-2 border-white/50 rounded-md px-4 py-2 hover:border-white">
            <h4 className="font-medium">{next?.title}</h4>
            <div className="flex flex-row justify-between">
              <span className="text-sm uppercase text-gray-100 text-left">
                Next
              </span>
              <ChevronDoubleRightIcon className="w-4 text-gray-100 text-right" />
            </div>
          </button>
        </Link>
      ) : (
        <span></span>
      )}
    </div>
  );
};
