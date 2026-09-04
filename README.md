# Hummingbird Social Studio

Astro site for https://hummingbirdsocialstudio.com.

## Shop

Product content lives in `src/content/products/`. The owned site provides indexable shop and product pages; live purchases currently hand off to the Hummingbird Social Etsy shop.

The optional `.github/workflows/sync-etsy.yml` workflow refreshes price, availability and Etsy images into `src/data/etsy-listings.json`. Until `ETSY_KEYSTRING` and `ETSY_ACCESS_TOKEN` repository secrets are configured, the workflow exits cleanly without changing the site. `ETSY_SHOP_ID` is optional and defaults to HummingbirdSocial shop ID `64335254`.

```bash
npm install
npm run dev
npm run build
```
