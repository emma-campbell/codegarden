import { useStatistics } from "@/lib/useStatistics";
import { Layout } from "@/ui/layout";
import { Statistic } from "@/ui/statistic";

export const Statistics = () => {
  const { views, likes, isLoading, isError } = useStatistics();

  return (
    <Layout>
      <section>
        <h1 className="text-4xl font-black mb-6">Statistics</h1>
        <p>Care about numbers? Check them out below.</p>
      </section>
      <section>
        <div className="grid xl:grid-cols-2 xl:gap-4">
          <Statistic
            value={views}
            label={"Total Article Views"}
            isLoading={true}
          />
          <Statistic value={likes} label={"Total Article Likes"} />
        </div>
      </section>
    </Layout>
  );
};

export default Statistics;
