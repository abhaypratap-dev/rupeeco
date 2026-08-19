import type { Metadata } from "next";
import LegalPage, { type Section } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Grievance Redressal",
  description:
    "How to raise a complaint with Rupeeco, the escalation levels available, the timelines we commit to at each stage, and our registered office details.",
};

const sections: Section[] = [
  {
    id: "level-1",
    heading: "Level 1 — Customer support",
    body: (
      <>
        <p>
          Start with our support desk. Include your merchant or account ID, the transaction or request ID, timestamps,
          and a description of what you expected versus what happened.
        </p>
        <ul>
          <li>
            Email: <a href={`mailto:${site.emails.support}`}>{site.emails.support}</a>
          </li>
          <li>Acknowledgement: within 24 hours of receipt</li>
          <li>Target resolution: 7 business days</li>
        </ul>
      </>
    ),
  },
  {
    id: "level-2",
    heading: "Level 2 — Grievance Officer, Office of the Director",
    body: (
      <>
        <p>
          If your complaint is unresolved after the Level 1 timeline, or you are not satisfied with the outcome, escalate
          to the Office of the Director with your original ticket reference. Matters relating to data protection, conduct
          or compliance may be raised here directly.
        </p>
        <ul>
          <li>
            Email: <a href={`mailto:${site.emails.director}`}>{site.emails.director}</a> with subject line
            &ldquo;Escalation — [ticket reference]&rdquo;
          </li>
          <li>
            Phone: <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a> (Mon–Fri, 10:00–18:00 IST)
          </li>
          <li>Acknowledgement: within 3 business days</li>
          <li>Target resolution: 30 days from the date of the original complaint</li>
        </ul>
      </>
    ),
  },
  {
    id: "what-to-include",
    heading: "What to include in a complaint",
    body: (
      <ul>
        <li>Your name, organisation and registered contact details.</li>
        <li>Merchant or account identifier, and the relevant API or dashboard environment.</li>
        <li>Transaction, settlement, mandate or request IDs, with timestamps in IST.</li>
        <li>A clear description of the issue and the resolution you are seeking.</li>
        <li>Any supporting evidence — never include full card numbers, CVVs, OTPs or Aadhaar numbers.</li>
      </ul>
    ),
  },
  {
    id: "how-we-handle",
    heading: "How we handle your complaint",
    body: (
      <p>
        Every complaint is logged with a unique reference and an owner. We acknowledge receipt, investigate with the
        relevant internal team and, where a partner bank or gateway is involved, raise the matter with them in parallel.
        You receive status updates at each stage and a written outcome at closure. If a resolution requires a
        third-party timeline beyond our control, we will tell you what that timeline is.
      </p>
    ),
  },
  {
    id: "external",
    heading: "External escalation",
    body: (
      <p>
        If you remain dissatisfied after exhausting the levels above, you may approach the relevant regulator, ombudsman
        or consumer forum having jurisdiction over the matter, or the grievance officer of the underlying bank or payment
        service provider where the dispute concerns their service. We will cooperate with any such proceeding and provide
        the records required.
      </p>
    ),
  },
  {
    id: "company",
    heading: "Registered office and company details",
    body: (
      <>
        <p>Written complaints may also be sent by post to our registered office.</p>
        <ul>
          <li>
            <strong>{site.legalName}</strong>
          </li>
          <li>
            {site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode},{" "}
            {site.address.country}
          </li>
          <li>GSTIN: {site.gstin}</li>
          <li>
            Phone: <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          </li>
          <li>
            Email: <a href={`mailto:${site.emails.director}`}>{site.emails.director}</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "records",
    heading: "Records and reporting",
    body: (
      <p>
        Complaint records, correspondence and resolution outcomes are retained for the period required by applicable law
        and are available for regulatory or audit review. We review complaint themes periodically so that recurring
        issues are addressed at the product level rather than case by case.
      </p>
    ),
  },
];

export default function GrievancePage() {
  return (
    <LegalPage
      title="Grievance Redressal"
      updated="19 August 2026"
      intro="If something has gone wrong, here is exactly who to write to, what to include, and how long each stage should take."
      sections={sections}
      contactEmail={site.emails.director}
    />
  );
}
