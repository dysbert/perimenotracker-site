// src/app/hot-flash-tracker/page.tsx

import { SeoLandingPage } from "../../components/SeoLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hot Flash Tracker App for iPhone — PerimenoTracker",
  description:
    "Log hot flashes with time of day, frequency, and severity. Identify your personal triggers and patterns. Export a report for your doctor. Free 14-day trial.",
  keywords: [
    "hot flash tracker",
    "hot flash tracker app",
    "hot flash log iphone",
    "track hot flashes",
    "perimenopause hot flash app",
    "night sweat tracker",
  ],
  alternates: {
    canonical: "https://perimenotracker.app/hot-flash-tracker",
  },
};

export default function HotFlashTrackerPage() {
  return (
    <SeoLandingPage
      eyebrow="Hot Flash Tracker"
      title="Hot Flash Tracker App — Log, Understand, and Report Your Episodes"
      subtitle="Track hot flash frequency, severity, and time of day. Spot triggers. Bring 3 months of data to your doctor instead of a guess."
      quickAnswer="PerimenoTracker logs each hot flash with time of day, severity (mild / moderate / severe), and context. After a few weeks, patterns emerge — which times of day are worst, whether triggers like caffeine or stress are involved, and how frequency changes over your cycle. This data can be exported as a PDF report for your gynecologist."
      audienceBullets={[
        "Women experiencing hot flashes or night sweats during perimenopause",
        "Anyone trying to identify what triggers their hot flashes",
        "Women preparing to discuss vasomotor symptoms with a doctor",
        "Anyone whose hot flashes are disrupting work, sleep, or daily life",
      ]}
      featureBullets={[
        "Log each hot flash with time of day and severity in under 10 seconds",
        "Separate tracking for night sweats (hot flashes during sleep)",
        "Weekly frequency chart — see if episodes are increasing, stable, or improving",
        "Severity trend over time — not just how often, but how bad",
        "Trigger correlation: cross-reference with caffeine, alcohol, stress, activity",
        "PDF export showing hot flash data for your doctor appointment",
      ]}
      howToSteps={[
        "Download PerimenoTracker — no account required",
        "Each time you have a hot flash, log it with severity (takes 10 seconds)",
        "At the end of each day, your log is complete — Apple Watch can prompt you automatically",
        "After 2–3 weeks, open Trends to see your frequency and severity patterns",
        "Before a doctor visit, export your hot flash report as a PDF",
      ]}
      faqs={[
        {
          q: "What is the best app to track hot flashes?",
          a: "PerimenoTracker is designed specifically for perimenopause symptom tracking, including hot flashes. It logs frequency, severity, and time of day; identifies patterns over weeks; and exports a structured PDF report for doctor visits — features not available in general period trackers.",
        },
        {
          q: "How do I track hot flashes on my iPhone?",
          a: "PerimenoTracker lets you log a hot flash in under 10 seconds with a severity rating. It automatically tracks frequency over time and shows weekly and monthly trends. No account is required and data stays on your device.",
        },
        {
          q: "Can tracking hot flashes help my doctor?",
          a: "Yes. A doctor managing perimenopause symptoms needs to know how often hot flashes occur, how severe they are, and whether they are improving or worsening over time. Bringing 8–12 weeks of logged data — rather than a verbal summary — allows for more accurate assessment and better treatment decisions.",
        },
        {
          q: "Does PerimenoTracker track night sweats separately from hot flashes?",
          a: "Yes. Night sweats are logged separately from daytime hot flashes so you and your doctor can see how much sleep disruption is occurring and whether it is the primary concern to address.",
        },
      ]}
      relatedLinks={[
        { href: "/perimenopause-symptom-tracker", label: "Full Symptom Tracker" },
        { href: "/perimenopause-sleep-tracker", label: "Sleep Tracker" },
        { href: "/doctor-visit-prep", label: "Doctor Visit Prep" },
        { href: "/balance-app-alternative", label: "Balance App Alternative", description: "Compare PerimenoTracker to other perimenopause apps" },
      ]}
      legalNote="PerimenoTracker is a personal health logging tool and is not a medical device. It does not diagnose, treat, or provide medical advice. Consult a qualified healthcare professional for medical guidance."
    />
  );
}
