import { Link } from "react-router-dom";
import { mono, t } from "@/site/theme";
import { Heading, TRADEMARKS, wrap } from "@/site/ui";

/** Official logos (see ASSETS.md), each unchanged on a white tile; the rest as names. */
const LOGOS: [string, string, number][] = [
  ["Okta", "/logos/okta-wordmark.png", 40], ["GitHub", "/logos/github-black.svg", 22], ["Datadog", "/logos/datadog-wordmark.png", 20],
  ["Node.js", "/logos/nodejs.svg", 22], ["Python", "/logos/python.svg", 22], ["React", "/logos/react.svg", 22],
];

export function WorksWith() {
  return (
    <section style={{ borderBottom: `1px solid ${t.border}` }}>
      <div style={{ ...wrap, paddingTop: 36, paddingBottom: 36, display: "flex", alignItems: "center", gap: "16px 28px", flexWrap: "wrap", justifyContent: "center" }}>
        <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".12em", color: t.text3 }}>WORKS WITH</span>
        {LOGOS.map(([name, src, h]) => (
          <span key={name} title={name} style={{ height: 44, padding: "0 14px", borderRadius: 12, background: "#FFFFFF", border: `1px solid ${t.border}`, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500, color: "#0C0A09" }}>
            <img src={src} alt={h > 30 || name === "Datadog" ? name : ""} height={h} style={{ height: h, width: "auto" }} />
            {h <= 22 && name !== "Datadog" && name}
          </span>
        ))}
        <Link to="/integrations" style={{ fontSize: 14, color: t.text2 }}>Microsoft Entra ID, Google Workspace and more →</Link>
      </div>
    </section>
  );
}

const FAQ: [string, string][] = [
  ["What is Aiveth?", "A sign-in and access-control service for organizations: your apps send people to Aiveth to sign in, and your admins manage people, roles and security in one console."],
  ["Where is our data kept?", "Production data is stored and processed in India. The few providers that handle a small part of it elsewhere are named on our sub-processors page."],
  ["Do we have to rebuild our app?", "No. Aiveth is a standard OpenID Connect provider, so the OIDC library you already use works. SDKs for Node, Python, React and Next.js make it quicker."],
  ["Can we bring our people from another system?", "Yes. Import people with their passwords — bcrypt and Argon2id hashes work at once, and other hashes are checked once by your old system. Then bring your workspaces and who is in each, from Clerk, Auth0, WorkOS or your own database."],
  ["Is there a free plan?", "Yes, with sign-in, passkeys, two-step, attack protection, the activity log and consent. For more, talk to sales."],
  ["Does Aiveth help with the DPDP Act?", "Yes: consent, people's rights, children's consent, erasure and breach notices are built in. Your lawyers still decide what your organization needs."],
];

export function HomeFaq() {
  return (
    <section style={{ borderBottom: `1px solid ${t.border}` }}>
      <div style={{ ...wrap, maxWidth: 900, paddingTop: "clamp(56px, 7vw, 96px)", paddingBottom: "clamp(56px, 7vw, 96px)" }}>
        <Heading center title="Questions" />
        <div style={{ marginTop: 32, display: "grid", gap: 12 }}>
          {FAQ.map(([q, a]) => (
            <details key={q} style={{ borderRadius: 14, border: `1px solid ${t.border}`, background: t.surface, padding: "16px 20px" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600 }}>{q}</summary>
              <p style={{ margin: "10px 0 0", color: t.text2, fontSize: 15 }}>{a}</p>
            </details>
          ))}
        </div>
        <p style={{ margin: "20px 0 0", fontSize: 13, color: t.text3, textAlign: "center" }}>{TRADEMARKS}</p>
      </div>
    </section>
  );
}
