import { FC } from "react";

type CardProps = {
  title: string;
  description?: string;
  url?: string;
};

export const FeedCard: FC<CardProps> = ({ title, url, description }) => {
  return (
    <>
      <div className="container w-full bg-transparent-black rounded-md px-4 py-4">
        <div className="flex flex-col justify-start">
          <h5 className="font-['Work_Sans'] font-medium text-4xl">{title}</h5>
        </div>
        <p className="text-xs opacity-100">{description}</p>
      </div>
    </>
  );
};
