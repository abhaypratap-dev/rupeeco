import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { outcomes } from "@/lib/products";

const reasons = [
  {
    title: "Quick, simple integration",
    body: "REST APIs with predictable contracts, idempotency keys and SDKs for Node, Python, Java, PHP and Go. Sandbox mirrors production.",
  },
  {
    title: "One vendor, eight suites",
    body: "Add verification, collections or risk without a new MSA, a new dashboard or another engineering sprint.",
  },
  {
    title: "Routing that protects revenue",
    body: "Live success-rate routing with automatic failover means a single acquirer outage stops being your outage.",
  },
  {
    title: "Reconciliation by default",
    body: "Orders, payments and bank settlements matched three ways, with exceptions surfaced instead of discovered.",
  },
  {
    title: "Security and compliance first",
    body: "AES-256 at rest, TLS 1.3 in transit, HSM-backed key custody, RBAC, full audit trails and Indian data residency.",
  },
  {
    title: "Support that knows payments",
    body: "Solutions engineers on shared channels, with 24×7 escalation paths for production incidents.",
  },
];

export default function WhyRupeeco() {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <SectionHeading
          eyebrow="Why Rupeeco"
          title={
            <>
              Measurable value, <span className="gradient-text">not just endpoints</span>
            </>
          }
          body="Teams move to Rupeeco to cut integration effort and lift payment performance. Here is what that looks like in practice."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => (
            <Reveal key={o.label} delay={i * 80}>
              <div className="h-full rounded-2xl border border-navy-100 bg-navy-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-leaf-200 hover:bg-white hover:shadow-lift">
                <p className="text-3xl font-semibold tracking-[-0.03em] text-navy-900">{o.metric}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-navy-500">{o.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="block h-[3px] w-9 rounded-full bg-brand-gradient transition-all duration-500 group-hover:w-16" />
                <h3 className="mt-5 text-[16.5px] font-semibold">{r.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-navy-500">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
