export const site = {
  name: "Rupeeco",
  legalName: "Rupeeco Technologies Pvt. Ltd.",
  tagline: "Smart Payments. Stronger India.",
  promise: "One API. Every Verification Suite & Financial Service.",
  url: "https://www.rupeeco.in",
  description:
    "Rupeeco is a unified financial infrastructure API platform for India — payments, verification, payouts, collections, banking, commerce, analytics and risk through a single integration.",
  emails: {
    connect: "connect@rupeeco.in",
    support: "support@rupeeco.in",
    director: "director@rupeeco.in",
  },
  phone: "+91 80 4718 0000",
  address: {
    line1: "Rupeeco Technologies Pvt. Ltd.",
    line2: "WeWork Galaxy, Residency Road",
    city: "Bengaluru, Karnataka 560025",
    country: "India",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/rupeeco",
    x: "https://x.com/rupeeco",
    youtube: "https://www.youtube.com/@rupeeco",
    github: "https://github.com/rupeeco",
  },
} as const;

export type NavChild = {
  label: string;
  href: string;
  desc: string;
  tone?: "leaf" | "navy" | "ember";
  badge?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  columns?: { title: string; items: NavChild[] }[];
};

export const nav: NavItem[] = [
  {
    label: "Products",
    columns: [
      {
        title: "Verification & Risk",
        items: [
          {
            label: "Verification Suite",
            href: "/products/verification",
            desc: "PAN, Aadhaar, GST, CIN, bank and UPI checks",
            tone: "leaf",
          },
          {
            label: "Fraud & Risk Engine",
            href: "/products/fraud-risk",
            desc: "Risk scoring, velocity rules, AML monitoring",
            tone: "ember",
          },
          {
            label: "Analytics & Insights",
            href: "/products/analytics",
            desc: "Dashboards, AI reports, reconciliation",
            tone: "navy",
          },
          {
            label: "Commerce APIs",
            href: "/products/commerce",
            desc: "Invoicing, billing, GST and ERP sync",
            tone: "leaf",
          },
        ],
      },
      {
        title: "Payments & Collections",
        items: [
          {
            label: "Payments",
            href: "/products/payments",
            desc: "Gateway orchestration, smart routing, failover",
            tone: "navy",
          },
          {
            label: "Collection Suite",
            href: "/products/collections",
            desc: "QR, payment links, virtual accounts, UPI collect",
            tone: "navy",
          },
          {
            label: "API Marketplace",
            href: "/products/api-marketplace",
            desc: "100+ APIs, self-onboarding, usage billing",
            tone: "leaf",
            badge: "New",
          },
          {
            label: "All products",
            href: "/products",
            desc: "See the full Rupeeco API Hub",
            tone: "navy",
          },
        ],
      },
      {
        title: "Banking & Platform",
        items: [
          {
            label: "Payout Hub",
            href: "/products/payouts",
            desc: "Vendor, salary, refund and bulk transfers",
            tone: "ember",
          },
          {
            label: "Banking APIs",
            href: "/products/banking",
            desc: "Account aggregator, escrow, eMandate",
            tone: "ember",
          },
          {
            label: "Platform architecture",
            href: "/platform",
            desc: "The engine behind every Rupeeco API",
            tone: "navy",
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "By industry",
        items: [
          { label: "Startups & D2C", href: "/solutions#startups", desc: "Go live in days, not quarters", tone: "leaf" },
          { label: "SaaS platforms", href: "/solutions#saas", desc: "Embed payments inside your product", tone: "navy" },
          {
            label: "Marketplaces",
            href: "/solutions#marketplaces",
            desc: "Split settlements and seller payouts",
            tone: "ember",
          },
          { label: "Lending & NBFC", href: "/solutions#lending", desc: "eMandate, escrow, collections", tone: "navy" },
        ],
      },
      {
        title: "By outcome",
        items: [
          {
            label: "Higher success rates",
            href: "/solutions#success",
            desc: "Smart routing across gateways",
            tone: "leaf",
          },
          { label: "Faster reconciliation", href: "/solutions#recon", desc: "Auto-matched settlements", tone: "navy" },
          { label: "Lower fraud losses", href: "/solutions#risk", desc: "Real-time scoring and rules", tone: "ember" },
          { label: "Enterprise & SME ops", href: "/solutions#payables", desc: "Vendor and payroll payouts", tone: "navy" },
        ],
      },
    ],
  },
  { label: "Developers", href: "/developers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/about" },
];

export const footerNav = [
  {
    title: "Products",
    links: [
      { label: "Verification Suite", href: "/products/verification" },
      { label: "Payments", href: "/products/payments" },
      { label: "Collection Suite", href: "/products/collections" },
      { label: "Commerce APIs", href: "/products/commerce" },
      { label: "Analytics & Insights", href: "/products/analytics" },
      { label: "Fraud & Risk Engine", href: "/products/fraud-risk" },
      { label: "API Marketplace", href: "/products/api-marketplace" },
      { label: "Payout Hub", href: "/products/payouts" },
      { label: "Banking APIs", href: "/products/banking" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Platform architecture", href: "/platform" },
      { label: "Solutions", href: "/solutions" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/developers" },
      { label: "API reference", href: "/developers#reference" },
      { label: "SDKs", href: "/developers#sdks" },
      { label: "Sandbox", href: "/developers#sandbox" },
      { label: "Webhooks", href: "/developers#webhooks" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Grievance Redressal", href: "/grievance-redressal" },
      { label: "Refund & Cancellation", href: "/terms#refunds" },
    ],
  },
] as const;
