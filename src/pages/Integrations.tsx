import SEOHead from "@/components/SEOHead";
import { DOCS } from "@/lib/links";
import { SEO_INTEGRATIONS } from "@/lib/seo";
import SiteLayout from "@/site/SiteLayout";
import { t } from "@/site/theme";
import { Button, Heading, TRADEMARKS, wrap } from "@/site/ui";

/**
 * What Aiveth works with, as the docs state it. A logo only where its owner's rules allow it on a
 * page like this (ASSETS.md); every other name is plain text, never a drawn mark.
 */
interface Item { name: string; logo?: string; wide?: boolean; h?: number; label?: string }

const GROUPS: { title: string; lead: string; doc: string; items: Item[] }[] = [
  { title: "Single sign-on and user sync", lead: "Your customers bring their own identity provider over OpenID Connect or SAML 2.0, and keep people in step with SCIM 2.0.", doc: "/sign-in/single-sign-on",
    items: [{ name: "Okta", logo: "/logos/okta-wordmark.png", wide: true, h: 44 }, { name: "Microsoft Entra ID" }, { name: "Google Workspace" }, { name: "JumpCloud" }, { name: "OneLogin" }, { name: "Any OpenID Connect or SAML 2.0 provider" }] },
  { title: "Ways people sign in", lead: "Turn each one on from the console.", doc: "/sign-in/methods",
    items: [{ name: "GitHub", logo: "/logos/github-black.svg" }, { name: "Google", logo: "/logos/google.png", label: "Sign in with Google" }, { name: "Microsoft", logo: "/logos/microsoft.svg", label: "Sign in with Microsoft" }, { name: "Passkeys" }, { name: "Email codes" }, { name: "Phone codes by WhatsApp or SMS (India)" }, { name: "Truecaller", logo: "/logos/truecaller.png", label: "Continue with Truecaller (India)" }] },
  { title: "Your security tools", lead: "Stream the activity log to where your team already looks.", doc: "/events/log-streams",
    items: [{ name: "Datadog", logo: "/logos/datadog-wordmark.png", wide: true }, { name: "Splunk" }, { name: "Microsoft Sentinel" }, { name: "Amazon S3" }, { name: "Any HTTPS address" }] },
  { title: "Build with", lead: "SDKs for your stack, on open standards.", doc: "/sdks/overview",
    items: [{ name: "Node.js", logo: "/logos/nodejs.svg" }, { name: "Python", logo: "/logos/python.svg" }, { name: "React", logo: "/logos/react.svg" }, { name: "Next.js" }, { name: "OpenID Connect", logo: "/logos/openid-wordmark.png", wide: true }] },
  { title: "Moving from another provider", lead: "Bring your people with their passwords — bcrypt and Argon2id work at once; other hashes are checked once by your old system — then your workspaces and who is in each.", doc: "/access/import-users",
    items: [{ name: "Firebase", logo: "/logos/firebase.png" }, { name: "Clerk" }, { name: "Auth0" }, { name: "WorkOS" }, { name: "Any system with bcrypt or Argon2id hashes" }] },
];

function Tile({ item }: { item: Item }) {
  return (
    <div className="av-card" title={item.name} style={{ minHeight: 64, borderRadius: 14, border: `1px solid ${t.border}`, background: item.logo ? "#FFFFFF" : t.surface, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "10px 16px", fontSize: 14.5, fontWeight: 500, color: item.logo ? "#0C0A09" : t.text, textAlign: "center" }}>
      {item.logo && (
        <img src={item.logo} alt={item.wide ? item.name : ""} height={item.h ?? (item.wide ? 22 : 24)} style={{ height: item.h ?? (item.wide ? 22 : 24), width: "auto", maxWidth: 130 }} />
      )}
      {(!item.logo || !item.wide) && <span>{item.label ?? item.name}</span>}
    </div>
  );
}

export default function Integrations() {
  return (
    <SiteLayout>
      <SEOHead seo={SEO_INTEGRATIONS} path="/integrations" />
      <section style={{ borderBottom: `1px solid ${t.border}` }}>
        <div style={{ ...wrap, paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(48px, 6vw, 88px)" }}>
          <Heading eyebrow="Integrations" title="Works with what you already use." lead="Aiveth speaks the open standards — OpenID Connect, SAML 2.0, SCIM 2.0 and WebAuthn — so it fits the identity providers, tools and stacks your organization runs today." />
          <div style={{ marginTop: 48, display: "grid", gap: 40 }}>
            {GROUPS.map((g) => (
              <div key={g.title} style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16, flexWrap: "wrap" }}>
                  <div>
                    <h2 style={{ margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>{g.title}</h2>
                    <p style={{ margin: "6px 0 0", fontSize: 15, color: t.text2, maxWidth: 680 }}>{g.lead}</p>
                  </div>
                  <a href={`${DOCS}${g.doc}`} style={{ fontSize: 14, fontWeight: 500, color: t.brand }}>Read the guide →</a>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
                  {g.items.map((i) => <Tile key={i.name} item={i} />)}
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 40, fontSize: 13, color: t.text3 }}>{TRADEMARKS}</p>
          <div style={{ marginTop: 20 }}><Button href={`${DOCS}`} kind="quiet">All documentation</Button></div>
        </div>
      </section>
    </SiteLayout>
  );
}
