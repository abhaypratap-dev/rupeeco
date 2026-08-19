import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Rupeeco",
  description:
    "Rupeeco builds the unified financial infrastructure layer for digital India — one API for payments, verification, payouts, collections, banking, commerce, analytics and risk.",
};

const values = [
  {
    icon: "ShieldCheck",
    title: "Trust is the product",
    body: "We are handling other people's money and other people's identity documents. Every design decision starts from that responsibility.",
  },
  {
    icon: "Zap",
    title: "Remove the friction",
    body: "If a customer has to think about which gateway, which rail or which registry, we have not finished the work.",
  },
  {
    icon: "Activity",
    title: "Own the boring parts",
    body: "Retries, reconciliation, webhook redelivery, bank downtime windows. Unglamorous work that decides whether a platform is dependable.",
  },
  {
    icon: "Globe",
    title: "Built for India",
    body: "UPI, NACH, GST, Aadhaar, DigiLocker, Account Aggregator. Local rails are not an afterthought here — they are the foundation.",
  },
];

const journey = [
  { year: "Foundation", title: "One integration, many rails", body: "Rupeeco starts with a single premise: businesses should not integrate a dozen fintech vendors to move money." },
  { year: "Payments first", title: "Gateway orchestration", body: "Smart routing, failover and a shared token vault ship as the first suite, built on top of India's major acquirers." },
  { year: "Trust layer", title: "Verification and risk", body: "PAN, Aadhaar, GST, CIN and bank verification join an inline risk engine so onboarding and checkout share the same guardrails." },
  { year: "Full hub", title: "Nine suites, one platform", body: "Payouts, collections, banking, commerce and analytics complete the hub, with a marketplace for everything that comes next." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Company" }]}
        eyebrow="About Rupeeco"
        title={
          <>
            Powering the financial infrastructure for <span className="gradient-text">digital India</span>
          </>
        }
        body="India built world-class public financial rails. Connecting to them is still harder than it should be. Rupeeco exists to collapse that complexity into one API, one contract and one dashboard — so product teams can spend their time on their product."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "See the platform", href: "/platform" }}
      />

      <section className="section bg-white">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">Our mission</span>
            <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[36px]">
              Make financial services <span className="gradient-text">a single integration</span>
            </h2>
            <div className="mt-5 space-y-4 text-[15.5px] leading-relaxed text-navy-500">
              <p>
                A business that wants to accept a payment, verify a customer, pay a vendor and reconcile the whole thing
                typically signs four vendors, integrates four APIs, learns four dashboards and reconciles four reports.
                None of that work differentiates the business.
              </p>
              <p>
                Rupeeco sits above that layer. We hold the gateway, bank, registry and bureau relationships, absorb the
                failure modes, and expose one consistent surface. When a partner has an outage, our routing moves
                traffic. When a registry changes a response format, our adapters change — not your code.
              </p>
              <p>
                The result is what our tagline promises:{" "}
                <span className="font-semibold text-navy-800">{site.tagline}</span> Smarter movement of money, and
                infrastructure that more Indian businesses can actually build on.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="group flex gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                  <Icon name={v.icon} className="h-5 w-5" />
                </span>
                <span>
                  <h3 className="text-[16px] font-semibold">{v.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-500">{v.body}</p>
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="Journey so far"
            title={
              <>
                How the hub <span className="gradient-text">came together</span>
              </>
            }
            body="Each suite was built because customers kept asking for the thing that sat next to what we had just shipped."
          />
          <div className="relative mt-12">
            <div className="absolute left-[15px] top-2 hidden h-[calc(100%-2rem)] w-[2px] bg-gradient-to-b from-leaf-400 via-navy-300 to-ember-400 sm:block" />
            <div className="space-y-5">
              {journey.map((j, i) => (
                <Reveal key={j.title} delay={i * 90}>
                  <div className="relative sm:pl-14">
                    <span className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-navy-800 text-[11px] font-bold text-white shadow-card sm:flex">
                      {i + 1}
                    </span>
                    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:translate-x-1 hover:shadow-lift">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-leaf-600">{j.year}</p>
                      <h3 className="mt-2 text-[18px] font-semibold">{j.title}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-navy-500">{j.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy-50/50">
        <div className="wrap">
          <SectionHeading
            eyebrow="Reach the right desk"
            title={
              <>
                Talk to <span className="gradient-text">the right team directly</span>
              </>
            }
            body="Three inboxes, monitored by the people who can actually help."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              { label: "Sales & partnerships", email: site.emails.connect, body: "New business, integrations, pilots and partner proposals." },
              { label: "Customer support", email: site.emails.support, body: "Live issues, integration questions and production escalations." },
              { label: "Office of the Director", email: site.emails.director, body: "Escalations, grievance redressal, press and corporate matters." },
            ].map((c, i) => (
              <Reveal key={c.email} delay={i * 80}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">{c.label}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-3 inline-flex items-center gap-2 text-[15px] font-semibold text-navy-900 hover:text-leaf-600"
                  >
                    <Mail className="h-4 w-4 text-leaf-500" />
                    {c.email}
                  </a>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-navy-500">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/contact" className="btn-primary group">
              Use the contact form instead
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
