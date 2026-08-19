import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Icon, { toneClasses } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import CodeBlock from "@/components/CodeBlock";
import { products, productBySlug } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return { title: "Product not found" };
  return {
    title: `${p.name} — ${p.tagline}`,
    description: p.summary,
    openGraph: { title: `${p.name} | Rupeeco`, description: p.summary },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();

  const t = toneClasses[p.tone];
  const others = products.filter((o) => o.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: p.name }]}
        eyebrow={`Suite ${String(p.index).padStart(2, "0")} · ${p.tagline}`}
        title={
          <>
            {p.name.split(" ")[0]}{" "}
            <span className="gradient-text">{p.name.split(" ").slice(1).join(" ") || "APIs"}</span>
          </>
        }
        body={p.summary}
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "API reference", href: "/developers#reference" }}
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${t.chip}`}>
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">Capabilities</p>
                  <p className="text-[13.5px] font-semibold text-navy-800">{p.features.length} endpoints and counting</p>
                </div>
              </div>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-navy-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-50 text-leaf-600">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <CodeBlock method={p.endpoint.method} path={p.endpoint.path} code={p.sample} />
          </Reveal>
        </div>
      </PageHero>

      {/* Highlights */}
      <section className="section bg-white">
        <div className="wrap">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What makes it different</span>
            <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[36px]">
              Designed around <span className="gradient-text">how this actually breaks</span>
            </h2>
          </Reveal>

          <div className="mt-11 grid gap-5 lg:grid-cols-3">
            {p.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <div className="group h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${t.chip} text-[13px] font-bold`}>
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-[17px] font-semibold">{h.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-navy-500">{h.body}</p>
                  <span className={`mt-6 block h-[3px] w-8 rounded-full ${t.bar} transition-all duration-500 group-hover:w-20`} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section bg-navy-50/50">
        <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">Where teams use it</span>
            <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[36px]">
              Common <span className="gradient-text">{p.name.toLowerCase()}</span> use cases
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-navy-500">
              Every deployment starts with a call about your flows. Bring your edge cases — routing rules, approval
              chains, reconciliation formats — and we will map them before you write a line of code.
            </p>
            <Link href="/contact" className="btn-leaf group mt-7">
              Discuss your use case
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="space-y-3">
            {p.useCases.map((u, i) => (
              <Reveal key={u} delay={i * 90}>
                <div className="flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all duration-300 hover:translate-x-1.5">
                  <span className="font-mono text-[12px] font-bold text-navy-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] font-medium text-navy-800">{u}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-white">
        <div className="wrap">
          <Reveal>
            <h2 className="text-2xl sm:text-[30px]">Pairs well with</h2>
            <p className="mt-3 text-[15px] text-navy-500">
              Same key, same dashboard, same webhook signature — add another suite without another integration.
            </p>
          </Reveal>
          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {others.map((o, i) => {
              const ot = toneClasses[o.tone];
              return (
                <Reveal key={o.slug} delay={i * 80}>
                  <Link href={`/products/${o.slug}`} className="card-hover group flex h-full flex-col">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${ot.chip}`}>
                      <Icon name={o.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="mt-4 text-[16px] font-semibold group-hover:text-leaf-600">{o.name}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-500">{o.tagline}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy-700 group-hover:text-leaf-600">
                      Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
