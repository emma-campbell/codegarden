export const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.4,
    },
  },
};

export const content = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "ease",
      duration: 1.5,
    },
  },
};
