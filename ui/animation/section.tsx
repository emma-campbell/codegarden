"use client";

import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { AnimatedComponentProps } from "./props";

export const AnimatedSection: FunctionComponent<AnimatedComponentProps> = ({
  animate,
  initial,
  transition,
  variants,
  children,
  className,
}) => {
  return (
    <motion.section
      className={className}
      animate={animate}
      initial={initial}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};
