import Link from "next/link";
import { FC } from "react";
import { PostMetrics } from "./post-metrics";

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
  formattedDate,
}) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <div className="flex flex-col w-full bg-black/60 drop-shadow-md rounded-md px-4 py-4">
          <div className="flex flex-col">
            <h5 className="text-md font-semibold">{title}</h5>
            <div className="flex flex-row justify-between">
              <p className="font-medium text-sm text-gray-100">
                {formattedDate.split(",")[0]}
              </p>
              <div className="flex flew-row space-x-1 text-gray-100 text-sm">
                <PostMetrics slug={slug} />
              </div>
            </div>
          </div>
          <p className="text-sm opacity-100">{description}</p>
        </div>
      </Link>
    </>
  );
};
