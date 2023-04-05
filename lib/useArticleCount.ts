import useSWR, { SWRConfiguration } from "swr";

async function getArticleCount(): Promise<number> {
  const res = await fetch("/count");
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}

export const useArticleCount = (config?: SWRConfiguration) => {
  const { data: count, error } = useSWR<number>(
    `/count`,
    () => getArticleCount(),
    {
      dedupingInterval: 60000,
      ...config,
    }
  );

  return {
    count,
    isLoading: !error && !count,
    isError: !!error,
  };
};
