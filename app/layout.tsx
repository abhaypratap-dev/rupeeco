import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.promise}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "payment gateway orchestration",
    "payment collection API India",
    "PAN verification API",
    "Aadhaar verification API",
    "UPI collect API",
    "eMandate NACH API",
    "account aggregator API",
    "fintech infrastructure India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.promise}`,
    description: site.description,
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.promise}`,
    description: site.description,
    images: ["/brand/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#061F55",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="pt-20">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.legalName,
              alternateName: site.name,
              url: site.url,
              slogan: site.tagline,
              description: site.description,
              email: site.emails.director,
              telephone: site.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${site.address.street}, ${site.address.locality}`,
                addressLocality: site.address.city,
                addressRegion: site.address.region,
                postalCode: site.address.postalCode,
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: site.emails.director,
                  telephone: site.phone,
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
                { "@type": "ContactPoint", contactType: "customer support", email: site.emails.support },
              ],
              sameAs: [site.social.linkedin, site.social.x, site.social.youtube, site.social.github],
            }),
          }}
        />
      </body>
    </html>
  );
}
