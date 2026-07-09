import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Handyman Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | RightFix',
  description:
    'RightFix Handyman serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, 2-Year Workmanship Warranty.',
  keywords: [
    'handyman service areas Central Texas',
    'electrician Waco TX',
    'electrician Hewitt TX',
    'electrician Killeen TX',
    'electrician Temple TX',
    'RightFix Handyman service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Handyman Service Areas | RightFix Handyman — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate handyman repairs, drywall, mounting, and honey-do lists. Same-day service available.',
    url,
    siteName: 'RightFix Handyman',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handyman Service Areas | RightFix Handyman — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — background-checked handyman service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
