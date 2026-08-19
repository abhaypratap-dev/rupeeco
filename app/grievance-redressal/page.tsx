import type { Metadata } from "next";
import LegalPage, { type Section } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Grievance Redressal",
  description:
    "How to raise a complaint with Rupeeco, the escalation levels available, and the timelines we commit to at each stage.",
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
    heading: "Level 2 — Nodal escalation",
    body: (
      <>
        <p>
          If your complaint is unresolved after the Level 1 timeline, or you are not satisfied with the outcome, escalate
          with your original ticket reference.
        </p>
        <ul>
          <li>
            Email: <a href={`mailto:${site.emails.connect}`}>{site.emails.connect}</a> with subject line
            &ldquo;Escalation — [ticket reference]&rdquo;
          </li>
          <li>Acknowledgement: within 2 business days</li>
          <li>Target resolution: 15 business days</li>
        </ul>
      </>
    ),
  },
  {
    id: "level-3",
    heading: "Level 3 — Office of the Director",
    body: (
      <>
        <p>
          Complaints that remain unresolved after Level 2, and matters relating to data protection, conduct or
          compliance, may be escalated to the Office of the Director.
        </p>
        <ul>
          <li>
            Email: <a href={`mailto:${site.emails.director}`}>{site.emails.director}</a>
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
        <li>Transaction, payout, mandate or request IDs, with timestamps in IST.</li>
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
      updated="25 July 2026"
      intro="If something has gone wrong, here is exactly who to write to, what to include, and how long each stage should take."
      sections={sections}
      contactEmail={site.emails.director}
    />
  );
}
