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

  return (
    <Layout>
      <section>
        <h1 className="text-4xl font-black mb-6">Statistics</h1>
        <p>Care about numbers? Check them out below.</p>
      </section>
      <section>
        <div className="grid xl:grid-cols-2 xl:gap-4">
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
      </section>
    </Layout>
  );
};

export default Statistics;
