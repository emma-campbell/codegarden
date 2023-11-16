"use client";

import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { AnimatedComponentProps } from "./props";

export const AnimatedHorizontalRule: FunctionComponent<
  AnimatedComponentProps
> = ({ animate, initial, transition, variants, children, className }) => {
  return (
    <motion.hr
      className={className}
      animate={animate}
      initial={initial}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.hr>
  );
};
