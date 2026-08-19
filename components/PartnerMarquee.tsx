import { partners } from "@/lib/products";

const row = partners.flatMap((p) => p.items);
const half = [...row, ...row];

export default function PartnerMarquee() {
  return (
    <section className="border-y border-navy-100 bg-navy-50/40 py-10">
      <div className="wrap">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-navy-400">
          Integrated with India&apos;s payment, banking and verification ecosystem
        </p>
      </div>
      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-3">
          {half.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 rounded-xl border border-navy-100 bg-white px-4 py-2.5 text-[13px] font-semibold text-navy-600 shadow-[0_1px_2px_rgba(6,31,85,.05)]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
