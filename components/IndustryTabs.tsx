"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Icon from "./Icon";
import { industries } from "@/lib/products";

export default function IndustryTabs() {
  const [active, setActive] = useState(industries[0].id);
  const current = industries.find((i) => i.id === active)!;

  return (
    <div className="mt-12">
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:justify-center sm:px-0">
        {industries.map((ind) => (
          <button
            key={ind.id}
            onClick={() => setActive(ind.id)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-[13.5px] font-semibold transition-all duration-300 ${
              active === ind.id
                ? "border-navy-800 bg-navy-800 text-white shadow-[0_10px_26px_-14px_rgba(6,31,85,.8)]"
                : "border-navy-100 bg-white text-navy-600 hover:border-navy-300 hover:text-navy-900"
            }`}
          >
            <Icon name={ind.icon} className="h-4 w-4" />
            {ind.label}
          </button>
        ))}
      </div>

      <div
        key={current.id}
        className="mt-8 grid animate-fade-up gap-8 rounded-3xl border border-navy-100 bg-white p-7 shadow-card sm:p-10 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <h3 className="text-2xl leading-snug sm:text-[28px]">{current.headline}</h3>
          <p className="mt-4 text-[15.5px] leading-relaxed text-navy-500">{current.body}</p>
          <Link href="/contact" className="btn-leaf group mt-7">
            Talk to a solutions engineer
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="space-y-3 rounded-2xl bg-navy-50/70 p-6">
          {current.points.map((p, i) => (
            <li
              key={p}
              className="flex items-start gap-3 text-[14.5px] leading-relaxed text-navy-700 animate-fade-up"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-500 text-white">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
