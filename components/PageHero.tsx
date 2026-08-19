import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  body,
  breadcrumb,
  primary,
  secondary,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy-100 bg-white pb-14 pt-12 sm:pb-16 sm:pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-leaf-100/45 blur-3xl" />
        <div className="absolute -right-24 top-0 h-[360px] w-[360px] rounded-full bg-ember-100/40 blur-3xl" />
        <div className="dotgrid absolute inset-x-0 bottom-0 h-40 opacity-30 [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>

      <div className="wrap relative">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-[12.5px] text-navy-400">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-1.5">
                {b.href ? (
                  <Link href={b.href} className="font-medium hover:text-leaf-600">
                    {b.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-navy-600">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl animate-fade-up">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[46px]">{title}</h1>
          {body && <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-navy-500">{body}</p>}

          {(primary || secondary) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary && (
                <Link href={primary.href} className="btn-primary group">
                  {primary.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}
              {secondary && (
                <Link href={secondary.href} className="btn-ghost">
                  {secondary.label}
                </Link>
              )}
            </div>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
