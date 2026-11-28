# ADR-001: A prerendered static site

**Date:** 2026-11
**Status:** Accepted

## Context
Aiveth needed a website fast, in a clean look, that search engines index well and that costs
nothing to run.

## Decision
Vite + React, prerendered to HTML, on Vercel, with one small design system (`src/site/theme.ts`).

## Reasons
- Familiar tooling; nothing new to learn.
- Every route is real HTML: fast first paint, good for search and link previews.
- No server, no database, nothing to secure but static files.

## Rejected alternatives
| Option | Why rejected |
|---|---|
| Next.js | More moving parts than a marketing site needs |
| A page builder (Webflow etc.) | Separate design system; claims not reviewable in git |

## Consequences
- A new route must be added to the prerender list.
- Forms need a separate backend (none yet: Talk to sales is a mailto).
