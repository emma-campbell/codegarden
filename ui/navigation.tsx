import { FC, ReactNode } from "react";
import { NavAlign } from "./layout";

export type NavigationItem = {
  name?: string;
  icon?: string | ReactNode;
  url: string;
};

type NavigationProps = {
  items?: NavigationItem[];
  align?: NavAlign;
};

export const Navigation: FC<NavigationProps> = ({ items, align }) => {
  return (
    <div className={`flex flex-row justify-${align == NavAlign.LEFT ? 'start' : 'end'} space-x-5`}>
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
