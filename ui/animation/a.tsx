"use client";

import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { AnimatedComponentProps } from "./props";

export const AnimatedLink: FunctionComponent<AnimatedComponentProps> = ({
  animate,
  initial,
  transition,
  variants,
  children,
  className,
}) => {
  return (
    <motion.a
      className={className}
      animate={animate}
      initial={initial}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.a>
  );
};
