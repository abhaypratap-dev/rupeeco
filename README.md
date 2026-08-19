# Rupeeco — website

Marketing and developer site for Rupeeco: *One API. Every Financial Service.*

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS**. Frontend only — no server, no database. Deploys to Vercel as-is.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then paste your Web3Forms keys
npm run dev                  # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

---

## Contact form → your Gmail inboxes

The contact form posts **directly from the browser** to [Web3Forms](https://web3forms.com), which emails the submission to the inbox tied to each access key. No backend, no serverless function, nothing to maintain.

Enquiries are routed by the "What is this about?" selection:

| Enquiry type | Goes to |
| --- | --- |
| Sales & pricing · Technical/sandbox · Partnership · Other | `connect@rupeeco.in` |
| Existing customer support | `support@rupeeco.in` |
| Escalation / grievance | `director@rupeeco.in` |

### One-time setup (about 5 minutes)

1. Go to <https://web3forms.com> and enter `connect@rupeeco.in`.
2. Confirm the verification email that arrives in that inbox.
3. Copy the **access key** you're given.
4. Repeat steps 1–3 for `support@rupeeco.in` and `director@rupeeco.in`.
5. Add all three keys in Vercel → **Project → Settings → Environment Variables** (and in `.env.local` for local dev):

```
NEXT_PUBLIC_WEB3FORMS_KEY_CONNECT=your-connect-key
NEXT_PUBLIC_WEB3FORMS_KEY_SUPPORT=your-support-key
NEXT_PUBLIC_WEB3FORMS_KEY_DIRECTOR=your-director-key
```

6. Redeploy.

Behaviour without keys:

- Only `CONNECT` set → all enquiries go to `connect@rupeeco.in`.
- No keys set → the submit button opens a **prefilled email** in the visitor's mail client addressed to the right inbox, so the form is never a dead end.

Each email arrives with the reply-to set to the sender's address, so you can reply straight from Gmail.

> Swapping providers later (Formspree, Getform, EmailJS, Google Apps Script) only means changing `WEB3FORMS_ENDPOINT` and the payload shape in `lib/forms.ts` + `components/ContactForm.tsx`.

---

## Deploying to Vercel

1. Push this folder to a Git repository.
2. In Vercel, **Add New → Project** and import the repo. Framework is detected as Next.js; no build settings to change.
3. Add the three environment variables above.
4. Deploy, then add `rupeeco.in` and `www.rupeeco.in` under **Settings → Domains**.
5. Update `site.url` in `lib/site.ts` if the canonical domain differs — it drives metadata, `sitemap.xml` and `robots.txt`.

---

## Structure

```
app/
  layout.tsx              root layout, metadata, JSON-LD, nav + footer
  page.tsx                homepage
  products/page.tsx       API Hub overview
  products/[slug]/        9 product pages, generated from lib/products.ts
  platform/               architecture, security, reliability
  solutions/              by industry + by outcome
  developers/             quickstart, principles, endpoint index, SDKs, webhooks
  pricing/                plans, comparison matrix, FAQ
  about/                  mission, values, journey, contact desks
  contact/                contact form + routing
  privacy-policy/  terms/  grievance-redressal/
  not-found.tsx  sitemap.ts  robots.ts  icon.png  apple-icon.png

components/               Navbar, Footer, Hero, ProductGrid, IndustryTabs,
                          Stats, Counter, Testimonials, CTASection, PageHero,
                          PlatformLayers, HowItWorksFlow, ContactForm,
                          CodeBlock, LegalPage, Reveal, Logo, Icon

lib/
  site.ts                 company details, email addresses, navigation
  products.ts             all 9 suites, industries, partners, stats
  forms.ts                form routing + Web3Forms config

public/brand/             logo assets, OG image, architecture diagram
```

### Editing content

- **Copy for a product suite** → `lib/products.ts` (name, tagline, summary, features, highlights, use cases, sample request). Pages, nav entries and the endpoint index all read from here.
- **Emails, address, phone, social, nav** → `lib/site.ts`.
- **Brand colours, shadows, animations** → `tailwind.config.ts`. Palette is sampled from the logo: navy `#061F55`, green `#05A83F`, orange `#FC5012`.

---

## Design notes

Theme derives from the Rupeeco logo; motion and layout take cues from digio.in — sticky translucent nav with a mega-menu, scroll-revealed sections, animated counters, tabbed industry use cases, a partner marquee and a dark mesh-gradient footer. `prefers-reduced-motion` is respected throughout.

---

## Before launch

- [ ] Add Web3Forms keys and send a test submission to each of the three inboxes.
- [ ] Have counsel review `privacy-policy`, `terms` and `grievance-redressal` — they are drafted templates, and each page carries a visible reviewer notice you should remove once finalised.
- [ ] Replace the placeholder testimonials in `components/Testimonials.tsx` with approved quotes.
- [ ] Confirm the stats in `lib/products.ts` (uptime, latency, integration counts) and the pricing structure match reality.
- [ ] Verify the partner and bank list on `/products` reflects live integrations.
- [ ] Set the registered address and phone number in `lib/site.ts`.
- [ ] Point social links in `lib/site.ts` at real profiles, or remove them.
