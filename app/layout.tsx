import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RepoRadar — Find tomorrow's open source, today",
  description:
    "RepoRadar scans GitHub and hackathon launches every day, surfaces the most promising projects, and turns them into ready-to-share content.",
  metadataBase: new URL("https://reporadar.dev"),
  openGraph: {
    title: "RepoRadar — Find tomorrow's open source, today",
    description:
      "Automatic discovery for the projects shaping the future. Daily scans, LLM-evaluated signal, content ready for every channel.",
    type: "website",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "RepoRadar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RepoRadar",
    description:
      "Automatic discovery for the projects shaping the future.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
