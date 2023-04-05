"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import GithubSlugger from "github-slugger";
import { useRouter } from "next/navigation";

export const TableOfContents = ({
  body,
  path,
}: {
  body: string;
  path: string;
}) => {
  const slugger = new GithubSlugger();
  const router = useRouter();

  const regex = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;
  const headings = Array.from(body.matchAll(regex)).map(({ groups }) => {
    const flag = groups?.flag;
    const content = groups?.content;
    return {
      heading: flag?.length,
      text: content,
      slug: content ? slugger.slug(content) : undefined,
    };
  });

  return (
    <>
      <motion.div
        className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-2 xl:block"
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
      >
        <div className="space-y-6">
          {headings ? (
            <div className="space-y-2 text-sm">
              <div className="uppercase text-white/30">On this page</div>
              {headings.map((heading) => {
                return (
                  <div key={heading.slug}>
                    <a
                      href={`#${heading.slug}`}
                      className={clsx(
                        "block underline-offset-2 transition-all text-white/60 hover:underline hover:text-white",
                        {
                          "pl-2": heading.heading === 2,
                          "pl-4": heading.heading === 3,
                        }
                      )}
                    >
                      {heading.text}
                    </a>
                  </div>
                );
              })}
            </div>
          ) : null}
          <div className="border-t border-white-200"></div>

          <div className="flex w-full justify-end">
            <div>
              <button
                className="text-sm text-gray-100 hover:text-white"
                onClick={() => {
                  window.scrollTo({ top: 0 });
                  // @ts-expect-error
                  router.push(path, { shallow: true });
                }}
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
