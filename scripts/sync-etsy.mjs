#!/usr/bin/env node
/**
 * Pulls active listings from the Etsy shop into src/data/etsy-listings.json,
 * which the site reads at build time. This is the "embed" — the data comes from
 * Etsy, but the HTML is yours, so it renders instantly and Google indexes it.
 *
 * Needs two required env vars (shop ID defaults to HummingbirdSocial):
 *   ETSY_KEYSTRING     — from the Etsy Developer Portal (Seller App)
 *   ETSY_ACCESS_TOKEN  — OAuth token for your own shop
 *   ETSY_SHOP_ID       — optional override; defaults to 64335254
 *
 * Run: node scripts/sync-etsy.mjs
 */

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'etsy-listings.json');

const KEY = process.env.ETSY_KEYSTRING;
const TOKEN = process.env.ETSY_ACCESS_TOKEN;
const SHOP_ID = process.env.ETSY_SHOP_ID || '64335254';

if (!KEY || !TOKEN) {
  console.error('Missing env vars. Need ETSY_KEYSTRING and ETSY_ACCESS_TOKEN.');
  process.exit(1);
}

const API = 'https://openapi.etsy.com/v3/application';
const headers = {
  'x-api-key': KEY,
  Authorization: `Bearer ${TOKEN}`,
};

async function get(path) {
  const res = await fetch(`${API}${path}`, { headers });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} on ${path}\n${await res.text()}`);
  }
  return res.json();
}

async function main() {
  console.log('Fetching active listings...');

  const listings = {};
  let offset = 0;
  const limit = 100;

  while (true) {
    const page = await get(
      `/shops/${SHOP_ID}/listings/active?limit=${limit}&offset=${offset}`
    );

    for (const l of page.results ?? []) {
      const amount = l.price?.amount ?? 0;
      const divisor = l.price?.divisor ?? 100;

      let images = [];
      try {
        const imgs = await get(`/shops/${SHOP_ID}/listings/${l.listing_id}/images`);
        images = (imgs.results ?? [])
          .slice(0, 5)
          .map((i) => i.url_fullxfull ?? i.url_570xN)
          .filter(Boolean);
      } catch (err) {
        console.warn(`  no images for ${l.listing_id}: ${err.message}`);
      }

      listings[String(l.listing_id)] = {
        listing_id: l.listing_id,
        title: l.title,
        price: (amount / divisor).toFixed(2),
        currency: l.price?.currency_code ?? 'USD',
        state: l.state,
        quantity: l.quantity ?? 0,
        url: `https://hummingbirdsocial.etsy.com/listing/${l.listing_id}`,
        images,
      };

      console.log(`  ${l.listing_id}  ${l.title.slice(0, 60)}`);
    }

    if (!page.results || page.results.length < limit) break;
    offset += limit;
  }

  const payload = {
    syncedAt: new Date().toISOString(),
    shop: 'HummingbirdSocial',
    listings,
  };

  await writeFile(OUT, JSON.stringify(payload, null, 2) + '\n');
  console.log(`\nWrote ${Object.keys(listings).length} listings to ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
