// src/app/faq/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perimenopause FAQ — PerimenoTracker",
  description:
    "Answers to the most common questions about perimenopause symptoms, tracking, and PerimenoTracker — written for clarity, backed by NAMS, NIH, and Mayo Clinic.",
  alternates: {
    canonical: "https://perimenotracker.app/faq",
  },
};

const faqs = [
  // --- What is perimenopause ---
  {
    category: "Understanding Perimenopause",
    items: [
      {
        q: "What is perimenopause?",
        a: "Perimenopause is the hormonal transition phase before menopause, during which the ovaries gradually reduce estrogen and progesterone production. It typically begins in the mid-to-late 40s, lasts an average of 4 years, and ends when a woman has gone 12 consecutive months without a menstrual period. Most symptoms commonly associated with 'menopause' — hot flashes, sleep disruption, mood changes — occur during perimenopause.",
      },
      {
        q: "What is the difference between perimenopause and menopause?",
        a: "Perimenopause is the transition phase; menopause is a single moment in time — the day that marks 12 consecutive months without a menstrual period. You cannot confirm menopause until it has already happened. Everything before that point is perimenopause; everything after is postmenopause.",
      },
      {
        q: "At what age does perimenopause start?",
        a: "Most women enter perimenopause in their mid-to-late 40s. The average age of menopause in the United States is 51 (NAMS), which means perimenopause often begins around age 45–47. However, it can begin in the late 30s or early 40s. If menopause occurs before age 40, it is called premature ovarian insufficiency.",
      },
      {
        q: "How long does perimenopause last?",
        a: "On average, 4 years — though the range is wide (1 to 10+ years). The final stage before menopause tends to involve the most frequent and intense hot flashes. After the 12-month menopause threshold, you are postmenopausal.",
      },
      {
        q: "Is perimenopause the same as 'the menopause'?",
        a: "In everyday conversation, 'the menopause' often refers to the entire transition including perimenopause. Clinically, menopause is a single point in time. The symptoms most people associate with 'the menopause' — hot flashes, brain fog, sleep disruption — occur during perimenopause, not after.",
      },
      {
        q: "Can perimenopause start in your 30s?",
        a: "Yes. Early perimenopause in the late 30s is uncommon but documented. If you are under 40 and experiencing irregular cycles, hot flashes, or other perimenopausal symptoms, it is worth discussing with a doctor. Premature ovarian insufficiency (before age 40) has specific health implications including bone density and cardiovascular risk.",
      },
    ],
  },

  // --- Symptoms ---
  {
    category: "Symptoms",
    items: [
      {
        q: "What are the most common symptoms of perimenopause?",
        a: "The most common symptoms are: irregular periods, hot flashes, night sweats, sleep disturbances, mood changes (irritability, anxiety, low mood), brain fog and difficulty concentrating, vaginal dryness, and decreased libido. About 80% of women experience vasomotor symptoms (hot flashes and night sweats) during the transition (NAMS).",
      },
      {
        q: "Is brain fog a symptom of perimenopause?",
        a: "Yes. Brain fog — difficulty concentrating, word-finding trouble, memory lapses — is a documented perimenopause symptom. The SWAN study (Study of Women's Health Across the Nation) found measurable declines in verbal memory and processing speed during the perimenopausal transition. For most women, cognitive function returns to pre-perimenopause baseline in postmenopause.",
      },
      {
        q: "Why can't I sleep during perimenopause?",
        a: "Sleep disruption during perimenopause has multiple causes: night sweats cause physical waking, declining estrogen and progesterone affect sleep architecture, increased anxiety makes falling asleep harder, and sleep apnea risk increases after midlife. These factors often compound each other. Studies estimate 40–60% of perimenopausal women experience clinically significant sleep disturbances.",
      },
      {
        q: "How long do hot flashes last during perimenopause?",
        a: "An individual hot flash typically lasts 1–5 minutes. As a symptom, hot flashes commonly persist for 4–10 years — beginning in perimenopause and continuing into early postmenopause for many women. Research from the SWAN study found a median duration of 7.4 years for moderate-to-severe vasomotor symptoms.",
      },
      {
        q: "Can perimenopause cause anxiety and mood changes?",
        a: "Yes. Hormonal fluctuations during perimenopause directly affect neurotransmitter systems involved in mood regulation. Many women experience increased irritability, anxiety, or low mood — particularly in the late luteal phase of their cycle. Women with a history of mood disorders or PMS may experience more pronounced symptoms. These effects are physiological, not purely psychological.",
      },
      {
        q: "Does perimenopause affect memory?",
        a: "Yes. Memory lapses and slower processing speed are documented symptoms of perimenopause. The SWAN study found statistically significant cognitive changes during the transition that typically resolved in postmenopause. Sleep disruption — extremely common during perimenopause — compounds cognitive symptoms independently.",
      },
    ],
  },

  // --- Tracking ---
  {
    category: "Symptom Tracking",
    items: [
      {
        q: "Should I track my perimenopause symptoms?",
        a: "Yes. Perimenopause is diagnosed based on symptoms and history, not a single test. Consistent tracking produces data that significantly improves medical appointments — your doctor can make faster, more accurate assessments with 2–3 months of logged data than with a verbal summary from memory. Tracking also helps you identify personal patterns and triggers.",
      },
      {
        q: "What symptoms should I track during perimenopause?",
        a: "The most clinically useful data points are: menstrual cycle dates and flow, hot flash frequency and severity, sleep quality, mood and energy levels, and brain fog episodes. Adding context — time of day, possible triggers, cycle phase — increases the value of the data. Severity ratings (mild / moderate / severe) matter as much as frequency.",
      },
      {
        q: "How can a symptom tracker help my doctor?",
        a: "A structured symptom log gives your doctor objective data over months instead of a subjective summary of recent weeks. It helps identify patterns, rule out other causes, assess treatment effectiveness, and make medication or lifestyle adjustments with better precision. A doctor reviewing a PDF report with cycle history and severity trends can do more in a 15-minute appointment than one working from memory alone.",
      },
      {
        q: "How long should I track before seeing a doctor about perimenopause?",
        a: "Aim for 2–3 months of consistent data before a scheduled appointment. This is enough to show cycle variability and symptom patterns rather than a snapshot of a single week. That said, don't wait if symptoms are significantly affecting your quality of life — track what you can and start the conversation.",
      },
    ],
  },

  // --- PerimenoTracker ---
  {
    category: "About PerimenoTracker",
    items: [
      {
        q: "What does PerimenoTracker track?",
        a: "PerimenoTracker logs: hot flashes (with time of day and severity), night sweats, sleep quality, mood, energy, brain fog, menstrual cycle dates and flow, and custom symptoms you add. It integrates with Apple Health to automatically pull in sleep stages and resting heart rate if you use an Apple Watch.",
      },
      {
        q: "Does PerimenoTracker require an account or internet connection?",
        a: "No. PerimenoTracker is local-first — all data is stored on your iPhone. No account, no sign-up, no cloud sync. An internet connection is not required after download.",
      },
      {
        q: "Can PerimenoTracker export a report for my doctor?",
        a: "Yes. PerimenoTracker generates a structured PDF report covering your last 1–3 months of symptom data: cycle history, top symptoms by frequency and severity, and trend lines. It is formatted for clinical readability — a gynecologist can review it in under 60 seconds at the start of an appointment.",
      },
      {
        q: "Is PerimenoTracker free?",
        a: "PerimenoTracker offers a free 14-day trial with full access to all features. After the trial, a subscription is required: $2.99/month or $24.99/year.",
      },
      {
        q: "Is PerimenoTracker available on Android?",
        a: "Currently, PerimenoTracker is iOS only (iPhone, iOS 16+). Android is not supported at this time.",
      },
      {
        q: "How is PerimenoTracker different from Balance or Clue?",
        a: "PerimenoTracker is built specifically for perimenopause symptom tracking and clinical reporting. Its differentiators are: granular severity ratings for all symptoms, hot flash tracking with time of day, a PDF doctor report export, and local-first data storage. Balance focuses on educational content and community. Clue is a general period tracker with limited perimenopause-specific features.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

const landingLinks = [
  {
    href: "/perimenopause-symptom-tracker",
    label: "Perimenopause Symptom Tracker",
    description: "Full overview of what PerimenoTracker tracks and how it works",
  },
  {
    href: "/hot-flash-tracker",
    label: "Hot Flash Tracker",
    description: "Log frequency, severity, and time of day — identify your triggers",
  },
  {
    href: "/perimenopause-sleep-tracker",
    label: "Perimenopause Sleep Tracker",
    description: "Track night sweats, sleep quality, and morning energy",
  },
  {
    href: "/doctor-visit-prep",
    label: "Doctor Visit Prep",
    description: "Export a PDF symptom report for your gynecologist",
  },
  {
    href: "/apple-health-perimenopause",
    label: "Apple Health Integration",
    description: "Automatic sleep and heart rate data from Apple Watch",
  },
  {
    href: "/balance-app-alternative",
    label: "Balance App Alternative",
    description: "How PerimenoTracker compares to Balance for symptom tracking",
  },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-creta text-umbra">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-12">

          {/* Header */}
          <header className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-widest text-siena">FAQ</p>
            <h1 className="mb-4 text-3xl font-semibold text-umbra">
              Perimenopause Questions & Answers
            </h1>
            <p className="text-sm text-pizarra">
              Common questions about perimenopause symptoms, tracking, and PerimenoTracker.
              Sources: NAMS, NIH, Mayo Clinic, SWAN Study.
            </p>
          </header>

          {/* FAQ sections */}
          {faqs.map((section) => (
            <section key={section.category} className="mb-12">
              <h2 className="mb-4 border-b border-[rgba(44,40,37,0.12)] pb-2 text-lg font-semibold text-umbra">
                {section.category}
              </h2>
              <div className="grid gap-3">
                {section.items.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl border border-[rgba(44,40,37,0.12)] bg-white px-5 py-4"
                  >
                    <summary className="flex list-none cursor-pointer items-center justify-between gap-4 text-sm font-medium text-umbra">
                      {item.q}
                      <span className="shrink-0 text-pizarra transition-transform group-open:rotate-180">
                        ↓
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-umbra">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}

          {/* Landing links section */}
          <section className="mt-14" aria-labelledby="tools-heading">
            <h2
              id="tools-heading"
              className="mb-4 border-b border-[rgba(44,40,37,0.12)] pb-2 text-lg font-semibold text-umbra"
            >
              Tools & Resources
            </h2>
            <div className="grid gap-3">
              {landingLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-2xl border border-[rgba(44,40,37,0.12)] bg-white px-5 py-4 transition-colors hover:border-siena"
                >
                  <div>
                    <p className="text-sm font-medium text-umbra group-hover:underline">
                      {link.label}
                    </p>
                    <p className="mt-0.5 text-xs text-pizarra">{link.description}</p>
                  </div>
                  <span className="ml-4 shrink-0 text-pizarra">→</span>
                </a>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 border-t border-[rgba(44,40,37,0.12)] pt-8">
            <p className="text-xs text-pizarra">
              PerimenoTracker is a personal health logging tool and is not a medical device. It
              does not diagnose, treat, or provide medical advice. Consult a qualified healthcare
              professional for personalized guidance.
            </p>
          </footer>

        </div>
      </main>
    </>
  );
}
