import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { CONTACT_EMAIL, SALES_API, TURNSTILE_SITE_KEY } from "@/lib/links";
import { SEO_CONTACT_SALES } from "@/lib/seo";
import SiteLayout from "@/site/SiteLayout";
import { t } from "@/site/theme";
import { Check, Heading, wrap } from "@/site/ui";
import { GridStyle } from "@/home/Sections";

/** The keys Aiveth accepts (`plan_choice.SIZES`, `plans.PLANS` in the product). */
const SIZES: [string, string][] = [["one", "Just me"], ["small", "2 to 50"], ["medium", "51 to 500"], ["large", "More than 500"]];
const PLANS: [string, string][] = [["", "Not sure yet"], ["pro", "Pro"], ["business", "Business"], ["enterprise", "Enterprise"]];
const NEXT = [
  "A person at Aiveth reads every request and replies within one working day.",
  "We reply by email to agree what you need and the price, in writing.",
  "Free stays free: you can start now and move to a paid plan later.",
];

declare global {
  interface Window {
    turnstile?: { render: (el: HTMLElement, opts: Record<string, unknown>) => string; reset: (id?: string) => void };
  }
}

/** Cloudflare Turnstile, loaded only on this page; `onToken` gets each fresh token. */
function useTurnstile(onToken: (token: string) => void) {
  const box = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  useEffect(() => {
    const draw = () => {
      if (!box.current || !window.turnstile || widget.current) return;
      widget.current = window.turnstile.render(box.current, {
        sitekey: TURNSTILE_SITE_KEY, action: "sales", callback: onToken, "expired-callback": () => onToken(""),
      });
    };
    if (window.turnstile) { draw(); return; }
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = draw;
    document.head.appendChild(script);
  }, [onToken]);
  return { box, reset: () => { if (widget.current) window.turnstile?.reset(widget.current); } };
}

const field: CSSProperties = { display: "grid", gap: 6, fontSize: 14, fontWeight: 500 };
const input: CSSProperties = {
  width: "100%", minHeight: 44, padding: "10px 14px", borderRadius: 12, border: `1px solid ${t.border}`,
  background: t.bg, color: t.text, fontSize: 16, fontFamily: "inherit", fontWeight: 400, boxSizing: "border-box",
};

export default function ContactSales() {
  const [params] = useSearchParams();
  const fromPlan = PLANS.some(([k]) => k && k === params.get("plan")) ? params.get("plan") ?? "" : "";
  const [form, setForm] = useState({ name: "", email: "", organization: "", size: "", plan: fromPlan, message: "", website: "" });
  const [token, setToken] = useState("");
  const [state, setState] = useState<{ kind: "idle" | "sending" | "done" | "failed"; line?: string }>({ kind: "idle" });
  const onToken = useRef((v: string) => setToken(v)).current;
  const bot = useTurnstile(onToken);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const send = async (e: FormEvent) => {
    e.preventDefault();
    setState({ kind: "sending" });
    try {
      const res = await fetch(SALES_API, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plan: form.plan || null, token }),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) { setState({ kind: "done", line: body.said }); return; }
      const line = typeof body.detail === "string" ? body.detail : "Check the fields and try again.";
      setState({ kind: "failed", line });
      bot.reset();
    } catch {
      setState({ kind: "failed", line: `We couldn't send that. Write to ${CONTACT_EMAIL} instead.` });
    }
  };

  return (
    <SiteLayout>
      <SEOHead seo={SEO_CONTACT_SALES} path="/contact-sales" />
      <GridStyle />
      <section style={{ borderBottom: `1px solid ${t.border}` }}>
        <div className="av-split" style={{ ...wrap, alignItems: "start", paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(48px, 6vw, 88px)" }}>
          <div>
            <Heading eyebrow="Talk to sales" title="Tell us what your organization needs." lead="Pro, Business and Enterprise are agreed with you: the features, the people and the price. A few lines are enough to start." />
            <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0", display: "grid", gap: 12 }}>
              {NEXT.map((line) => <li key={line} style={{ display: "flex", gap: 10, fontSize: 15, color: t.text2 }}><Check />{line}</li>)}
            </ul>
            <p style={{ marginTop: 28, fontSize: 14, color: t.text3 }}>Prefer email? Write to <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: t.brand, fontWeight: 500 }}>{CONTACT_EMAIL}</a>.</p>
          </div>
          <div style={{ borderRadius: 24, border: `1px solid ${t.border}`, background: t.surface, padding: "clamp(20px, 3vw, 32px)", boxShadow: t.softShadow }}>
            {state.kind === "done" ? (
              <div role="status" style={{ display: "grid", gap: 10 }}>
                <div style={{ fontSize: 22, fontWeight: 600 }}>Request sent</div>
                <p style={{ margin: 0, color: t.text2 }}>{state.line}</p>
              </div>
            ) : (
              <form onSubmit={send} style={{ display: "grid", gap: 16 }}>
                <label style={field}>Your name<input style={input} required maxLength={120} autoComplete="name" value={form.name} onChange={set("name")} /></label>
                <label style={field}>Work email<input style={input} required type="email" maxLength={254} autoComplete="email" value={form.email} onChange={set("email")} /></label>
                <label style={field}>Organization<input style={input} required maxLength={160} autoComplete="organization" value={form.organization} onChange={set("organization")} /></label>
                <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
                  <label style={field}>People in your organization
                    <select style={input} required value={form.size} onChange={set("size")}>
                      <option value="" disabled>Choose…</option>
                      {SIZES.map(([k, label]) => <option key={k} value={k}>{label}</option>)}
                    </select>
                  </label>
                  <label style={field}>Plan
                    <select style={input} value={form.plan} onChange={set("plan")}>
                      {PLANS.map(([k, label]) => <option key={k} value={k}>{label}</option>)}
                    </select>
                  </label>
                </div>
                <label style={field}><span>What do you need? <span style={{ fontWeight: 400, color: t.text3 }}>(optional)</span></span>
                  <textarea style={{ ...input, minHeight: 110, resize: "vertical" }} maxLength={2000} value={form.message} onChange={set("message")} />
                </label>
                {/* A field people never see: a bot that fills it is dropped. */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={set("website")}
                  style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }} />
                <div ref={bot.box} />
                {state.kind === "failed" && <p role="alert" style={{ margin: 0, padding: "10px 14px", borderRadius: 12, background: t.amberSoft, color: t.amber, fontSize: 14 }}>{state.line}</p>}
                <button type="submit" disabled={state.kind === "sending"} style={{ minHeight: 52, borderRadius: 999, border: "none", background: t.btnBg, color: t.btnText, fontSize: 16, fontWeight: 500, opacity: state.kind === "sending" ? 0.7 : 1 }}>
                  {state.kind === "sending" ? "Sending…" : "Send request"}
                </button>
                <p style={{ margin: 0, fontSize: 13, color: t.text3 }}>We use what you send only to reply to you. It is kept in India for up to a year. See our <a href="/privacy" style={{ color: t.text2, textDecoration: "underline" }}>privacy policy</a>.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
