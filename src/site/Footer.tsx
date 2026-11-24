import { Link } from "react-router-dom";
import { CONSOLE, DOCS, GOOCLAIM, PRIVACY_EMAIL, SALES_EMAIL, SECURITY_EMAIL, SIGN_UP } from "@/lib/links";
import Logo from "./Logo";
import { mono, t } from "./theme";

interface FooterLink { label: string; href: string }

const COLS: { title: string; links: FooterLink[] }[] = [
  { title: "PRODUCT", links: [{ label: "Features", href: "/#product" }, { label: "Pricing", href: "/pricing" }, { label: "Security", href: "/security" }, { label: "Start free", href: SIGN_UP }, { label: "Sign in", href: CONSOLE }] },
  { title: "DEVELOPERS", links: [{ label: "Documentation", href: DOCS }, { label: "Quickstart", href: `${DOCS}/quickstart` }, { label: "API reference", href: `${DOCS}/api-reference/introduction` }, { label: "SDKs", href: `${DOCS}/sdks/overview` }] },
  { title: "LEGAL", links: [{ label: "Privacy policy", href: "/privacy" }, { label: "Terms of service", href: "/terms" }] },
  { title: "CONTACT", links: [{ label: SALES_EMAIL, href: `mailto:${SALES_EMAIL}` }, { label: SECURITY_EMAIL, href: `mailto:${SECURITY_EMAIL}` }, { label: PRIVACY_EMAIL, href: `mailto:${PRIVACY_EMAIL}` }] },
];

function FooterAnchor({ link }: { link: FooterLink }) {
  const style = { color: t.text2 };
  if (link.href.startsWith("/")) return <Link to={link.href} style={style}>{link.label}</Link>;
  return <a href={link.href} style={style}>{link.label}</a>;
}

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${t.border}`, background: t.bg, color: t.text }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(32px, 4.44vw, 64px) 24px 32px", display: "flex", flexWrap: "wrap", gap: 40 }}>
        <div style={{ flex: "1 1 240px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 600, fontSize: 18, letterSpacing: "-0.02em" }}>
            <Logo size={24} /> Aiveth
          </div>
          <div style={{ marginTop: 10, fontSize: 14, color: t.text2 }}>Sign-in and access control for your organization.</div>
          <div style={{ marginTop: 6, fontSize: 14, color: t.text2 }}>Built by <a href={GOOCLAIM} style={{ color: t.text, fontWeight: 500 }}>Gooclaim</a>.</div>
          <div style={{ marginTop: 16, fontFamily: mono, fontSize: 12, color: t.text3 }}>MADE IN INDIA</div>
        </div>
        {COLS.map((c) => (
          <div key={c.title} style={{ flex: "0 1 160px", display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".08em", color: t.text3, marginBottom: 4 }}>{c.title}</div>
            {c.links.map((l) => <FooterAnchor key={l.label} link={l} />)}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "20px 24px 36px", borderTop: `1px solid ${t.border}`, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", fontSize: 13, color: t.text3 }}>
        <span>© 2026 Gooclaim. All rights reserved.</span>
        <span>Passkeys · Single sign-on · DPDP consent · Activity log kept one year</span>
      </div>
    </footer>
  );
}
