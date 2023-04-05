"use client";

import { Series } from "@/types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import cx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
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
  series: Series;
  interactive?: boolean;
  current: string;
};

export const SeriesList: FC<SeriesProps> = ({
  series,
  interactive,
  current,
}) => {
  const [isOpen, setIsOpen] = React.useState(!interactive);
  const index =
    series.items?.findIndex((post) => post.article.slug === current) + 1;

  return (
    <div className="rounded bg-white/10 p-5 shadow-surface-elevation-low lg:px-8 lg:py-7">
      {interactive ? (
        <button
          className="group flex w-full items center text-left"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Title>
            {series?.name}
            <span className="font-normal text-white/50">
              {" "}
              &middot; {index} of {series.items?.length}
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
        <Title>{series.name}</Title>
      )}
      {isOpen && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
            },
            collapsed: {
              opacity: 0,
              height: 0,
            },
          }}
        >
          <hr className="my-5 border-t-2 border-white/5" />

          <ul className="text-base">
            {series.items?.map((post) => (
              <li
                key={post.article.slug}
                className={cx(
                  "relative my-3 pl-7 before:absolute before:left-1 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full",
                  {
                    "before:bg-white/90 before:ring-[3px] before:ring-yellow-300/20 before:ring-offset-1 before:ring-offset-black/10":
                      post.article.slug === current,
                    "before:bg-white/30": post.article.slug !== current,
                    // "before:bg-white/10": post.status !== "published",
                  }
                )}
              >
                {post.article.slug === current ? (
                  <span className="text-white/90">{post.article.title}</span>
                ) : (
                  <Link
                    href={`/blog/${post.article.slug}`}
                    className={cx(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
                  >
                    {post.article.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};
