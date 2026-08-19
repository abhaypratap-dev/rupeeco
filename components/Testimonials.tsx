"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

/**
 * Attributions are deliberately generic — role and segment only — so nothing is
 * claimed on a named company's behalf. Swap in approved, attributable quotes
 * once customers have signed off on being named.
 */
const items = [
  {
    quote:
      "We had four payment vendors and four reconciliation processes. Moving to a single orchestration layer took one sprint and gave finance a single settlement report.",
    role: "Head of Payments",
    org: "D2C retail platform",
  },
  {
    quote:
      "Smart routing did what our own retry logic never managed — success rates went up on the same acquirer mix, without us touching checkout again.",
    role: "VP Engineering",
    org: "Travel marketplace",
  },
  {
    quote:
      "Seller onboarding used to take three days of manual document checks. PAN, GST and bank verification in one API call brought it under ten minutes.",
    role: "Director of Operations",
    org: "B2B commerce marketplace",
  },
  {
    quote:
      "Escrow, eMandate and AA data through one contract meant our lending product shipped without a separate integration for each regulated piece.",
    role: "Product Lead",
    org: "Digital lending NBFC",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (d: number) => setI((v) => (v + d + items.length) % items.length);
  const c = items[i];

  return (
    <section
      className="section relative overflow-hidden bg-navy-50/50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-30" />
      <div className="wrap relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">In their words</span>
          <div key={i} className="mt-8 animate-fade-up">
            <Quote className="mx-auto h-8 w-8 text-leaf-300" />
            <blockquote className="mt-5 text-[19px] font-medium leading-relaxed text-navy-800 sm:text-[23px] sm:leading-[1.55]">
              &ldquo;{c.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-[13.5px] font-semibold text-navy-700">{c.role}</p>
            <p className="text-[13px] text-navy-400">{c.org}</p>
          </div>

          <div className="mt-9 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 transition-all hover:-translate-y-0.5 hover:border-leaf-400 hover:text-leaf-600"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === i ? "w-7 bg-leaf-500" : "w-1.5 bg-navy-200 hover:bg-navy-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 transition-all hover:-translate-y-0.5 hover:border-leaf-400 hover:text-leaf-600"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
