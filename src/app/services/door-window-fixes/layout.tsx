import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = BASE_URL + '/services/door-window-fixes';

export const metadata: Metadata = {
  title: "Door & Window Fixes Waco TX | RightFix Handyman",
  description: "Sticky doors, loose hinges, weatherstripping, latches, and hardware — smoother operation and fewer drafts across Central Texas homes.",
  keywords: ["Door & Window Fixes Waco TX", "handyman Waco", "doors & windows Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Door & Window Fixes Waco TX | RightFix Handyman",
    description: "Sticky doors, loose hinges, weatherstripping, latches, and hardware — smoother operation and fewer drafts across Central Texas homes.",
    url,
    siteName: "RightFix Handyman",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Door & Window Fixes Waco TX | RightFix Handyman",
    description: "Sticky doors, loose hinges, weatherstripping, latches, and hardware — smoother operation and fewer drafts across Central Texas homes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Door & Window Fixes",
  description: "Sticky doors, loose hinges, weatherstripping, latches, and hardware — smoother operation and fewer drafts across Central Texas homes.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "RightFix Handyman",
    url: BASE_URL,
    telephone: "+12548009900",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1625 N 25th St",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76707",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Door & Window Fixes",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
