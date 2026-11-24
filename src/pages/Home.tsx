import SEOHead from "@/components/SEOHead";
import { SEO_HOME } from "@/lib/seo";
import { orgJsonLd, softwareJsonLd } from "@/lib/structured";
import SiteLayout from "@/site/SiteLayout";
import Hero from "@/home/Hero";
import { Compliance, Developers, Enterprise, Features, FinalCta, GridStyle } from "@/home/Sections";

export default function Home() {
  return (
    <SiteLayout>
      <SEOHead seo={SEO_HOME} path="/" jsonLd={[orgJsonLd, softwareJsonLd]} />
      <GridStyle />
      <Hero />
      <Features />
      <Developers />
      <Compliance />
      <Enterprise />
      <FinalCta />
    </SiteLayout>
  );
}
