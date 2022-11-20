import { FC } from "react";
import moment from "moment";

type CardProps = {
  title: string;
  content: string;
  slug: string;
  published: moment.Moment;
};

export const Card: FC<CardProps> = ({ title, content, slug, published }) => {
  return (
    <>
      <div className="container w-full bg-transparent-black drop-shadow-md rounded-md px-4 py-4">
        <div className="flex flex-col">
          <h5 className="font-['Work_Sans'] text-sm">{title}</h5>
          <p className="font-medium text-xs text-gray-200">
            {published.format("MMM Do")}
          </p>
        </div>
        <p className="text-xs opacity-100">{content}</p>
      </div>
    </>
  );
};
