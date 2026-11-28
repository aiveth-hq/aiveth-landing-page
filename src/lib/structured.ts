import { SITE } from "./seo";

export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aiveth Labs Private Limited",
  url: SITE.url,
  brand: { "@type": "Brand", name: "Aiveth" },
};

export const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Aiveth",
  url: SITE.url,
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  publisher: { "@type": "Organization", name: "Aiveth Labs Private Limited" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free plan" },
};
