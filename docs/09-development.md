# Development — aiveth-landing-page

## Setup
Node 20+, then `npm install` and `npm run dev` (port 5175).

## Add a page
1. `src/pages/<Name>.tsx` wrapped in `SiteLayout` (or `LegalLayout`), with `<SEOHead>`.
2. Its SEO entry in `src/lib/seo.ts`.
3. Route in `src/App.tsx`, path in `scripts/prerender.mjs` ROUTES, URL in `public/sitemap.xml`.
4. Link it from `Nav` or `Footer` if visitors should find it.

## Add a claim
Find it in the product (`aiveth-hq/aiveth`) or docs.aiveth.com first. If it is a number, a promise
or a legal statement, ask the founder.

## Add a logo
Take the brand owner's official file (or the product console's copy, which already records its
source), keep it unchanged, and add a row to `ASSETS.md` with the rule you follow. Show it on a white
tile so its colours stay correct in dark mode.

## Change the production address
Change `APP` in `src/lib/links.ts`; nothing else hard-codes it.
