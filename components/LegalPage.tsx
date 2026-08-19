import Link from "next/link";
import { Info } from "lucide-react";
import PageHero from "./PageHero";
import { site } from "@/lib/site";

export type Section = { id: string; heading: string; body: React.ReactNode };

export default function LegalPage({
  title,
  intro,
  updated,
  sections,
  contactEmail,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: Section[];
  contactEmail: string;
}) {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: title }]}
        eyebrow={`Last updated ${updated}`}
        title={title}
        body={intro}
      />

      <section className="section bg-white">
        <div className="wrap grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
          <nav aria-label="On this page" className="lg:sticky lg:top-28">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">On this page</p>
            <ul className="space-y-1.5 border-l border-navy-100 pl-4">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-[13.5px] text-navy-600 transition-colors hover:text-leaf-600">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <div className="mb-9 flex items-start gap-3 rounded-2xl border border-ember-100 bg-ember-50/60 p-5 text-[13px] leading-relaxed text-ember-700">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                This is a working template prepared for the Rupeeco website. Before launch it should be reviewed and
                finalised by qualified legal counsel against your actual data practices, licences and regulatory
                obligations. Rupeeco is not providing legal advice through this page.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="text-[22px] leading-snug">
                    <span className="mr-2.5 font-mono text-[13px] font-bold text-navy-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.heading}
                  </h2>
                  <div className="mt-3.5 space-y-3.5 text-[15px] leading-relaxed text-navy-600 [&_a]:font-semibold [&_a]:text-leaf-600 [&_a:hover]:underline [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50/60 p-6">
              <h3 className="text-[16.5px] font-semibold">Questions about this policy?</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-600">
                Write to{" "}
                <a href={`mailto:${contactEmail}`} className="font-semibold text-leaf-600 hover:underline">
                  {contactEmail}
                </a>{" "}
                or use the{" "}
                <Link href="/contact" className="font-semibold text-leaf-600 hover:underline">
                  contact form
                </Link>
                . For unresolved matters, escalate to{" "}
                <a href={`mailto:${site.emails.director}`} className="font-semibold text-leaf-600 hover:underline">
                  {site.emails.director}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
