import { FC } from "react";
import { getPartialPost } from "@/lib/contentlayer";
import Link from "next/link";
import cn from "classnames";

type FeaturedPostProps = {
  post: NonNullable<ReturnType<typeof getPartialPost>>;
  gradient?: string;
};

export const FeaturedPost: FC<FeaturedPostProps> = ({ post, gradient }) => {
  return (
    <Link
      href={`/post/${post.slug}`}
      className={cn(
        "transform hover:scale-[1.01] transition-all",
        "rounded-xl w-full bg-gradient-to-r p-1 surface-elevation-high",
        gradient
      )}
    >
      <div className="flex flex-col bg-black rounded-lg px-4 py-2 justify-between h-full">
        <div className="tracking-tight mb-6">
          <h4 className="font-bold w-full">{post.title}</h4>
          <p className="text-gray-100 text-xs">{post.formattedDate}</p>
        </div>
      </div>
    </Link>
  );
};
