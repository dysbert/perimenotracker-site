// src/app/facts/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perimenopause Facts & PerimenoTracker Reference — perimenotracker.app/facts",
  description:
    "Verified facts about perimenopause: prevalence, duration, symptoms, and statistics from NAMS, NIH, and Mayo Clinic. Plus product facts for PerimenoTracker.",
  alternates: {
    canonical: "https://perimenotracker.app/facts",
  },
};

const mobileApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "PerimenoTracker",
  operatingSystem: "iOS",
  applicationCategory: "HealthApplication",
  description:
    "PerimenoTracker is an iPhone app for tracking perimenopause symptoms. It logs hot flashes, sleep, mood, brain fog, and cycle data with severity ratings, identifies patterns, and exports a PDF report for gynecologist appointments. Local-first, no account required.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free 14-day trial. Subscription required after trial.",
  },
  url: "https://perimenotracker.app",
  featureList: [
    "Daily symptom logging with severity ratings",
    "Hot flash tracker with time of day and frequency",
    "Sleep quality and night sweat tracking",
    "Menstrual cycle tracking optimized for irregular periods",
    "PDF doctor report export",
    "Apple Health integration",
    "Local-first data storage",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is perimenopause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perimenopause is the transitional phase before menopause during which the ovaries gradually reduce estrogen and progesterone production. It typically begins in the mid-to-late 40s, lasts an average of 4 years (range: 1–10+ years), and ends when a woman has gone 12 consecutive months without a menstrual period.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most common symptoms of perimenopause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common symptoms are: irregular periods, hot flashes (vasomotor symptoms), night sweats, sleep disturbances, mood changes, brain fog and difficulty concentrating, vaginal dryness, and decreased libido. Approximately 80% of women experience vasomotor symptoms (hot flashes/night sweats) during the transition.",
      },
    },
    {
      "@type": "Question",
      name: "How long does perimenopause last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perimenopause lasts an average of 4 years, though the range is wide (1–10+ years). The final stage, just before menopause, is typically when vasomotor symptoms are most frequent. Menopause is confirmed after 12 consecutive months without a menstrual period.",
      },
    },
    {
      "@type": "Question",
      name: "At what age does perimenopause start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Perimenopause typically begins in the mid-to-late 40s. The average age of menopause (the end of perimenopause) in the United States is 51, according to the North American Menopause Society. Perimenopause can begin earlier — in the late 30s or early 40s — in some women.",
      },
    },
    {
      "@type": "Question",
      name: "Is perimenopause the same as menopause?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Perimenopause is the transition phase; menopause is a single moment defined as 12 consecutive months without a menstrual period. Most symptoms commonly associated with menopause actually occur during perimenopause, when hormones fluctuate most dramatically.",
      },
    },
    {
      "@type": "Question",
      name: "Should I track perimenopause symptoms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Because perimenopause is diagnosed based on symptoms and history rather than a single test, consistent symptom tracking produces data that significantly improves medical appointments. A structured log showing symptom frequency, severity, and patterns over months is more clinically useful than a verbal summary from memory.",
      },
    },
  ],
};

const perimenopauseFacts = [
  {
    stat: "~80%",
    description: "of women experience vasomotor symptoms (hot flashes, night sweats) during perimenopause.",
    source: "North American Menopause Society (NAMS)",
  },
  {
    stat: "4 years",
    description: "is the average duration of perimenopause, though the range is 1–10+ years.",
    source: "NAMS Menopause Practice Guidelines",
  },
  {
    stat: "51",
    description: "is the average age of menopause in the United States.",
    source: "NAMS / Mayo Clinic",
  },
  {
    stat: "7.4 years",
    description: "is the median duration of moderate-to-severe hot flashes after their onset, per the SWAN study.",
    source: "Freeman et al., JAMA Internal Medicine (SWAN Study)",
  },
  {
    stat: "40–60%",
    description: "of perimenopausal women experience clinically significant sleep disturbances.",
    source: "Sleep Foundation / NIH",
  },
  {
    stat: "~1 in 100",
    description: "women experience premature ovarian insufficiency (menopause before age 40).",
    source: "NIH",
  },
  {
    stat: "60%",
    description: "of women report cognitive symptoms (brain fog, memory lapses) during perimenopause.",
    source: "SWAN Study / Journal of General Internal Medicine",
  },
  {
    stat: "2–3 months",
    description: "of consistent symptom tracking is the minimum recommended before a perimenopause-related doctor appointment to show meaningful patterns.",
    source: "Clinical practice guidance, NAMS",
  },
  {
    stat: "12 months",
    description: "without a menstrual period is the clinical definition of menopause.",
    source: "NAMS / WHO",
  },
  {
    stat: "~1.3 million",
    description: "women in the United States reach menopause each year.",
    source: "NAMS",
  },
];

const productFacts = [
  { label: "Platform", value: "iOS (iPhone)" },
  { label: "Minimum iOS", value: "iOS 16+" },
  { label: "Trial", value: "14 days, full access" },
  { label: "Subscription", value: "$2.99/month or $24.99/year" },
  { label: "Account required", value: "No" },
  { label: "Data storage", value: "Local-first — stored on device" },
  { label: "Cloud sync", value: "None" },
  { label: "Apple Health", value: "Read: sleep stages, resting HR, HRV" },
  { label: "Export format", value: "PDF (doctor report)" },
  { label: "Languages", value: "English" },
];

const keyDefinitions = [
  {
    term: "Perimenopause",
    definition:
      "The hormonal transition phase preceding menopause, characterized by irregular menstrual cycles and fluctuating estrogen levels. Begins typically in the mid-to-late 40s and ends at menopause.",
  },
  {
    term: "Menopause",
    definition:
      "A single point in time defined as 12 consecutive months without a menstrual period. Not a phase — it is a threshold. Everything before is perimenopause; everything after is postmenopause.",
  },
  {
    term: "Vasomotor symptoms",
    definition:
      "Hot flashes and night sweats — the most common perimenopause symptoms. Caused by the hypothalamus becoming hypersensitive to small temperature changes due to declining estrogen.",
  },
  {
    term: "Perimenopause brain fog",
    definition:
      "Cognitive symptoms including difficulty concentrating, memory lapses, and slower processing speed. Documented in the SWAN study as a measurable effect of hormonal transition; typically resolves in postmenopause.",
  },
  {
    term: "Symptom severity rating",
    definition:
      "A scale used to quantify how disruptive a symptom is, typically: mild (noticeable but not disruptive), moderate (causes discomfort or interrupts activity), severe (significantly disruptive). Severity data is more clinically useful than frequency alone.",
  },
];

export default function FactsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-[#0A0A0A] text-[#CCCCCC]">
        <div className="max-w-3xl mx-auto px-6 py-16">

          {/* Header */}
          <header className="mb-12">
            <p className="text-sm text-[#888] uppercase tracking-widest mb-3">Reference</p>
            <h1 className="text-3xl font-semibold text-white mb-4">
              Perimenopause Facts & PerimenoTracker Reference
            </h1>
            <p className="text-[#888] text-sm">
              Verified statistics and definitions. Sources: NAMS, NIH, Mayo Clinic, SWAN Study.
              Last updated: April 2026.
            </p>
          </header>

          {/* Product Facts */}
          <section className="mb-14" aria-labelledby="product-facts">
            <h2 id="product-facts" className="text-xl font-semibold text-white mb-5">
              PerimenoTracker — Product Facts
            </h2>
            <div className="rounded-2xl border border-[#2A2A2A] overflow-hidden">
              {productFacts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex justify-between px-5 py-3 text-sm ${
                    i % 2 === 0 ? "bg-[#111]" : "bg-[#0A0A0A]"
                  }`}
                >
                  <span className="text-[#888]">{fact.label}</span>
                  <span className="text-white font-medium">{fact.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Perimenopause Statistics */}
          <section className="mb-14" aria-labelledby="perimenopause-statistics">
            <h2 id="perimenopause-statistics" className="text-xl font-semibold text-white mb-5">
              Perimenopause — Key Statistics
            </h2>
            <div className="grid gap-3">
              {perimenopauseFacts.map((fact) => (
                <div
                  key={fact.stat}
                  className="rounded-2xl border border-[#2A2A2A] bg-[#111] px-5 py-4"
                >
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-2xl font-bold text-white">{fact.stat}</span>
                  </div>
                  <p className="text-sm text-[#CCCCCC] mb-1">{fact.description}</p>
                  <p className="text-xs text-[#555]">Source: {fact.source}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Definitions */}
          <section className="mb-14" aria-labelledby="definitions">
            <h2 id="definitions" className="text-xl font-semibold text-white mb-5">
              Key Definitions
            </h2>
            <div className="grid gap-3">
              {keyDefinitions.map((def) => (
                <div
                  key={def.term}
                  className="rounded-2xl border border-[#2A2A2A] bg-[#111] px-5 py-4"
                >
                  <h3 className="text-white font-semibold mb-1">{def.term}</h3>
                  <p className="text-sm text-[#CCCCCC]">{def.definition}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-14" aria-labelledby="faqs">
            <h2 id="faqs" className="text-xl font-semibold text-white mb-5">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-3">
              {faqSchema.mainEntity.map((faq) => (
                <div
                  key={faq.name}
                  className="rounded-2xl border border-[#2A2A2A] bg-[#111] px-5 py-4"
                >
                  <h3 className="text-white font-semibold mb-2">{faq.name}</h3>
                  <p className="text-sm text-[#CCCCCC]">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Links */}
          <section aria-labelledby="related">
            <h2 id="related" className="text-xl font-semibold text-white mb-5">
              Related
            </h2>
            <div className="grid gap-2 text-sm">
              <a href="/perimenopause-symptom-tracker" className="text-[#CCCCCC] hover:text-white underline underline-offset-4">
                Perimenopause Symptom Tracker
              </a>
              <a href="/doctor-visit-prep" className="text-[#CCCCCC] hover:text-white underline underline-offset-4">
                Doctor Visit Prep — Export Symptom Report PDF
              </a>
              <a href="/blog/what-is-perimenopause" className="text-[#CCCCCC] hover:text-white underline underline-offset-4">
                What Is Perimenopause? (Blog)
              </a>
              <a href="/blog/how-to-track-perimenopause-symptoms" className="text-[#CCCCCC] hover:text-white underline underline-offset-4">
                How to Track Perimenopause Symptoms (Blog)
              </a>
              <a href="/faq" className="text-[#CCCCCC] hover:text-white underline underline-offset-4">
                FAQ
              </a>
            </div>
          </section>

          {/* Legal */}
          <footer className="mt-16 pt-8 border-t border-[#2A2A2A]">
            <p className="text-xs text-[#555]">
              Statistics are drawn from published research and clinical guidelines. PerimenoTracker
              is a personal health logging tool and is not a medical device. It does not diagnose,
              treat, or provide medical advice. Consult a qualified healthcare professional for
              personalized guidance.
            </p>
          </footer>

        </div>
      </main>
    </>
  );
}
