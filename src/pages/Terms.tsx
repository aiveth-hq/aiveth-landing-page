import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { SALES_EMAIL } from "@/lib/links";
import { SEO_TERMS } from "@/lib/seo";
import LegalLayout from "@/site/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout eyebrow="Legal · Terms" title="Terms of service" updated="24 November 2026">
      <SEOHead seo={SEO_TERMS} path="/terms" />
      <p>
        These terms apply when an organization uses Aiveth. By creating an Aiveth account, or by using
        Aiveth on an organization's behalf, you agree to them for that organization. If you have signed
        a separate agreement with Gooclaim, that agreement comes first where the two differ.
      </p>

      <h2>1. Who the terms are between</h2>
      <p>
        &ldquo;Gooclaim&rdquo; means Gooclaim Technologies Private Limited, Bengaluru, India. &ldquo;You&rdquo;
        means the organization that holds the Aiveth account. &ldquo;Aiveth&rdquo; means the sign-in and
        access-control service, its console, APIs, SDKs and documentation.
      </p>

      <h2>2. Your account</h2>
      <ul>
        <li>Your Owners control the account and are responsible for who they give access to.</li>
        <li>Keep passwords, API keys and other secrets safe, and tell us at once if you think one is exposed.</li>
        <li>You are responsible for what is done in your account and for the apps you connect to Aiveth.</li>
      </ul>

      <h2>3. Acceptable use</h2>
      <p>You must not use Aiveth to:</p>
      <ul>
        <li>break the law, or process personal data without a lawful basis;</li>
        <li>attack, probe or overload Aiveth or anyone else's systems, except security testing we agree to in writing;</li>
        <li>send spam or messages people have not asked for;</li>
        <li>copy, resell or rebuild Aiveth, except as a partner under a written agreement with Gooclaim.</li>
      </ul>

      <h2>4. Your data</h2>
      <ul>
        <li>You own the data you and your people put into Aiveth.</li>
        <li>For the personal data of the people who sign in to your apps, you are the Data Fiduciary and Gooclaim is your Data Processor: we process it only on your instructions, to provide Aiveth. Data processing terms are available on request.</li>
        <li>How we handle personal data is set out in our <Link to="/privacy">privacy policy</Link>.</li>
      </ul>

      <h2>5. Plans and fees</h2>
      <ul>
        <li>The Free plan has no fee.</li>
        <li>Pro, Business and Enterprise are agreed with you: write to <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>. The price, billing and taxes are those we agree in writing.</li>
        <li>An Owner can move to a smaller plan at any time. Nothing is deleted; features the smaller plan does not include turn off.</li>
      </ul>

      <h2>6. Availability and support</h2>
      <p>
        We work to keep Aiveth available and secure. A service-level agreement applies only where your
        plan or agreement includes one. Support is given as your plan describes on the{" "}
        <Link to="/pricing">pricing page</Link>.
      </p>

      <h2>7. Suspension and ending</h2>
      <ul>
        <li>We may suspend an account that breaks these terms or puts Aiveth or others at risk, and we will tell your Owners why.</li>
        <li>You may stop using Aiveth at any time. When an account ends, its data is deleted, except what the law requires us to keep.</li>
      </ul>

      <h2>8. Our property</h2>
      <p>
        Aiveth, its software and its name belong to Gooclaim. These terms give you the right to use
        Aiveth while your account is active; they do not transfer ownership.
      </p>

      <h2>9. Confidentiality</h2>
      <p>
        Each side keeps the other's confidential information secret and uses it only for Aiveth, except
        where the law requires otherwise.
      </p>

      <h2>10. Warranties and liability</h2>
      <ul>
        <li>Aiveth is provided &ldquo;as is&rdquo;, except for what your plan or agreement promises.</li>
        <li>Neither side is liable for indirect or consequential loss. Gooclaim's total liability is limited to the fees you paid for Aiveth in the twelve months before the claim.</li>
        <li>Nothing here limits liability that the law does not allow to be limited.</li>
      </ul>

      <h2>11. Changes</h2>
      <p>
        We may update these terms. We update the date at the top, and for a change that matters we tell
        your Owners by email before it takes effect.
      </p>

      <h2>12. Governing law</h2>
      <p>These terms are governed by the laws of India. Courts at Bengaluru, Karnataka have jurisdiction.</p>
    </LegalLayout>
  );
}
