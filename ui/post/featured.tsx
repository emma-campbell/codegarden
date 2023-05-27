import { headers } from "next/headers";
import Link from "next/link";

import { ViewCounter } from "@/ui/view-counter";
import { Post } from "contentlayer/generated";
import moment from "moment";
import { Suspense } from "react";
import { PostPreviewLoading } from "./loading";

async function getFeaturedPost(): Promise<Post> {
  const data = headers();
  const protocol = data.get("x-forwarded-proto");
  const host = data.get("host");

  const res = await fetch(`${protocol}://${host}/best`, {
    cache: "reload",
  });
  return res.json();
}

export async function FeaturedPost() {
  const data = await getFeaturedPost();

  return (
    <Suspense fallback={<PostPreviewLoading />}>
      <Link
        href={`/blog/${data.slug}`}
        className="transition-all [&_h4]:hover:underline transform hover:scale-[1.02] transition-all"
      >
        <div className="flex flex-col bg-black rounded-lg justify-between h-full">
          <div className="tracking-tight mb-6">
            <h4 className="font-bold font-heading w-full text-xl font-bold font-heading">
              {data.title}
            </h4>
            <div className="text-white/50 text-sm font-mono flex font-semibold space-x-2">
              <p>{moment(data.published).format("MMM Do, YYYY")}</p>
              <p>•</p>
              <ViewCounter slug={data.slug} track={false} />
            </div>
          </div>
        </div>
      </Link>
    </Suspense>
  );
}
