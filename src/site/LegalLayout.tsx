import type { ReactNode } from "react";
import { makeTheme } from "@/theme/theme";
import { ThemeStyle } from "@/theme/ThemeProvider";
import SiteLayout from "./SiteLayout";
import { Eyebrow, wrap } from "./ui";
import { t } from "./theme";

/** The `--lg-*` colours `.prose-legal` (globals.css) reads. */
const lg = makeTheme("lg", {
  text: ["#0C0A09", "#F5F5F4"], text2: ["#44403C", "#C7C2BE"], text3: ["#78716C", "#8C8783"],
  brand: ["#1D4ED8", "#60A5FA"], brandLine: ["#C7D7FE", "rgba(96,165,250,.35)"],
  brandSoft: ["#F1F5FF", "rgba(96,165,250,.10)"], surface2: ["#F2F1EF", "#151A25"],
});

export default function LegalLayout({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated: string; children: ReactNode }) {
  return (
    <SiteLayout>
      <ThemeStyle css={lg.css} />
      <section>
        <div style={{ ...wrap, maxWidth: 820, paddingTop: "clamp(48px, 6vw, 88px)", paddingBottom: "clamp(56px, 7vw, 104px)" }}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 style={{ margin: "12px 0 0", fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: 1.06, fontWeight: 500, letterSpacing: "-0.04em" }}>{title}</h1>
          <div style={{ marginTop: 12, fontSize: 14, color: t.text3 }}>Last updated {updated}</div>
          <div className="prose-legal" style={{ marginTop: 24 }}>{children}</div>
        </div>
      </section>
    </SiteLayout>
  );
}
