import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon, { toneClasses } from "./Icon";
import Reveal from "./Reveal";
import { products } from "@/lib/products";

export default function ProductGrid({ limit }: { limit?: number }) {
  const list = limit ? products.slice(0, limit) : products;
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p, idx) => {
        const t = toneClasses[p.tone];
        return (
          <Reveal key={p.slug} delay={idx * 60} as="article">
            <Link href={`/products/${p.slug}`} className="card-hover group flex h-full flex-col">
              <div className="flex items-start justify-between">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${t.chip}`}>
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <span className="font-mono text-[11px] font-bold text-navy-200">
                  {String(p.index).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-[17px] font-semibold text-navy-900 group-hover:text-leaf-600">{p.name}</h3>
              <p className={`mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] ${t.text}`}>{p.tagline}</p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.features.slice(0, 4).map((f) => (
                  <li
                    key={f}
                    className="rounded-md border border-navy-100 bg-navy-50/50 px-2 py-1 text-[11.5px] font-medium text-navy-600"
                  >
                    {f}
                  </li>
                ))}
                {p.features.length > 4 && (
                  <li className="rounded-md px-2 py-1 text-[11.5px] font-semibold text-navy-400">
                    +{p.features.length - 4} more
                  </li>
                )}
              </ul>

              <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-700 transition-colors group-hover:text-leaf-600">
                Explore
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className={`mt-5 block h-[3px] w-0 rounded-full ${t.bar} transition-all duration-500 group-hover:w-full`} />
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
