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
export const SEO_INTEGRATIONS: PageSEO = { title: "Integrations · Aiveth by Gooclaim", description: "Okta, Microsoft Entra ID, Google Workspace, Datadog, Splunk, Node.js, Python, React and every OpenID Connect, SAML and SCIM tool." };
export const SEO_DEVELOPERS: PageSEO = { title: "Developers · Aiveth by Gooclaim", description: "OpenID Connect, an admin API, webhooks and SDKs — and docs for every step." };
export const SEO_ABOUT: PageSEO = { title: "About · Aiveth by Gooclaim", description: "Why Gooclaim built Aiveth, and what we will not compromise on." };
export const SEO_CONTACT_SALES: PageSEO = { title: "Talk to sales · Aiveth by Gooclaim", description: "Tell us what your organization needs from Pro, Business or Enterprise, and we reply by email." };
export const SEO_CONTACT: PageSEO = { title: "Contact · Aiveth by Gooclaim", description: "Talk to sales, report a security problem, or ask about privacy." };
export const SEO_DPA: PageSEO = { title: "Data processing agreement · Aiveth by Gooclaim", description: "How Gooclaim processes personal data for organizations that use Aiveth." };
export const SEO_SUBPROCESSORS: PageSEO = { title: "Sub-processors · Aiveth by Gooclaim", description: "The service providers that help Gooclaim run Aiveth." };
