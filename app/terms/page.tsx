import type { Metadata } from "next";
import LegalPage, { type Section } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing use of the Rupeeco website, APIs and dashboard, including acceptable use, fees, liability, refunds and termination.",
};

const sections: Section[] = [
  {
    id: "acceptance",
    heading: "Acceptance of terms",
    body: (
      <p>
        By accessing this website or using any Rupeeco API, SDK, dashboard or sandbox, you agree to these terms on behalf
        of yourself and the entity you represent. Where you have signed a separate master services agreement or order
        form with {site.legalName}, that agreement prevails over these terms to the extent of any conflict.
      </p>
    ),
  },
  {
    id: "eligibility",
    heading: "Eligibility and onboarding",
    body: (
      <>
        <p>
          Production access is available to businesses registered in India that complete our onboarding and due diligence
          process. We may request incorporation documents, PAN, GST registration, beneficial ownership details, bank
          account proof and details of your business model.
        </p>
        <p>
          We may decline, suspend or withdraw access where onboarding checks fail, where information provided is
          inaccurate, or where your business activity falls outside what our partners and applicable regulations permit.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    heading: "Acceptable use",
    body: (
      <>
        <p>You agree not to use the platform to:</p>
        <ul>
          <li>Process transactions for activities prohibited by law, by card networks or by our banking partners.</li>
          <li>Perform verification checks without a valid purpose and, where required, the individual&apos;s consent.</li>
          <li>Circumvent rate limits, probe our infrastructure, or attempt unauthorised access to any account.</li>
          <li>Misrepresent your business, your beneficial owners or the nature of your transactions.</li>
          <li>Store card data in violation of applicable card-network and tokenisation requirements.</li>
        </ul>
      </>
    ),
  },
  {
    id: "your-obligations",
    heading: "Your obligations",
    body: (
      <ul>
        <li>Keep API keys and dashboard credentials confidential, and rotate them if compromise is suspected.</li>
        <li>Verify webhook signatures before acting on any event.</li>
        <li>Maintain your own records and provide required disclosures to your end customers.</li>
        <li>Respond promptly to our requests relating to disputes, chargebacks and regulatory queries.</li>
      </ul>
    ),
  },
  {
    id: "fees",
    heading: "Fees, invoicing and taxes",
    body: (
      <p>
        Fees are set out in your order form or rate card. Underlying rail costs — gateway MDR, IMPS, NEFT, RTGS, UPI and
        partner charges — are passed through as incurred and shown separately. Invoices are raised on the agreed cycle
        and are payable within the stated period. All fees are exclusive of GST and other applicable taxes, which are
        charged additionally. Overdue amounts may attract interest and may result in suspension of service.
      </p>
    ),
  },
  {
    id: "refunds",
    heading: "Refunds and cancellation",
    body: (
      <>
        <p>
          Platform fees are calculated on usage that has already been delivered and are therefore not refundable, except
          where an amount has been billed in error. If you believe you have been billed incorrectly, raise the dispute
          within 30 days of the invoice date at{" "}
          <a href={`mailto:${site.emails.support}`}>{site.emails.support}</a> and we will investigate and issue a credit
          note where the claim is valid.
        </p>
        <p>
          Refunds of an underlying <em>transaction</em> to your end customer are a separate matter and are processed
          through the refund APIs, subject to the rules and timelines of the relevant gateway, bank or rail. Prepaid or
          committed-volume arrangements may be cancelled in line with the notice period in your order form; unused
          committed volume is not refundable unless expressly stated there.
        </p>
      </>
    ),
  },
  {
    id: "service-levels",
    heading: "Service levels and availability",
    body: (
      <p>
        We target high availability and publish incident updates, but availability of downstream banks, gateways,
        registries and networks is outside our control. Uptime commitments, service credits and support response times
        apply only where they are expressly agreed in your order form. Sandbox environments are provided without any
        availability commitment.
      </p>
    ),
  },
  {
    id: "ip",
    heading: "Intellectual property",
    body: (
      <p>
        Rupeeco retains all rights in the platform, APIs, SDKs, documentation, dashboard and brand assets. You receive a
        limited, non-exclusive, non-transferable right to use them for the term of your agreement. You retain all rights
        in your own data and content, and grant us only the licence needed to provide the services.
      </p>
    ),
  },
  {
    id: "confidentiality",
    heading: "Confidentiality",
    body: (
      <p>
        Each party will protect the other&apos;s non-public information with at least the care it applies to its own, use
        it only for the purposes of the agreement, and disclose it only to personnel and subcontractors who need it and
        are bound by equivalent obligations.
      </p>
    ),
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    body: (
      <p>
        To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, punitive or
        consequential losses, or for loss of profit, revenue, goodwill or data. Our aggregate liability arising out of or
        relating to the services is limited to the platform fees you paid us in the three months preceding the event
        giving rise to the claim. Nothing in these terms limits liability for fraud, wilful misconduct or any liability
        that cannot lawfully be limited.
      </p>
    ),
  },
  {
    id: "termination",
    heading: "Suspension and termination",
    body: (
      <p>
        We may suspend access immediately where we reasonably suspect fraud, a security incident, a breach of acceptable
        use, or where a regulator or partner bank instructs us to do so. Either party may terminate for material breach
        that remains uncured after written notice. On termination, your access ends, outstanding fees become payable, and
        we retain records for the period required by law.
      </p>
    ),
  },
  {
    id: "law",
    heading: "Governing law and disputes",
    body: (
      <p>
        These terms are governed by the laws of India. The courts at Bengaluru, Karnataka have exclusive jurisdiction,
        save that either party may seek urgent injunctive relief in any competent court. Before commencing proceedings,
        the parties will attempt in good faith to resolve the dispute through their designated representatives.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="25 July 2026"
      intro="The rules that govern use of the Rupeeco website, APIs, SDKs, sandbox and dashboard."
      sections={sections}
      contactEmail={site.emails.connect}
    />
  );
}
