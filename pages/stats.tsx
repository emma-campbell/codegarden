import { useArticleCount } from "@/lib/useArticleCount";
import { useStatistics } from "@/lib/useStatistics";
import { Layout } from "@/ui/layout";
import { Statistic } from "@/ui/statistic";

export const Statistics = () => {
  const {
    views,
    likes,
    viewsIsLoading,
    likesIsLoading,
    viewsIsError,
    likesIsError,
  } = useStatistics();

  const { count, isLoading, isError } = useArticleCount();

  return (
    <Layout>
      <section>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2">Statistics</h1>
        <p>Care about numbers? Check them out below.</p>
      </section>
      <section className="space-y-4">
        <div className="grid space-y-4 md:space-y-0 md:grid-cols-2 md:gap-4">
          <Statistic
            value={viewsIsError ? 0 : views}
            label={"Total Article Views"}
            isLoading={viewsIsLoading}
          />
          <Statistic
            value={likesIsError ? 0 : likes}
            label={"Total Article Likes"}
            isLoading={likesIsLoading}
          />
        </div>
        <Statistic
          value={isError ? 0 : count}
          label={"Articles Written"}
          isLoading={isLoading}
        />
      </section>
    </Layout>
  );
};

export default Statistics;
