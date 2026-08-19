import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import { industries } from "@/lib/products";

export const metadata: Metadata = {
  title: "Solutions by industry and outcome",
  description:
    "Rupeeco for startups, SaaS platforms, marketplaces, lending and NBFCs, and enterprises — higher success rates, faster reconciliation and lower fraud losses.",
};

const outcomeBlocks = [
  {
    id: "success",
    title: "Higher payment success rates",
    body: "Smart routing evaluates live acquirer health, issuer behaviour, instrument and ticket size before every attempt, then retries on the next best rail instead of returning a failure to your customer.",
    points: ["Live success-rate routing", "Automatic acquirer failover", "Retry logic tuned per failure code", "Network tokenisation across gateways"],
    href: "/products/payments",
  },
  {
    id: "recon",
    title: "Faster, cleaner reconciliation",
    body: "Orders, payments and bank settlements are matched three ways automatically. Fees, taxes and chargebacks are normalised across providers so month-end stops being a spreadsheet exercise.",
    points: ["Three-way auto reconciliation", "Normalised settlement reports", "Virtual accounts for self-tagging credits", "ERP sync with Tally, SAP, Zoho"],
    href: "/products/analytics",
  },
  {
    id: "risk",
    title: "Lower fraud and compliance risk",
    body: "Every transaction is scored inline against device intelligence, velocity rules and sanctions data, with editable rules and case management for the exceptions that need a human.",
    points: ["Sub-10ms risk decisions", "Editable, versioned rule sets", "Device and behavioural intelligence", "AML screening with STR-ready cases"],
    href: "/products/fraud-risk",
  },
  {
    id: "payables",
    title: "Automated payables and payroll",
    body: "Move vendor, salary and refund payouts onto one API with beneficiary validation, maker-checker approvals and row-level status on bulk files.",
    points: ["Bulk payouts at file scale", "Penny-drop beneficiary validation", "Maker-checker approval chains", "GST e-invoice and e-way bill"],
    href: "/products/payouts",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
        eyebrow="Solutions"
        title={
          <>
            The same platform, <span className="gradient-text">shaped to your flows</span>
          </>
        }
        body="Whether you are taking your first payment or reconciling a hundred thousand seller settlements a month, the integration surface stays the same. What changes is the configuration."
        primary={{ label: "Talk to a solutions engineer", href: "/contact" }}
        secondary={{ label: "Browse products", href: "/products" }}
      />

      {/* By industry */}
      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="By industry"
            title={
              <>
                Built for the way <span className="gradient-text">your industry moves money</span>
              </>
            }
          />
          <div className="mt-12 space-y-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 60}>
                <div
                  id={ind.id}
                  className="grid scroll-mt-28 gap-8 rounded-3xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:shadow-lift sm:p-9 lg:grid-cols-[1fr_1fr]"
                >
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-navy-600">
                      <Icon name={ind.icon} className="h-3.5 w-3.5" />
                      {ind.label}
                    </span>
                    <h3 className="mt-5 text-2xl leading-snug sm:text-[26px]">{ind.headline}</h3>
                    <p className="mt-3.5 text-[15px] leading-relaxed text-navy-500">{ind.body}</p>
                    <Link href="/contact" className="link-underline mt-6">
                      Discuss this use case <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <ul className="grid content-start gap-2.5 rounded-2xl bg-navy-50/60 p-6">
                    {ind.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-navy-700">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-500 text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* By outcome */}
      <section className="section bg-navy-50/50">
        <div className="wrap">
          <SectionHeading
            eyebrow="By outcome"
            title={
              <>
                Pick the problem, <span className="gradient-text">we will point at the suite</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {outcomeBlocks.map((o, i) => (
              <Reveal key={o.id} delay={i * 80}>
                <div id={o.id} className="h-full scroll-mt-28 rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <h3 className="text-[19px] font-semibold">{o.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-navy-500">{o.body}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {o.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-[13px] text-navy-700">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-leaf-500" strokeWidth={3} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link href={o.href} className="link-underline mt-6">
                    See the suite <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
