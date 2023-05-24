// import { LoadingDots } from "@/ui/loading";
import { allPosts } from "contentlayer/generated";
import { headers } from "next/headers";
import { Suspense } from "react";

async function getTotalViews(): Promise<number> {
  const data = headers();
  const protocol = data.get("x-forwarded-proto");
  const host = data.get("host");

  const res = await fetch(`${protocol}://${host}/views`, {
    cache: "reload",
  });
  return res.json();
}

const Page = async () => {
  const totalViews = await getTotalViews();

  return (
    <>
      <section className="pb-4">
        <h1 className="font-heading text-5xl sm:text-[96px] leading-extra-tight pb-6">
          Stats
        </h1>
        <p className="font-medium text-white/80">
          Currated statistics regarding the existence of me on the web, and this
          blog.
        </p>
      </section>
      <section className="font-medium text-white/80">
        <p>
          {allPosts.filter((p) => p.status != "draft").length} articles written
        </p>
        <div>
          <Suspense fallback={<p>loading..</p>}>
            <p>{totalViews} total views</p>
          </Suspense>
        </div>
      </section>
    </>
  );
};
export default Page;
