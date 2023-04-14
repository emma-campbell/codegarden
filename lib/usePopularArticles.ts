import useSWR, { SWRConfiguration } from "swr";

async function getPopularArticles(): Promise<any[]> {
  const res = await fetch("/popular");
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}

export const usePopularArticles = (config?: SWRConfiguration) => {
  const { data, error } = useSWR<any[]>(
    "/popular",
    () => getPopularArticles(),
    {
      dedupingInterval: 60000,
      ...config,
    }
  );

  return { topPosts: data, isLoading: !data && !error, isError: !!error };
};
