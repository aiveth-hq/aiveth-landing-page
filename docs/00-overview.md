# Overview — aiveth-landing-page

The public face of Aiveth: tells organizations what Aiveth does and sends them to sign up, sign in,
read the docs, or talk to sales.

## Pages

| Path | Page |
|---|---|
| `/` | Home |
| `/pricing` | Plans — Free, Pro, Business, Enterprise (no prices; Talk to sales) |
| `/security` | Security and compliance (India's DPDP Act, CERT-In log) |
| `/integrations` | Identity providers, sign-in methods, security tools, SDKs, migration |
| `/developers` | OIDC endpoints, standards, guides (links into docs.aiveth.com) |
| `/about`, `/contact` | Company and the four contact addresses |
| `/privacy`, `/terms`, `/dpa`, `/subprocessors` | Legal |
| anything else | 404 |

## What it does NOT do
- No sign-in, no forms that store data, no backend. "Start free" and "Sign in" go to
  `accounts.aiveth.com`; "Talk to sales" opens the visitor's mail app (`mailto:`).
- No cookies of its own (Vercel Web Analytics is cookieless; the theme choice is localStorage).
- No developer documentation — that is `docs.aiveth.com`.

## How it fits

```
visitor ──► aiveth.com (this repo, static, Vercel)
              ├─ Start free / Sign in ──► accounts.aiveth.com  (aiveth-hq/aiveth, Azure India)
              ├─ Docs / API reference ─► docs.aiveth.com      (aiveth-hq/docs, Mintlify)
              └─ Talk to sales ─────────► mailto:sales@aiveth.com
```
