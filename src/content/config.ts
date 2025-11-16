import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    // SEO enhancements
    author: z.string().default("Suhas Dissanayake"),
    keywords: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    // SEO enhancements
    author: z.string().default("Suhas Dissanayake"),
    keywords: z.array(z.string()).optional(),
  }),
});

const garden = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    // SEO enhancements
    author: z.string().default("Suhas Dissanayake"),
    keywords: z.array(z.string()).optional(),
  }),
});

const tips = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    // SEO enhancements
    author: z.string().default("Suhas Dissanayake"),
    keywords: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blog,
  projects: projects,
  garden: garden,
  tips: tips,
};
