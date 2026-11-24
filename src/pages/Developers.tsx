import SEOHead from "@/components/SEOHead";
import { DOCS } from "@/lib/links";
import { SEO_DEVELOPERS } from "@/lib/seo";
import SiteLayout from "@/site/SiteLayout";
import { mono, t } from "@/site/theme";
import { Button, Heading, wrap } from "@/site/ui";
import { GridStyle } from "@/home/Sections";

/** Where each guide lives in the docs (every page exists there). */
const GUIDES: [string, string, string][] = [
  ["Quickstart", "Add “Login with Aiveth” to a web app with the authorization code flow and PKCE.", "/quickstart"],
  ["Tokens and claims", "ID tokens, opaque access tokens, refresh, and the token template for your own claims.", "/apps/tokens-and-claims"],
  ["Single sign-on", "Let each customer bring their own identity provider over OIDC or SAML.", "/sign-in/single-sign-on"],
  ["User sync (SCIM)", "Keep people and groups in step with your customers' directories.", "/access/scim"],
  ["Webhooks and events", "Signed events for every change, with retries, and the full list of event types.", "/events/webhooks"],
  ["AI agents and MCP", "Short-lived agent tokens, controls, human approval, and Aiveth's own MCP server.", "/agents/overview"],
  ["Consent API", "Record, check and withdraw DPDP consent from your own app's screens.", "/privacy/consent"],
  ["Admin API", "Manage people, roles and access from your servers with scoped API keys.", "/api-reference/introduction"],
  ["SDKs", "Node, Python and React — what each one does and how to start.", "/sdks/overview"],
];

/** The discovery document's main addresses (as the docs list them). */
const ENDPOINTS: [string, string][] = [
  ["GET", "/.well-known/openid-configuration"],
  ["GET", "/oauth/authorize"],
  ["POST", "/oauth/token"],
  ["GET", "/oauth/userinfo"],
  ["POST", "/oauth/revoke"],
  ["GET", "/oauth/logout"],
  ["POST", "/oauth/device_authorization"],
  ["GET", "/v1/auth/.well-known/jwks.json"],
];

const STANDARDS = ["OpenID Connect", "OAuth 2.0 + PKCE", "SAML 2.0", "SCIM 2.0", "WebAuthn passkeys", "Device login (RFC 8628)", "DPoP (RFC 9449)", "Token exchange (RFC 8693)", "Shared Signals"];

export default function Developers() {
  return (
    <SiteLayout>
      <SEOHead seo={SEO_DEVELOPERS} path="/developers" />
      <GridStyle />
      <section style={{ borderBottom: `1px solid ${t.border}` }}>
        <div style={{ ...wrap, paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(48px, 6vw, 88px)" }}>
          <div className="av-split">
            <div>
              <Heading eyebrow="Developers" title="Standards you already know. Docs for every step." lead="Aiveth is an OpenID Connect provider with an admin API, webhooks and SDKs. Start with the quickstart; everything else is one click away." />
              <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button href={`${DOCS}/quickstart`}>Read the quickstart</Button>
                <Button href={DOCS} kind="quiet">All documentation</Button>
              </div>
              <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {STANDARDS.map((s) => (
                  <span key={s} style={{ padding: "6px 12px", borderRadius: 999, border: `1px solid ${t.border}`, background: t.surface, fontSize: 13, color: t.text2 }}>{s}</span>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 20, background: t.code, color: t.codeText, padding: "22px 24px", fontFamily: mono, fontSize: 13.5, lineHeight: 1.9, boxShadow: t.cardShadow, overflowX: "auto" }}>
              <div style={{ color: t.codeDim, marginBottom: 8 }}># https://auth.aiveth.com</div>
              {ENDPOINTS.map(([m, p]) => (
                <div key={p} style={{ whiteSpace: "nowrap" }}>
                  <span style={{ color: t.codeKey, display: "inline-block", width: 52 }}>{m}</span>{p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ borderBottom: `1px solid ${t.border}`, background: t.surface }}>
        <div style={{ ...wrap, paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(48px, 6vw, 88px)" }}>
          <Heading title="Guides" lead="Each guide gives the exact endpoints, fields and limits, with examples you can copy." />
          <div className="av-grid3" style={{ marginTop: 36 }}>
            {GUIDES.map(([title, text, path]) => (
              <a key={title} href={`${DOCS}${path}`} className="av-card" style={{ display: "block", borderRadius: 20, border: `1px solid ${t.border}`, background: t.bg, padding: 22 }}>
                <div style={{ fontWeight: 600, fontSize: 17 }}>{title} <span style={{ color: t.brand }}>→</span></div>
                <div style={{ marginTop: 6, fontSize: 14.5, color: t.text2 }}>{text}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
