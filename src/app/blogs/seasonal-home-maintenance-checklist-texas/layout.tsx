import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = BASE_URL + '/blogs/seasonal-home-maintenance-checklist-texas';

export const metadata: Metadata = {
  title: "Seasonal Home Maintenance Checklist for Texas Homes | RightFix Handyman",
  description: "Texas heat, storms, and humidity punish homes year-round. Use this practical seasonal checklist to catch small issues before they become expensive repairs.",
  alternates: { canonical: url },
  openGraph: {
    title: "Seasonal Home Maintenance Checklist for Texas Homes",
    description: "Texas heat, storms, and humidity punish homes year-round. Use this practical seasonal checklist to catch small issues before they become expensive repairs.",
    url,
    siteName: "RightFix Handyman",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
