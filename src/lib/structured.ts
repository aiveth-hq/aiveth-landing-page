import { SITE } from "./seo";

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gooclaim",
  url: "https://www.gooclaim.com",
  brand: { "@type": "Brand", name: "Aiveth" },
};

export const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Aiveth",
  url: SITE.url,
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  publisher: { "@type": "Organization", name: "Gooclaim" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free plan" },
};
