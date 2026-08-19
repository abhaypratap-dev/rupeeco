"use client";

import { useMemo, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";
import {
  WEB3FORMS_ENDPOINT,
  accessKey,
  inquiryTypes,
  mailboxFor,
  suiteOptions,
  volumeOptions,
  type Route,
} from "@/lib/forms";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-[14.5px] text-navy-900 placeholder:text-navy-300 transition-all duration-200 focus:border-leaf-400 focus:outline-none focus:ring-4 focus:ring-leaf-500/15";
const label = "mb-1.5 block text-[12.5px] font-semibold text-navy-700";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [inquiry, setInquiry] = useState(inquiryTypes[0].value);
  const [suites, setSuites] = useState<string[]>([]);

  const selected = inquiryTypes.find((t) => t.value === inquiry)!;
  const route: Route = selected.route;
  const key = useMemo(() => accessKey(route), [route]);
  const mailbox = mailboxFor(route);

  const toggleSuite = (s: string) =>
    setSuites((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
    if (data.get("botcheck")) return;

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");

    // No key configured yet → graceful fallback to a prefilled email.
    if (!key) {
      const body = [
        `Name: ${name}`,
        `Work email: ${email}`,
        `Company: ${company}`,
        `Phone: ${data.get("phone") || "-"}`,
        `Enquiry type: ${selected.label}`,
        `Suites of interest: ${suites.join(", ") || "-"}`,
        `Monthly volume: ${data.get("volume") || "-"}`,
        "",
        String(data.get("message") || ""),
      ].join("\n");
      window.location.href = `mailto:${mailbox}?subject=${encodeURIComponent(
        `[Website] ${selected.label} — ${company || name}`,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    setError("");

    const payload = {
      access_key: key,
      subject: `[Rupeeco website] ${selected.label} — ${company || name}`,
      from_name: "Rupeeco website",
      replyto: email,
      "Routed to": mailbox,
      "Full name": name,
      "Work email": email,
      Company: company,
      Phone: String(data.get("phone") || ""),
      "Enquiry type": selected.label,
      "Suites of interest": suites.join(", ") || "Not specified",
      "Monthly volume": String(data.get("volume") || ""),
      Message: String(data.get("message") || ""),
      "Submitted from": typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success !== false) {
        setStatus("sent");
        form.reset();
        setSuites([]);
      } else {
        setStatus("error");
        setError(json.message || "We could not send that message. Please email us directly.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection or email us directly.");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-leaf-200 bg-leaf-50/60 p-9 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-leaf-500 text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-2xl">Message received</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-navy-600">
          Thanks — this has landed with <span className="font-semibold text-navy-900">{mailbox}</span>. Someone from the
          team will reply within one business day.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-ghost mt-7">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-navy-100 bg-white p-7 shadow-card sm:p-9">
      {/* honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Full name <span className="text-ember-500">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Aarav Sharma" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Work email <span className="text-ember-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="aarav@company.com"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="company">
            Company <span className="text-ember-500">*</span>
          </label>
          <input id="company" name="company" required autoComplete="organization" placeholder="Company Pvt. Ltd." className={field} />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" className={field} />
        </div>
      </div>

      {/* Inquiry type */}
      <fieldset className="mt-7">
        <legend className={label}>
          What is this about? <span className="text-ember-500">*</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {inquiryTypes.map((t) => (
            <label
              key={t.value}
              className={`cursor-pointer rounded-xl border p-3.5 transition-all duration-200 ${
                inquiry === t.value
                  ? "border-leaf-400 bg-leaf-50/70 ring-2 ring-leaf-500/20"
                  : "border-navy-100 bg-white hover:border-navy-300"
              }`}
            >
              <input
                type="radio"
                name="inquiry"
                value={t.value}
                checked={inquiry === t.value}
                onChange={() => setInquiry(t.value)}
                className="sr-only"
              />
              <span className="block text-[14px] font-semibold text-navy-900">{t.label}</span>
              <span className="mt-0.5 block text-[12px] text-navy-500">{t.hint}</span>
            </label>
          ))}
        </div>
        <p className="mt-2.5 flex items-center gap-1.5 text-[12.5px] text-navy-500">
          <Mail className="h-3.5 w-3.5 text-leaf-500" />
          This will be routed to <span className="font-semibold text-navy-700">{mailbox}</span>
        </p>
      </fieldset>

      {/* Suites */}
      <fieldset className="mt-7">
        <legend className={label}>Suites you are interested in</legend>
        <div className="flex flex-wrap gap-2">
          {suiteOptions.map((s) => (
            <label
              key={s}
              className={`cursor-pointer rounded-lg border px-3 py-1.5 text-[12.5px] font-semibold transition-all duration-200 ${
                suites.includes(s)
                  ? "border-navy-800 bg-navy-800 text-white"
                  : "border-navy-200 bg-white text-navy-600 hover:border-navy-400"
              }`}
            >
              <input
                type="checkbox"
                checked={suites.includes(s)}
                onChange={() => toggleSuite(s)}
                className="sr-only"
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-7 grid gap-5">
        <div>
          <label className={label} htmlFor="volume">
            Monthly transaction volume
          </label>
          <select id="volume" name="volume" defaultValue="" className={field}>
            <option value="" disabled>
              Select a range
            </option>
            {volumeOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={label} htmlFor="message">
            How can we help? <span className="text-ember-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your flows — what you collect, who you pay out to, and what you need verified."
            className={`${field} resize-y`}
          />
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-[12.5px] leading-relaxed text-navy-500">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy-300 text-leaf-500 focus:ring-leaf-500"
        />
        <span>
          I agree that Rupeeco may contact me about this enquiry and store these details as described in the{" "}
          <a href="/privacy-policy" className="font-semibold text-leaf-600 hover:underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      {status === "error" && (
        <p className="mt-5 flex items-start gap-2.5 rounded-xl border border-ember-200 bg-ember-50 p-4 text-[13.5px] text-ember-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            {error}{" "}
            <a href={`mailto:${mailbox}`} className="font-semibold underline">
              {mailbox}
            </a>
          </span>
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary group mt-7 w-full sm:w-auto">
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      {!key && (
        <p className="mt-4 text-[12px] leading-relaxed text-navy-400">
          Note for the site owner: no Web3Forms access key is configured yet, so this button opens a prefilled email
          instead. Add <code className="font-mono">NEXT_PUBLIC_WEB3FORMS_KEY_CONNECT</code> in Vercel to enable in-page
          submission. See README.md.
        </p>
      )}
    </form>
  );
}
