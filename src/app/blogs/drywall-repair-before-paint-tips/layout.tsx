import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = BASE_URL + '/blogs/drywall-repair-before-paint-tips';

export const metadata: Metadata = {
  title: "Drywall Repair Tips Before You Paint | RightFix Handyman",
  description: "Patches that show through paint are almost always a prep problem. Here is how to patch, texture-match, and sand so your next paint job looks seamless.",
  alternates: { canonical: url },
  openGraph: {
    title: "Drywall Repair Tips Before You Paint",
    description: "Patches that show through paint are almost always a prep problem. Here is how to patch, texture-match, and sand so your next paint job looks seamless.",
    url,
    siteName: "RightFix Handyman",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
