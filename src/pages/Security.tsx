import SEOHead from "@/components/SEOHead";
import { DOCS, SECURITY_EMAIL } from "@/lib/links";
import { SEO_SECURITY } from "@/lib/seo";
import SiteLayout from "@/site/SiteLayout";
import { mono, t } from "@/site/theme";
import { Button, Check, Heading, wrap } from "@/site/ui";
import { GridStyle } from "@/home/Sections";

/** Every line here is one the product's own security page states (checked against the code). */
const BLOCKS: { title: string; points: string[] }[] = [
  { title: "Your data stays in India", points: ["Production data is stored and processed in India.", "Aiveth runs as its own service, with its own database, cache, signing keys and address.", "Every organization's data is kept apart; a request that names another organization's record is answered as if it doesn't exist."] },
  { title: "Passwords", points: ["Checked against a list of known breached passwords, following NIST SP 800-63B.", "Stored with Argon2id, never in a form Aiveth can read back.", "Every sign-in takes the same time whether or not the account exists."] },
  { title: "Secrets and keys", points: ["Sensitive values — single sign-on secrets, webhook secrets, phone numbers, log-stream credentials — are encrypted before they are stored.", "API keys are shown once; Aiveth keeps only a SHA-256 fingerprint, and a key can be limited to the addresses it comes from."] },
  { title: "Sessions and cookies", points: ["Session length and idle sign-out are your choice.", "Cookies use the __Host- prefix, and every change made with a cookie must come from Aiveth's own origin.", "Passkeys are bound to Aiveth's own host name."] },
  { title: "Logs without secrets", points: ["Service logs record IDs, not personal data; anything that looks like a secret is masked.", "Every request has an ID you also see in your activity log, so support never needs your data."] },
  { title: "Support access is yours to give", points: ["Aiveth support sees your console only when you turn support access on, only for the time you choose, and only read-only.", "Your Owners are emailed each time it is turned on or off."] },
];

const DPDP: [string, string][] = [
  ["Consent (section 6)", "Notices, purposes, a consent screen, signed receipts, withdrawal, and time-bound purposes."],
  ["Consent Managers", "Accept consent from registered Consent Managers and alert them when it changes."],
  ["Erasure (section 8(7))", "When a purpose ends, an erasure task goes to your app, with legal holds where the law needs one."],
  ["Correction and nominees (sections 12 and 14)", "People ask for a correction or name a nominee from their own rights page."],
  ["Children (Rule 10)", "Verifiable consent from a parent or guardian before a child's account is used."],
  ["Breaches (Rule 7)", "A breach register, and the notices to the Board and to the people affected."],
];

export default function Security() {
  return (
    <SiteLayout>
      <SEOHead seo={SEO_SECURITY} path="/security" />
      <GridStyle />
      <section style={{ borderBottom: `1px solid ${t.border}` }}>
        <div style={{ ...wrap, paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(48px, 6vw, 88px)" }}>
          <Heading eyebrow="Security and compliance" title="Security is never sold as an extra." lead="Every protection on this page is on for every plan, Free included." />
          <div className="av-grid3" style={{ marginTop: 40 }}>
            {BLOCKS.map((b) => (
              <div key={b.title} style={{ borderRadius: 20, border: `1px solid ${t.border}`, background: t.surface, padding: 24, boxShadow: t.softShadow }}>
                <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>{b.title}</h2>
                <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "grid", gap: 10, fontSize: 14.5, color: t.text2 }}>
                  {b.points.map((p) => <li key={p} style={{ display: "flex", gap: 8 }}><Check />{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ borderBottom: `1px solid ${t.border}`, background: t.surface }}>
        <div style={{ ...wrap, paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(48px, 6vw, 88px)" }}>
          <Heading eyebrow="India" title="DPDP Act 2023 and its Rules, built in." lead="Aiveth helps you meet what the Act asks of every sign-in. It is not legal advice: your lawyers decide what your organization needs." />
          <div className="av-grid3" style={{ marginTop: 40 }}>
            {DPDP.map(([title, text]) => (
              <div key={title} style={{ borderTop: `2px solid ${t.brand}`, paddingTop: 16 }}>
                <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 600 }}>{title}</h3>
                <p style={{ margin: "8px 0 0", fontSize: 15, color: t.text2 }}>{text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, borderRadius: 20, border: `1px solid ${t.border}`, background: t.bg, padding: 24 }}>
            <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".1em", color: t.brand }}>ACTIVITY LOG AND CERT-IN</div>
            <p style={{ margin: "10px 0 0", fontSize: 15.5, color: t.text2 }}>
              Every change is recorded in an append-only activity log kept for one year, each entry linked to the one before it with a keyed hash. Export it as CSV, download a yearly audit report, or a CERT-In log package with a manifest.
            </p>
          </div>
        </div>
      </section>
      <section style={{ borderBottom: `1px solid ${t.border}` }}>
        <div style={{ ...wrap, paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}>
          <Heading title="Found a security problem?" lead={<>Write to <a href={`mailto:${SECURITY_EMAIL}`} style={{ color: t.brand, fontWeight: 500 }}>{SECURITY_EMAIL}</a>. Tell us what you found and how to see it; please give us time to fix it before you share it.</>} />
          <div style={{ marginTop: 24 }}><Button href={`${DOCS}/account/security`} kind="quiet">Read the security docs</Button></div>
        </div>
      </section>
    </SiteLayout>
  );
}
