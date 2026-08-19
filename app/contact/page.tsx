import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Talk to Rupeeco about pricing, sandbox access, partnerships or support. Sales, partnerships and escalations: director@rupeeco.in · Customer support: support@rupeeco.in",
};

const desks = [
  {
    label: "Sales & partnerships",
    email: site.emails.director,
    body: "Pricing, rate cards, integration scoping, pilots, partner proposals and corporate matters.",
    sla: "Replies within 1 business day",
  },
  {
    label: "Customer support",
    email: site.emails.support,
    body: "Live integration issues, production incidents, sandbox access and account questions.",
    sla: "24×7 for production incidents",
  },
  {
    label: "Grievance & escalation",
    email: site.emails.director,
    body: "Unresolved complaints, data-protection requests and formal escalations.",
    sla: "Acknowledged within 3 business days",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Get in touch"
        title={
          <>
            Tell us what you need to move, <span className="gradient-text">and we will map it</span>
          </>
        }
        body="Bring your flows and your edge cases. A solutions engineer will come back with the shortest path to production — or sandbox keys, if you would rather start by testing."
      />

      <section className="section bg-white">
        <div className="wrap grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            {desks.map((d) => (
              <div
                key={d.label}
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-400">{d.label}</p>
                <a
                  href={`mailto:${d.email}`}
                  className="mt-2.5 inline-flex items-center gap-2 text-[15px] font-semibold text-navy-900 hover:text-leaf-600"
                >
                  <Mail className="h-4 w-4 text-leaf-500" />
                  {d.email}
                </a>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-navy-500">{d.body}</p>
                <p className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold text-leaf-600">
                  <Clock className="h-3.5 w-3.5" />
                  {d.sla}
                </p>
              </div>
            ))}

            <div className="rounded-2xl bg-navy-900 bg-navy-mesh p-6 text-white">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-leaf-300">Registered office</p>
              <p className="mt-3 flex items-start gap-2.5 text-[14px] leading-relaxed text-navy-100">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-300" />
                <span>
                  {site.address.company}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.locality}
                  <br />
                  {site.address.region} {site.address.postalCode}, {site.address.country}
                </span>
              </p>
              <p className="mt-4 flex items-center gap-2.5 text-[14px] text-navy-100">
                <Phone className="h-4 w-4 shrink-0 text-leaf-300" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {site.phone}
                </a>
              </p>
              <p className="mt-4 flex items-center gap-2.5 text-[14px] text-navy-100">
                <Mail className="h-4 w-4 shrink-0 text-leaf-300" />
                <a href={`mailto:${site.emails.director}`} className="hover:text-white">
                  {site.emails.director}
                </a>
              </p>
              <p className="mt-4 border-t border-white/10 pt-4 text-[12px] text-navy-200">
                GSTIN <span className="font-semibold text-navy-100">{site.gstin}</span>
              </p>
              <p className="mt-4 border-t border-white/10 pt-4 text-[12px] leading-relaxed text-navy-200">
                Please do not send full card numbers, CVVs, OTPs or Aadhaar numbers over email. Share sensitive data only
                through the secure channels your solutions engineer sets up.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
