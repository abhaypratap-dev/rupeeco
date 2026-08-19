import { site } from "./site";

/**
 * Frontend-only email delivery.
 *
 * Forms POST directly to Web3Forms (https://web3forms.com) from the browser,
 * so no backend or serverless function is required — the site stays a pure
 * static/Vercel deployment.
 *
 * Create one Web3Forms access key per destination inbox and add them to
 * Vercel → Project → Settings → Environment Variables:
 *
 *   NEXT_PUBLIC_WEB3FORMS_KEY_CONNECT   → connect@rupeeco.in
 *   NEXT_PUBLIC_WEB3FORMS_KEY_SUPPORT   → support@rupeeco.in
 *   NEXT_PUBLIC_WEB3FORMS_KEY_DIRECTOR  → director@rupeeco.in
 *
 * Only the CONNECT key is required; the others fall back to it.
 * Until any key is set, the form degrades gracefully to a prefilled mailto.
 */
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type Route = "connect" | "support" | "director";

const keys: Record<Route, string | undefined> = {
  connect: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_CONNECT,
  support: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_SUPPORT,
  director: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_DIRECTOR,
};

export function accessKey(route: Route): string | undefined {
  return keys[route] || keys.connect;
}

export function mailboxFor(route: Route): string {
  return site.emails[route];
}

export const inquiryTypes: { value: string; label: string; route: Route; hint: string }[] = [
  {
    value: "sales",
    label: "Sales & pricing",
    route: "connect",
    hint: "Rate cards, volumes, commercial terms",
  },
  {
    value: "integration",
    label: "Technical / sandbox access",
    route: "connect",
    hint: "API keys, integration design, docs",
  },
  {
    value: "partnership",
    label: "Partnership",
    route: "connect",
    hint: "Banks, gateways, resellers, referrals",
  },
  {
    value: "support",
    label: "Existing customer support",
    route: "support",
    hint: "Live issues and production escalations",
  },
  {
    value: "escalation",
    label: "Escalation / grievance",
    route: "director",
    hint: "Office of the Director",
  },
  {
    value: "other",
    label: "Something else",
    route: "connect",
    hint: "Press, careers, general enquiries",
  },
];

export const suiteOptions = [
  "Verification Suite",
  "Payments",
  "Collection Suite",
  "Commerce APIs",
  "Analytics & Insights",
  "Fraud & Risk Engine",
  "API Marketplace",
  "Payout Hub",
  "Banking APIs",
];

export const volumeOptions = [
  "Not live yet / evaluating",
  "Under ₹50 lakh a month",
  "₹50 lakh – ₹5 crore a month",
  "₹5 crore – ₹50 crore a month",
  "Over ₹50 crore a month",
];
