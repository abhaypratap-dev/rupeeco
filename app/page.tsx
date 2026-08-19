import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import PartnerMarquee from "@/components/PartnerMarquee";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import HowItWorksFlow from "@/components/HowItWorksFlow";
import IndustryTabs from "@/components/IndustryTabs";
import Stats from "@/components/Stats";
import WhyRupeeco from "@/components/WhyRupeeco";
import PlatformLayers from "@/components/PlatformLayers";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnerMarquee />

      {/* How it fits together */}
      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                From your product to India&apos;s financial rails, <span className="gradient-text">in one hop</span>
              </>
            }
            body="You integrate Rupeeco once. Rupeeco holds the relationships, contracts and edge cases with every gateway, bank, registry and bureau underneath."
          />
          <HowItWorksFlow />
        </div>
      </section>

      {/* Product hub */}
      <section id="products" className="section bg-navy-50/50">
        <div className="wrap">
          <SectionHeading
            eyebrow="Rupeeco API Hub"
            title={
              <>
                Nine suites. <span className="gradient-text">One unified platform.</span>
              </>
            }
            body="Every suite shares the same authentication, the same webhook signature scheme and the same dashboard. Turn on what you need, when you need it."
          />
          <ProductGrid />
          <Reveal className="mt-10 text-center">
            <Link href="/products" className="btn-primary group">
              See the full API Hub
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Stats />

      {/* Industry use cases */}
      <section className="section bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="Industry use cases"
            title={
              <>
                Built for the way <span className="gradient-text">your business moves money</span>
              </>
            }
            body="The same platform, configured for the flows that matter in your industry."
          />
          <IndustryTabs />
        </div>
      </section>

      <WhyRupeeco />

      {/* Platform architecture */}
      <section className="section bg-navy-50/50">
        <div className="wrap">
          <SectionHeading
            eyebrow="Platform architecture"
            title={
              <>
                The engine under <span className="gradient-text">every API call</span>
              </>
            }
            body="Gateway, auth, throttling, observability, events, orchestration and encryption — the unglamorous work that keeps financial APIs dependable."
          />
          <PlatformLayers />
          <Reveal className="mt-10 text-center">
            <Link href="/platform" className="link-underline mx-auto">
              View the full architecture <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
