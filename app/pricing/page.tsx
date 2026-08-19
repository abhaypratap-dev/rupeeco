import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Usage-based pricing for the Rupeeco API Hub. Start free in sandbox, pay for what you process, and move to committed volume pricing as you scale.",
};

const plans = [
  {
    name: "Sandbox",
    price: "Free",
    note: "Unlimited test calls",
    body: "Everything you need to evaluate the platform before a commercial conversation.",
    cta: { label: "Request keys", href: "/contact" },
    features: [
      "All nine suites in test mode",
      "Simulated failures and settlements",
      "Webhook testing and replay",
      "Community and email support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "Pay as you go",
    note: "Per successful transaction",
    body: "For teams in production who want transparent per-call pricing with no minimums.",
    cta: { label: "Get a quote", href: "/contact" },
    features: [
      "Production keys for every suite",
      "Smart routing and failover",
      "Auto reconciliation and reports",
      "Standard risk rules included",
      "Email and chat support, 12×6",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Committed volume",
    note: "Custom rate card",
    body: "For high-volume processors who need negotiated rates, dedicated infrastructure and an SLA.",
    cta: { label: "Talk to sales", href: "/contact" },
    features: [
      "Negotiated per-suite rate card",
      "Dedicated throughput and rate limits",
      "Custom routing and risk models",
      "Named solutions engineer",
      "24×7 escalation with SLA",
      "Security review and DPA support",
    ],
    highlight: false,
  },
];

const matrix = [
  { label: "Sandbox environment", s: true, g: true, e: true },
  { label: "All nine API suites", s: true, g: true, e: true },
  { label: "Smart routing & failover", s: false, g: true, e: true },
  { label: "Three-way reconciliation", s: false, g: true, e: true },
  { label: "AI analytics reports", s: false, g: true, e: true },
  { label: "Custom risk models", s: false, g: false, e: true },
  { label: "Dedicated rate limits", s: false, g: false, e: true },
  { label: "Uptime SLA & credits", s: false, g: false, e: true },
  { label: "Named solutions engineer", s: false, g: false, e: true },
];

const faqs = [
  {
    q: "How is pricing calculated?",
    a: "Most suites are priced per successful API call or per successful transaction — a failed verification or a declined payment is not billed. Payments and payouts additionally carry the underlying rail cost, which we pass through transparently on your invoice.",
  },
  {
    q: "Is there a setup or platform fee?",
    a: "There is no setup fee on Growth. Enterprise agreements may include a platform fee where we provision dedicated capacity or custom infrastructure.",
  },
  {
    q: "Do I pay separately for each suite?",
    a: "Yes — you only pay for the suites you switch on, metered independently. They appear as separate line items on a single consolidated invoice.",
  },
  {
    q: "Can I test before committing to anything?",
    a: "That is the intent. Sandbox keys are free and unlimited, and we do not ask for a commercial commitment until you are ready to move traffic to production keys.",
  },
  {
    q: "How do rail costs work for payments and payouts?",
    a: "Gateway MDR, IMPS/NEFT/RTGS charges and UPI costs are set by the underlying provider or bank. Rupeeco passes them through at cost and charges its own platform fee separately, so you can always see what went where.",
  },
];

function Cell({ on }: { on: boolean }) {
  return on ? (
    <Check className="mx-auto h-4 w-4 text-leaf-600" strokeWidth={3} />
  ) : (
    <Minus className="mx-auto h-4 w-4 text-navy-200" />
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
        eyebrow="Pricing"
        title={
          <>
            Try first. <span className="gradient-text">Subscribe later.</span>
          </>
        }
        body="Sandbox is free and unlimited. In production you pay for what you actually process, with rail costs passed through at cost so you can see exactly where every rupee of fee goes."
        primary={{ label: "Get a quote", href: "/contact" }}
        secondary={{ label: "See what's included", href: "#matrix" }}
      />

      <section className="section bg-white">
        <div className="wrap grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  p.highlight
                    ? "border-navy-800 bg-navy-900 text-white shadow-lift"
                    : "border-navy-100 bg-white shadow-card hover:shadow-lift"
                }`}
              >
                {p.highlight && (
                  <span className="mb-4 w-fit rounded-full bg-leaf-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    Most popular
                  </span>
                )}
                <h3 className={`text-[19px] font-semibold ${p.highlight ? "!text-white" : ""}`}>{p.name}</h3>
                <p className={`mt-4 text-3xl font-semibold tracking-[-0.02em] ${p.highlight ? "text-white" : "text-navy-900"}`}>
                  {p.price}
                </p>
                <p className={`mt-1 text-[12.5px] font-semibold uppercase tracking-[0.1em] ${p.highlight ? "text-leaf-300" : "text-navy-400"}`}>
                  {p.note}
                </p>
                <p className={`mt-4 text-[14px] leading-relaxed ${p.highlight ? "text-navy-100/85" : "text-navy-500"}`}>
                  {p.body}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-[13.5px] leading-relaxed ${
                        p.highlight ? "text-navy-100/90" : "text-navy-700"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "text-leaf-300" : "text-leaf-600"}`}
                        strokeWidth={3}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={p.cta.href} className={`${p.highlight ? "btn-leaf" : "btn-primary"} group mt-7 w-full`}>
                  {p.cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="wrap mt-8 text-center text-[12.5px] text-navy-400">
          Indicative plan structure. Final rates depend on suites, volume and rails — email{" "}
          <a href={`mailto:${site.emails.connect}`} className="font-semibold text-leaf-600 hover:underline">
            {site.emails.connect}
          </a>{" "}
          for a rate card.
        </p>
      </section>

      <section id="matrix" className="section scroll-mt-24 bg-navy-50/50">
        <div className="wrap">
          <SectionHeading
            eyebrow="What's included"
            title={
              <>
                Compare <span className="gradient-text">plan capabilities</span>
              </>
            }
          />
          <Reveal className="mt-12">
            <div className="overflow-x-auto rounded-2xl border border-navy-100 bg-white shadow-card">
              <table className="w-full min-w-[560px] text-left">
                <thead>
                  <tr className="border-b border-navy-100 bg-navy-50/60 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400">
                    <th className="px-6 py-4">Capability</th>
                    <th className="px-4 py-4 text-center">Sandbox</th>
                    <th className="px-4 py-4 text-center">Growth</th>
                    <th className="px-4 py-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-50">
                  {matrix.map((r) => (
                    <tr key={r.label} className="transition-colors hover:bg-navy-50/40">
                      <td className="px-6 py-3.5 text-[14px] font-medium text-navy-800">{r.label}</td>
                      <td className="px-4 py-3.5">
                        <Cell on={r.s} />
                      </td>
                      <td className="px-4 py-3.5">
                        <Cell on={r.g} />
                      </td>
                      <td className="px-4 py-3.5">
                        <Cell on={r.e} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="Pricing FAQ"
            title={
              <>
                Questions we get <span className="gradient-text">before the rate card</span>
              </>
            }
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all duration-300 open:shadow-lift">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15.5px] font-semibold text-navy-900">
                    {f.q}
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-navy-500">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
