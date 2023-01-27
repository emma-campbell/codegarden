import classNames from "classnames";
import { Tag } from "contentlayer/generated";
import { FC } from "react";

type TagListProps = {
  tags: Tag[];
};

const gradients = [
  "from-green-300 to-orange-300",
  "from-orange-300 to-yellow-300",
  "from-yellow-300 to-green-300",
];

let count = 0;

const getNextGradient = () => {
  const g = gradients[count];
  count++;
  if (count == gradients.length) count = 0;
  return g;
};

export const TagList: FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap">
      {tags.map((t) => {
        return (
          <div
            key={t.slug}
            className={classNames(
              "transform transition-all",
              "rounded-xl bg-gradient-to-r p-1 shadow-surface-elevation-high mr-2 mt-2",
              getNextGradient()
            )}
          >
            <div className="bg-black rounded-lg px-4 py-2 justify-between h-full">
              <p className="font-medium text-sm">{t.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
