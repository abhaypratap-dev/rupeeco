import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const steps = [
  {
    n: "1",
    title: "Map your flows",
    body: "A solutions engineer walks through your money-in, money-out and verification requirements and proposes the shortest path live.",
  },
  {
    n: "2",
    title: "Test in sandbox",
    body: "Pull keys, replay real-world scenarios and validate webhooks against a sandbox that mirrors production behaviour.",
  },
  {
    n: "3",
    title: "Go live and scale",
    body: "Switch to production keys, turn on routing rules, and add new suites from the marketplace whenever you need them.",
  },
];

export default function CTASection() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-7 py-14 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-navy-mesh opacity-90" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 animate-spinslow" />

          <div className="relative">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-leaf-300">
                Try first. Subscribe later.
              </span>
              <h2 className="mt-5 text-3xl leading-[1.15] !text-white sm:text-[38px]">
                Start with sandbox keys. Talk commercials when you are ready.
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-navy-100/85">
                Test the full API surface before you sign anything. When you are ready to go live, we price on the
                volume you actually process.
              </p>
            </div>

            <div className="mt-11 grid gap-5 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-leaf-400/40 hover:bg-white/[0.09]">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-500 text-sm font-bold text-white">
                      {s.n}
                    </span>
                    <h3 className="mt-4 text-[16.5px] font-semibold !text-white">{s.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-navy-100/80">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-11 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-leaf group">
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a href={`mailto:${site.emails.connect}`} className="text-sm font-semibold text-white hover:text-leaf-300">
                or email {site.emails.connect}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
