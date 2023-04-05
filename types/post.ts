import Heading from "./heading";
import { SanityImage } from "./sanity-image";
import { Series } from "./series";

export interface Post {
  title: string;
  slug: string;
  published: string;
  image?: SanityImage;
  series: Series[];
  description?: string;
  content: string;
  tags?: string[];
  headings?: Heading[];
  words?: number;
  readingTime?: number;
}
