import useSWR, { SWRConfiguration } from "swr";
import { getPartialPost } from "./contentlayer";

async function getPopularArticles(): Promise<
  ReturnType<typeof getPartialPost>[]
> {
  const res = await fetch("/api/popular");
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}

export const usePopularArticles = (config?: SWRConfiguration) => {
  const { data, error } = useSWR<ReturnType<typeof getPartialPost>[]>(
    "/api/popular",
    () => getPopularArticles(),
    {
      dedupingInterval: 60000,
      ...config,
    }
  );

  return { topPosts: data, isLoading: !data && !error, isError: !!error };
};
