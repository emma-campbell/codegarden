"use client";

import { motion } from "framer-motion";
import { AnimatedComponentProps } from "./props";
import { FunctionComponent } from "react";

export const AnimatedBody: FunctionComponent<AnimatedComponentProps> = ({
  className,
  animate,
  initial,
  transition,
  variants,
  children,
}) => {
  return (
    <motion.body
      className={className}
      animate={animate}
      initial={initial}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.body>
  );
};
