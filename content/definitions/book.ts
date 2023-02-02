import { defineDocumentType } from "contentlayer/source-files";
import moment from "moment";
import { Tag } from "./tag";

export const Book = defineDocumentType(() => ({
  name: "Book",
  filePathPattern: "books/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    authors: { type: "list", required: true, of: { type: "string" } },
    readingType: { type: "enum", options: ["book", "article"], required: true },
    start: { type: "string", required: false },
    end: { type: "string", required: false },
    status: {
      type: "enum",
      options: ["completed", "in progress", "queued"],
      required: true,
    },
    tags: {
      type: "list",
      required: false,
      of: Tag,
    },
  },
  computedFields: {
    startedAt: {
      type: "string",
      resolve: async (doc) => {
        return moment(doc.start, "YYYY-MM-DD")
          .format("MMM Do, YYYY")
          .toString();
      },
    },
    endedAt: {
      type: "string",
      resolve: async (doc) => {
        return moment(doc.end, "YYYY-MM-DD").format("MMM Do, YYYY").toString();
      },
    },
  },
}));
