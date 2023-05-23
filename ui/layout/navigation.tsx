"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/about": {
    name: "about",
  },
};

export const Navigation = () => {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 p-y-0">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row md:flex-col items-start relative px-8 md:px-0 pb-0 fade scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="font-heading font-bold text-[40px] flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path == pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    "transition-all hover:text-white/95 flex align-middle",
                    {
                      "text-white/60": !isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
};
