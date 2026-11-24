# Security — aiveth-landing-page

- **No personal data is collected.** No forms, no accounts. "Talk to sales" opens the visitor's own
  mail app.
- **No cookies of our own.** Vercel Web Analytics is cookieless; the theme choice is kept in
  localStorage and read in a try/catch.
- **Headers** (`vercel.json`): `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`,
  `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`.
- **Disclosure:** `/.well-known/security.txt` → `security@aiveth.com`; renew its `Expires` date
  before 2027-11-24.
- **Third-party code:** React and Vercel's analytics/speed-insights packages only; fonts from Google
  Fonts.
