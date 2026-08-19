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
 *   NEXT_PUBLIC_WEB3FORMS_KEY_DIRECTOR  → director@rupeeco.in
 *   NEXT_PUBLIC_WEB3FORMS_KEY_SUPPORT   → support@rupeeco.in
 *
 * Only the DIRECTOR key is required; SUPPORT falls back to it.
 * Until either key is set, the form degrades gracefully to a prefilled mailto.
 */
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type Route = "support" | "director";

const keys: Record<Route, string | undefined> = {
  support: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_SUPPORT,
  director: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_DIRECTOR,
};

export function accessKey(route: Route): string | undefined {
  return keys[route] || keys.director;
}

export function mailboxFor(route: Route): string {
  return site.emails[route];
}

export const inquiryTypes: { value: string; label: string; route: Route; hint: string }[] = [
  {
    value: "sales",
    label: "Sales & pricing",
    route: "director",
    hint: "Rate cards, volumes, commercial terms",
  },
  {
    value: "integration",
    label: "Technical / sandbox access",
    route: "support",
    hint: "API keys, integration design, docs",
  },
  {
    value: "partnership",
    label: "Partnership",
    route: "director",
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
    route: "director",
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
  "Banking APIs",
];

export const volumeOptions = [
  "Not live yet / evaluating",
  "Under ₹50 lakh a month",
  "₹50 lakh – ₹5 crore a month",
  "₹5 crore – ₹50 crore a month",
  "Over ₹50 crore a month",
];
