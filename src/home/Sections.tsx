import type { ReactNode } from "react";
import { DOCS, SIGN_UP, salesPage } from "@/lib/links";
import { mono, t } from "@/site/theme";
import { Button, Check, Heading, Icon, wrap } from "@/site/ui";

const GRID_CSS = ".av-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}" +
  ".av-split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:48px;align-items:center}" +
  "@media (max-width:959px){.av-grid3{grid-template-columns:repeat(2,minmax(0,1fr))}.av-split{grid-template-columns:minmax(0,1fr);gap:32px}}" +
  "@media (max-width:620px){.av-grid3{grid-template-columns:minmax(0,1fr)}}";

export function GridStyle() {
  return <style dangerouslySetInnerHTML={{ __html: GRID_CSS }} />;
}

function Section({ id, children, alt }: { id?: string; children: ReactNode; alt?: boolean }) {
  return (
    <section id={id} style={{ borderBottom: `1px solid ${t.border}`, background: alt ? t.surface : undefined, scrollMarginTop: 72 }}>
      <div style={{ ...wrap, paddingTop: "clamp(56px, 7vw, 104px)", paddingBottom: "clamp(56px, 7vw, 104px)" }}>{children}</div>
    </section>
  );
}

function Card({ icon, title, children, tone }: { icon: string[]; title: string; children: ReactNode; tone: [string, string] }) {
  return (
    <div className="av-card" style={{ borderRadius: 20, border: `1px solid ${t.border}`, background: t.surface, padding: 24, boxShadow: t.softShadow }}>
      <div style={{ width: 44, height: 44, borderRadius: 12, background: tone[1], color: tone[0], display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon d={icon} />
      </div>
      <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 600, letterSpacing: "-0.015em" }}>{title}</h3>
      <p style={{ margin: "8px 0 0", fontSize: 15, color: t.text2 }}>{children}</p>
    </div>
  );
}

const I = {
  key: ["M5 11h14v10H5z", "M8 11V7a4 4 0 0 1 8 0v4", "M12 15v2"],
  shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "M9 12l2 2 4-4"],
  building: ["M3 21h18", "M5 21V7l7-4 7 4v14", "M9 9h.01M15 9h.01M9 13h.01M15 13h.01M10 21v-4h4v4"],
  users: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
  bot: ["M12 8V4H8", "M4 8h16v12H4z", "M2 14h2M20 14h2M15 13v2M9 13v2"],
  bolt: ["M13 2L3 14h9l-1 8 10-12h-9l1-8z"],
};

export function Features() {
  const blue: [string, string] = [t.brand, t.brandSoft];
  const green: [string, string] = [t.green, t.greenSoft];
  const violet: [string, string] = [t.violet, t.violetSoft];
  const amber: [string, string] = [t.amber, t.amberSoft];
  return (
    <Section id="product">
      <Heading eyebrow="Product" title="Everything sign-in needs, in one place." lead="Turn on what your organization needs from the console. Your apps get one standard way to sign people in." />
      <div className="av-grid3" style={{ marginTop: 40 }}>
        <Card icon={I.key} title="Every way to sign in" tone={blue}>Passwords checked against breach lists, passkeys, email codes, Google, Microsoft and GitHub, and phone sign-in in India.</Card>
        <Card icon={I.shield} title="Two-step and attack protection" tone={green}>Authenticator apps and passkeys as a second step, recovery codes, bot checks, and alerts for a new device or impossible travel.</Card>
        <Card icon={I.building} title="Single sign-on and user sync" tone={violet}>Connect your customers' identity providers with OIDC or SAML, keep people in step with SCIM, and require single sign-on for a verified domain.</Card>
        <Card icon={I.users} title="Roles and permissions" tone={amber}>Built-in and your own roles, app permissions and groups, fine-grained roles on parts of your organization, access requests and reviews.</Card>
        <Card icon={I.bot} title="Sign-in for AI agents" tone={blue}>Agents get short-lived tokens that say who they act for. Set hours, rate limits and permissions, and ask a person before an agent acts. Your coding agent can set Aiveth up through its MCP server.</Card>
        <Card icon={I.bolt} title="Events for your tools" tone={green}>Signed webhooks, log streams to your security tools, and Shared Signals so your apps hear about risky sessions at once.</Card>
      </div>
    </Section>
  );
}

const CODE: [string, string][] = [
  ["issuer", "https://accounts.aiveth.com"],
  ["discovery", "/.well-known/openid-configuration"],
  ["client_id", "your app's client ID"],
  ["redirect_uri", "https://yourapp.com/callback"],
  ["scope", "openid email profile"],
  ["code_challenge_method", "S256  (PKCE)"],
];

const USES: [string, string, string][] = [
  ["For teams building a product", "Sign-in for your customers' users, with single sign-on and user sync for the enterprises that ask for it.", "B2B and consumer apps"],
  ["For your own people", "One sign-in for your staff's apps, roles from your directory, and the activity log your auditors want.", "Workforce sign-in"],
  ["For AI agents", "Let agents act for a person with short-lived tokens, limits you set, and a person's yes before anything that matters.", "Agents and MCP servers"],
];

export function UseCases() {
  return (
    <Section alt>
      <Heading center eyebrow="Who it's for" title="One sign-in, three kinds of user." />
      <div className="av-grid3" style={{ marginTop: 40 }}>
        {USES.map(([title, text, tag]) => (
          <div key={title} className="av-card" style={{ borderRadius: 20, border: `1px solid ${t.border}`, background: t.bg, padding: 24 }}>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: ".1em", color: t.brand, textTransform: "uppercase" }}>{tag}</div>
            <h3 style={{ margin: "10px 0 0", fontSize: 19, fontWeight: 600, letterSpacing: "-0.015em" }}>{title}</h3>
            <p style={{ margin: "8px 0 0", fontSize: 15, color: t.text2 }}>{text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Developers() {
  return (
    <Section id="developers" alt>
      <div className="av-split">
        <div>
          <Heading eyebrow="Developers" title="Add “Login with Aiveth” in an afternoon." lead="Aiveth is a standard OpenID Connect provider, so the OIDC library you already use works. SDKs for Node, Python, React and Next.js, an admin API with scoped keys, and docs for every step." />
          <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "grid", gap: 10, fontSize: 15.5, color: t.text2 }}>
            {["Authorization code with PKCE, refresh tokens and logout", "Step-up sign-in and DPoP-bound tokens when an action needs more", "Device login for TVs and command-line tools, machine apps for servers", "Signed access tokens your own API checks itself, with the person's organization and role", "Test and live keys, kept apart by environment"].map((x) => (
              <li key={x} style={{ display: "flex", gap: 10 }}><Check />{x}</li>
            ))}
          </ul>
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button href={`${DOCS}/quickstart`}>Read the quickstart</Button>
            <Button href={`${DOCS}/api-reference/introduction`} kind="quiet">API reference</Button>
          </div>
        </div>
        <div style={{ borderRadius: 20, background: t.code, color: t.codeText, padding: "22px 24px", fontFamily: mono, fontSize: 13.5, lineHeight: 1.9, boxShadow: t.cardShadow, overflowX: "auto" }}>
          <div style={{ color: t.codeDim, marginBottom: 8 }}># Your app's OpenID Connect settings</div>
          {CODE.map(([k, v]) => (
            <div key={k} style={{ whiteSpace: "nowrap" }}>
              <span style={{ color: t.codeKey }}>{k}</span>
              <span style={{ color: t.codeDim }}>: </span>
              {v}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Compliance() {
  const items = [
    ["Consent that holds up", "Notices and purposes, a consent screen, signed receipts, time-bound purposes with reminders, and a record you can check from your own app."],
    ["People's rights, built in", "A rights page for each organization: download or delete my data, ask for a correction, name a nominee, raise a complaint."],
    ["Children and guardians", "Verifiable consent from a parent or guardian before a child's account is used."],
    ["Erasure and breach notices", "Erasure tasks when a purpose ends, and a breach register with the notices to send."],
    ["A log you can trust", "An append-only activity log kept for one year with a hash chain, a yearly audit report, and a CERT-In log export."],
    ["Work with Consent Managers", "Accept consent from registered Consent Managers and tell them when it changes."],
  ];
  return (
    <Section id="compliance">
      <Heading eyebrow="Privacy and compliance" title="Built for India's DPDP Act from the first line." lead="The Digital Personal Data Protection Act 2023 and its Rules ask a lot of every sign-in. Aiveth does that work, so your apps don't have to — and production data stays in India." />
      <div className="av-grid3" style={{ marginTop: 40 }}>
        {items.map(([title, text]) => (
          <div key={title} style={{ borderTop: `2px solid ${t.brand}`, paddingTop: 16 }}>
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>{title}</h3>
            <p style={{ margin: "8px 0 0", fontSize: 15, color: t.text2 }}>{text}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32 }}><Button href="/security" kind="quiet">Security and compliance</Button></div>
    </Section>
  );
}

export function Enterprise() {
  const rows = [
    ["Your brand", "Your logo, colours, fonts, background and words on the sign-in card and in emails, your own sign-in address, and a sign-in button in your look for your app."],
    ["Twelve languages", "The sign-in card speaks your people's language, chosen from their browser."],
    ["Session control", "Idle sign-out, country rules, session watch, remembered devices and device-bound sessions."],
    ["Emergency accounts", "Require single sign-on and keep up to two emergency accounts, so you can still get in when your identity provider is down."],
  ];
  return (
    <Section alt>
      <div className="av-split">
        <Heading eyebrow="For every organization" title="Your look, your rules." lead="Aiveth works for a five-person team and for an enterprise with its own identity provider, from the same console." />
        <div style={{ display: "grid", gap: 14 }}>
          {rows.map(([title, text]) => (
            <div key={title} style={{ borderRadius: 16, border: `1px solid ${t.border}`, background: t.bg, padding: "18px 20px" }}>
              <div style={{ fontWeight: 600 }}>{title}</div>
              <div style={{ marginTop: 4, fontSize: 15, color: t.text2 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section style={{ borderBottom: `1px solid ${t.border}` }}>
      <div style={{ ...wrap, paddingTop: "clamp(56px, 7vw, 96px)", paddingBottom: "clamp(56px, 7vw, 96px)", textAlign: "center" }}>
        <h2 style={{ margin: 0, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.06, fontWeight: 500, letterSpacing: "-0.04em" }}>Start free. Grow when you need to.</h2>
        <p style={{ margin: "16px auto 0", maxWidth: 560, fontSize: 18, color: t.text2 }}>The Free plan has sign-in, passkeys, two-step, attack protection, the activity log and consent. Talk to us when you need more.</p>
        <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Button href={SIGN_UP} big>Start free</Button>
          <Button href={salesPage()} kind="quiet" big>Talk to sales</Button>
        </div>
      </div>
    </section>
  );
}
