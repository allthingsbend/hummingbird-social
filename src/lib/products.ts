import { getCollection, type CollectionEntry } from 'astro:content';
import etsyData from '../data/etsy-listings.json';

export const SITE = 'https://hummingbirdsocialstudio.com';
export const ETSY_SHOP = 'https://hummingbirdsocial.etsy.com';

type EtsyListing = {
  listing_id: number;
  title: string;
  price: string;
  currency: string;
  state: string;
  url: string;
  images: string[];
  quantity: number;
};

const etsyListings = (etsyData.listings ?? {}) as Record<string, EtsyListing>;
export type Product = CollectionEntry<'products'>;

export function slugOf(entry: Product) {
  return entry.id.replace(/\.md$/, '');
}

export function urlOf(entry: Product) {
  return `/shop/${slugOf(entry)}/`;
}

export function resolve(entry: Product) {
  const d = entry.data;
  const live = d.etsyListingId ? etsyListings[d.etsyListingId] : undefined;
  const price = live ? `$${Number(live.price).toFixed(2)}` : d.price ?? '';
  const inStock = live ? live.state === 'active' && live.quantity > 0 : d.status === 'live';

  return {
    ...d,
    slug: slugOf(entry),
    url: urlOf(entry),
    price,
    inStock,
    etsyUrl: d.etsyUrl || (live?.url ?? ''),
    images: live?.images?.length ? live.images : d.images,
    hasDirect: Boolean(d.lemonSqueezyUrl) && d.checkout !== 'etsy',
    isLive: d.status === 'live',
  };
}

export async function allProducts() {
  const entries = await getCollection('products');
  return entries.sort((a, b) => {
    const liveDiff = Number(b.data.status === 'live') - Number(a.data.status === 'live');
    return liveDiff || a.data.order - b.data.order;
  });
}

export async function productsByCategory() {
  const entries = await allProducts();
  const groups: { name: string; items: Product[] }[] = [];
  for (const e of entries) {
    const found = groups.find((g) => g.name === e.data.category);
    if (found) found.items.push(e);
    else groups.push({ name: e.data.category, items: [e] });
  }
  return groups;
}
