// src/app/apple-health-perimenopause/page.tsx

import { SeoLandingPage } from "@/components/SeoLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple Health Perimenopause Tracker — Peri Tracker",
  description:
    "Peri Tracker integrates with Apple Health to combine automatic sleep and heart rate data with your daily perimenopause symptom log. Local-first, no account required.",
  keywords: [
    "apple health perimenopause tracker",
    "apple health menopause app",
    "iphone perimenopause tracking",
    "apple watch menopause symptoms",
    "perimenopause app apple health integration",
  ],
  alternates: {
    canonical: "https://peritracker.app/apple-health-perimenopause",
  },
};

export default function AppleHealthPerimenopausePage() {
  return (
    <SeoLandingPage
      eyebrow="Apple Health Integration"
      title="Apple Health Perimenopause Tracker — Automatic Data, Zero Extra Effort"
      subtitle="Peri Tracker reads sleep stages and heart rate from Apple Health automatically. You log symptoms; Apple Watch fills in the rest."
      quickAnswer="Peri Tracker integrates with Apple Health to pull in sleep stage data and resting heart rate from your Apple Watch automatically. This means your daily symptom log is enriched with objective physiological data — without any manual entry. All data stays on your device."
      audienceBullets={[
        "iPhone users in perimenopause who already use Apple Health or Apple Watch",
        "Women who want sleep stage data alongside their symptom log",
        "Anyone who values health data privacy and local-first storage",
        "Women who want the most complete picture of their perimenopause with minimal effort",
      ]}
      featureBullets={[
        "Reads sleep stages (REM, Core, Deep) from Apple Health automatically",
        "Reads resting heart rate and heart rate variability from Apple Watch",
        "Combines Apple Health data with your manually logged symptoms in one view",
        "All data remains on your device — Peri Tracker does not send data to external servers",
        "Full Apple Health permission control — you choose exactly what to share",
        "Works with iPhone only (iOS 16+); Apple Watch optional but recommended",
      ]}
      howToSteps={[
        "Download Peri Tracker on your iPhone",
        "During setup, grant Apple Health permissions — select which data types to share",
        "Wear your Apple Watch as normal — sleep and heart rate data syncs automatically",
        "Each morning, complete your 2-minute symptom check-in",
        "Peri Tracker combines both streams in your daily log and trend views",
      ]}
      faqs={[
        {
          q: "Does Peri Tracker work with Apple Health?",
          a: "Yes. Peri Tracker reads sleep stage data and resting heart rate from Apple Health, which it combines with your manually logged perimenopause symptoms. You control which data types to share via standard Apple Health permissions.",
        },
        {
          q: "Do I need an Apple Watch to use Peri Tracker?",
          a: "No. An Apple Watch is optional but recommended. Without one, you can still log all perimenopause symptoms manually. With an Apple Watch, sleep stages and heart rate are added automatically.",
        },
        {
          q: "Is my perimenopause data safe with Peri Tracker?",
          a: "Yes. Peri Tracker is local-first — all data, including what is read from Apple Health, is stored on your iPhone and never sent to external servers. There is no account, no sign-up, and no cloud sync.",
        },
        {
          q: "What Apple Health data does Peri Tracker use?",
          a: "Peri Tracker reads sleep analysis (sleep stages if available), resting heart rate, and heart rate variability. It does not read or write reproductive health data, location, or any other category beyond what you explicitly authorize.",
        },
      ]}
      relatedLinks={[
        { href: "/perimenopause-symptom-tracker", label: "Full Symptom Tracker" },
        { href: "/perimenopause-sleep-tracker", label: "Sleep Tracker" },
        { href: "/blog/apple-health-perimenopause", label: "Using Apple Health for Perimenopause" },
        { href: "/blog/perimenopause-sleep-problems", label: "Perimenopause and Sleep" },
      ]}
      legalNote="Peri Tracker is a personal health logging tool and is not a medical device. It does not diagnose, treat, or provide medical advice. Consult a qualified healthcare professional for medical guidance."
    />
  );
}
