# Testing — aiveth-landing-page

There is no unit-test suite: the site is static content. The gate before a push:

```bash
npm run build      # typecheck, build, prerender — every route must print "✓ prerendered"
```

Then by eye (`npm run dev`):
- every changed page in light and dark;
- phone width (375 px): no sideways scroll;
- links: internal routes open, external ones point where `links.ts` says;
- each prerendered page has ONE description and ONE canonical:
  `grep -c 'name="description"' dist/index.html` → 1.
