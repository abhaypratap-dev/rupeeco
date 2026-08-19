import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import PlatformLayers from "@/components/PlatformLayers";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Platform architecture",
  description:
    "How the Rupeeco platform is built: API gateway, authorization, rate limiting, observability, event processing, workflow orchestration, encryption and multi-region infrastructure.",
};

const security = [
  { icon: "Lock", title: "Encryption everywhere", body: "AES-256 at rest, TLS 1.3 in transit, field-level encryption for PII and card data." },
  { icon: "KeyRound", title: "Key custody", body: "HSM-backed key management with scheduled rotation and split-knowledge access." },
  { icon: "ShieldCheck", title: "Access control", body: "Scoped API keys, OAuth2 client credentials, IP allowlists and granular RBAC per team." },
  { icon: "Activity", title: "Audit trails", body: "Immutable logs of every API call, dashboard action and configuration change." },
  { icon: "Globe", title: "Data residency", body: "All customer and transaction data stored and processed within India." },
  { icon: "Gauge", title: "Resilience testing", body: "Regular failover drills, load tests and disaster-recovery exercises with published RPO/RTO." },
];

const reliability = [
  { metric: "99.98%", label: "Target platform uptime" },
  { metric: "180 ms", label: "Median API response time" },
  { metric: "< 10 ms", label: "Inline risk decision latency" },
  { metric: "Multi-region", label: "Active-active failover" },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Platform" }]}
        eyebrow="Platform architecture"
        title={
          <>
            The engine behind <span className="gradient-text">every Rupeeco API</span>
          </>
        }
        body="Financial APIs fail in specific, boring ways: a bank window closes, a partner times out, a webhook is delivered twice. The Rupeeco core platform exists to absorb those failures before they reach your product."
        primary={{ label: "Talk to an engineer", href: "/contact" }}
        secondary={{ label: "Developer docs", href: "/developers" }}
      />

      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="Layered by design"
            title={
              <>
                Core platform and <span className="gradient-text">infrastructure layers</span>
              </>
            }
            body="Every suite calls through the same core services. That is why behaviour is consistent whether you are creating a payment or verifying a GSTIN."
          />
          <PlatformLayers />
        </div>
      </section>

      <section className="section bg-navy-50/50">
        <div className="wrap">
          <SectionHeading
            eyebrow="System map"
            title={
              <>
                How the pieces <span className="gradient-text">fit together</span>
              </>
            }
            body="From the businesses that integrate, through the API hub and core platform, down to banks and partners — and back out as value for your business."
          />
          <Reveal className="mt-12">
            <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white p-3 shadow-lift sm:p-5">
              <Image
                src="/brand/architecture.jpg"
                alt="Rupeeco platform architecture: API hub with nine suites over a core platform layer, infrastructure and data layer, and the partner integrations ecosystem"
                width={1024}
                height={1536}
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 1100px"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="Security & compliance"
            title={
              <>
                Bank-grade controls, <span className="gradient-text">documented and testable</span>
              </>
            }
            body="Security is an architecture decision, not a checklist item bolted on before an audit."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {security.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[16px] font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-500">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-16">
        <div className="pointer-events-none absolute inset-0 bg-navy-mesh opacity-80" />
        <div className="wrap relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reliability.map((r, i) => (
            <Reveal key={r.label} delay={i * 80}>
              <p className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-[36px]">{r.metric}</p>
              <p className="mt-2 text-[13.5px] text-navy-100/80">{r.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
