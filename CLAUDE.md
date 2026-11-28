# aiveth-landing-page — Project Memory
> Committed to git. Shared by all engineers. Keep under 120 lines.

## What this is
The public website **aiveth.com** for *Aiveth* (sign-in and access control for organizations).
Vite + React + TS, prerendered (`scripts/prerender.mjs`), Vercel. Not the product: the product lives
at `accounts.aiveth.com` (repo `aiveth-hq/aiveth`), docs at `docs.aiveth.com` (repo `aiveth-hq/docs`).

## Rules
- 🔴 **Aiveth is its own product** (founder 2026-11-28): never "by Gooclaim", never a Gooclaim link,
  logo or name on any page. The legal entity is **Aiveth Labs Private Limited** (Terms, Privacy, DPA, footer).
- 🔴 **Every claim must be true in the product.** Before adding a feature line, find it in the
  product code (`aiveth-hq/aiveth`) or the developer docs. No invented numbers, customers,
  certifications (no SOC 2 / ISO badges — we have none), or uptime figures.
- 🔴 **No prices.** Paid plans are "Custom" + "Talk to sales" (founder 2026-11-24). Free is free.
  `src/pages/Pricing.tsx` mirrors the product's `plans.py` (features, users, apps, support) — keep equal.
- 🔴 **Production data stays in India** (founder's guarantee). The sub-processors table names the
  small exceptions (Cloudflare bot check; PostHog when switched on).
- **Logos only from the owner, unchanged, only where its rules allow** — see `ASSETS.md`. Google,
  Microsoft and Truecaller appear only as sign-in buttons ("Sign in with …" / "Continue with …").
  Splunk, Workday, AWS, Entra/Workspace: names only.
- **One place for addresses:** `src/lib/links.ts` (APP = `https://accounts.aiveth.com`, docs,
  sales/support/security/privacy emails). Never hard-code an address in a page.
- **Colours are tokens**, light + dark, via `makeTheme` (`src/site/theme.ts`); never `dark ? a : b`.
- Say "organization", never "company", in page text. English only; sentence-case headings.
- Legal pages (Privacy, Terms, DPA) are drafts until a lawyer reviews them; change their
  "Last updated" date when the text changes.
- Files under 500 lines.

## Commands
```bash
npm run dev       # :5175
npm run build     # tsc + vite build + SSR build + prerender (must print every route)
npx tsc --noEmit  # typecheck only
```

## Gotchas
- 🔴 Never write the title tag's name inside a comment in `index.html`: the prerender cuts from the
  first title tag it finds and the page renders blank.
- `index.html` holds only the page title; SEOHead writes every meta/link per route
  (react-helmet-async appends, so a tag in index.html would be served twice).
- A new page = a route in `src/App.tsx` + `scripts/prerender.mjs` ROUTES + `public/sitemap.xml`.
- Sections fade in on scroll (`useReveal`); a crawler or no-JS visitor still gets everything.
