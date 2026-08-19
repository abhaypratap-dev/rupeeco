import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CodeBlock from "@/components/CodeBlock";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Developers — APIs, SDKs and sandbox",
  description:
    "Rupeeco developer resources: REST API reference, SDKs for Node, Python, Java, PHP and Go, sandbox keys, idempotency, webhooks and error handling.",
};

const sdks = [
  { name: "Node.js", cmd: "npm install @rupeeco/node" },
  { name: "Python", cmd: "pip install rupeeco" },
  { name: "Java", cmd: "implementation 'in.rupeeco:rupeeco-java:1.0.0'" },
  { name: "PHP", cmd: "composer require rupeeco/rupeeco-php" },
  { name: "Go", cmd: "go get github.com/rupeeco/rupeeco-go" },
  { name: "Ruby", cmd: "gem install rupeeco" },
];

const principles = [
  { icon: "KeyRound", title: "One key, every suite", body: "A single scoped API key authenticates against all eight suites. Rotate without redeploying." },
  { icon: "Zap", title: "Idempotency built in", body: "Send an Idempotency-Key header on any write and retry safely — duplicate charges are impossible." },
  { icon: "Activity", title: "Signed webhooks", body: "HMAC-SHA256 signatures, exactly-once delivery, automatic retry with exponential backoff and a replay API." },
  { icon: "Gauge", title: "Predictable errors", body: "Stable machine-readable error codes with a human message and a docs link on every failure." },
  { icon: "GitBranch", title: "Versioned contracts", body: "Pin an API version per key. Breaking changes ship behind a new version, never inside one." },
  { icon: "Lock", title: "Sandbox parity", body: "The sandbox mirrors production behaviour, including simulated failures, timeouts and settlement cycles." },
];

const webhookSample = `// Verify a Rupeeco webhook signature (Node.js)
import crypto from "node:crypto";

export function verify(rawBody, signature, secret) {
  const expected = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(signature)
  );
}`;

const quickstart = `# 1. Get your sandbox key from the dashboard
export RUPEECO_KEY="rpc_test_..."

# 2. Make your first call
curl https://api.rupeeco.in/v1/verify/pan \\
  -H "Authorization: Bearer $RUPEECO_KEY" \\
  -H "Idempotency-Key: $(uuidgen)" \\
  -H "Content-Type: application/json" \\
  -d '{ "pan": "ABCDE1234F", "consent": "Y" }'

# 3. Listen for events
curl https://api.rupeeco.in/v1/webhooks \\
  -H "Authorization: Bearer $RUPEECO_KEY" \\
  -d '{ "url": "https://yourapp.com/hooks/rupeeco",
        "events": ["payment.captured", "verification.completed"] }'`;

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Developers" }]}
        eyebrow="Developers"
        title={
          <>
            Boring APIs. <span className="gradient-text">In the best way.</span>
          </>
        }
        body="Consistent REST contracts, idempotent writes, signed webhooks and a sandbox that behaves like production. Read the docs, pull a key and make your first call before anyone asks you for a purchase order."
        primary={{ label: "Request sandbox access", href: "/contact" }}
        secondary={{ label: "Browse products", href: "/products" }}
      >
        <Reveal className="mt-12" delay={80}>
          <CodeBlock code={quickstart} method="POST" path="Quickstart" />
        </Reveal>
      </PageHero>

      {/* Principles */}
      <section id="reference" className="section scroll-mt-24 bg-white">
        <div className="wrap">
          <SectionHeading
            eyebrow="API design principles"
            title={
              <>
                Predictable behaviour, <span className="gradient-text">documented edge cases</span>
              </>
            }
            body="The parts of an API you only appreciate at 2am during an incident."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-600 transition-colors group-hover:bg-leaf-500 group-hover:text-white">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[16px] font-semibold">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-500">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Endpoint index */}
      <section className="section bg-navy-50/50">
        <div className="wrap">
          <SectionHeading
            eyebrow="Endpoint index"
            title={
              <>
                Eight suites, <span className="gradient-text">one base URL</span>
              </>
            }
            body="https://api.rupeeco.in — versioned, region-routed and rate-limited per key."
          />
          <Reveal className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card">
              <div className="hidden grid-cols-[110px_1fr_1fr] gap-4 border-b border-navy-100 bg-navy-50/60 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400 sm:grid">
                <span>Method</span>
                <span>Endpoint</span>
                <span>Suite</span>
              </div>
              <ul className="divide-y divide-navy-50">
                {products.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="grid gap-2 px-6 py-4 transition-colors hover:bg-navy-50/50 sm:grid-cols-[110px_1fr_1fr] sm:items-center sm:gap-4"
                    >
                      <span
                        className={`w-fit rounded-md px-2 py-0.5 font-mono text-[11px] font-bold ${
                          p.endpoint.method === "GET" ? "bg-leaf-50 text-leaf-600" : "bg-ember-50 text-ember-600"
                        }`}
                      >
                        {p.endpoint.method}
                      </span>
                      <code className="font-mono text-[13px] text-navy-800">{p.endpoint.path}</code>
                      <span className="flex items-center gap-2 text-[13.5px] font-medium text-navy-500">
                        <Icon name={p.icon} className="h-4 w-4 opacity-60" />
                        {p.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SDKs + webhooks */}
      <section id="sdks" className="section scroll-mt-24 bg-white">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="eyebrow">SDKs</span>
            <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[34px]">
              Install and <span className="gradient-text">start calling</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-navy-500">
              Typed clients with retries, idempotency and webhook verification already handled.
            </p>
            <ul className="mt-7 space-y-2.5">
              {sdks.map((s) => (
                <li
                  key={s.name}
                  className="flex flex-wrap items-center gap-3 rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3 transition-colors hover:border-navy-200 hover:bg-white"
                >
                  <span className="w-20 text-[13.5px] font-semibold text-navy-800">{s.name}</span>
                  <code className="font-mono text-[12.5px] text-navy-500">{s.cmd}</code>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div id="webhooks" className="scroll-mt-24">
              <span className="eyebrow">Webhooks</span>
              <h2 className="mt-4 text-3xl leading-[1.15] sm:text-[34px]">
                Verify before you <span className="gradient-text">trust</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-navy-500">
                Every event carries an HMAC-SHA256 signature and a timestamp. Reject anything that fails verification or
                arrives outside your tolerance window.
              </p>
            </div>
            <CodeBlock code={webhookSample} />
            <div id="sandbox" className="scroll-mt-24 rounded-2xl border border-leaf-100 bg-leaf-50/50 p-6">
              <h3 className="text-[16.5px] font-semibold">Sandbox access</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Test keys with no volume commitment",
                  "Simulated failures, timeouts and settlement cycles",
                  "Reset your sandbox ledger any time",
                  "Same request and response shapes as production",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-[14px] text-navy-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" strokeWidth={3} />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[13.5px] text-navy-600">
                Need keys today? Email{" "}
                <a href={`mailto:${site.emails.support}`} className="font-semibold text-leaf-700 hover:underline">
                  {site.emails.support}
                </a>{" "}
                with your company name and the suites you want to test.
              </p>
              <Link href="/contact" className="btn-leaf group mt-6">
                Request sandbox access
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
