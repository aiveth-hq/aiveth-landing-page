import SEOHead from "@/components/SEOHead";
import { SEO_HOME } from "@/lib/seo";
import { orgJsonLd, softwareJsonLd } from "@/lib/structured";
import SiteLayout from "@/site/SiteLayout";
import Hero from "@/home/Hero";
import { HomeFaq, WorksWith } from "@/home/Extras";
import { Compliance, Developers, Enterprise, Features, FinalCta, GridStyle, UseCases } from "@/home/Sections";

export default function Home() {
  return (
    <SiteLayout>
      <SEOHead seo={SEO_HOME} path="/" jsonLd={[orgJsonLd, softwareJsonLd]} />
      <GridStyle />
      <Hero />
      <WorksWith />
      <UseCases />
      <Features />
      <Developers />
      <Compliance />
      <Enterprise />
      <HomeFaq />
      <FinalCta />
    </SiteLayout>
  );
}
