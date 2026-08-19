"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

const toneDot: Record<string, string> = {
  navy: "bg-navy-600",
  leaf: "bg-leaf-500",
  ember: "bg-ember-500",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const leave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  const isActive = (href?: string) => !!href && (pathname === href || (href !== "/" && pathname.startsWith(href)));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open || mobile
          ? "border-b border-navy-100/80 bg-white/90 shadow-[0_6px_28px_-18px_rgba(6,31,85,.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="wrap">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled || mobile ? "h-16" : "h-20"
          }`}
        >
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={leave}>
            {nav.map((item) =>
              item.columns ? (
                <div key={item.label} className="relative" onMouseEnter={() => enter(item.label)}>
                  <button
                    className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                      open === item.label ? "bg-navy-50 text-navy-900" : "text-navy-700 hover:text-navy-900"
                    }`}
                    aria-expanded={open === item.label}
                    onClick={() => setOpen(open === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        open === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-leaf-600" : "text-navy-700 hover:text-navy-900"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/developers" className="text-sm font-semibold text-navy-700 transition-colors hover:text-leaf-600">
              Docs
            </Link>
            <Link href="/contact" className="btn-primary !px-5 !py-2.5">
              Get in touch
            </Link>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy-100 text-navy-800 lg:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobile}
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      {nav
        .filter((i) => i.columns)
        .map((item) => (
          <div
            key={item.label}
            onMouseEnter={() => enter(item.label)}
            onMouseLeave={leave}
            className={`absolute inset-x-0 top-full z-50 hidden origin-top border-b border-navy-100 bg-white shadow-[0_30px_60px_-30px_rgba(6,31,85,.35)] transition-all duration-300 lg:block ${
              open === item.label
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <div className="wrap grid gap-8 py-9 lg:grid-cols-4">
              {item.columns!.map((col) => (
                <div key={col.title}>
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-navy-400">{col.title}</p>
                  <ul className="space-y-1">
                    {col.items.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-navy-50/70"
                        >
                          <span
                            className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${toneDot[child.tone ?? "navy"]} transition-transform duration-300 group-hover:scale-150`}
                          />
                          <span>
                            <span className="flex items-center gap-2 text-sm font-semibold text-navy-800 group-hover:text-leaf-600">
                              {child.label}
                              {child.badge && (
                                <span className="rounded-full bg-ember-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-ember-600">
                                  {child.badge}
                                </span>
                              )}
                            </span>
                            <span className="mt-0.5 block text-[12.5px] leading-relaxed text-navy-500">
                              {child.desc}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="rounded-2xl bg-navy-900 bg-navy-mesh p-6 text-white lg:col-start-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-leaf-300">Start building</p>
                <p className="mt-3 text-lg font-semibold leading-snug">{site.promise}</p>
                <p className="mt-2 text-sm text-navy-100">
                  Sandbox keys in minutes. No sales call for your first API request.
                </p>
                <Link
                  href="/developers"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-300 hover:text-white"
                >
                  Read the docs <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto bg-white transition-all duration-300 lg:hidden ${
          mobile ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-4 opacity-0"
        }`}
      >
        <div className="wrap flex items-center justify-end pt-4">
          <button
            onClick={() => setMobile(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-navy-100 text-navy-700"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="wrap space-y-2 py-4">
          {nav.map((item) =>
            item.columns ? (
              <div key={item.label} className="border-b border-navy-50 pb-2">
                <button
                  onClick={() => setMobileSection(mobileSection === item.label ? null : item.label)}
                  className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-navy-900"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 text-navy-400 transition-transform duration-300 ${
                      mobileSection === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    mobileSection === item.label ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 space-y-3 pb-3">
                    {item.columns!.map((col) => (
                      <div key={col.title}>
                        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-navy-400">
                          {col.title}
                        </p>
                        <ul>
                          {col.items.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="flex items-center gap-2.5 py-2 text-[15px] text-navy-700"
                              >
                                <span className={`h-1.5 w-1.5 rounded-full ${toneDot[child.tone ?? "navy"]}`} />
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="block border-b border-navy-50 py-3.5 text-base font-semibold text-navy-900"
              >
                {item.label}
              </Link>
            ),
          )}
          <div className="grid gap-3 pt-4">
            <Link href="/contact" className="btn-primary w-full">
              Get in touch
            </Link>
            <Link href="/developers" className="btn-ghost w-full">
              Developer docs
            </Link>
          </div>
          <p className="pt-6 text-sm text-navy-500">
            <a href={`mailto:${site.emails.connect}`} className="font-semibold text-leaf-600">
              {site.emails.connect}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}
