import type { Metadata } from "next";
import Script from "next/script";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getperi.app"),
  title: "peri — Perimenopause Symptom Tracker for iOS",
  description:
    "Track hot flashes, fatigue, sleep issues and more. See patterns, share a structured PDF with your doctor. Free 14-day trial · $6.99/mo.",
  keywords: [
    "perimenopause tracker",
    "menopause symptom app",
    "hot flash tracker",
    "perimenopause app iOS",
    "menopause journal"
  ],
  openGraph: {
    title: "peri — Perimenopause Symptom Tracker",
    description:
      "Track symptoms. See patterns. Share data your doctor can actually use.",
    url: "https://getperi.app",
    siteName: "peri",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "peri — Perimenopause Symptom Tracker",
    description: "Track symptoms. See patterns. Share data your doctor can use.",
    images: ["/og-image.png"]
  },
  icons: {
    apple: "/apple-touch-icon.png"
  },
  alternates: { canonical: "https://getperi.app" },
  robots: { index: true, follow: true }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "peri",
  operatingSystem: "iOS",
  applicationCategory: "HealthApplication",
  offers: [
    {
      "@type": "Offer",
      price: "6.99",
      priceCurrency: "USD",
      billingIncrement: "P1M"
    },
    {
      "@type": "Offer",
      price: "49.99",
      priceCurrency: "USD",
      billingIncrement: "P1Y"
    }
  ],
  description:
    "Perimenopause symptom tracker. Log symptoms, see patterns, export a structured PDF for your doctor."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-creta font-body text-umbra">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
