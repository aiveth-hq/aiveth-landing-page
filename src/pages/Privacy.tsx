import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { PRIVACY_EMAIL } from "@/lib/links";
import { SEO_PRIVACY } from "@/lib/seo";
import LegalLayout from "@/site/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout eyebrow="Legal · Privacy" title="Privacy policy" updated="28 November 2026">
      <SEOHead seo={SEO_PRIVACY} path="/privacy" />
      <p>
        Aiveth is a sign-in and access-control service. This policy explains what
        personal data Aiveth handles, why, who sees it, how long it is kept, and how to use your rights
        under the <strong>Digital Personal Data Protection Act, 2023</strong> and the{" "}
        <strong>Digital Personal Data Protection Rules, 2025</strong>.
      </p>
      <div className="callout">
        <strong>In one line</strong>
        If you sign in to an organization's app through Aiveth, that organization decides how your data
        is used, and we handle it only on its instructions. If you use this website, contact us, or run
        an organization's Aiveth account, we decide — and we use your data only to provide and support
        Aiveth. We do not sell personal data, and we do not use it to train AI models.
      </div>

      <h2>1. Who we are</h2>
      <p>
        Aiveth Labs Private Limited (&ldquo;Aiveth Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a
        company incorporated in India with its registered office in Bengaluru. We build and operate
        Aiveth and this website, aiveth.com.
      </p>

      <h2>2. Our two roles</h2>
      <ul>
        <li>
          <strong>For people who sign in to an organization's apps, we are a Data Processor.</strong> The
          organization that uses Aiveth is the <strong>Data Fiduciary</strong>: it decides which data is
          collected and why. Questions about that data go to the organization first; its privacy page is
          linked from its sign-in screen.
        </li>
        <li>
          <strong>For website visitors, people who contact us, and the admins of an organization's Aiveth
          account, we are the Data Fiduciary.</strong>
        </li>
      </ul>

      <h2>3. What we handle</h2>
      <h3>When you sign in through Aiveth</h3>
      <ul>
        <li>Your name, email address and, if the organization uses phone sign-in, your phone number.</li>
        <li>Your password, stored only as an Argon2id hash; your passkeys' public keys; your two-step settings, encrypted.</li>
        <li>Sign-in records: time, IP address, browser and device type, and the country your IP address points to.</li>
        <li>What the organization records about you in Aiveth: your role, groups, custom fields, consent records and the activity log of changes.</li>
      </ul>
      <h3>When you use this website or contact us</h3>
      <ul>
        <li>What you write to us, and your email address. On the Talk to sales form also your name, your organization and how many people work there; we keep it for up to a year, in India.</li>
        <li>Anonymous page statistics. This website uses Vercel Web Analytics, which does not use cookies. Your light or dark theme choice is kept in your browser only.</li>
      </ul>

      <h2>4. Why we use it</h2>
      <ul>
        <li>To sign you in, keep your account safe and stop attacks (for example a new-device alert or a blocked bot).</li>
        <li>To keep the records the law asks of us, such as logs under the CERT-In directions.</li>
        <li>To answer you, give support, and tell an organization's Owners about their account.</li>
      </ul>

      <h2>5. Who sees it</h2>
      <ul>
        <li>The organization whose app you sign in to.</li>
        <li>Service providers that help us run Aiveth, bound by contract to use the data only for that: cloud hosting, email delivery, phone message delivery in India, and a bot check. When an organization turns on a feature such as a parent check through DigiLocker or phone sign-in through Truecaller, those providers take part only in that step.</li>
        <li>Aiveth support, only when an organization turns support access on, for the time it chooses, read-only.</li>
        <li>Regulators, courts and authorities, where the law requires it.</li>
      </ul>

      <h3>Where it is kept</h3>
      <p>
        Production data is stored and processed in India. A few providers handle a small part of it
        outside India — they are named on the <Link to="/subprocessors">sub-processors page</Link>.
      </p>

      <h2>6. How long we keep it</h2>
      <ul>
        <li>The activity log is kept for one year (DPDP Rules, Rule 6), then removed.</li>
        <li>An organization can have unused accounts removed after warnings; it sets this itself.</li>
        <li>When an organization leaves Aiveth, its data is deleted, except what the law requires us to keep for longer.</li>
        <li>Messages to us are kept as long as we need them to answer you and for our records.</li>
      </ul>

      <h2>7. Your rights</h2>
      <p>Under the DPDP Act you can ask to:</p>
      <ul>
        <li>know what personal data is processed about you, and by whom (section 11);</li>
        <li>have it corrected, completed, updated or erased (section 12);</li>
        <li>have a grievance addressed (section 13);</li>
        <li>name someone to use your rights if you die or cannot (section 14);</li>
        <li>withdraw consent at any time, as easily as you gave it.</li>
      </ul>
      <p>
        If you sign in to an organization's app, use that organization's privacy page in Aiveth — it lets
        you download your data, ask for a correction, name a nominee or raise a complaint. For data we
        hold as the Data Fiduciary, write to us. If your grievance is not resolved, you may complain to
        the Data Protection Board of India.
      </p>

      <h2>8. Children</h2>
      <p>
        This website is not meant for children. Organizations that let children sign in can ask a parent
        or guardian for verifiable consent through Aiveth, as Rule 10 requires.
      </p>

      <h2>9. Security</h2>
      <p>
        How we protect sign-in and data is set out on our <Link to="/security">security page</Link>. If
        we learn of a personal data breach, we tell the organizations affected, the Data Protection
        Board and the people affected as the law requires.
      </p>

      <h2>10. Changes</h2>
      <p>
        When this policy changes, we update the date at the top. For a change that matters, we also tell
        organizations' Owners by email.
      </p>

      <h2>11. Contact and grievance officer</h2>
      <p>
        For any question or grievance about personal data, write to our Grievance Officer at{" "}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>. We answer within the time the DPDP Rules set.
      </p>
    </LegalLayout>
  );
}
