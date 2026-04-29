// src/app/perimenopause-symptom-tracker/page.tsx

import { SeoLandingPage } from "../../components/SeoLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perimenopause Symptom Tracker App — Peri Tracker",
  description:
    "Track perimenopause symptoms daily, identify patterns, and export a PDF report for your doctor. Local-first, no account required. Free 14-day trial.",
  keywords: [
    "perimenopause symptom tracker",
    "perimenopause tracking app",
    "menopause symptom log",
    "perimenopause app iphone",
    "track perimenopause symptoms",
  ],
  alternates: {
    canonical: "https://peritracker.app/perimenopause-symptom-tracker",
  },
};

export default function PerimenopauseSymptomTrackerPage() {
  return (
    <SeoLandingPage
      eyebrow="Perimenopause Symptom Tracker"
      title="Track Your Perimenopause Symptoms — and Finally Understand Them"
      subtitle="Log hot flashes, sleep, mood, brain fog, and cycle changes daily. See your patterns. Bring a structured report to your doctor."
      quickAnswer="Peri Tracker is an iPhone app that logs perimenopause symptoms with severity ratings, identifies patterns over time, and exports a PDF report formatted for gynecologist visits. Data is stored locally on your device — no account required."
      audienceBullets={[
        "Women in perimenopause or early menopause transition",
        "Anyone experiencing irregular cycles, hot flashes, sleep disruption, or mood changes",
        "Women preparing for a gynecologist or GP appointment",
        "Anyone who prefers their health data to stay on their own device",
      ]}
      featureBullets={[
        "Daily symptom log with severity ratings — hot flashes, brain fog, mood, energy, sleep, cycle",
        "Pattern analysis: weekly trends, cycle-phase correlations, severity over time",
        "Doctor report PDF — structured export covering your last 1–3 months of data",
        "Apple Health integration — sleep stages and heart rate pulled in automatically",
        "Local-first storage — your data never leaves your device",
        "Under 2 minutes per day",
      ]}
      howToSteps={[
        "Download Peri Tracker and complete the 2-minute setup (no account required)",
        "Log your symptoms each day — takes under 2 minutes",
        "Review your weekly patterns in the Trends view",
        "Before a doctor appointment, export your PDF symptom report",
        "Share the report with your gynecologist or GP at the start of the visit",
      ]}
      faqs={[
        {
          q: "What symptoms can I track with Peri Tracker?",
          a: "Hot flashes (with time of day and severity), night sweats, sleep quality, mood, energy levels, brain fog, menstrual cycle dates and flow, and custom symptoms you add yourself.",
        },
        {
          q: "Does Peri Tracker require an account?",
          a: "No. Peri Tracker is local-first — all data is stored on your iPhone. There is no account, no sign-up, and no data sent to external servers.",
        },
        {
          q: "How is Peri Tracker different from a general period tracker?",
          a: "Peri Tracker is built specifically for perimenopause. It handles irregular cycles without assuming regularity, includes the full range of perimenopausal symptoms beyond cycle data, and generates a structured PDF report designed for medical appointments — features general period trackers do not offer.",
        },
        {
          q: "How long does it take to log symptoms each day?",
          a: "Under 2 minutes. The daily check-in covers your key symptoms with simple severity ratings. Apple Health contributes sleep and heart rate data automatically if you wear an Apple Watch.",
        },
        {
          q: "Is Peri Tracker free?",
          a: "Peri Tracker offers a free 14-day trial with full access to all features. After the trial, a subscription is required to continue using the app.",
        },
      ]}
      relatedLinks={[
        { href: "/hot-flash-tracker", label: "Hot Flash Tracker" },
        { href: "/doctor-visit-prep", label: "Doctor Visit Prep" },
        { href: "/apple-health-perimenopause", label: "Apple Health Integration" },
        { href: "/perimenopause-sleep-tracker", label: "Sleep Tracker", description: "Track night sweats, sleep quality, and morning energy" },
        { href: "/balance-app-alternative", label: "Balance App Alternative", description: "Compare Peri Tracker to Balance and other apps" },
      ]}
      legalNote="Peri Tracker is a personal health logging tool and is not a medical device. It does not diagnose, treat, or provide medical advice. Consult a qualified healthcare professional for medical guidance."
    />
  );
}
