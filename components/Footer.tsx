import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Youtube, Github, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { footerNav, site } from "@/lib/site";

const contacts = [
  { label: "Sales & partnerships", email: site.emails.connect },
  { label: "Customer support", email: site.emails.support },
  { label: "Office of the Director", email: site.emails.director },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-navy-100">
      <div className="pointer-events-none absolute inset-0 bg-navy-mesh opacity-70" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10 animate-spinslow" />

      <div className="wrap relative">
        {/* CTA strip */}
        <div className="grid gap-6 border-b border-white/10 py-12 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Build your financial stack on <span className="text-leaf-300">one API</span>
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-navy-100/85">
              Talk to a solutions engineer about your flows, or pull sandbox keys and start testing today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/contact" className="btn-leaf">
              Get in touch
            </Link>
            <Link href="/developers" className="btn-light">
              Explore docs <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid gap-10 py-14 lg:grid-cols-[1.3fr_2.7fr]">
          <div>
            <Logo variant="light" withTagline />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-100/80">
              Rupeeco is a unified financial infrastructure platform — payments, verification, payouts, collections,
              banking, commerce, analytics and risk, delivered through a single integration.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <p className="flex items-start gap-2.5 text-navy-100/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-300" />
                <span>
                  {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.country}
                </span>
              </p>
              <p className="flex items-center gap-2.5 text-navy-100/80">
                <Phone className="h-4 w-4 shrink-0 text-leaf-300" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {site.phone}
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-2.5">
              {[
                { href: site.social.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: site.social.youtube, icon: Youtube, label: "YouTube" },
                { href: site.social.github, icon: Github, label: "GitHub" },
              ].map(({ href, icon: I, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-navy-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf-300 hover:text-leaf-300"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-leaf-300">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-[13.5px] text-navy-100/80 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Email routing */}
        <div className="grid gap-4 border-t border-white/10 py-8 sm:grid-cols-3">
          {contacts.map((c) => (
            <div key={c.email} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-200">{c.label}</p>
              <a
                href={`mailto:${c.email}`}
                className="mt-1.5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-leaf-300"
              >
                <Mail className="h-4 w-4 text-leaf-300" />
                {c.email}
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-[12.5px] text-navy-200 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="rounded-full border border-white/15 px-2.5 py-1">PCI DSS aligned</span>
            <span className="rounded-full border border-white/15 px-2.5 py-1">ISO 27001 practices</span>
            <span className="rounded-full border border-white/15 px-2.5 py-1">Data residency in India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
