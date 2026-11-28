# Configuration — aiveth-landing-page

There are no environment variables and no secrets. Everything a page links to is in
`src/lib/links.ts`:

| Constant | Value | Used for |
|---|---|---|
| `APP` | `https://accounts.aiveth.com` | Production Aiveth |
| `CONSOLE` | `APP + /console` | "Sign in" |
| `SIGN_UP` | `APP + /signup` | "Start free" |
| `DOCS` | `https://docs.aiveth.com` | Docs links |
| `SALES_EMAIL` | `sales@aiveth.com` | Talk to sales (`salesMail()` builds the mailto) |
| `SUPPORT_EMAIL` | `support@aiveth.com` | Contact |
| `SECURITY_EMAIL` | `security@aiveth.com` | Disclosure, security.txt |
| `PRIVACY_EMAIL` | `privacy@aiveth.com` | Grievance officer, DPA requests |

SEO: `src/lib/seo.ts` (`SITE.url = https://aiveth.com`, default share image `/og-aiveth.png`).
