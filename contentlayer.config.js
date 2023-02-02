import { makeSource } from "contentlayer/source-files";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import {
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from "./lib/rehypePrettyCode";

import { Post } from "./content/definitions/post";
import { Book } from "./content/definitions/book";

import { HEADING_LINK_ANCHOR } from "./lib/constants";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Book],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: [HEADING_LINK_ANCHOR],
          },
        },
      ],
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypePrettyCodeClasses],
    ],
  },
});
