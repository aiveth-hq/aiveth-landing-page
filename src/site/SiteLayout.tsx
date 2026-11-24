import { type ReactNode } from "react";
import { ThemeStyle } from "@/theme/ThemeProvider";
import Nav from "./Nav";
import Footer from "./Footer";
import { siteCss, t } from "./theme";

/** Every page: the shared header, the page, the shared footer. */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="av" style={{ minHeight: "100vh", background: t.bg, color: t.text, fontFamily: "Inter, system-ui, sans-serif", fontSize: 16, lineHeight: 1.5, transition: "background .3s, color .3s" }}>
      <ThemeStyle css={siteCss} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
