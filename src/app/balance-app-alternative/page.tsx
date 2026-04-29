// src/app/balance-app-alternative/page.tsx

import { SeoLandingPage } from "@/components/SeoLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balance App Alternative for Perimenopause Tracking — Peri Tracker",
  description:
    "Looking for a Balance app alternative focused on symptom tracking? Peri Tracker logs daily symptoms with severity, exports a doctor report PDF, and keeps data local.",
  keywords: [
    "balance app alternative",
    "balance menopause app alternative",
    "perimenopause app instead of balance",
    "better than balance app menopause",
    "balance app vs perimenotracker",
  ],
  alternates: {
    canonical: "https://peritracker.app/balance-app-alternative",
  },
};

export default function BalanceAppAlternativePage() {
  return (
    <SeoLandingPage
      eyebrow="Balance App Alternative"
      title="A Balance App Alternative Built for Symptom Tracking and Doctor Visits"
      subtitle="Balance is great for education and community. If what you need is a detailed daily symptom log and a doctor report PDF, Peri Tracker is built for that."
      quickAnswer="Peri Tracker and Balance serve different primary purposes. Balance focuses on educational content and community. Peri Tracker focuses on structured daily symptom logging with severity ratings, cycle tracking optimized for irregular periods, and a PDF export formatted for gynecologist appointments. Data is stored locally — no cloud, no account."
      audienceBullets={[
        "Balance users who want more granular symptom tracking",
        "Women who need a structured report to bring to a doctor appointment",
        "Anyone who prefers their health data to stay on their device rather than in the cloud",
        "Women in perimenopause who find Balance's symptom tracking too basic for their needs",
      ]}
      featureBullets={[
        "Daily symptom log with severity ratings — not just presence, but how bad",
        "Hot flash tracking with time of day, frequency, and severity trends",
        "Cycle tracking optimized for irregular periods — no assumptions about regularity",
        "PDF doctor report: cycle history, top symptoms, severity trends over 1–3 months",
        "Apple Health integration — sleep stages and heart rate automatic",
        "Local-first: data stays on your iPhone, no account required",
      ]}
      howToSteps={[
        "Download Peri Tracker — no account or sign-up required",
        "Set up your symptom profile in 2 minutes",
        "Log symptoms daily — takes under 2 minutes per check-in",
        "Review your trends weekly to understand your patterns",
        "Export your doctor report PDF before any appointment",
      ]}
      faqs={[
        {
          q: "What is a good alternative to the Balance menopause app?",
          a: "Peri Tracker is a strong alternative if your main need is structured daily symptom tracking and generating data for doctor appointments. Balance is better for educational content and peer community. Many women use both.",
        },
        {
          q: "Is Peri Tracker better than Balance?",
          a: "It depends on what you need. Peri Tracker has more granular symptom tracking, severity ratings, and a PDF doctor report that Balance does not offer. Balance has more extensive educational content and a community. They serve different primary purposes.",
        },
        {
          q: "Does Peri Tracker have community features like Balance?",
          a: "No. Peri Tracker is focused on personal symptom tracking and clinical data, not community. If peer support and expert content are important to you, Balance fills that role well and can complement Peri Tracker.",
        },
        {
          q: "Is Peri Tracker available on Android like Balance?",
          a: "Currently, Peri Tracker is iOS only. Balance is available on both iOS and Android.",
        },
      ]}
      relatedLinks={[
        { href: "/perimenopause-symptom-tracker", label: "Full Symptom Tracker" },
        { href: "/doctor-visit-prep", label: "Doctor Visit Prep" },
        { href: "/blog/perimenotracker-vs-balance", label: "Peri Tracker vs Balance: Full Comparison" },
        { href: "/blog/best-perimenopause-apps", label: "Best Perimenopause Apps in 2026" },
      ]}
      legalNote="Peri Tracker is a personal health logging tool and is not a medical device. It does not diagnose, treat, or provide medical advice. Consult a qualified healthcare professional for medical guidance."
    />
  );
}
