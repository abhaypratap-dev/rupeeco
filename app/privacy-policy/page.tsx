import type { Metadata } from "next";
import LegalPage, { type Section } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Rupeeco collects, uses, stores, shares and protects personal data, and the rights available to data principals.",
};

const sections: Section[] = [
  {
    id: "scope",
    heading: "Scope of this policy",
    body: (
      <>
        <p>
          This policy explains how {site.legalName} (&ldquo;Rupeeco&rdquo;, &ldquo;we&rdquo;) handles personal data when
          you visit this website, contact us, or use our APIs and dashboard.
        </p>
        <p>
          Where we process personal data on behalf of a business customer — for example, verifying that customer&apos;s
          end users — we act as a data processor under that customer&apos;s instructions, and their own privacy notice
          governs the relationship with the individual.
        </p>
      </>
    ),
  },
  {
    id: "collect",
    heading: "Information we collect",
    body: (
      <>
        <ul>
          <li>
            <strong>Contact details you submit</strong> — name, work email, company, phone number, enquiry type and
            message content submitted through forms on this site.
          </li>
          <li>
            <strong>Account and integration data</strong> — API keys, webhook endpoints, dashboard user records, roles
            and configuration settings.
          </li>
          <li>
            <strong>Transaction and verification data</strong> — payment, payout, collection, mandate and verification
            records processed through our APIs on behalf of our customers.
          </li>
          <li>
            <strong>Technical data</strong> — IP address, device and browser information, request logs, timestamps and
            error traces.
          </li>
        </ul>
        <p>
          We do not knowingly collect data from children, and we do not ask you to send full card numbers, CVVs, OTPs or
          Aadhaar numbers over email.
        </p>
      </>
    ),
  },
  {
    id: "use",
    heading: "How we use information",
    body: (
      <ul>
        <li>To respond to your enquiry and route it to the correct internal team.</li>
        <li>To provide, operate, secure and improve the Rupeeco platform and its APIs.</li>
        <li>To perform KYC, KYB, fraud prevention, AML screening and risk decisioning.</li>
        <li>To meet legal, regulatory, audit and tax obligations.</li>
        <li>To send service, security and status communications relating to your account.</li>
      </ul>
    ),
  },
  {
    id: "legal-basis",
    heading: "Consent and lawful basis",
    body: (
      <p>
        Where required, we process personal data on the basis of consent — for example, verification checks that require
        an explicit consent flag in the API request. We also rely on the performance of a contract, compliance with a
        legal obligation, and our legitimate interest in operating a secure platform. You may withdraw consent at any
        time by writing to <a href={`mailto:${site.emails.support}`}>{site.emails.support}</a>, though this may prevent
        us from providing certain services.
      </p>
    ),
  },
  {
    id: "sharing",
    heading: "How we share information",
    body: (
      <>
        <p>We share personal data only as necessary, with:</p>
        <ul>
          <li>Banks, payment gateways, payout partners and card networks used to execute your transaction.</li>
          <li>Verification and data partners, registries and credit bureaus performing an authorised check.</li>
          <li>Cloud infrastructure, communication and analytics providers under contract with us.</li>
          <li>Regulators, law enforcement and courts where legally required.</li>
        </ul>
        <p>We do not sell personal data, and we do not use customer transaction data for advertising.</p>
      </>
    ),
  },
  {
    id: "security",
    heading: "Data security",
    body: (
      <p>
        We apply AES-256 encryption at rest, TLS 1.3 in transit, HSM-backed key custody, role-based access control,
        network segmentation, immutable audit logging and regular penetration testing. No system is perfectly secure, so
        we also maintain an incident response process and will notify affected parties and authorities as required by
        applicable law.
      </p>
    ),
  },
  {
    id: "retention",
    heading: "Data retention and residency",
    body: (
      <p>
        Customer and transaction data is stored and processed within India. We retain records for as long as your
        relationship with us continues and thereafter for the period required by applicable financial, tax and
        anti-money-laundering law, after which data is deleted or irreversibly anonymised.
      </p>
    ),
  },
  {
    id: "rights",
    heading: "Your rights",
    body: (
      <>
        <p>Subject to applicable law, you may request:</p>
        <ul>
          <li>Access to a summary of the personal data we hold about you.</li>
          <li>Correction or completion of inaccurate or incomplete data.</li>
          <li>Erasure of data we no longer have a lawful basis to retain.</li>
          <li>Withdrawal of consent, and nomination of another person to exercise your rights.</li>
          <li>Grievance redressal, as described on our grievance page.</li>
        </ul>
        <p>
          Send requests to <a href={`mailto:${site.emails.support}`}>{site.emails.support}</a>. We may need to verify
          your identity before acting.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and analytics",
    body: (
      <p>
        This website uses only the cookies and local storage needed to serve pages and remember your preferences. If we
        later add analytics or marketing cookies, we will publish a cookie notice and ask for your consent before
        setting them.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: (
      <p>
        We may update this policy as our services, partners or legal obligations change. Material changes will be
        announced on this page with a revised effective date, and where required we will notify you directly.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="25 July 2026"
      intro="What we collect, why we collect it, who we share it with, how long we keep it, and what you can ask us to do about it."
      sections={sections}
      contactEmail={site.emails.support}
    />
  );
}
