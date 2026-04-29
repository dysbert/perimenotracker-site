import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const strField = z.preprocess((value: unknown) => (value == null ? "" : value), z.string());

const strList = z.preprocess((value: unknown) => (Array.isArray(value) ? value : []), z.array(z.string()));

const optionalDate = z.preprocess((value: unknown) => {
  if (value === "" || value === null || value === undefined) return undefined;
  return value;
}, z.coerce.date().optional());

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog", retainBody: true }),
    schema: z.object({
      title: strField,
      description: strField,
      pubDate: optionalDate,
      author: strField,
      tags: strList,
      cluster: strField,
      relatedPosts: strList
    })
  })
};
