import { FC } from "react";
import moment from "moment";

type PostPreviewProps = {
  title: string;
  content: string;
  slug: string;
  published: moment.Moment;
};

export const PostPreview: FC<PostPreviewProps> = ({ title, content, slug, published }) => {
  return (
    <>
      <div className="container w-full bg-transparent-black drop-shadow-md rounded-md px-4 py-4 hover:bg-transparent-gray">
        <div className="flex flex-col">
          <h5 className="font-['Work_Sans'] text-sm">{title}</h5>
          <p className="font-medium text-xs text-gray-100">
            {published.format("MMM Do")}
          </p>
        </div>
        <p className="text-xs opacity-100">{content}</p>
      </div>
    </>
  );
};
