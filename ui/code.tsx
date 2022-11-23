import { Aside } from "./aside";
import clsx from "clsx";
import React from "react";

// There are probably better ways to do this 🥴
export const Code = ({ children }: { children: React.ReactNode }) => {
  const [slide, setSlide] = React.useState(0);

  let titles: string[] = [];

  if (React.Children.count(children) === 0) {
    return null;
  }

  const slides = React.Children.map(children, (child, index) => {
    if (
      !React.isValidElement(child) ||
      typeof child.props?.["data-rehype-pretty-code-fragment"] === "undefined"
    ) {
      return null;
    }

    if (
      typeof child.props.children?.[0]?.props?.[
        "data-rehype-pretty-code-title"
      ] !== "undefined"
    ) {
      let title = child.props.children[0].props.children.split("/");
      titles.push(title[title.length - 1]);
    }

    return (
      <div
        key={index}
        className={clsx({
          block: index === slide,
          hidden: index !== slide,
        })}
      >
        {child}
      </div>
    );
  });

  return (
    <>
      <Aside>
        <div className="mb-2 text-sm font-medium">Select a file</div>
        <div className="flex flex-wrap">
          {titles.map((title, index) => {
            return (
              <button
                key={index}
                className={clsx(
                  "mr-2 mb-2 rounded-lg px-2 py-1 text-sm font-medium",
                  {
                    "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white":
                      index !== slide,
                    "bg-white/30 text-white": index === slide,
                  }
                )}
                onClick={() => setSlide(index)}
              >
                {title}
              </button>
            );
          })}
        </div>
      </Aside>

      <div>{slides}</div>
    </>
  );
};
