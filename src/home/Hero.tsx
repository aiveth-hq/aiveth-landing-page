import type React from "react";
import { Link } from "react-router-dom";
import { SIGN_UP, salesPage } from "@/lib/links";
import { mono, t } from "@/site/theme";
import { Button } from "@/site/ui";

const HERO_CSS = ".av-hero{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:56px;align-items:center}" +
  "@media (max-width:959px){.av-hero{grid-template-columns:minmax(0,1fr);gap:40px;text-align:center}.av-hero-cta{justify-content:center}}";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 12.5, fontWeight: 500, color: t.text2, marginBottom: 6 }}>{label}</div>
      <div style={{ height: 42, borderRadius: 10, border: `1px solid ${t.border}`, background: t.surface, display: "flex", alignItems: "center", padding: "0 12px", fontSize: 14, color: t.text }}>{value}</div>
    </div>
  );
}

/** A sign-in button with its owner's official logo (see ASSETS.md) and the words the owner's
 *  rules ask for ("Continue with …"). */
function Provider({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div style={{ height: 42, borderRadius: 10, border: `1px solid ${t.border}`, background: t.surface, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 13.5, fontWeight: 500 }}>
      {children}
      {name}
    </div>
  );
}

/** A drawing of Aiveth's sign-in card (not a screenshot): what an organization's people see. */
function SignInCard() {
  return (
    <div aria-hidden="true" style={{ position: "relative" }}>
      <div style={{ position: "absolute", width: 420, height: 420, left: "-10%", top: "-15%", background: t.meshA, filter: "blur(10px)" }} />
      <div style={{ position: "absolute", width: 360, height: 360, right: "-8%", bottom: "-18%", background: t.meshB, filter: "blur(10px)" }} />
      <div style={{ position: "relative", maxWidth: 400, margin: "0 auto", borderRadius: 20, border: `1px solid ${t.border}`, background: t.glass, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", boxShadow: t.cardShadow, padding: 28, textAlign: "left" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontWeight: 600, fontSize: 17 }}>
          <span style={{ width: 28, height: 28, borderRadius: 8, background: t.text, color: t.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700 }}>A</span> Acme Health
        </div>
        <div style={{ textAlign: "center", marginTop: 14, fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em" }}>Sign in</div>
        <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
          <Field label="Email" value="asha@acmehealth.in" />
          <div style={{ height: 44, borderRadius: 10, background: t.btnBg, color: t.btnText, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14.5, fontWeight: 500 }}>Continue</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: t.text3 }}>
            <span style={{ flex: 1, height: 1, background: t.border }} />or<span style={{ flex: 1, height: 1, background: t.border }} />
          </div>
          <div style={{ height: 42, borderRadius: 10, border: `1px solid ${t.brandLine}`, background: t.brandSoft, color: t.brand, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 13.5, fontWeight: 600 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="9" r="4" /><path d="M2 21a6 6 0 0 1 12 0M15 12l5-5M18 9l2 2" /></svg>
            Sign in with a passkey
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <Provider name="Continue with Google"><img src="/logos/google.png" alt="" width={16} height={16} /></Provider>
            <Provider name="Continue with Microsoft"><img src="/logos/microsoft.svg" alt="" width={15} height={15} /></Provider>
            <Provider name="Continue with GitHub">
              <img className="only-light" src="/logos/github-black.svg" alt="" width={16} height={16} />
              <img className="only-dark" src="/logos/github-white.svg" alt="" width={16} height={16} />
            </Provider>
          </div>
        </div>
        <div style={{ marginTop: 18, textAlign: "center", fontFamily: mono, fontSize: 10.5, letterSpacing: ".1em", color: t.text3 }}>SECURED BY AIVETH</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", overflow: "hidden", borderBottom: `1px solid ${t.border}` }}>
      <style dangerouslySetInnerHTML={{ __html: HERO_CSS }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${t.dot} 1px, transparent 1px)`, backgroundSize: "32px 32px", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 10%, transparent 100%)", maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 10%, transparent 100%)" }} />
      <div className="av-hero" style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "clamp(56px, 7vw, 104px) clamp(16px, 4vw, 40px)" }}>
        <div>
          <Link to="/security" style={{ display: "inline-flex", alignItems: "center", gap: 10, minHeight: 36, padding: "4px 6px 4px 14px", borderRadius: 999, border: `1px solid ${t.border}`, background: t.glass, fontSize: 14, color: t.text2 }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: t.brand }} />
            India's DPDP Act, built in
            <span style={{ padding: "3px 10px", borderRadius: 999, background: t.btnBg, color: t.btnText, fontSize: 12.5, fontWeight: 500 }}>See how →</span>
          </Link>
          <h1 style={{ margin: "24px 0 0", fontSize: "clamp(38px, 4.6vw, 64px)", lineHeight: 1.04, fontWeight: 500, letterSpacing: "-0.045em" }}>
            Sign-in and access
            <br />
            <span style={{ backgroundImage: t.grad, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>for your organization.</span>
          </h1>
          <p style={{ margin: "22px 0 0", maxWidth: 560, fontSize: "clamp(17px, 1.4vw, 19px)", color: t.text2, marginInline: "inherit" }}>
            Passkeys, two-step, single sign-on, roles, sign-in for AI agents and DPDP consent — one service for your apps and your people.
          </p>
          <div className="av-hero-cta" style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button href={SIGN_UP} big>Start free</Button>
            <Button href={salesPage()} kind="quiet" big>Talk to sales</Button>
          </div>
          <div style={{ marginTop: 16, fontSize: 14, color: t.text3 }}>Free plan · No card needed</div>
        </div>
        <SignInCard />
      </div>
    </section>
  );
}
