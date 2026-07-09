import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rightfixhandyman.com";

export const metadata: Metadata = {
  title: "Industries Served | RightFix Handyman Waco TX",
  description:
    "RightFix Handyman serves property management companies, senior living facilities, and small businesses across Central Texas with background-checked handyman services.",
  alternates: { canonical: `${BASE_URL}/industries` },
  openGraph: {
    title: "Industries Served | RightFix Handyman",
    description:
      "Handyman support for property management, senior living, and small businesses across Central Texas.",
    url: `${BASE_URL}/industries`,
    siteName: "RightFix Handyman",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
