import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = BASE_URL + '/industries/small-business';

export const metadata: Metadata = {
  title: "Small Businesses Handyman Services | RightFix Handyman Waco TX",
  description: "Storefront and office handyman support — hanging fixtures, door fixes, patching, and punch lists that keep your business looking professional.",
  alternates: { canonical: url },
  openGraph: {
    title: "Small Businesses Handyman Services | RightFix Handyman",
    description: "Storefront and office handyman support — hanging fixtures, door fixes, patching, and punch lists that keep your business looking professional.",
    url,
    siteName: "RightFix Handyman",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
