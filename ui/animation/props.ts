import { AnimationProps } from "framer-motion";

export type AnimatedComponentProps = AnimationProps & {
  children?: React.ReactNode;
  className?: string;
  href?: string;
};
