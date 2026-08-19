import Counter from "./Counter";
import Reveal from "./Reveal";
import { stats } from "@/lib/products";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16">
      <div className="pointer-events-none absolute inset-0 bg-navy-mesh opacity-80" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 animate-spinslow" />
      <div className="wrap relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="text-center lg:text-left">
            <p className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-[42px]">
              <Counter
                value={s.value}
                suffix={s.suffix}
                prefix={"prefix" in s ? (s.prefix as string) : ""}
                decimals={"decimals" in s ? (s.decimals as number) : 0}
              />
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-navy-100/80">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
