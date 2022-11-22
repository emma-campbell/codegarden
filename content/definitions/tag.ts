import { defineNestedType } from "contentlayer/source-files";
import { tagNames, tagSlugs } from "../../lib/contentlayer";

export const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: {
      type: "enum",
      required: true,
      options: tagNames,
    },
    slug: {
      type: "enum",
      required: true,
      options: tagSlugs,
    },
  },
}));
