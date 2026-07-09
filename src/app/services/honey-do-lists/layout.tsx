import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = BASE_URL + '/services/honey-do-lists';

export const metadata: Metadata = {
  title: "Honey-Do Lists Waco TX | RightFix Handyman",
  description: "Batch your small projects into one efficient visit — flat-rate packaging, background-checked pros, no job too small.",
  keywords: ["Honey-Do Lists Waco TX", "handyman Waco", "honey-do Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Honey-Do Lists Waco TX | RightFix Handyman",
    description: "Batch your small projects into one efficient visit — flat-rate packaging, background-checked pros, no job too small.",
    url,
    siteName: "RightFix Handyman",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honey-Do Lists Waco TX | RightFix Handyman",
    description: "Batch your small projects into one efficient visit — flat-rate packaging, background-checked pros, no job too small.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Honey-Do Lists",
  description: "Batch your small projects into one efficient visit — flat-rate packaging, background-checked pros, no job too small.",
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
  serviceType: "Honey-Do Lists",
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
