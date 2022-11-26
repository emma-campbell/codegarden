import { FC, ReactNode } from "react";
import { NavAlign } from "./layout";
import {
  CommandLineIcon,
  HomeIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export const NAV_ITEMS = [
  {
    icon: <HomeIcon className="w-5" />,
    label: "Home",
    url: "/",
  },
  {
    icon: <PencilSquareIcon className="w-5" />,
    label: "Blog",
    url: "/blog",
  },
  // {
  //   icon: <CommandLineIcon className="w-5" />,
  //   label: "Snippets",
  //   url: "/snippets",
  // },
];

export type NavigationItem = {
  label?: string;
  icon: string | ReactNode;
  url: string;
};

type NavigationProps = {
  items?: NavigationItem[];
  align?: NavAlign;
};

export const Navigation: FC<NavigationProps> = ({ align }) => {
  const { asPath } = useRouter();

  return (
    <div
      className={`flex flex-row justify-${
        align == NavAlign.LEFT ? "start" : "end"
      } space-x-5`}
    >
      {NAV_ITEMS?.map((item) => {
        return asPath != item.url ? (
          <Link
            key={item.label}
            href={item.url}
            className="font-semibold text-xl"
          >
            <span className="text-white/80">{item.label}</span>
            {/* <button className="surface-elevation-low bg-white/10 rounded-full p-2">
            </button> */}
          </Link>
        ) : null;
      })}
    </div>
  );
};
