# Architecture — aiveth-landing-page

## Build

```
npm run build
  1. tsc -b                      typecheck
  2. vite build                  client bundle → dist/
  3. vite build --ssr …          server bundle → dist-ssr/entry-server.js
  4. node scripts/prerender.mjs  for each route: render to HTML (+ helmet tags) → dist/<route>/index.html
                                 unknown routes → dist/404.html
```
The browser loads the prerendered HTML first, then React hydrates it (`src/main.tsx`).

## Theming
Colours are CSS variables from `makeTheme(scope, pairs)` (`src/theme/theme.ts`), declared for light
and dark. `index.html` sets `data-theme` before the first paint from the visitor's saved choice or
system setting, so there is no flash and no hydration mismatch. The toggle (`ThemeProvider`) only
flips `data-theme` and saves the choice.

## Layout
`SiteLayout` = `Nav` + page + `Footer`. Legal pages use `LegalLayout` (the `.prose-legal` styles in
`globals.css`). Shared pieces (`Heading`, `Button`, `Check`, `Icon`) are in `src/site/ui.tsx`.

## Motion
`useReveal` fades each top-level section in the first time it scrolls into view — hidden only by
script after hydration, never for reduced-motion visitors. Cards lift slightly on hover (CSS only).

## Decisions
See [10-adr](10-adr/).
