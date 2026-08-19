export type Tone = "navy" | "leaf" | "ember" | "lime";

export type Product = {
  slug: string;
  index: number;
  name: string;
  icon: string;
  tone: Tone;
  tagline: string;
  summary: string;
  features: string[];
  highlights: { title: string; body: string }[];
  useCases: string[];
  endpoint: { method: string; path: string };
  sample: string;
};

export const products: Product[] = [
  {
    slug: "verification",
    index: 1,
    name: "Verification Suite",
    icon: "ShieldCheck",
    tone: "leaf",
    tagline: "KYC and KYB in one call",
    summary:
      "Verify a person or a business against source-of-truth registries in a single request. Identity, tax, corporate and banking checks are exposed through one consistent contract with one consistent response shape.",
    features: [
      "PAN Verification",
      "Aadhaar Verification",
      "GST Verification",
      "CIN Verification",
      "Bank Account Verification",
      "UPI Verification",
      "Mobile Verification",
      "Email Verification",
    ],
    highlights: [
      {
        title: "Source-of-truth checks",
        body: "PAN, GST, CIN, Aadhaar and bank verification hit authorised sources with automatic fallback across partners.",
      },
      {
        title: "Fuzzy name matching",
        body: "Built-in name-match scoring across documents so onboarding does not fail on a middle initial.",
      },
      {
        title: "Audit-ready trails",
        body: "Every verification returns a signed, timestamped record you can retain for regulator or auditor review.",
      },
    ],
    useCases: [
      "Merchant and seller onboarding",
      "Lending due diligence before disbursal",
      "Vendor master data cleanup",
    ],
    endpoint: { method: "POST", path: "/v1/verify/pan" },
    sample: `curl https://api.rupeeco.in/v1/verify/pan \\
  -H "Authorization: Bearer $RUPEECO_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "pan": "ABCDE1234F",
    "name": "Aarav Sharma",
    "consent": "Y"
  }'`,
  },
  {
    slug: "payments",
    index: 2,
    name: "Payments",
    icon: "CreditCard",
    tone: "navy",
    tagline: "Payment gateway orchestration",
    summary:
      "One integration that sits above every major Indian gateway. Rupeeco routes each transaction to the acquirer most likely to approve it, retries intelligently on failure, and settles into your books already reconciled.",
    features: [
      "Payment Gateway Orchestration",
      "Smart Routing",
      "Automatic Failover",
      "Retry Logic",
      "Token Vault",
      "Subscriptions",
      "Refunds",
      "Settlement",
    ],
    highlights: [
      {
        title: "Route on live success rates",
        body: "Rules evaluate issuer, instrument, ticket size, method and real-time acquirer health before every attempt — no manual switching during an outage.",
      },
      {
        title: "Network tokens, one vault",
        body: "Cards are tokenised once and reused across gateways, so saved-card checkout survives a provider migration.",
      },
      {
        title: "Settlement you can trust",
        body: "Settlement files, fees and taxes are normalised across providers into a single settlement report per cycle.",
      },
    ],
    useCases: [
      "Checkout for D2C and marketplace platforms",
      "Subscription and recurring billing",
      "Multi-gateway redundancy for high-volume merchants",
    ],
    endpoint: { method: "POST", path: "/v1/payments/orders" },
    sample: `curl https://api.rupeeco.in/v1/payments/orders \\
  -H "Authorization: Bearer $RUPEECO_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 249900,
    "currency": "INR",
    "routing": "smart",
    "customer": { "contact": "+919812345678" },
    "notes": { "order_id": "ORD-10241" }
  }'`,
  },
  {
    slug: "collections",
    index: 3,
    name: "Collection Suite",
    icon: "QrCode",
    tone: "navy",
    tagline: "Get paid on every channel",
    summary:
      "Static and dynamic QR, shareable payment links, virtual accounts and UPI collect requests — every inbound rupee arrives tagged to the right customer and invoice.",
    features: ["QR (Static & Dynamic)", "Payment Links", "Virtual Accounts", "UPI Collect", "Auto Reconciliation", "Partial Payments"],
    highlights: [
      {
        title: "A virtual account per customer",
        body: "Unique IFSC-addressable accounts mean bank transfers self-reconcile against the right ledger the moment they land.",
      },
      {
        title: "Links that convert",
        body: "Send over WhatsApp, SMS or email with expiry, part-payment rules and automatic reminders.",
      },
      {
        title: "Real-time webhooks",
        body: "Signed events on every credit so your ERP updates without polling.",
      },
    ],
    useCases: ["Offline and field collections", "B2B invoice collections", "Rent, fees and subscription dues"],
    endpoint: { method: "POST", path: "/v1/collections/links" },
    sample: `curl https://api.rupeeco.in/v1/collections/links \\
  -H "Authorization: Bearer $RUPEECO_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 499000,
    "reference": "INV-2026-0455",
    "channels": ["upi", "card", "netbanking"],
    "notify": { "sms": true, "whatsapp": true }
  }'`,
  },
  {
    slug: "commerce",
    index: 4,
    name: "Commerce APIs",
    icon: "ShoppingCart",
    tone: "lime",
    tagline: "Invoicing, billing and GST",
    summary:
      "Generate compliant invoices, run usage or subscription billing, file GST-ready documents and push everything into your ERP without a spreadsheet in the middle.",
    features: ["Invoice Generation", "Subscription Billing", "GST e-Invoice & e-Way", "ERP Connectors", "Credit Notes", "Tax Reports"],
    highlights: [
      {
        title: "GST-compliant by default",
        body: "IRN generation, QR embedding and e-way bill creation handled inside the invoice call.",
      },
      {
        title: "Any billing model",
        body: "Flat, tiered, usage-based and hybrid plans with proration, coupons and dunning.",
      },
      {
        title: "ERP in sync",
        body: "Prebuilt connectors for Tally, Zoho Books, SAP and NetSuite keep receivables current.",
      },
    ],
    useCases: ["B2B invoicing at volume", "SaaS subscription revenue", "GST compliance automation"],
    endpoint: { method: "POST", path: "/v1/commerce/invoices" },
    sample: `curl https://api.rupeeco.in/v1/commerce/invoices \\
  -H "Authorization: Bearer $RUPEECO_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_gstin": "29ABCDE1234F1Z5",
    "place_of_supply": "29",
    "items": [
      { "hsn": "998314", "qty": 1, "rate": 250000, "gst": 18 }
    ],
    "einvoice": true
  }'`,
  },
  {
    slug: "analytics",
    index: 5,
    name: "Analytics & Insights",
    icon: "BarChart3",
    tone: "navy",
    tagline: "See every rupee, live",
    summary:
      "A unified dashboard across every Rupeeco service, AI-written narrative reports, and reconciliation that closes the loop between what you charged, what you collected and what the bank actually settled.",
    features: ["Live Dashboard", "AI Reports", "Auto Reconciliation", "Cohort Analysis", "Custom Alerts", "Data Exports"],
    highlights: [
      {
        title: "One dashboard, all rails",
        body: "Success rates, latency and failure reasons compared side by side across every gateway and bank you use.",
      },
      {
        title: "Reports that read themselves",
        body: "Scheduled AI summaries explain what moved this week and which routing rule caused it.",
      },
      {
        title: "Three-way reconciliation",
        body: "Orders, payments and bank settlements matched automatically, with exceptions queued for review.",
      },
    ],
    useCases: ["Finance month-end close", "Payment performance optimisation", "Board and investor reporting"],
    endpoint: { method: "GET", path: "/v1/analytics/reports" },
    sample: `curl "https://api.rupeeco.in/v1/analytics/reports?\\
metric=success_rate&group_by=gateway&from=2026-07-01" \\
  -H "Authorization: Bearer $RUPEECO_KEY"`,
  },
  {
    slug: "fraud-risk",
    index: 6,
    name: "Fraud & Risk Engine",
    icon: "ShieldAlert",
    tone: "ember",
    tagline: "Block fraud, not customers",
    summary:
      "Every transaction is scored in single-digit milliseconds against device intelligence, velocity rules and sanctions data — so you decline the fraud attempt and approve the good customer.",
    features: ["Risk Scoring", "Velocity Rules", "Device Intelligence", "AML & Sanctions Monitoring", "Chargeback Defence", "Case Management"],
    highlights: [
      {
        title: "Sub-10ms decisions",
        body: "Inline scoring on the authorisation path with a full feature vector returned for your own models.",
      },
      {
        title: "Rules you can edit",
        body: "Velocity, geo, BIN, device and amount rules changed from the dashboard, versioned and testable against replayed traffic.",
      },
      {
        title: "AML built in",
        body: "Continuous screening against sanctions and PEP watchlists with STR-ready case files.",
      },
    ],
    useCases: ["High-risk checkout protection", "Onboarding fraud screening", "Regulatory AML monitoring"],
    endpoint: { method: "POST", path: "/v1/risk/evaluate" },
    sample: `curl https://api.rupeeco.in/v1/risk/evaluate \\
  -H "Authorization: Bearer $RUPEECO_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1899000,
    "device_id": "dvc_7bd1a2",
    "email": "aarav@example.com",
    "ip": "203.0.113.42"
  }'`,
  },
  {
    slug: "api-marketplace",
    index: 7,
    name: "API Marketplace",
    icon: "Blocks",
    tone: "ember",
    tagline: "100+ APIs, self-serve",
    summary:
      "Browse the full catalogue, subscribe to what you need, and start calling it the same day. Self-onboarding, transparent usage metering and consolidated billing across every API you switch on.",
    features: ["100+ APIs", "Subscribe & Use", "Self Onboarding", "Usage & Billing", "Sandbox Keys", "Version Pinning"],
    highlights: [
      {
        title: "Live in an afternoon",
        body: "Sign up, verify your business, pull sandbox keys and ship — no sales cycle for the first call.",
      },
      {
        title: "Metering you can audit",
        body: "Per-endpoint usage, per-team attribution and invoice-level line items.",
      },
      {
        title: "One contract, many APIs",
        body: "Add a new capability without a new vendor, a new MSA or a new integration.",
      },
    ],
    useCases: ["Rapid prototyping and pilots", "Consolidating fintech vendors", "Usage-based internal chargeback"],
    endpoint: { method: "GET", path: "/v1/marketplace/catalog" },
    sample: `curl https://api.rupeeco.in/v1/marketplace/catalog \\
  -H "Authorization: Bearer $RUPEECO_KEY"`,
  },
  {
    slug: "banking",
    index: 8,
    name: "Banking APIs",
    icon: "Building2",
    tone: "leaf",
    tagline: "Regulated rails, developer-friendly",
    summary:
      "Account Aggregator data pulls, escrow accounts, eMandate registration and current-account operations — the regulated building blocks of a financial product, exposed as clean REST endpoints.",
    features: ["Account Aggregator", "Escrow Accounts", "eMandate (NACH/UPI)", "Current Account APIs", "Statement Fetch", "Balance Enquiry"],
    highlights: [
      {
        title: "Consent-first data",
        body: "AA flows with consent artefacts, revocation and multi-FIP coverage for bank statement and income analysis.",
      },
      {
        title: "Escrow that scales",
        body: "Programmatic sub-ledgers with rule-based release for marketplaces and lending flows.",
      },
      {
        title: "eMandate on every channel",
        body: "Register recurring debits over UPI Autopay, debit card, net banking or physical NACH from a single call.",
      },
    ],
    useCases: ["Lending underwriting via bank statements", "Marketplace escrow and split settlements", "Recurring EMI and SIP collection"],
    endpoint: { method: "POST", path: "/v1/banking/mandates" },
    sample: `curl https://api.rupeeco.in/v1/banking/mandates \\
  -H "Authorization: Bearer $RUPEECO_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "max_amount": 500000,
    "frequency": "monthly",
    "method": "upi_autopay",
    "customer_id": "cust_9f2b41"
  }'`,
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const platformLayer = [
  { name: "API Gateway", icon: "Network", body: "Single entry point with regional routing and versioned contracts." },
  { name: "Auth & Authorization", icon: "KeyRound", body: "Scoped keys, OAuth2, IP allowlists and granular RBAC." },
  { name: "Rate Limiting", icon: "Gauge", body: "Per-key throttling and burst control that protects downstream banks." },
  { name: "Logging & Monitoring", icon: "Activity", body: "Full request tracing with 90-day searchable retention." },
  { name: "Caching", icon: "Database", body: "Hot-path caching for verification and catalogue reads." },
  { name: "Event Processing", icon: "Zap", body: "Exactly-once webhooks with replay and dead-letter handling." },
  { name: "Workflow Orchestration", icon: "GitBranch", body: "Multi-step financial flows with compensating transactions." },
  { name: "Data Security", icon: "Lock", body: "AES-256 at rest, TLS 1.3 in transit, HSM-backed key custody." },
];

export const infraLayer = [
  { name: "Cloud Infrastructure", icon: "Cloud", body: "AWS, GCP and Azure with active-active regions." },
  { name: "Microservices", icon: "Boxes", body: "Independently deployable services per domain." },
  { name: "Database Cluster", icon: "Database", body: "SQL and NoSQL clusters with synchronous replicas." },
  { name: "Data Warehouse", icon: "Warehouse", body: "Columnar analytics store feeding every report." },
  { name: "High Availability", icon: "MoveDiagonal", body: "Auto-scaling with zero-downtime deploys." },
  { name: "Disaster Recovery", icon: "Globe", body: "Multi-region failover with tested RPO/RTO." },
];

export const partners = [
  {
    group: "Payment Gateways",
    items: ["Razorpay", "Cashfree", "Paytm", "PayU", "CCAvenue", "BillDesk", "Juspay", "Easebuzz"],
  },
  { group: "Verification Partners", items: ["Protean", "IDfy", "SignDesk", "Suro", "AuthBridge", "Veri5"] },
  { group: "Banking Partners", items: ["HDFC Bank", "ICICI Bank", "Axis Bank", "YES Bank", "Kotak"] },
  {
    group: "Other Integrations",
    items: ["SMS / Email Providers", "KYC Data Sources", "Account Aggregators", "Insurance Partners", "Credit Bureaus"],
  },
];

export const industries = [
  {
    id: "startups",
    label: "Startups & D2C",
    icon: "Rocket",
    headline: "Ship a payment stack in a week, not a quarter",
    body: "Skip the multi-vendor integration marathon. One Rupeeco key gives you checkout, collections, refunds and verification with sandbox parity from day one.",
    points: [
      "Hosted checkout and payment links live the same day",
      "Refunds and settlement reports without a finance hire",
      "Verification for customer and vendor onboarding",
      "Usage-based pricing that starts at zero",
    ],
  },
  {
    id: "saas",
    label: "SaaS Platforms",
    icon: "Layers",
    headline: "Embed financial services inside your product",
    body: "White-label payments, subscription billing and collections under your own brand, with per-tenant ledgers and revenue share built into the platform.",
    points: [
      "Sub-merchant onboarding with automated KYB",
      "Metered and tiered subscription billing",
      "Platform fee collection and split settlements",
      "Tenant-scoped keys, webhooks and dashboards",
    ],
  },
  {
    id: "marketplaces",
    label: "Marketplaces",
    icon: "Store",
    headline: "Collect once, settle to thousands",
    body: "Escrow-backed collections with rule-based seller settlements, commission handling and GST-compliant invoicing on both sides of the transaction.",
    points: [
      "Escrow and split settlement on every order",
      "Seller onboarding with PAN, GST and bank verification",
      "Commission, TDS and TCS handled at source",
      "Seller-level reconciliation and statements",
    ],
  },
  {
    id: "lending",
    label: "Lending & NBFC",
    icon: "Banknote",
    headline: "Disburse, collect and monitor on regulated rails",
    body: "Account Aggregator data for underwriting, escrow for disbursal, eMandate for repayment and AML monitoring throughout the loan lifecycle.",
    points: [
      "AA-based bank statement and income analysis",
      "Escrow-controlled disbursal with audit trail",
      "UPI Autopay and NACH repayment mandates",
      "Continuous sanctions and PEP screening",
    ],
  },
  {
    id: "enterprise",
    label: "Enterprises & SMEs",
    icon: "Building",
    headline: "Automate receivables, reconciliation and tax operations",
    body: "Move collections onto a single API with maker-checker controls, ERP-synced reconciliation and GST-ready documentation for every rupee that moves.",
    points: [
      "Virtual accounts and collections at file scale",
      "Maker-checker approvals and role-based access",
      "Three-way reconciliation into Tally, SAP or Zoho",
      "GST e-invoice and e-way bill generation",
    ],
  },
];

export const stats = [
  { value: 100, suffix: "+", label: "APIs in the catalogue" },
  { value: 99.98, suffix: "%", label: "Platform uptime", decimals: 2 },
  { value: 40, prefix: "", suffix: "+", label: "Bank & partner integrations" },
  { value: 6, suffix: "x", label: "Faster go-live vs. multi-vendor" },
];

export const outcomes = [
  { metric: "12%", label: "Higher payment success rate with smart routing" },
  { metric: "70%", label: "Less engineering effort than integrating vendors directly" },
  { metric: "90%", label: "Of settlements auto-reconciled on day one" },
  { metric: "45%", label: "Reduction in fraud-related chargebacks" },
];
