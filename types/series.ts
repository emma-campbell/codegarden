import { Post } from "./post";

export interface SeriesItem {
  article: Partial<Post>;
  order: number;
}
export interface Series {
  name: string;
  id: string;
  items: SeriesItem[];
}
