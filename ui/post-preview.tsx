import { FC } from "react";
import moment from "moment";

enum Status {
  "draft",
  "published",
}

type PostPreviewProps = {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  formattedDate: string;
  status: Status;
  body?: object;
};

export const PostPreview: FC<PostPreviewProps> = ({
  title,
  slug,
  description,
  publishedAt,
  formattedDate,
  status,
  body,
}) => {
  return (
    <>
      <div className="flex flex-col w-full bg-transparent-black drop-shadow-md rounded-md px-4 py-4 hover:bg-transparent-gray">
        <div className="flex flex-col">
          <h5 className="font-['Work_Sans'] text-md">{title}</h5>
          <p className="font-medium text-xs text-gray-100">
            {formattedDate.split(",")[0]}
          </p>
        </div>
        <p className="text-sm opacity-100">{description}</p>
      </div>
    </>
  );
};
