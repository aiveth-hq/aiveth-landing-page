import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { PRIVACY_EMAIL } from "@/lib/links";
import { SEO_DPA, SEO_SUBPROCESSORS } from "@/lib/seo";
import LegalLayout from "@/site/LegalLayout";

export function Dpa() {
  return (
    <LegalLayout eyebrow="Legal · Data processing" title="Data processing agreement" updated="24 November 2026">
      <SEOHead seo={SEO_DPA} path="/dpa" />
      <p>
        This agreement is part of the <Link to="/terms">terms of service</Link>. It sets out how Gooclaim
        Technologies Private Limited (&ldquo;Gooclaim&rdquo;) processes personal data for an organization that
        uses Aiveth (&ldquo;you&rdquo;), under the <strong>Digital Personal Data Protection Act, 2023</strong> and
        the <strong>Digital Personal Data Protection Rules, 2025</strong>.
      </p>
      <div className="callout">
        <strong>Need a signed copy?</strong>
        Write to <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> with your organization's name. We send
        this agreement for signature, with any changes we agree in writing.
      </div>

      <h2>1. Roles</h2>
      <ul>
        <li>You are the <strong>Data Fiduciary</strong> for the personal data of the people who sign in to your apps and are managed in your Aiveth account.</li>
        <li>Gooclaim is your <strong>Data Processor</strong>: it processes that data only to provide Aiveth, and only on your documented instructions — your settings in the console and API, these terms, and what you ask in writing.</li>
      </ul>

      <h2>2. What is processed</h2>
      <ul>
        <li><strong>People:</strong> your staff, customers and others who sign in to your apps or are added to your account.</li>
        <li><strong>Data:</strong> names, email addresses, phone numbers if you use phone sign-in, credentials (stored as hashes or public keys), sign-in records (time, IP address, browser, approximate country), roles and groups, custom fields you define, consent records and the activity log.</li>
        <li><strong>Purpose:</strong> signing people in, controlling their access, keeping their accounts safe, and the records you need for the law.</li>
        <li><strong>Duration:</strong> while your account is active, then as set out in section 8.</li>
      </ul>

      <h2>3. Gooclaim's duties</h2>
      <ul>
        <li>Process the data only for the purpose above, and tell you if an instruction appears to break the law.</li>
        <li>Make sure everyone at Gooclaim who can see the data is bound to keep it confidential.</li>
        <li>Keep the security measures described on our <Link to="/security">security page</Link>, and keep improving them.</li>
        <li>Not sell the data, and not use it to train AI models.</li>
      </ul>

      <h2>4. Sub-processors</h2>
      <ul>
        <li>You allow Gooclaim to use the sub-processors on the <Link to="/subprocessors">sub-processors page</Link>.</li>
        <li>Each is bound in writing to protect the data at least as well as this agreement does. Gooclaim stays responsible for them.</li>
        <li>Before adding or replacing one, we update that page and email your Owners at least 30 days ahead. You may object; if we cannot address it, you may end the affected service.</li>
      </ul>

      <h2>5. Helping you with people's rights</h2>
      <p>
        Aiveth gives your people a rights page — download their data, ask for a correction, name a nominee,
        raise a complaint — and gives your admins the tools to act on each request. Where a request reaches
        Gooclaim directly, we pass it to you and do not answer it ourselves, unless you ask us to.
      </p>

      <h2>6. Personal data breaches</h2>
      <ul>
        <li>Gooclaim tells you without undue delay after it becomes aware of a personal data breach that affects your data, with what it knows, and keeps you updated.</li>
        <li>Aiveth's breach register and notices help you inform the Data Protection Board and the people affected, as Rule 7 requires.</li>
      </ul>

      <h2>7. Where data is processed</h2>
      <p>
        Data is processed in the places listed for each sub-processor. Any transfer outside India follows
        section 16 of the Act and never goes to a country the Government of India restricts.
      </p>

      <h2>8. When your account ends</h2>
      <p>
        You can export your data before you leave. After your account ends, Gooclaim deletes your data,
        except what the law requires it to keep (for example, the activity log for the period the Rules set).
      </p>

      <h2>9. Audits</h2>
      <p>
        Aiveth gives you the evidence first: the activity log, a yearly audit report and a CERT-In log
        package. If you need more, we answer reasonable written questions and, once a year with 30 days'
        notice, support an audit by you or an auditor bound to confidentiality.
      </p>

      <h2>10. General</h2>
      <p>
        Liability under this agreement follows the terms of service. Where this agreement and the terms
        differ about personal data, this agreement applies. It is governed by the laws of India.
      </p>
    </LegalLayout>
  );
}

/** The providers Aiveth's own code calls, and when. Keep it equal to what production runs. */
const PROCESSORS: [string, string, string, string][] = [
  ["Microsoft Azure", "Hosting: servers and databases", "All data in Aiveth", "India"],
  ["Amazon Web Services (Amazon SES)", "Sending email: codes, invitations and notices", "Email address, the message", "Mumbai, India"],
  ["MSG91", "Sending codes to Indian phones by WhatsApp or SMS", "Phone number, the code", "India"],
  ["Cloudflare (Turnstile)", "Bot check on sign-in pages", "IP address, browser signals", "Global network"],
  ["Setu (DigiLocker)", "A parent's identity check — only when an organization turns it on", "The parent's name and date of birth from DigiLocker", "India"],
  ["Truecaller", "Phone sign-in with Truecaller — only when an organization turns it on", "Phone number, name", "As the provider sets"],
  ["PostHog", "Which console screens admins use — only when switched on; never for support sessions", "Screen names with IDs removed", "European Union"],
];

export function Subprocessors() {
  return (
    <LegalLayout eyebrow="Legal · Sub-processors" title="Sub-processors" updated="24 November 2026">
      <SEOHead seo={SEO_SUBPROCESSORS} path="/subprocessors" />
      <p>
        These service providers help Gooclaim run Aiveth and may process personal data for the
        organizations that use it, under the <Link to="/dpa">data processing agreement</Link>. We email
        Owners at least 30 days before adding or replacing one.
      </p>
      <div style={{ overflowX: "auto", margin: "24px 0" }}>
        <table style={{ width: "100%", minWidth: 640, borderCollapse: "collapse", fontSize: 15 }}>
          <thead>
            <tr>{["Provider", "What it does", "Data", "Where"].map((h) => <th key={h} style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid var(--lg-brandLine)", color: "var(--lg-text)" }}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {PROCESSORS.map((r) => (
              <tr key={r[0]}>{r.map((c, i) => <td key={i} style={{ padding: "12px", borderBottom: "1px solid var(--lg-surface2)", verticalAlign: "top", fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "var(--lg-text)" : undefined }}>{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        When people choose to sign in with Google, Microsoft or GitHub, or an organization connects its own
        identity provider or its own AI provider, that provider is chosen by them, not by Gooclaim, and its
        own terms apply.
      </p>
    </LegalLayout>
  );
}
