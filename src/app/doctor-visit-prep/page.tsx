// src/app/doctor-visit-prep/page.tsx

import { SeoLandingPage } from "@/components/SeoLandingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perimenopause Doctor Visit Prep — Symptom Report PDF — Peri Tracker",
  description:
    "Export a structured perimenopause symptom report for your gynecologist. Cycle history, hot flash frequency, severity trends — ready to hand over at your appointment.",
  keywords: [
    "perimenopause doctor visit prep",
    "perimenopause symptom report for doctor",
    "menopause doctor report app",
    "perimenopause pdf report gynecologist",
    "what to bring to gynecologist perimenopause",
  ],
  alternates: {
    canonical: "https://peritracker.app/doctor-visit-prep",
  },
};

export default function DoctorVisitPrepPage() {
  return (
    <SeoLandingPage
      eyebrow="Doctor Visit Prep"
      title="Perimenopause Doctor Visit Prep — Export Your Symptom Report as PDF"
      subtitle="Turn 30–90 days of tracked symptoms into a one-page PDF your gynecologist can read in 60 seconds. No preparation required — the report generates automatically."
      quickAnswer="Peri Tracker exports a structured PDF report covering your last 1–3 months of symptom data: cycle history, hot flash frequency and severity, sleep quality trends, mood patterns, and top symptoms ranked by impact. It is formatted for clinical use — your doctor can review it at the start of the appointment without any verbal setup."
      audienceBullets={[
        "Women preparing for a perimenopause or menopause-related doctor appointment",
        "Anyone who has struggled to explain their symptoms clearly at appointments",
        "Women whose doctors have asked them to track symptoms before the next visit",
        "Anyone who wants to make the most of limited appointment time",
      ]}
      featureBullets={[
        "One-tap PDF export — no formatting, no manual tables",
        "Covers cycle history (last 3–6 periods): dates, duration, flow intensity",
        "Hot flash summary: weekly frequency, severity breakdown, time-of-day pattern",
        "Sleep quality trend: average score, night sweat frequency, correlation with daytime symptoms",
        "Top 5 symptoms ranked by frequency and severity over the reporting period",
        "Formatted for clinical readability — a doctor can scan it in under 60 seconds",
      ]}
      howToSteps={[
        "Download Peri Tracker and log symptoms daily for at least 2–3 weeks before your appointment",
        "A few days before the appointment, tap 'Export Report' in the app",
        "Choose your reporting period (30, 60, or 90 days)",
        "The PDF generates automatically — save it to Files or share directly",
        "At your appointment, hand your doctor the printed or on-screen PDF at the start",
      ]}
      faqs={[
        {
          q: "What should I bring to a gynecologist appointment about perimenopause?",
          a: "Bring a written record of your last 2–3 months of symptoms: menstrual cycle dates and flow, hot flash frequency and severity, sleep quality, and mood changes. A structured PDF report generated from a tracking app is ideal. Also bring a list of current medications and supplements, and 2–3 prepared questions.",
        },
        {
          q: "How do I explain perimenopause symptoms to my doctor?",
          a: "Be specific about frequency and severity rather than general descriptions. A data-backed report — 'I average 5 hot flashes per day, 2–3 of which are severe' — allows your doctor to make faster and more accurate assessments than a verbal summary from memory.",
        },
        {
          q: "Why does a doctor need a symptom report for perimenopause?",
          a: "Perimenopause is diagnosed based on symptoms and history, not a single test. The quality of symptom data your doctor receives directly affects the accuracy of their assessment and the appropriateness of treatment recommendations. Structured data over months is significantly more useful than a verbal summary of recent weeks.",
        },
        {
          q: "Does Peri Tracker's doctor report work for any doctor, or only gynecologists?",
          a: "The report is useful for any healthcare provider managing perimenopause symptoms — gynecologists, GPs, internists, or menopause specialists. It is formatted as a general clinical summary, not specific to any specialty.",
        },
      ]}
      relatedLinks={[
        { href: "/perimenopause-symptom-tracker", label: "Full Symptom Tracker" },
        { href: "/hot-flash-tracker", label: "Hot Flash Tracker" },
        { href: "/blog/doctor-report-perimenopause", label: "How to Prepare a Symptom Report for Your Gynecologist" },
        { href: "/blog/how-to-track-perimenopause-symptoms", label: "How to Track Perimenopause Symptoms" },
      ]}
      legalNote="Peri Tracker is a personal health logging tool and is not a medical device. The symptom report it generates is a personal health summary, not a medical record or clinical document. Consult a qualified healthcare professional for medical guidance."
    />
  );
}
