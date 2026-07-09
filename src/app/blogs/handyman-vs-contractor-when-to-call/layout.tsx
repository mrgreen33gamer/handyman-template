import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = BASE_URL + '/blogs/handyman-vs-contractor-when-to-call';

export const metadata: Metadata = {
  title: "Handyman vs Contractor: When to Call Which in Central Texas | RightFix Handyman",
  description: "Not every project needs a general contractor. Learn when a skilled handyman is the smarter, faster, and more affordable call — and when you should hire a specialty trade.",
  alternates: { canonical: url },
  openGraph: {
    title: "Handyman vs Contractor: When to Call Which in Central Texas",
    description: "Not every project needs a general contractor. Learn when a skilled handyman is the smarter, faster, and more affordable call — and when you should hire a specialty trade.",
    url,
    siteName: "RightFix Handyman",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
