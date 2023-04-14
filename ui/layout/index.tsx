"use client";

import { FC, ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "./footer";
import { NavAlign, Navigation, NavigationItem } from "./navigation";

type LayoutProps = {
  children?: ReactNode;
  alignNav?: NavAlign | string;
  navItems?: NavigationItem[];
};

export const Layout: FC<LayoutProps> = ({ children, alignNav, navItems }) => {
  let animation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };

  return (
    <>
      <Analytics />
      <AnimatePresence>
        <motion.div
          className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-24 font-sans text-base text-white/90 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={animation.transition}
        >
          <Navigation align={alignNav} items={navItems} />
        </motion.div>
        <motion.main
          key="main"
          className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-12 font-sans text-base text-white/90 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={animation.transition}
        >
          {children}
          <Footer />
        </motion.main>
      </AnimatePresence>
    </>
  );
};
