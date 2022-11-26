import { Views } from "@/lib/types";
import Link from "next/link";
import { FC } from "react";
import useSWR from "swr";

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
  const { data } = useSWR<Views>(`/api/views/${slug}`);
  const views = data?.total;

  return (
    <>
      <Link href={`/post/${slug}`}>
        <div className="flex flex-col w-full bg-white/10 drop-shadow-md rounded-md px-4 py-4 hover:bg-white/20">
          <div className="flex flex-col">
            <h5 className="text-md font-semibold">{title}</h5>
            <div className="flex flex-row justify-between">
              <p className="font-medium text-xs text-gray-100">
                {formattedDate.split(",")[0]}
              </p>
              <p>{`${views ? new Number(views).toLocaleString() : '–––'} views`}</p>
            </div>
          </div>
          <p className="text-sm opacity-100">{description}</p>
        </div>
      </Link>
    </>
  );
};
