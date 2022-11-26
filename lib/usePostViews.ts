import useSWR, { SWRConfiguration } from "swr";
import { Views } from "./types";

const API_URL = `/api/views`;

async function getPostViews(slug: string): Promise<Views> {
  const res = await fetch(API_URL + `/${slug}`);
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}

async function updatePostViews(slug: string): Promise<Views> {
  const res = await fetch(API_URL + `/${slug}`, { method: "POST" });
  if (!res.ok) {
    throw new Error("An error occurred while posting the data.");
  }
  return res.json();
}

export const usePostViews = (slug: string, config?: SWRConfiguration) => {
  const { data, error, mutate } = useSWR<Views>(
    `/api/views/${slug}`,
    () => getPostViews(slug),
    {
      dedupingInterval: 60000,
      ...config,
    }
  );

  const views = data?.total;

  const increment = () => {
    mutate(
      updatePostViews(slug).catch((e) => {
        console.log(e);
        return { total: 0 };
      })
    );
  };

  return {
    views,
    isLoading: !error && !views,
    isError: !!error,
    increment,
  };
};
