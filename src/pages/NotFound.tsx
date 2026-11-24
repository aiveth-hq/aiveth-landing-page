import SEOHead from "@/components/SEOHead";
import { SEO_404 } from "@/lib/seo";
import SiteLayout from "@/site/SiteLayout";
import { t } from "@/site/theme";
import { Button, wrap } from "@/site/ui";

export default function NotFound() {
  return (
    <SiteLayout>
      <SEOHead seo={SEO_404} path="/404" />
      <section>
        <div style={{ ...wrap, paddingTop: 120, paddingBottom: 140, textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: 48, fontWeight: 500, letterSpacing: "-0.04em" }}>Page not found</h1>
          <p style={{ margin: "14px 0 28px", color: t.text2 }}>The page you asked for isn't here.</p>
          <Button href="/">Back to the home page</Button>
        </div>
      </section>
    </SiteLayout>
  );
}
