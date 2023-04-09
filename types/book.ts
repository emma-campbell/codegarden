import { SanityImage } from "./sanity-image";
import { SanityImageAssetDocument } from "@sanity/client";

export enum BookType {
  BOOK = "book",
  ARTICLE = "article",
}

export enum BookStatus {
  QUEUED = "queued",
  IN_PROGRESS = "in progress",
  COMPLETE = "complete",
}

export interface Book {
  title: string;
  slug: string;
  authors: string[];
  type: BookType;
  cover?: SanityImageAssetDocument;
  image?: string;
  started?: string;
  ended?: string;
  status: BookStatus;
  tags: string[];
}
