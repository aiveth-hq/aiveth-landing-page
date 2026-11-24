# Components — aiveth-landing-page

```
index.html                 page shell: title, theme script, fonts, favicon
vercel.json                security headers
scripts/prerender.mjs      ROUTES → static HTML
public/                    favicon, og-image, logos/, robots.txt, sitemap.xml, .well-known/security.txt
src/
  main.tsx                 client entry (hydrate)
  entry-server.tsx         SSR render for prerender
  App.tsx                  routes
  theme/                   makeTheme (tokens), ThemeProvider (toggle)
  styles/globals.css       base, .prose-legal, reveal animations, .only-dark/.only-light
  components/SEOHead.tsx   title, description, canonical, Open Graph, Twitter, JSON-LD
  lib/links.ts             every address and email (ONE place)
  lib/seo.ts               SITE + per-page title/description
  lib/structured.ts        JSON-LD (Organization, SoftwareApplication)
  site/                    Nav, Footer, Logo, SiteLayout, LegalLayout, theme, ui, useReveal
  home/                    Hero (sign-in card drawing), Sections (use cases, features, developers,
                           compliance, enterprise, final CTA), Extras (works-with strip, FAQ)
  pages/                   Home, Pricing, Security, Integrations, Developers, Company (About,
                           Contact), Privacy, Terms, Dpa (DPA + Sub-processors), NotFound
```
