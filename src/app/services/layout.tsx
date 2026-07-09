import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';

export const metadata: Metadata = {
  title: "Handyman Services Waco TX | Repairs, Drywall & Honey-Do Lists",
  description: "General home repairs, drywall patching, door & window fixes, TV mounting, caulking, and honey-do lists in Waco and Central Texas. Background-checked pros, free estimates.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Handyman Services | RightFix Handyman",
    description: "Full handyman services for Central Texas homes and businesses.",
    url: `${BASE_URL}/services`,
    siteName: "RightFix Handyman",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
