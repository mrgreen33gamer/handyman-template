import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = BASE_URL + '/industries/property-management';

export const metadata: Metadata = {
  title: "Property Management Handyman Services | RightFix Handyman Waco TX",
  description: "Make-ready repairs, unit turns, and portfolio maintenance for Central Texas property managers — one accountable handyman partner.",
  alternates: { canonical: url },
  openGraph: {
    title: "Property Management Handyman Services | RightFix Handyman",
    description: "Make-ready repairs, unit turns, and portfolio maintenance for Central Texas property managers — one accountable handyman partner.",
    url,
    siteName: "RightFix Handyman",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
