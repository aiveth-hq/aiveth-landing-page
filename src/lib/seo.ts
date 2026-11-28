export const SITE = {
  url: "https://aiveth.com",
  name: "Aiveth",
  defaultOgImage: "/og-aiveth.png",
};

export interface PageSEO {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string;
}

export const SEO_HOME: PageSEO = {
  title: "Aiveth · Sign-in and access control for your organization",
  description:
    "Aiveth gives your apps and your people secure sign-in: passkeys, two-step, single sign-on, roles, AI agent access and DPDP consent — one service.",
  keywords: "authentication, sign-in, single sign-on, SSO, SCIM, passkeys, OIDC, DPDP consent, identity, access control, India",
};
export const SEO_PRICING: PageSEO = {
  title: "Pricing · Aiveth",
  description: "Start free. Pro, Business and Enterprise are priced for your organization — talk to sales.",
};
export const SEO_SECURITY: PageSEO = {
  title: "Security and compliance · Aiveth",
  description: "How Aiveth protects sign-in and the data behind it, and how it helps you meet India's DPDP Act and CERT-In directions.",
};
export const SEO_PRIVACY: PageSEO = {
  title: "Privacy policy · Aiveth",
  description: "What personal data Aiveth handles, why, for how long, and the rights people have.",
};
export const SEO_TERMS: PageSEO = {
  title: "Terms of service · Aiveth",
  description: "The terms for using Aiveth.",
};
export const SEO_404: PageSEO = { title: "Page not found · Aiveth", description: "This page does not exist." };
export const SEO_INTEGRATIONS: PageSEO = { title: "Integrations · Aiveth", description: "Okta, Microsoft Entra ID, Google Workspace, Datadog, Splunk, Node.js, Python, React, Next.js and every OpenID Connect, SAML and SCIM tool." };
export const SEO_DEVELOPERS: PageSEO = { title: "Developers · Aiveth", description: "OpenID Connect, signed tokens for your own API, an admin API, webhooks and SDKs for Node, Python, React and Next.js — and docs for every step." };
export const SEO_ABOUT: PageSEO = { title: "About · Aiveth", description: "Why we built Aiveth, and what we will not compromise on." };
export const SEO_CONTACT_SALES: PageSEO = { title: "Talk to sales · Aiveth", description: "Tell us what your organization needs from Pro, Business or Enterprise, and we reply by email." };
export const SEO_CONTACT: PageSEO = { title: "Contact · Aiveth", description: "Talk to sales, report a security problem, or ask about privacy." };
export const SEO_DPA: PageSEO = { title: "Data processing agreement · Aiveth", description: "How Aiveth Labs processes personal data for organizations that use Aiveth." };
export const SEO_SUBPROCESSORS: PageSEO = { title: "Sub-processors · Aiveth", description: "The service providers that help us run Aiveth." };
