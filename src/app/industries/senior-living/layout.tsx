import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.rightfixhandyman.com';
const url = BASE_URL + '/industries/senior-living';

export const metadata: Metadata = {
  title: "Senior Living Facilities Handyman Services | RightFix Handyman Waco TX",
  description: "Respectful, scheduled handyman support for senior living communities — safety-minded repairs, resident-ready finishes, and reliable response.",
  alternates: { canonical: url },
  openGraph: {
    title: "Senior Living Facilities Handyman Services | RightFix Handyman",
    description: "Respectful, scheduled handyman support for senior living communities — safety-minded repairs, resident-ready finishes, and reliable response.",
    url,
    siteName: "RightFix Handyman",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
