import type { Metadata } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "peri — Perimenopause Symptom Tracker",
  description:
    "Track perimenopause symptoms and share structured data with your doctor. iOS app. No account required.",
  openGraph: {
    title: "peri — Perimenopause Symptom Tracker",
    description: "Track perimenopause symptoms and share structured data with your doctor.",
    url: "https://yourdomainhere.com",
    siteName: "peri",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-creta font-body text-umbra">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
