import { defineNestedType } from "contentlayer/source-files";

export const ReadingTime = defineNestedType(() => ({
  name: "ReadingTime",
  fields: {
    minutes: {
      type: "number",
      required: true
    },
    words: {
      type: "number",
      required: true
    }
  }
}))