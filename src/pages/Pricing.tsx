import SEOHead from "@/components/SEOHead";
import { SIGN_UP, salesPage } from "@/lib/links";
import { SEO_PRICING } from "@/lib/seo";
import SiteLayout from "@/site/SiteLayout";
import { mono, t } from "@/site/theme";
import { Button, Check, Heading, wrap } from "@/site/ui";

/** The plans as the product holds them (gooclaim-aiveth `plans.py`): keep the two equal. */
const PLANS = [
  { name: "Free", price: "Free", under: "Always free", users: "10,000", apps: "3", support: "By email, as soon as we can.",
    lead: "Sign-in, passkeys, two-step, attack protection, the activity log and consent", adds: [] as string[] },
  { name: "Pro", price: "Custom", under: "Talk to sales", users: "10,000", apps: "10", support: "By email, in business hours, with an answer within two business days.",
    lead: "Everything in Free, plus:", adds: ["Your own roles, app permissions and groups", "Fonts, corner radius, appearance and links", "Phone sign-in", "Webhooks", "API keys and the admin API", "Machine apps", "Custom fields, the token template and the sign-in check", "Verified domains", "Feature flags", "Device login", "Your own sign-in address (custom domain)"] },
  { name: "Business", price: "Custom", under: "Talk to sales", users: "50,000", apps: "20", support: "By email, in business hours, with an answer within one business day.",
    lead: "Everything in Pro, plus:", adds: ["Single sign-on", "User sync and the IT set-up link", "AI agents and MCP servers", "Connected accounts", "Acting for others", "Roles on parts of the organization (fine-grained permissions)", "Log streams to your own security tools", "Access requests and access reviews", "Security signals to your apps and tools (Shared Signals)", "Session watch: a session used from another country or browser"] },
  { name: "Enterprise", price: "Custom", under: "A contract, set up with you", users: "Unlimited", apps: "Unlimited", support: "Around the clock, within an hour for a serious problem, with a 99.9% uptime agreement and a named contact.",
    lead: "Everything in Business, plus:", adds: ["Enterprise sign-in for AI agents"] },
];

const FAQ = [
  ["Is there a free trial?", "There is a Free plan instead, free for as long as you use it. When you need more, talk to us and we set up the plan that fits."],
  ["How are the paid plans priced?", "For your organization: we agree the price and the billing with you by email, then switch the plan on."],
  ["What happens when we pass the plan's active users?", "Sign-in never stops. We email your Owners so you can talk to us about a bigger plan."],
  ["Can we move to a smaller plan?", "Yes. An Owner can move down from Plan & usage in the console at once. Nothing is deleted, and ways of signing in the new plan lacks keep working for 30 days."],
  ["Is security extra?", "No. Two-step, passkeys, attack protection, the bot check and the activity log kept for one year are on every plan."],
];

const CARDS_CSS = ".av-plans{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}@media (max-width:1100px){.av-plans{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (max-width:620px){.av-plans{grid-template-columns:minmax(0,1fr)}}";

export default function Pricing() {
  return (
    <SiteLayout>
      <SEOHead seo={SEO_PRICING} path="/pricing" />
      <style dangerouslySetInnerHTML={{ __html: CARDS_CSS }} />
      <section style={{ borderBottom: `1px solid ${t.border}` }}>
        <div style={{ ...wrap, paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(48px, 6vw, 88px)" }}>
          <Heading center eyebrow="Pricing" title="Start free. Talk to us when you grow." lead="Every plan has sign-in, passkeys, two-step, attack protection, the activity log and consent. Paid plans are priced for your organization." />
          <div className="av-plans" style={{ marginTop: 48 }}>
            {PLANS.map((p) => {
              const free = p.name === "Free";
              return (
                <div key={p.name} style={{ borderRadius: 20, border: `1px solid ${p.name === "Business" ? t.brandLine : t.border}`, background: t.surface, padding: 24, display: "flex", flexDirection: "column", boxShadow: t.softShadow }}>
                  <div style={{ fontWeight: 600, fontSize: 18 }}>{p.name}</div>
                  <div style={{ marginTop: 12, fontSize: 36, fontWeight: 500, letterSpacing: "-0.03em" }}>{p.price}</div>
                  <div style={{ fontSize: 14, color: t.text3 }}>{p.under}</div>
                  <div style={{ marginTop: 16, fontFamily: mono, fontSize: 12, color: t.text2 }}>{p.users} active users · {p.apps} apps</div>
                  <div style={{ marginTop: 20 }}>
                    <Button href={free ? SIGN_UP : salesPage(p.name)} kind={free ? "primary" : "quiet"}>{free ? "Start free" : "Talk to sales"}</Button>
                  </div>
                  <div style={{ marginTop: 22, fontSize: 14, fontWeight: 600 }}>{p.lead}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "grid", gap: 8, fontSize: 14, color: t.text2 }}>
                    {p.adds.map((a) => <li key={a} style={{ display: "flex", gap: 8 }}><Check />{a}</li>)}
                  </ul>
                  <div style={{ marginTop: "auto", paddingTop: 20, fontSize: 13, color: t.text3 }}>Support: {p.support}</div>
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: 20, fontSize: 14, color: t.text3, textAlign: "center" }}>Single sign-on can be added to Pro, and enterprise sign-in for AI agents to Business — talk to sales.</p>
        </div>
      </section>
      <section style={{ borderBottom: `1px solid ${t.border}` }}>
        <div style={{ ...wrap, maxWidth: 860, paddingTop: "clamp(48px, 6vw, 80px)", paddingBottom: "clamp(48px, 6vw, 80px)" }}>
          <h2 style={{ margin: 0, fontSize: 30, fontWeight: 500, letterSpacing: "-0.03em" }}>Questions</h2>
          <div style={{ marginTop: 24, display: "grid", gap: 12 }}>
            {FAQ.map(([q, a]) => (
              <details key={q} style={{ borderRadius: 14, border: `1px solid ${t.border}`, background: t.surface, padding: "16px 20px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 600 }}>{q}</summary>
                <p style={{ margin: "10px 0 0", color: t.text2, fontSize: 15 }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
