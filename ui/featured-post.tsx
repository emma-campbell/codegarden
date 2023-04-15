import cn from "classnames";
import { headers } from "next/headers";
import Link from "next/link";

import moment from "moment";
import { Suspense } from "react";
import { PostPreviewLoading } from "./post/loading";
import { ViewCounter } from "./view-counter";
import { Post } from "contentlayer/generated";

async function getFeaturedPost(): Promise<Post> {
  const data = headers();
  const protocol = data.get("x-forwarded-proto");
  const host = data.get("host");

  const res = await fetch(`${protocol}://${host}/best`);
  return res.json();
}

export async function FeaturedPost() {
  const data = await getFeaturedPost();

  return (
    <Suspense fallback={<PostPreviewLoading />}>
      <div
        className={cn(
          "transform hover:scale-[1.02] transition-all",
          "rounded-xl w-full bg-gradient-to-r p-1 shadow-surface-elevation-high",
          "from-blue to-purple"
        )}
      >
        <Link href={`/blog/${data.slug}`}>
          <div className="flex flex-col bg-black rounded-lg px-4 py-2 justify-between h-full">
            <div className="tracking-tight mb-6">
              <h4 className="font-bold w-full text-lg font-semibold font-[Cal Sans]">
                {data.title}
              </h4>
              <p className="text-white/60 text-sm">
                {moment(data.published).format("MMM Do, YYYY")}
              </p>
            </div>
            <div className="flex flex-row space-x-1 text-white/40 text-sm">
              <ViewCounter slug={data.slug} track={false} />
            </div>
          </div>
        </Link>
      </div>
    </Suspense>
  );
}
