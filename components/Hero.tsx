"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Terminal, Zap } from "lucide-react";
import Icon from "./Icon";

const rotating = [
  "Verification",
  "Payments",
  "Collections",
  "Commerce",
  "Analytics",
  "Fraud & Risk",
  "Payouts",
  "Banking",
];

const orbit = [
  { icon: "ShieldCheck", label: "Verification", tone: "text-leaf-500", pos: "-left-6 top-12 xl:-left-12" },
  { icon: "CreditCard", label: "Payments", tone: "text-navy-600", pos: "-right-4 top-4 xl:-right-10" },
  { icon: "QrCode", label: "Collections", tone: "text-navy-600", pos: "-left-4 bottom-20 xl:-left-10" },
  { icon: "Landmark", label: "Payouts", tone: "text-ember-500", pos: "-right-6 bottom-32 xl:-right-12" },
];

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % rotating.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-14 sm:pb-24 sm:pt-20">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-leaf-100/50 blur-3xl" />
        <div className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-ember-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[380px] w-[600px] rounded-full bg-navy-100/40 blur-3xl" />
        <div className="dotgrid absolute inset-x-0 bottom-0 h-56 opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-up">
          <span className="eyebrow">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-leaf-500 animate-pulse-ring" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-leaf-500" />
            </span>
            Unified financial infrastructure for India
          </span>

          <h1 className="mt-6 text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[52px] lg:text-[56px]">
            One API.
            <br />
            <span className="gradient-text">Every verification suite &amp; financial service.</span>
          </h1>

          <div className="mt-5 flex min-h-[32px] items-center gap-2 text-lg text-navy-600">
            <span className="hidden sm:inline">Integrate once, ship</span>
            <span className="relative inline-flex h-9 items-center overflow-hidden">
              <span key={i} className="animate-fade-up font-semibold text-leaf-600">
                {rotating[i]}
              </span>
            </span>
          </div>

          <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-navy-500">
            Rupeeco is the API hub that sits between your product and India&apos;s financial rails — gateways, banks,
            registries and bureaus. One integration, one contract, one dashboard for payments, verification, payouts,
            collections, banking, commerce, analytics and risk.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary group">
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/products" className="btn-ghost">
              Explore the API Hub
            </Link>
          </div>

          <ul className="mt-9 grid gap-2.5 sm:grid-cols-2">
            {[
              "Live in days with sandbox parity",
              "40+ bank and partner integrations",
              "Smart routing across gateways",
              "Bank-grade security and encryption",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-[14.5px] text-navy-600">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-leaf-50 text-leaf-600">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-[440px]">
          <div className="pointer-events-none absolute inset-0 -m-10 rounded-full border border-dashed border-navy-100 animate-spinslow" />

          <div className="relative rounded-3xl border border-navy-100 bg-white p-1.5 shadow-lift">
            <div className="rounded-[20px] bg-navy-900 p-5 font-mono text-[12.5px] leading-relaxed text-navy-100">
              <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                <Terminal className="h-3.5 w-3.5 text-leaf-300" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.14em] text-navy-200">
                  api.rupeeco.in
                </span>
                <span className="ml-auto rounded-full bg-leaf-500/15 px-2 py-0.5 text-[10px] font-sans font-bold text-leaf-300">
                  200 OK
                </span>
              </div>
              <pre className="overflow-x-auto no-scrollbar">
                <code>
                  <span className="text-ember-300">POST</span> /v1/payments/orders{"\n"}
                  {"{"}
                  {"\n"}
                  {"  "}
                  <span className="text-leaf-300">&quot;amount&quot;</span>: 249900,{"\n"}
                  {"  "}
                  <span className="text-leaf-300">&quot;currency&quot;</span>: &quot;INR&quot;,{"\n"}
                  {"  "}
                  <span className="text-leaf-300">&quot;routing&quot;</span>: &quot;smart&quot;,{"\n"}
                  {"  "}
                  <span className="text-leaf-300">&quot;verify&quot;</span>: [&quot;pan&quot;, &quot;bank&quot;]{"\n"}
                  {"}"}
                </code>
              </pre>
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4 font-sans">
                {[
                  { label: "Routed via", value: "Gateway A · 99.2% SR" },
                  { label: "Risk score", value: "12 / 100 · approve" },
                  { label: "Settlement", value: "T+1 · auto-reconciled" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between text-[12px]">
                    <span className="text-navy-300">{r.label}</span>
                    <span className="font-semibold text-white">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* floating chips */}
          {orbit.map((o, idx) => (
            <div
              key={o.label}
              className={`absolute ${o.pos} z-10 hidden animate-float items-center gap-2 rounded-xl border border-navy-100 bg-white px-3 py-2 text-[12px] font-semibold text-navy-700 shadow-lift lg:flex`}
              style={{ animationDelay: `${idx * 0.7}s` }}
            >
              <Icon name={o.icon} className={`h-4 w-4 ${o.tone}`} />
              {o.label}
            </div>
          ))}

          <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-leaf-100 bg-leaf-50/70 px-4 py-3 text-[13px] font-semibold text-leaf-700">
            <Zap className="h-4 w-4" />
            Average API response: 180&nbsp;ms
          </div>
        </div>
      </div>
    </section>
  );
}
