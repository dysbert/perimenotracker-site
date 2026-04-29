// src/app/perimenopause-sleep-tracker/page.tsx

import { SeoLandingPage } from "@/components/SeoLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perimenopause Sleep Tracker — PerimenoTracker",
  description:
    "Track sleep disruption during perimenopause. Log night sweats, sleep quality, and morning energy. See how sleep connects to your other symptoms.",
  keywords: [
    "perimenopause sleep tracker",
    "menopause sleep app",
    "night sweat tracker",
    "perimenopause insomnia app",
    "track sleep perimenopause iphone",
  ],
  alternates: {
    canonical: "https://perimenotracker.app/perimenopause-sleep-tracker",
  },
};

export default function PerimenopauseSleepTrackerPage() {
  return (
    <SeoLandingPage
      eyebrow="Perimenopause Sleep Tracker"
      title="Perimenopause Sleep Tracker — Understand Why You Can't Sleep"
      subtitle="Log sleep quality, night sweats, and morning energy. See how your sleep connects to hot flashes, mood, and your cycle. Bring the pattern to your doctor."
      quickAnswer="PerimenoTracker logs nightly sleep quality alongside night sweats, morning energy, and other perimenopause symptoms. When combined with Apple Health sleep data (if you use an Apple Watch), you get both subjective and objective sleep tracking in one place — and a PDF export your doctor can use."
      audienceBullets={[
        "Women in perimenopause experiencing sleep disruption or insomnia",
        "Anyone waking from night sweats and wanting to understand the pattern",
        "Women whose fatigue or mood is affecting daily life",
        "Anyone preparing to discuss sleep problems with a doctor or sleep specialist",
      ]}
      featureBullets={[
        "Nightly sleep quality rating (1–5) with optional notes",
        "Night sweat logging — separate from daytime hot flashes",
        "Morning energy score — tracks how sleep quality translates to daytime functioning",
        "Apple Health integration — pulls in sleep stages automatically if you use Apple Watch",
        "Correlation view: see how sleep quality connects to next-day mood and energy",
        "Cycle-phase overlay: identify whether sleep is worse at specific points in your cycle",
      ]}
      howToSteps={[
        "Download PerimenoTracker — no account required",
        "Each morning, rate your sleep quality and note any night sweats (30 seconds)",
        "Apple Health automatically contributes sleep stage data if you wear Apple Watch",
        "After 3–4 weeks, open Trends to see your sleep patterns",
        "Export a PDF report before any doctor or sleep specialist appointment",
      ]}
      faqs={[
        {
          q: "Why does perimenopause cause sleep problems?",
          a: "Perimenopause disrupts sleep through multiple mechanisms: night sweats cause physical waking, declining estrogen and progesterone affect sleep architecture, increased anxiety makes it harder to fall asleep, and sleep apnea risk increases at midlife. These causes often compound each other.",
        },
        {
          q: "Can an app help with perimenopause sleep problems?",
          a: "A tracking app helps identify which factors are most affecting your sleep — night sweats, anxiety, cycle phase — and provides objective data for a doctor to work with. It does not treat sleep problems, but the data it generates helps target treatment more effectively.",
        },
        {
          q: "Should I track sleep separately from other perimenopause symptoms?",
          a: "No — tracking sleep alongside other symptoms is more valuable than tracking it in isolation. PerimenoTracker shows how your sleep quality correlates with night sweat frequency, mood the following day, and cycle phase, which is more useful information than sleep data alone.",
        },
        {
          q: "Does PerimenoTracker work with Apple Health sleep data?",
          a: "Yes. If you wear an Apple Watch, PerimenoTracker reads sleep stage data from Apple Health and displays it alongside your manually logged sleep quality score. This combines subjective (how you felt) with objective (measured sleep stages) data in one view.",
        },
      ]}
      relatedLinks={[
        { href: "/perimenopause-symptom-tracker", label: "Full Symptom Tracker" },
        { href: "/hot-flash-tracker", label: "Hot Flash Tracker" },
        { href: "/apple-health-perimenopause", label: "Apple Health Integration" },
        { href: "/blog/perimenopause-sleep-problems", label: "Why Perimenopause Disrupts Sleep" },
      ]}
      legalNote="PerimenoTracker is a personal health logging tool and is not a medical device. It does not diagnose, treat, or provide medical advice. Consult a qualified healthcare professional for medical guidance."
    />
  );
}
