import Icon from "./Icon";
import Reveal from "./Reveal";
import { infraLayer, platformLayer } from "@/lib/products";

export default function PlatformLayers() {
  return (
    <div className="mt-12 space-y-6">
      <Reveal>
        <div className="rounded-3xl border border-navy-100 bg-white p-7 shadow-card sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-navy-800 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white">
              Core Platform Layer
            </span>
            <span className="text-[13px] font-medium text-navy-400">The engine every API runs on</span>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformLayer.map((p, i) => (
              <Reveal key={p.name} delay={i * 50}>
                <div className="group h-full rounded-2xl border border-navy-100 bg-navy-50/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:bg-white hover:shadow-card">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-navy-700 shadow-[0_1px_2px_rgba(6,31,85,.06)] transition-colors group-hover:bg-navy-800 group-hover:text-white">
                    <Icon name={p.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="mt-4 text-[14.5px] font-semibold">{p.name}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-navy-500">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="rounded-3xl border border-leaf-100 bg-leaf-50/40 p-7 shadow-card sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg bg-leaf-600 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white">
              Infrastructure &amp; Data Layer
            </span>
            <span className="text-[13px] font-medium text-leaf-700/70">Built for availability and recovery</span>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {infraLayer.map((p, i) => (
              <Reveal key={p.name} delay={i * 50}>
                <div className="flex h-full items-start gap-3.5 rounded-2xl border border-leaf-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf-50 text-leaf-600">
                    <Icon name={p.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span>
                    <h3 className="text-[14.5px] font-semibold">{p.name}</h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-navy-500">{p.body}</p>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
