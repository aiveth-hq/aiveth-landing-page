import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { PRIVACY_EMAIL, SALES_EMAIL, SECURITY_EMAIL, SUPPORT_EMAIL, salesPage } from "@/lib/links";
import { SEO_ABOUT, SEO_CONTACT } from "@/lib/seo";
import SiteLayout from "@/site/SiteLayout";
import { mono, t } from "@/site/theme";
import { Button, Heading, wrap } from "@/site/ui";
import { GridStyle } from "@/home/Sections";

const PRINCIPLES: [string, string][] = [
  ["Security is never sold", "Two-step, passkeys, attack protection and a year-long activity log are on every plan, Free included."],
  ["Standards, not lock-in", "OpenID Connect, SAML, SCIM and passkeys — your apps talk to Aiveth the way they would to any good identity provider."],
  ["Privacy law is part of the product", "India's DPDP Act asks a lot of every sign-in. Consent, rights and breach notices are built in, not left to you."],
  ["Your data is yours", "We process the people who sign in to your apps only on your instructions, and we do not sell data or train AI models on it."],
];

export function About() {
  return (
    <SiteLayout>
      <SEOHead seo={SEO_ABOUT} path="/about" />
      <GridStyle />
      <section style={{ borderBottom: `1px solid ${t.border}` }}>
        <div style={{ ...wrap, paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(48px, 6vw, 88px)" }}>
          <div className="av-split" style={{ alignItems: "start" }}>
            <Heading eyebrow="About" title="Built in India, for every organization." />
            <div style={{ fontSize: 17, color: t.text2, display: "grid", gap: 16 }}>
              <p style={{ margin: 0 }}>
                Aiveth was first built as the sign-in for software in a regulated field in India — where every sign-in, every consent and every record is checked by a regulator.
              </p>
              <p style={{ margin: 0 }}>
                Then organizations outside that field asked to use it too. Aiveth is that service, made for any organization, on its own servers, with its own keys and data.
              </p>
              <p style={{ margin: 0 }}>We are a team in Bengaluru, India.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ borderBottom: `1px solid ${t.border}`, background: t.surface }}>
        <div style={{ ...wrap, paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(48px, 6vw, 88px)" }}>
          <Heading title="What we will not compromise on" />
          <div className="av-grid3" style={{ marginTop: 32, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {PRINCIPLES.map(([title, text]) => (
              <div key={title} style={{ borderTop: `2px solid ${t.brand}`, paddingTop: 16 }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>{title}</h3>
                <p style={{ margin: "8px 0 0", fontSize: 15, color: t.text2 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const CONTACTS: { title: string; text: string; email: string; href?: string; cta: string }[] = [
  { title: "Sales", text: "Pro, Business or Enterprise, a partner deal, or a question before you start.", email: SALES_EMAIL, href: salesPage(), cta: "Talk to sales" },
  { title: "Support", text: "Already using Aiveth? Tell us your organization and what you see.", email: SUPPORT_EMAIL, cta: "Email support" },
  { title: "Security", text: "Found a vulnerability? Tell us what you found and how to see it.", email: SECURITY_EMAIL, cta: "Report a problem" },
  { title: "Privacy", text: "Questions or grievances about personal data, and data processing terms.", email: PRIVACY_EMAIL, cta: "Write to privacy" },
];

/** A mail link does nothing on a computer with no mail app set up, so the address is always shown,
 *  with a Copy button, and the subject names the team. */
function mailTo(email: string, team: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(`Aiveth — ${team}`)}`;
}

function CopyAddress({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }).catch(() => undefined);
  };
  return (
    <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 10, fontFamily: mono, fontSize: 13, color: t.text3 }}>
      <span style={{ userSelect: "all" }}>{email}</span>
      <button type="button" onClick={copy} aria-label={`Copy ${email}`} style={{ border: `1px solid ${t.border}`, background: t.bg, color: t.text2, borderRadius: 999, padding: "3px 10px", fontSize: 12, fontFamily: "inherit", cursor: "pointer" }}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export function Contact() {
  return (
    <SiteLayout>
      <SEOHead seo={SEO_CONTACT} path="/contact" />
      <GridStyle />
      <section style={{ borderBottom: `1px solid ${t.border}` }}>
        <div style={{ ...wrap, paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(48px, 6vw, 88px)" }}>
          <Heading eyebrow="Contact" title="Talk to a person." lead="Ask sales on a short form, or write to us by email. We reply by email; how fast depends on your plan's support." />
          <div className="av-grid3" style={{ marginTop: 36, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {CONTACTS.map((c) => (
              <div key={c.title} className="av-card" style={{ borderRadius: 20, border: `1px solid ${t.border}`, background: t.surface, padding: 24, display: "flex", flexDirection: "column", boxShadow: t.softShadow }}>
                <div style={{ fontWeight: 600, fontSize: 18 }}>{c.title}</div>
                <p style={{ margin: "8px 0 0", fontSize: 15, color: t.text2, flex: 1 }}>{c.text}</p>
                {!c.href && <CopyAddress email={c.email} />}
                <div style={{ marginTop: 14 }}><Button href={c.href ?? mailTo(c.email, c.title)} kind={c.href ? "primary" : "quiet"}>{c.cta}</Button></div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28, fontSize: 14, color: t.text3 }}>Aiveth Labs Private Limited · Bengaluru, India</p>
        </div>
      </section>
    </SiteLayout>
  );
}
