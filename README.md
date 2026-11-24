# aiveth-landing-page

> The public website for Aiveth by Gooclaim — **aiveth.com**.

**Stack:** Vite 5 + React 18 + TypeScript, prerendered to static HTML, hosted on Vercel
**Status:** Active — not yet deployed (Vercel hookup pending)

## What it does

Marketing and legal pages for Aiveth: what the product does, pricing (Free + "Talk to sales"),
security and compliance, integrations, developers, about, contact, privacy policy, terms, the data
processing agreement and the sub-processors list. Every page is prerendered, so search engines and
visitors without JavaScript get the full page.

## Quick start

```bash
npm install          # Node 20+
npm run dev          # http://localhost:5175
npm run build        # typecheck + build + prerender every route into dist/
npm run preview      # serve dist/ locally
```

## Documentation

| Doc | Description |
|-----|-------------|
| [Overview](docs/00-overview.md) | Purpose, pages, what it does not do |
| [Architecture](docs/01-architecture.md) | Build, prerender, theming |
| [Components](docs/02-components.md) | Every file and what it holds |
| [Configuration](docs/05-configuration.md) | Addresses and emails (one file) |
| [Deployment](docs/06-deployment.md) | Vercel and the domain |
| [Testing](docs/08-testing.md) | Build checks before a push |
| [Development](docs/09-development.md) | Adding a page, a logo, a claim |
| [Decisions](docs/10-adr/) | Why it is built this way |
| [Security](docs/11-security.md) | Headers, no cookies, security.txt |
| [Integrations](docs/12-integrations.md) | Vercel Analytics, Google Fonts |

## Related repositories

| Repository | What |
|---|---|
| [aiveth-hq/aiveth](https://github.com/aiveth-hq/aiveth) | The Aiveth service (backend + console) — `accounts.aiveth.com` |
| [aiveth-hq/docs](https://github.com/aiveth-hq/docs) | Developer docs on Mintlify — `docs.aiveth.com` |
| [gooclaim-claimos/gooclaim-hero-landing](https://github.com/gooclaim-claimos/gooclaim-hero-landing) | Gooclaim's website — the design system this site reuses |
