import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { mono, t } from "./theme";

export const wrap: CSSProperties = { maxWidth: 1240, margin: "0 auto", padding: "0 clamp(16px, 4vw, 40px)" };

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: ".12em", color: t.brand, textTransform: "uppercase" }}>{children}</div>;
}

export function Heading({ eyebrow, title, lead, center }: { eyebrow?: string; title: ReactNode; lead?: ReactNode; center?: boolean }) {
  return (
    <div style={{ maxWidth: 760, margin: center ? "0 auto" : undefined, textAlign: center ? "center" : undefined }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 style={{ margin: "12px 0 0", fontSize: "clamp(30px, 3.6vw, 48px)", lineHeight: 1.08, fontWeight: 500, letterSpacing: "-0.035em" }}>{title}</h2>
      {lead && <p style={{ margin: "16px 0 0", fontSize: "clamp(16px, 1.25vw, 18px)", color: t.text2 }}>{lead}</p>}
    </div>
  );
}

const base: CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, minHeight: 48, padding: "0 22px", borderRadius: 999, fontSize: 16, fontWeight: 500, whiteSpace: "nowrap" };

/** A button-looking link: "primary" black, "quiet" outlined. Internal paths use the router. */
export function Button({ href, children, kind = "primary", big }: { href: string; children: ReactNode; kind?: "primary" | "quiet"; big?: boolean }) {
  const style: CSSProperties = {
    ...base,
    ...(big ? { minHeight: 56, padding: "0 28px", fontSize: 17 } : {}),
    ...(kind === "primary"
      ? { background: t.btnBg, color: t.btnText }
      : { background: t.glass, color: t.text, border: `1px solid ${t.border}`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }),
  };
  if (href.startsWith("/")) return <Link to={href} style={style} data-btn="">{children}</Link>;
  const external = href.startsWith("http");
  return <a href={href} style={style} data-btn="" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>;
}

export function Check({ color }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color ?? t.brand} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: 3 }}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

/** A stroke icon from a path list (Lucide style, 24-grid, 1.8 stroke). */
export function Icon({ d, color }: { d: string[]; color?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color ?? "currentColor"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {d.map((p) => <path key={p} d={p} />)}
    </svg>
  );
}
