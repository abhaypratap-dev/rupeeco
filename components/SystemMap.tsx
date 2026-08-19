import { ArrowDown } from "lucide-react";
import Icon, { toneClasses } from "./Icon";
import Reveal from "./Reveal";
import { infraLayer, outcomes, partners, platformLayer, products } from "@/lib/products";

/**
 * The Rupeeco system map, rendered from lib/products.ts rather than a flat
 * image — so suites, partners and platform layers can never drift out of sync
 * with the rest of the site.
 */

const audience = [
  { icon: "Rocket", label: "Startups" },
  { icon: "Layers", label: "SaaS platforms" },
  { icon: "Store", label: "Marketplaces & e-commerce" },
  { icon: "Building", label: "Enterprises & SMEs" },
  { icon: "GitBranch", label: "Developers" },
];

const access = [
  { icon: "Network", label: "API integration" },
  { icon: "KeyRound", label: "Developer portal" },
  { icon: "BarChart3", label: "Dashboard" },
];

const experience = [
  { icon: "Check", label: "One integration" },
  { icon: "Boxes", label: "Multiple services" },
  { icon: "Zap", label: "Maximum value" },
];

const businessValue = [
  "One integration",
  "Multiple financial services",
  "Higher success rates",
  "Lower costs",
  "Better reconciliation",
  "Faster go-to-market",
];

function Band({ label, tone }: { label: string; tone: "navy" | "leaf" }) {
  return (
    <div className="flex justify-center">
      <span
        className={`rounded-xl px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white ${
          tone === "navy" ? "bg-navy-800" : "bg-leaf-600"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-4" aria-hidden>
      <ArrowDown className="h-5 w-5 text-navy-300" />
    </div>
  );
}

function MiniGroup({
  title,
  items,
}: {
  title: string;
  items: { icon: string; label: string }[];
}) {
  return (
    <div className="h-full rounded-2xl border border-navy-100 bg-white p-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">{title}</p>
      <ul className="mt-4 space-y-2">
        {items.map((a) => (
          <li key={a.label} className="flex items-center gap-2.5 text-[13px] font-medium text-navy-700">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-600">
              <Icon name={a.icon} className="h-3.5 w-3.5" />
            </span>
            {a.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SystemMap() {
  return (
    <Reveal className="mt-12">
      <div className="rounded-3xl border border-navy-100 bg-white p-5 shadow-lift sm:p-8">
        {/* Who uses it → how they reach it → what they get */}
        <div className="grid gap-4 md:grid-cols-3">
          <MiniGroup title="Who uses Rupeeco" items={audience} />
          <MiniGroup title="How you access it" items={access} />
          <MiniGroup title="What you get" items={experience} />
        </div>

        <Connector />

        {/* The API hub */}
        <Band label="Rupeeco API Hub — one unified platform" tone="navy" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => {
            const t = toneClasses[p.tone];
            return (
              <div key={p.slug} className="h-full rounded-2xl border border-navy-100 bg-navy-50/40 p-5">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${t.chip}`}>
                    <Icon name={p.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="text-[14px] font-semibold leading-tight text-navy-900">
                    <span className="mr-1.5 font-mono text-[11px] font-bold text-navy-300">
                      {String(p.index).padStart(2, "0")}
                    </span>
                    {p.name}
                  </h3>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {p.features.slice(0, 4).map((f) => (
                    <li
                      key={f}
                      className="rounded-lg border border-navy-100 bg-white px-2.5 py-1.5 text-[12px] font-medium text-navy-600"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <Connector />

        {/* Core platform */}
        <Band label="Rupeeco core platform layer — the engine" tone="navy" />
        <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
          {platformLayer.map((l) => (
            <li
              key={l.name}
              className="flex items-center gap-2 rounded-xl border border-navy-100 bg-navy-50/50 px-3 py-2 text-[12.5px] font-semibold text-navy-700"
            >
              <Icon name={l.icon} className="h-4 w-4 text-navy-500" />
              {l.name}
            </li>
          ))}
        </ul>

        <Connector />

        {/* Infrastructure */}
        <Band label="Infrastructure & data layer" tone="leaf" />
        <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
          {infraLayer.map((l) => (
            <li
              key={l.name}
              className="flex items-center gap-2 rounded-xl border border-leaf-100 bg-leaf-50/50 px-3 py-2 text-[12.5px] font-semibold text-leaf-700"
            >
              <Icon name={l.icon} className="h-4 w-4 text-leaf-600" />
              {l.name}
            </li>
          ))}
        </ul>

        <Connector />

        {/* Partners */}
        <Band label="Partner & integrations ecosystem" tone="navy" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((g) => (
            <div key={g.group} className="h-full rounded-2xl border border-navy-100 bg-white p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">{g.group}</p>
              <ul className="mt-3.5 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-navy-100 bg-navy-50/60 px-2 py-1 text-[11.5px] font-medium text-navy-600"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Connector />

        {/* Value back out */}
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-ember-100 bg-ember-50/40 p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ember-600">Value for businesses</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {businessValue.map((v) => (
                <li key={v} className="text-[13px] font-medium text-navy-700">
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-leaf-100 bg-leaf-50/40 p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-leaf-700">Measured outcomes</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {outcomes.map((o) => (
                <li key={o.label}>
                  <p className="text-[19px] font-semibold tracking-[-0.02em] text-navy-900">{o.metric}</p>
                  <p className="text-[12.5px] leading-snug text-navy-500">{o.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
