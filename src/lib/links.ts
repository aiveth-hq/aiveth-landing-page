/**
 * Every address the site sends people to, in ONE place. The production sign-in address is not
 * final yet: change APP here and every button follows.
 */
export const APP = "https://accounts.aiveth.com";
export const CONSOLE = `${APP}/console`;
export const SIGN_UP = `${APP}/signup`;
export const DOCS = "https://docs.aiveth.com";
export const SALES_EMAIL = "sales@aiveth.com";
export const SECURITY_EMAIL = "security@aiveth.com";
export const PRIVACY_EMAIL = "privacy@aiveth.com";
export const SUPPORT_EMAIL = "support@aiveth.com";
export const GOOCLAIM = "https://www.gooclaim.com";

/** "Talk to sales" opens the visitor's own mail app, the plan in the subject. */
export function salesMail(plan?: string): string {
  const subject = plan ? `Aiveth ${plan} plan` : "Aiveth — talk to sales";
  const body = "Organization:\nHow many people work there:\nWhat you need:\n";
  return `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
