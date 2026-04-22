import type { Metadata } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import { LocalBusinessSchema } from "@/components/schema";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://snaptechrepair.com"),
  title: {
    default: "IT Services & Computer Repair in San Dimas, CA | Snap Tech Repair",
    template: "%s | Snap Tech Repair",
  },
  description:
    "Professional IT services, computer repair, and tech support for small businesses in the San Gabriel Valley. Same-day service available. Call (626) 838-2862.",
  keywords: [
    "computer repair",
    "IT services",
    "tech support",
    "San Dimas",
    "San Gabriel Valley",
    "managed IT",
    "malware removal",
    "device repair",
  ],
  authors: [{ name: "Snap Tech Repair" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Snap Tech Repair",
    title: "Snap Tech Repair | IT Services & Computer Repair",
    description:
      "Professional IT services and computer repair for small businesses in the San Gabriel Valley.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Snap Tech Repair - IT Services & Computer Repair in San Dimas, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
