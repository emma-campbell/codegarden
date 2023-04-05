"use client";

import Link from "next/link";
import { FC, ReactNode } from "react";

export enum NavAlign {
  LEFT = "left",
  RIGHT = "right",
}

export type NavigationItem = {
  url: string;
  label: string;
  icon?: string | ReactNode;
};

type NavigationProps = {
  items?: NavigationItem[];
  align?: NavAlign | string;
};

export const Navigation: FC<NavigationProps> = ({ items, align }) => {
  return (
    <nav
      className={`flex flex-row justify-${
        align == NavAlign.LEFT ? "start" : "end"
      } space-x-5`}
    >
      {items?.map((item) => {
        return (
          <Link
            key={item.label}
            href={item.url}
            className="font-semibold text-xl text-white/80 hover:text-white"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
