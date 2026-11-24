# Third-party logos

Byte-for-byte copies of the files the Aiveth console uses (gooclaim-aiveth `console/ASSETS.md` records
where each was downloaded, unchanged, from the brand owner's own site). They name a sign-in method on the
home page's drawing of the sign-in card; no endorsement is implied.

| File | Brand | Official source | Rule kept |
|---|---|---|---|
| `public/logos/google.png` | Google "G" | https://developers.google.com/identity/branding-guidelines | Standard colours, unchanged, beside the word "Google" |
| `public/logos/microsoft.svg` | Microsoft logo | https://learn.microsoft.com/en-us/entra/identity-platform/howto-add-branding-in-apps | Unchanged, beside the word "Microsoft" |
| `public/logos/github-black.svg`, `github-white.svg` | GitHub Invertocat | https://brand.github.com/foundations/logo | Black on light, white on dark; never recoloured |

All logos are trademarks of their owners.

## Integrations page (`src/pages/Integrations.tsx`)

Logos only where the owner's rules allow naming an integration on a page like this (per the console's
`ASSETS.md`): Okta (Terms of Use for Okta Content), GitHub (permitted logo, black, unchanged), Datadog
(guidelines followed: unchanged, on white), Node.js (OpenJS trademark policy), Python (PSF: encouraged to
show a project uses Python), React (as provided), OpenID wordmark (no published policy; the separate
"OpenID Certified" mark is NOT used), Firebase (unchanged, not misleading). Each shown unchanged on a
white tile.

Names only, never a logo: Google / Google Workspace and Microsoft / Microsoft Entra ID (their logos are
for sign-in buttons only), Splunk and Workday (written permission needed), Amazon S3, Microsoft Sentinel,
JumpCloud, OneLogin, Truecaller.
