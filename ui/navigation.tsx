import { FC, ReactNode } from "react";

export type NavigationItem = {
  name?: string;
  icon?: string | ReactNode;
  url: string;
};

type NavigationProps = {
  items?: NavigationItem[];
};

export const Navigation: FC<NavigationProps> = ({ items }) => {
  return (
    <div className="flex flex-row justify-end space-x-5">
      {items?.map((item) => {
        return (
          <a
            key={item.name}
            href={item.url}
            className="font-['Work_Sans'] font-semibold text-xl"
          >
            {item.name ? item.name : item.icon}
          </a> 
        );
      })}
    </div>
  );
};
