/**
 * Every address the site sends people to, in ONE place.
 */
export const APP = "https://accounts.aiveth.com";
export const CONSOLE = `${APP}/console`;
export const SIGN_UP = `${APP}/signup`;
export const DOCS = "https://docs.aiveth.com";
/** One mailbox for now (founder 2026-11-24): sales, support, security and privacy all go here
 *  until each has its own. Change one constant below when it does. */
export const CONTACT_EMAIL = "contact@aiveth.com";
export const SALES_EMAIL = CONTACT_EMAIL;
export const SECURITY_EMAIL = CONTACT_EMAIL;
export const PRIVACY_EMAIL = CONTACT_EMAIL;
export const SUPPORT_EMAIL = CONTACT_EMAIL;

/** "Talk to sales" opens the form (`/contact-sales`), the plan carried along when there is one. */
export function salesPage(plan?: string): string {
  return plan ? `/contact-sales?plan=${encodeURIComponent(plan.toLowerCase())}` : "/contact-sales";
}
/** Where the form posts: Aiveth itself keeps the request (India) and emails sales. */
export const SALES_API = `${APP}/v1/sales-requests`;
/** Cloudflare Turnstile's site key — public by design (the secret stays on Aiveth's server). */
export const TURNSTILE_SITE_KEY = "0x4AAAAAAGREPgsamxVXBLNi";
