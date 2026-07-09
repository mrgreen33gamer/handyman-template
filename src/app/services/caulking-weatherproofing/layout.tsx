import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = BASE_URL + '/services/caulking-weatherproofing';

export const metadata: Metadata = {
  title: "Caulking & Weatherproofing Waco TX | RightFix Handyman",
  description: "Tub surrounds, windows, exterior gaps, and door thresholds sealed against moisture and Texas heat — clean lines, durable sealants.",
  keywords: ["Caulking & Weatherproofing Waco TX", "handyman Waco", "caulking Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Caulking & Weatherproofing Waco TX | RightFix Handyman",
    description: "Tub surrounds, windows, exterior gaps, and door thresholds sealed against moisture and Texas heat — clean lines, durable sealants.",
    url,
    siteName: "RightFix Handyman",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caulking & Weatherproofing Waco TX | RightFix Handyman",
    description: "Tub surrounds, windows, exterior gaps, and door thresholds sealed against moisture and Texas heat — clean lines, durable sealants.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Caulking & Weatherproofing",
  description: "Tub surrounds, windows, exterior gaps, and door thresholds sealed against moisture and Texas heat — clean lines, durable sealants.",
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
  serviceType: "Caulking & Weatherproofing",
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
