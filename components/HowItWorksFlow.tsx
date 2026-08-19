import { ArrowDown, ArrowRight } from "lucide-react";
import Icon from "./Icon";
import Reveal from "./Reveal";

const stages = [
  {
    title: "Who uses Rupeeco",
    tone: "navy",
    items: [
      { icon: "Rocket", label: "Startups" },
      { icon: "Layers", label: "SaaS platforms" },
      { icon: "Store", label: "Marketplaces" },
      { icon: "Building", label: "Enterprises & SMEs" },
    ],
  },
  {
    title: "How you access it",
    tone: "leaf",
    items: [
      { icon: "Network", label: "API integration" },
      { icon: "GitBranch", label: "Developer portal" },
      { icon: "BarChart3", label: "Dashboard" },
      { icon: "Blocks", label: "Marketplace" },
    ],
  },
  {
    title: "What you get",
    tone: "ember",
    items: [
      { icon: "Zap", label: "One integration" },
      { icon: "Boxes", label: "Multiple services" },
      { icon: "Activity", label: "Live visibility" },
      { icon: "ShieldCheck", label: "Maximum value" },
    ],
  },
];

const toneMap: Record<string, string> = {
  navy: "border-navy-100 bg-navy-50/50 text-navy-700",
  leaf: "border-leaf-100 bg-leaf-50/50 text-leaf-700",
  ember: "border-ember-100 bg-ember-50/50 text-ember-700",
};

export default function HowItWorksFlow() {
  return (
    <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {stages.map((s, idx) => (
        <div key={s.title} className="contents">
          <Reveal delay={idx * 120}>
            <div className={`h-full rounded-2xl border p-6 ${toneMap[s.tone]}`}>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] opacity-80">{s.title}</p>
              <ul className="mt-5 space-y-2.5">
                {s.items.map((it) => (
                  <li
                    key={it.label}
                    className="flex items-center gap-3 rounded-xl border border-white bg-white/90 px-3.5 py-2.5 text-[13.5px] font-semibold text-navy-800 shadow-[0_1px_2px_rgba(6,31,85,.05)] transition-transform duration-300 hover:translate-x-1"
                  >
                    <Icon name={it.icon} className="h-4 w-4 opacity-70" />
                    {it.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          {idx < stages.length - 1 && (
            <div className="flex items-center justify-center py-1 lg:py-0">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-100 bg-white text-navy-400 shadow-card">
                <ArrowRight className="hidden h-4 w-4 lg:block" />
                <ArrowDown className="h-4 w-4 lg:hidden" />
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
