# aiveth.com

The Aiveth by Gooclaim website — Gooclaim's site design system (Vite + React, prerendered, Vercel).

- `npm run dev` — local, port 5175
- `npm run build` — typecheck, build, prerender every route into `dist/`
- Addresses (sign-in, docs, sales email): `src/lib/links.ts` — ONE place
- Plans: `src/pages/Pricing.tsx` mirrors the product's `plans.py` — keep them equal
- Every claim on the site must be true in the product; check it in the code before adding one.
