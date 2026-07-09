import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';

export const metadata: Metadata = {
  title: "About RightFix Handyman | Waco TX Since 2015",
  description: "RightFix Handyman is a Waco-owned handyman company founded in 2015 by Sam Ortiz. Background-checked pros, bonded & insured, 9,000+ jobs.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About RightFix Handyman | Waco TX",
    description: "Locally owned since 2015. Background-checked handyman pros serving Central Texas.",
    url: `${BASE_URL}/about`,
    siteName: "RightFix Handyman",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
