export const SITE = {
  url: "https://aiveth.com",
  name: "Aiveth by Gooclaim",
  twitter: "@gooclaim",
  defaultOgImage: "/og-image.png",
};

export interface PageSEO {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string;
}

export const SEO_HOME: PageSEO = {
  title: "Aiveth by Gooclaim · Sign-in and access control for your organization",
  description:
    "Aiveth gives your apps and your people secure sign-in: passkeys, two-step, single sign-on, roles, AI agent access and DPDP consent — one service, built by Gooclaim.",
  keywords: "authentication, sign-in, single sign-on, SSO, SCIM, passkeys, OIDC, DPDP consent, identity, access control, India",
};
export const SEO_PRICING: PageSEO = {
  title: "Pricing · Aiveth by Gooclaim",
  description: "Start free. Pro, Business and Enterprise are priced for your organization — talk to sales.",
};
export const SEO_SECURITY: PageSEO = {
  title: "Security and compliance · Aiveth by Gooclaim",
  description: "How Aiveth protects sign-in and the data behind it, and how it helps you meet India's DPDP Act and CERT-In directions.",
};
export const SEO_PRIVACY: PageSEO = {
  title: "Privacy policy · Aiveth by Gooclaim",
  description: "What personal data Aiveth handles, why, for how long, and the rights people have.",
};
export const SEO_TERMS: PageSEO = {
  title: "Terms of service · Aiveth by Gooclaim",
  description: "The terms for using Aiveth.",
};
export const SEO_404: PageSEO = { title: "Page not found · Aiveth by Gooclaim", description: "This page does not exist." };
