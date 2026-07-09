import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = BASE_URL + '/services/drywall-patching';

export const metadata: Metadata = {
  title: "Drywall Patching Waco TX | RightFix Handyman",
  description: "Holes, cracks, water damage, and texture match so walls look whole again — paint-ready finish, flat-rate pricing, 1-Year Workmanship Warranty.",
  keywords: ["Drywall Patching Waco TX", "handyman Waco", "drywall Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Drywall Patching Waco TX | RightFix Handyman",
    description: "Holes, cracks, water damage, and texture match so walls look whole again — paint-ready finish, flat-rate pricing, 1-Year Workmanship Warranty.",
    url,
    siteName: "RightFix Handyman",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Patching Waco TX | RightFix Handyman",
    description: "Holes, cracks, water damage, and texture match so walls look whole again — paint-ready finish, flat-rate pricing, 1-Year Workmanship Warranty.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drywall Patching",
  description: "Holes, cracks, water damage, and texture match so walls look whole again — paint-ready finish, flat-rate pricing, 1-Year Workmanship Warranty.",
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
  serviceType: "Drywall Patching",
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
