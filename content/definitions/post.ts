import { defineDocumentType } from "contentlayer/source-files";
import GithubSlugger from "github-slugger";

import { Tag } from "./tag";
import { Series } from "./series";
import moment from "moment";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string" },
    status: { type: "enum", options: ["draft", "published"], required: true },
    series: {
      type: "nested",
      required: false,
      of: Series,
    },
    tags: {
      type: "list",
      required: false,
      of: Tag,
    },
  },
  computedFields: {
    headings: {
      type: "json",
      resolve: async (doc) => {
        const slugger = new GithubSlugger();

        // https://stackoverflow.com/a/70802303
        const regex = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;

        const headings = Array.from(doc.body.raw.matchAll(regex)).map(
          // @ts-ignore
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              heading: flag?.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );

        return headings;
      },
    },
    formattedDate: {
      type: "string",
      resolve: async (doc) => {
        return moment(doc.publishedAt, "YYYY-MM-DD").format("MMM Do, YYYY").toString();
      },
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        doc._raw.sourceFileName.replace(/\.mdx$/, "");
      },
    },
  },
}));
