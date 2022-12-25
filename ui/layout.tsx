import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import { useWindowScroll } from "react-use";

import { Footer } from "./footer";
import { Navigation } from "./navigation";

import isMobile from "@/lib/isMobile";

const GradientBackground = () => {
  const { y } = useWindowScroll();

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="h-full blur-xl bg-[url('https://res.cloudinary.com/emmacampbell/image/upload/v1668909709/bgblur_u33jee.png')] bg-no-repeat bg-top bg-center will-change-transform"
          style={{
            transform: `translateY(${Math.min(y / 3, 167)}px)`,
          }}
        ></div>
      </div>
    </>
  );
};

export enum NavAlign {
  LEFT,
  RIGHT,
}

type LayoutProps = {
  children?: ReactNode;
  alignNav?: NavAlign;
};

export const Layout: FC<LayoutProps> = ({ children, alignNav }) => {
  let animation = {
    initial: {
      x: isMobile ? undefined : 300,
      opacity: 0,
    },
    animate: {
      x: isMobile ? undefined : 0,
      opacity: 1,
    },
    exit: {
      x: isMobile ? undefined : 300,
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
      <motion.div
        className="relative z-10 overflow-hidden grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-32 font-sans text-base text-white/90 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={animation.transition}
      >
        <Navigation align={alignNav} />
      </motion.div>
      <motion.main
        className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-12 font-sans text-base text-white/90 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={animation.transition}
      >
        {children}
        <Footer />
      </motion.main>
      {/* <GradientBackground /> */}
    </>
  );
};
