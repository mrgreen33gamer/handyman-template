// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact RightFix Handyman | Schedule Service in Waco & Central Texas',
  description:
    'Contact RightFix Handyman to schedule handyman repair, panel upgrades, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 800-9900.',
  keywords: [
    'contact RightFix Handyman',
    'handyman service Waco TX',
    'schedule handyman repair Waco',
    'handyman estimate Central Texas',
    'RightFix contact',
    '254-740-3300',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact RightFix Handyman | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, 1-Year Workmanship Warranty, background-checked pros.',
    url,
    siteName: 'RightFix Handyman',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact RightFix Handyman | Waco & Central Texas',
    description: 'Schedule handyman service or get a free estimate. Call (254) 800-9900.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
