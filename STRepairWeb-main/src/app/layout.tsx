import type { Metadata } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import { LocalBusinessSchema } from "@/components/schema";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
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
    default: "IT Services & Computer Repair in San Dimas, CA | SnapTech Repair",
    template: "%s | SnapTech Repair",
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
  authors: [{ name: "SnapTech Repair" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SnapTech Repair",
    title: "SnapTech Repair | IT Services & Computer Repair",
    description:
      "Professional IT services and computer repair for small businesses in the San Gabriel Valley.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SnapTech Repair - IT Services & Computer Repair in San Dimas, CA",
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
        <GoogleAnalytics gaId="G-652C5HBENF" />
        {/* Microsoft Universal Event Tracking (UET) base tag */}
        <Script id="uet-base" strategy="afterInteractive">
          {`(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"97233137", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");`}
        </Script>
        {/* Meta (Facebook) Pixel base code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1460434995827375');fbq('track','PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1460434995827375&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
