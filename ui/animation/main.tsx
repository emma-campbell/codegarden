"use client";

import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { AnimatedComponentProps } from "./props";

export const AnimatedMain: FunctionComponent<AnimatedComponentProps> = ({
  animate,
  initial,
  transition,
  variants,
  children,
  className,
}) => {
  return (
    <motion.main
      className={className}
      animate={animate}
      initial={initial}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.main>
  );
};
