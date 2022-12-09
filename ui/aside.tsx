import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";

export const Aside = ({
  children,
  position = "left",
  styled = false,
  title,
}: {
  children: React.ReactNode;
  position?: "left" | "right";
  styled?: boolean;
  title?: string;
}) => {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }}
      className={clsx("relative", {
        "xl:!col-start-2": position === "left",
        "xl:!col-start-4": position === "right",
      })}
    >
      <div
        className={clsx("relative xl:absolute xl:top-0 xl:left-0 xl:right-0", {
          "z-10 border-l-2 border-white/5 bg-gray-100 pl-4 shadow-[0_0_30px_20px] shadow-gray-200 xl:border-t-2 xl:border-l-0 xl:py-6 xl:pl-0":
            styled,
        })}
      >
        {title ? (
          <div className="mb-2 text-base italic text-opacity-100">{title}</div>
        ) : null}
        <div
          className={clsx({
            "text-sm italic text-white/60 [&>span[data-rehype-pretty-code-fragment]]:!text-[11px]":
              styled,
          })}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
};
