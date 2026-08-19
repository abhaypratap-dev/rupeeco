import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import SectionHeading from "@/components/SectionHeading";
import PlatformLayers from "@/components/PlatformLayers";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { partners } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products — the Rupeeco API Hub",
  description:
    "Eight API suites on one unified platform: payments, verification, collections, banking, commerce, analytics, fraud & risk, and the API marketplace.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products" }]}
        eyebrow="Rupeeco API Hub"
        title={
          <>
            One unified platform for <span className="gradient-text">every financial service</span>
          </>
        }
        body="Eight suites, over a hundred endpoints, one authentication scheme. Start with a single suite and switch on the rest from the same dashboard whenever your product needs them."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Read the docs", href: "/developers" }}
      />

      <section className="section bg-white">
        <div className="wrap">
          <ProductGrid />
        </div>
      </section>

      <section className="section bg-navy-50/50">
        <div className="wrap">
          <SectionHeading
            eyebrow="Platform architecture"
            title={
              <>
                Shared plumbing, <span className="gradient-text">consistent behaviour</span>
              </>
            }
            body="Every suite inherits the same gateway, auth model, rate limits, observability and encryption — so a new endpoint never means a new set of surprises."
          />
          <PlatformLayers />
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="Partner ecosystem"
            title={
              <>
                Relationships we hold <span className="gradient-text">so you don&apos;t have to</span>
              </>
            }
            body="Gateways, verification providers, banks and data sources — maintained, monitored and swapped without changing your code."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <Reveal key={p.group} delay={i * 70}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">{p.group}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-md border border-navy-100 bg-navy-50/60 px-2.5 py-1.5 text-[12.5px] font-semibold text-navy-700"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-[12.5px] text-navy-400">
            Partner and bank names indicate integration coverage. Availability of any specific provider depends on your
            onboarding and commercial arrangement.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
