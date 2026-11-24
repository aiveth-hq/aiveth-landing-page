# Deployment — aiveth-landing-page

## Vercel (planned)
1. Import `aiveth-hq/aiveth-landing-page` in Vercel (framework: Vite).
2. Build command `npm run build`, output directory `dist`.
3. Domains: `aiveth.com` and `www.aiveth.com` (redirect one to the other).
4. In Cloudflare, point the two names at Vercel as Vercel shows (today they point at a parking
   address and must be changed). DNS only (grey cloud).

[TODO: record the Vercel project name and which address is canonical once connected.]

## Checks after a deploy
```bash
curl -sI https://aiveth.com/ | head -5
curl -s https://aiveth.com/sitemap.xml | head
curl -s https://aiveth.com/.well-known/security.txt
```
