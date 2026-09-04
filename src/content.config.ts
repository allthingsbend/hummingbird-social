import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    h1: z.string(),
    tagline: z.string().optional(),
    type: z.enum(['template', 'printable']),
    checkout: z.enum(['etsy', 'lemonsqueezy', 'both']).default('etsy'),
    images: z.array(z.string()).default([]),
    category: z.string(),
    status: z.enum(['live', 'coming-soon']).default('coming-soon'),
    price: z.string().optional(),
    etsyListingId: z.string().optional(),
    etsyUrl: z.string().optional(),
    lemonSqueezyUrl: z.string().optional(),
    formats: z.array(z.string()).default([]),
    pageCount: z.string().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    updated: z.coerce.date(),
    medicalDisclaimer: z.boolean().default(false),
    keywords: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { products };
