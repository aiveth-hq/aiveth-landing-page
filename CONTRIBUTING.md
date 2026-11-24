# Contributing to aiveth-landing-page

## Branches
- `main` is what Vercel serves (once connected). Work on `feat/<short>` or `fix/<short>`, then merge
  to `main`. Never force-push `main`.

## Before every push
```bash
npm run build   # must list every route as prerendered, no TypeScript errors
```
Open the changed pages in both themes and at phone width (375 px) — no sideways scroll.

## Commit format
```
feat: add the integrations page
fix: Okta logo too small
chore: production address is accounts.aiveth.com
docs: update CLAUDE.md
```

## Checklist
- [ ] Every new claim checked against the product code or docs.aiveth.com
- [ ] No prices, no invented customers / numbers / certifications
- [ ] Addresses only from `src/lib/links.ts`
- [ ] New logo: official file, unchanged, rules recorded in `ASSETS.md`
- [ ] New page: route + prerender list + sitemap
- [ ] Legal page changed: "Last updated" date changed
