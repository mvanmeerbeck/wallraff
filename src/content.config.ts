import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['documentaire', 'reportage', 'presse', 'edition', 'internet']),
      legacyUrl: z.string().optional(),
      publishedAt: z.coerce.date().optional(),
      excerpt: z.string().optional(),
      cover: image().optional(),
      images: z.array(image()).optional().default([]),
      imageAlts: z.record(z.string(), z.string()).optional().default({}),
      youtube: z.string().optional(),
      video: z.string().optional(),
      links: z.array(z.object({ label: z.string(), url: z.string() })).optional().default([]),
      credits: z.record(z.string(), z.union([z.string(), z.number()])).optional().default({}),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    legacyUrl: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }).passthrough(),
});

export const collections = { works, pages };
