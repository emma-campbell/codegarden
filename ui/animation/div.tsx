"use client";

import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { AnimatedComponentProps } from "./props";

export const AnimatedDiv: FunctionComponent<AnimatedComponentProps> = ({
  className,
  animate,
  initial,
  transition,
  variants,
  children,
}) => {
  return (
    <motion.div
      className={className}
      animate={animate}
      initial={initial}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
