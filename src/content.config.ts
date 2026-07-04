import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  author: z.string().default("Suhas Dissanayake"),
  keywords: z.array(z.string()).optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema,
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
  schema,
});

const garden = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/garden" }),
  schema,
});

const achievements = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/achievements" }),
  schema,
});

export const collections = { blog, projects, garden, achievements };
