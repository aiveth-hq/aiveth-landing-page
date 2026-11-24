import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/theme/ThemeProvider";
import { CONSOLE, DOCS, SIGN_UP } from "@/lib/links";
import Logo from "./Logo";
import { t } from "./theme";

const LINKS = [
  { label: "Product", to: "/#product" },
  { label: "Developers", to: "/#developers" },
  { label: "Security", to: "/security" },
  { label: "Pricing", to: "/pricing" },
  { label: "Docs", to: DOCS },
];

const LAYOUT_CSS = ".av-nav-narrow{display:none}@media (max-width:959px){.av-nav-wide{display:none!important}.av-nav-narrow{display:flex}}";

function ThemeButton({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <button type="button" onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} style={{ width: 40, height: 40, flex: "none", borderRadius: 999, border: `1px solid ${t.border}`, background: t.surface, color: t.text, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg className="only-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg className="only-light" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
      </svg>
    </button>
  );
}

function NavLink({ l, active, block }: { l: (typeof LINKS)[number]; active: boolean; block?: boolean }) {
  const style = { padding: block ? "12px" : "8px 12px", borderRadius: block ? 12 : 999, fontSize: block ? 16 : 14, color: active ? t.text : t.text2, background: active ? t.surface2 : "transparent", fontWeight: active ? 600 : 500 };
  return l.to.startsWith("http")
    ? <a href={l.to} style={style}>{l.label}</a>
    : <Link to={l.to} aria-current={active ? "page" : undefined} style={style}>{l.label}</Link>;
}

export default function Nav() {
  const { pathname } = useLocation();
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  const active = (to: string) => !to.startsWith("http") && !to.startsWith("/#") && pathname.startsWith(to);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: `color-mix(in srgb, ${t.bg} 85%, transparent)`, backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: `1px solid ${t.border}`, color: t.text }}>
      <style dangerouslySetInnerHTML={{ __html: LAYOUT_CSS }} />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "12px 20px", display: "flex", alignItems: "center", gap: 28 }}>
        <Link to="/" aria-label="Aiveth by Gooclaim, home" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 600, fontSize: 18, letterSpacing: "-0.02em", flex: "none" }}>
          <Logo size={26} />
          <span>Aiveth<span style={{ color: t.text3, fontWeight: 500, fontSize: 13, marginLeft: 6 }}>by Gooclaim</span></span>
        </Link>
        <nav aria-label="Main" className="av-nav-wide" style={{ display: "flex", gap: 4, flex: 1 }}>
          {LINKS.map((l) => <NavLink key={l.label} l={l} active={active(l.to)} />)}
        </nav>
        <div className="av-nav-wide" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href={CONSOLE} style={{ padding: "9px 14px", borderRadius: 999, fontSize: 14, fontWeight: 500, color: t.text2 }}>Sign in</a>
          <ThemeButton dark={dark} toggle={toggle} />
          <a href={SIGN_UP} style={{ padding: "10px 16px", borderRadius: 999, background: t.btnBg, color: t.btnText, fontSize: 14, fontWeight: 500 }}>Start free</a>
        </div>
        <div className="av-nav-narrow" style={{ marginLeft: "auto", alignItems: "center", gap: 8 }}>
          <ThemeButton dark={dark} toggle={toggle} />
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="av-nav-panel" aria-label={open ? "Close menu" : "Open menu"} style={{ width: 40, height: 40, borderRadius: 999, border: `1px solid ${t.border}`, background: t.surface, color: t.text, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div id="av-nav-panel" className="av-nav-narrow gc-row-in" style={{ flexDirection: "column", gap: 4, padding: "8px 20px 20px", borderTop: `1px solid ${t.border}` }}>
          <nav aria-label="Main" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {LINKS.map((l) => <NavLink key={l.label} l={l} active={active(l.to)} block />)}
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
            <a href={CONSOLE} style={{ padding: "13px 16px", borderRadius: 999, border: `1px solid ${t.border}`, textAlign: "center", fontWeight: 500 }}>Sign in</a>
            <a href={SIGN_UP} style={{ padding: "13px 16px", borderRadius: 999, background: t.btnBg, color: t.btnText, textAlign: "center", fontWeight: 500 }}>Start free</a>
          </div>
        </div>
      )}
    </header>
  );
}
