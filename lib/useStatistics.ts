import useSWR, { SWRConfiguration } from "swr";

type Stats = {
  views: number;
  likes: number;
};

async function getTotalViews(): Promise<number> {
  const res = await fetch("/api/views");
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}

async function getTotalLikes(): Promise<number> {
  const res = await fetch("/api/likes");
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return res.json();
}

export const useStatistics = (config?: SWRConfiguration) => {
  const { data: views, error: viewsError } = useSWR<number>(
    `/api/views`,
    () => getTotalViews(),
    {
      dedupingInterval: 60000,
      ...config,
    }
  );

  const { data: likes, error: likesError } = useSWR<number>(
    `/api/likes`,
    () => getTotalLikes(),
    {
      dedupingInterval: 60000,
      ...config,
    }
  );

  return {
    views,
    likes,
    isLoading: !(viewsError && likesError) && !(views && likes),
    isError: !!(viewsError && likesError),
  };
};
