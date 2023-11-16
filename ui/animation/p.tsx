"use client";

import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { AnimatedComponentProps } from "./props";

export const AnimatedText: FunctionComponent<AnimatedComponentProps> = ({
  animate,
  initial,
  transition,
  variants,
  children,
  className,
}) => {
  return (
    <motion.p
      className={className}
      animate={animate}
      initial={initial}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.p>
  );
};
