import React, { FC, ReactNode } from "react";
import { getPartialPost } from "../lib/contentlayer";
import cx from "clsx";
import Link from "next/link";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { FOCUS_VISIBLE_OUTLINE, LINK_STYLES } from "../lib/constants";

type TitleProps = {
  children?: ReactNode;
};

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <div>
      <div className="text-sm uppercase text-white/50">Series</div>
      <div className="text-lg font-medium">{children}</div>
    </div>
  );
};

type SeriesProps = {
  series: NonNullable<ReturnType<typeof getPartialPost>["series"]>;
  interactive?: boolean;
};

export const Series: FC<SeriesProps> = ({ series, interactive }) => {
  const [isOpen, setIsOpen] = React.useState(!interactive);
  const index = series.posts?.findIndex((post) => post?.isCurrent) + 1;

  return (
    <div className="rounded bg-black/10 p-5 shadow-surface-elevation-low lg:px-8 lg:py-7">
      {interactive ? (
        <button
          className="group flex w-full items center text-left"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Title>
            {series?.title}
            <span className="font-normal text-white/50">
              {" "}
              &middot; {index} of {series.posts?.length}
            </span>
          </Title>

          <div className="ml-auto pl-4">
            <div className="rounded-full bg-white/10 p-2 text-white group-hover:bg-white/25">
              {isOpen ? (
                <ChevronUpIcon className="w-5" />
              ) : (
                <ChevronDownIcon className="w-5" />
              )}
            </div>
          </div>
        </button>
      ) : (
        <Title>{series.title}</Title>
      )}
      <div
        className={cx({
          hidden: !isOpen,
          block: isOpen,
        })}
      >
        <hr className="my-5 border-t-2 border-white/5" />

        <ul className="text-base">
          {series.posts?.map((post) => (
            <li
              key={post.slug}
              className={cx(
                "relative my-3 pl-7 before:absolute before:left-1 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full",
                {
                  "before:bg-white/90 before:ring-[3px] before:ring-yellow-300/20 before:ring-offset-1 before:ring-offset-black/10":
                    post.isCurrent,
                  "before:bg-white/30":
                    post.status === "published" && !post.isCurrent,
                  "before:bg-white/10": post.status !== "published",
                }
              )}
            >
              {post.status === "published" ? (
                post.isCurrent ? (
                  <span className="text-white/90">{post.title}</span>
                ) : (
                  <Link
                    href={`/posts/${post.slug}`}
                    className={cx(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
                  >
                    {post.title}
                  </Link>
                )
              ) : (
                <span className="text-white/40">{post.title}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
