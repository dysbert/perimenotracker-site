"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CalendarDemo from "../components/CalendarDemo";
import InsightsDemo from "../components/InsightsDemo";
import { AnimatePresence, motion } from "../components/MotionWrapper";

const stats = [
  { value: "30s", label: "avg. time to log" },
  { value: "5+", label: "symptoms tracked" },
  { value: "PDF", label: "doctor-ready export" }
];

const steps = [
  {
    step: "01",
    title: "Log in under 30 seconds",
    body: "Tap a symptom from your Quick Log. Set the intensity on a 1–5 scale. Add a note if you want. Done - no forms, no friction.",
    image: "/peri-main-screen.png",
    alt: "peri app quick log home screen"
  },
  {
    step: "02",
    title: "Spot your patterns on the calendar",
    body: "Color-coded dots show which days had symptoms and how intense. See clusters, gaps, and cycles at a glance.",
    image: "/peri-calendar.png",
    alt: "peri app calendar view"
  },
  {
    step: "03",
    title: "Understand trends in Insights",
    body: "Weekly and monthly breakdowns reveal your most frequent and most intense symptoms - and how they compare to the previous period.",
    image: "/peri-insights.png",
    alt: "peri app insights dashboard"
  },
  {
    step: "04",
    title: "Share a report your doctor can read",
    body: "Generate a clean PDF with a date-range filter. Dates, symptoms, intensities - formatted for a clinical conversation, not a screenshot.",
    image: "/peri-pdf.png",
    alt: "peri doctor report PDF export"
  }
];

const features = [
  {
    title: "Log in seconds",
    body: "Tap a symptom, set intensity, done. Daily logging takes under 30 seconds.",
    icon: <ClockIcon />
  },
  {
    title: "See your patterns",
    body: "Weekly and monthly views show what is changing - hot flashes, sleep, mood - without noise.",
    icon: <TrendIcon />
  },
  {
    title: "Doctor-ready export",
    body: "Generate a structured PDF report your doctor can read in a clinical context - not a screenshot.",
    icon: <DocIcon />
  },
  {
    title: "All symptom types covered",
    body: "Vasomotor, mood, sleep, cognitive, physical, and reproductive. 20+ symptoms across 5 categories.",
    icon: <GridIcon />
  },
  {
    title: "No account, no cloud",
    body: "Your data stays on your device. No sign-up required. No third-party servers.",
    icon: <ShieldIcon />
  },
  {
    title: "14-day free trial",
    body: "Try everything free for two weeks. Then $2.99/month or $24.99/year - less than a coffee a month.",
    icon: <StarIcon />
  }
];

const testimonials = [
  {
    quote: "This is the kind of structured symptom data I wish my patients brought to their appointments.",
    author: "Endocrinologist",
    location: "Madrid",
    tag: "Medical professional"
  },
  {
    quote: "I finally understand what has been happening to my body. The calendar view made me realize my hot flashes cluster around the same days every month.",
    author: "Ana G.",
    location: "Barcelona",
    tag: "User, 47"
  },
  {
    quote: "Simple enough to actually use every day. I have tried other apps but always abandoned them. peri just gets out of the way.",
    author: "Marta R.",
    location: "Mexico City",
    tag: "User, 51"
  }
];

const faqs = [
  {
    q: "What is perimenopause?",
    a: "Perimenopause is the hormonal transition before menopause, during which estrogen and progesterone levels gradually decline. It typically begins in the mid-to-late 40s, lasts an average of 4 years, and causes symptoms including hot flashes, irregular periods, sleep disruption, mood changes, and brain fog."
  },
  {
    q: "What are the symptoms of perimenopause?",
    a: "The most common symptoms are irregular periods, hot flashes, night sweats, sleep disturbances, mood changes, brain fog, vaginal dryness, and low energy. About 80% of women experience hot flashes during the transition. Symptoms vary widely in type, frequency, and severity."
  },
  {
    q: "How is perimenopause different from menopause?",
    a: "Perimenopause is the transition phase — the years of hormonal fluctuation and changing symptoms. Menopause is a single moment: the day that marks 12 consecutive months without a period. Most symptoms occur during perimenopause, not after."
  },
  {
    q: "Should I track my perimenopause symptoms?",
    a: "Yes. Perimenopause is diagnosed based on symptoms and history, not a single test. Consistent tracking gives your doctor the data needed to make accurate assessments and better treatment decisions — far more useful than a verbal summary from memory."
  },
  {
    q: "Can Peri Tracker help at a doctor appointment?",
    a: "Yes. Peri Tracker exports a structured PDF report covering your last 1–3 months of symptom data — cycle history, hot flash frequency, severity trends — formatted for your gynecologist to review in under 60 seconds."
  },
  {
    q: "Is Peri Tracker free?",
    a: "Peri Tracker offers a free 14-day trial with full access to all features. After the trial, a subscription is required: $2.99/month or $24.99/year. No account required."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-umbra px-5 pb-20 pt-[80px] lg:flex-row lg:items-end md:px-12">
        <div className="pointer-events-none absolute right-6 top-10 select-none font-display text-[160px] italic leading-none text-[rgba(245,240,232,0.04)] md:right-12 md:text-[280px]">
          peri
        </div>

        <div className="relative z-10 max-w-[600px] lg:flex-1">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[11px] uppercase tracking-[0.14em] text-siena"
          >
            Perimenopause symptom tracker
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 font-display text-[clamp(52px,7vw,88px)] italic leading-[1.05] text-creta"
          >
            Perimenopause,
            <br />
            finally legible.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-[480px] text-[16px] font-light leading-relaxed text-[rgba(245,240,232,0.6)]"
          >
            Track your symptoms. See your patterns. Share data your doctor can actually use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://apps.apple.com/es/app/peri-perimenopause-tracker/id6762806616"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-[100px] bg-siena px-6 text-[15px] font-medium text-creta"
            >
              Download on App Store
            </a>
            <span className="text-[12px] text-[rgba(245,240,232,0.4)]">14-day free trial</span>
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:flex lg:flex-1 lg:items-end lg:justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <div className="relative h-[560px] w-[270px] overflow-hidden rounded-[44px] border-[8px] border-[rgba(245,240,232,0.12)] shadow-2xl">
            <Image src="/peri-main-screen.png" alt="peri app home screen" fill className="object-cover" />
          </div>
        </motion.div>
      </section>

      <section className="bg-siena px-5 py-8 md:px-12">
        <div className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="font-display text-[36px] italic text-creta">{s.value}</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.75)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-creta px-5 py-20 md:px-12 md:py-[100px]">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-siena">How it works</p>
          <h2 className="mt-3 font-display text-[clamp(32px,4vw,48px)] text-umbra">
            From symptom to insight
            <br />
            in four steps.
          </h2>

          <div className="mt-20 flex flex-col gap-24">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`flex flex-col gap-12 md:flex-row md:items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <motion.div
                  className="flex flex-1 justify-center"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative h-[480px] w-[230px] overflow-hidden rounded-[38px] border-[7px] border-[rgba(44,40,37,0.1)] shadow-xl">
                    <Image src={s.image} alt={s.alt} fill className="object-cover" />
                  </div>
                </motion.div>

                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-pizarra">{s.step}</p>
                  <h3 className="mt-3 font-display text-[30px] text-umbra">{s.title}</h3>
                  <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-pizarra">{s.body}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[rgba(44,40,37,0.03)] px-5 py-20 md:px-12 md:py-[100px]">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] uppercase tracking-[0.14em] text-siena">Live preview</p>
            <h2 className="mt-3 font-display text-[clamp(28px,3.5vw,42px)] text-umbra">
              Your symptoms, finally visible.
            </h2>
            <p className="mt-4 max-w-[500px] text-[15px] leading-relaxed text-pizarra">
              This is what your data looks like inside peri. Color-coded by symptom type, patterns emerge
              without you having to look for them.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-[20px] bg-white p-8 shadow-sm"
            >
              <div className="mb-6">
                <p className="text-[13px] font-semibold text-umbra">Calendar</p>
                <p className="mt-1 text-[13px] text-pizarra">See which days had symptoms and how intense</p>
              </div>
              <CalendarDemo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-[20px] bg-white p-8 shadow-sm"
            >
              <div className="mb-6">
                <p className="text-[13px] font-semibold text-umbra">Insights</p>
                <p className="mt-1 text-[13px] text-pizarra">Your most frequent symptoms, ranked</p>
              </div>
              <InsightsDemo />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-creta px-5 pb-20 md:px-12 md:pb-[100px]">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-siena">Features</p>
          <h2 className="mt-3 font-display text-[36px] text-umbra">Data without drama.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[14px] bg-[rgba(44,40,37,0.04)] p-7"
              >
                {feature.icon}
                <h3 className="mt-4 text-[17px] font-semibold text-umbra">{feature.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-pizarra">{feature.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[rgba(44,40,37,0.03)] px-5 py-20 md:px-12 md:py-[100px]">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-siena">Testimonials</p>
          <h2 className="mt-3 font-display text-[clamp(28px,3.5vw,40px)] text-umbra">
            Trusted by women and clinicians.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col rounded-[16px] bg-white p-8 shadow-sm"
              >
                <div className="mb-6 h-[2px] w-8 bg-siena" />
                <blockquote className="flex-1 font-display text-[19px] italic leading-[1.55] text-umbra">
                  "{t.quote}"
                </blockquote>
                <div className="mt-6 border-t border-[rgba(44,40,37,0.08)] pt-4">
                  <p className="text-[13px] font-medium text-umbra">
                    {t.author}, {t.location}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-pizarra">{t.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-umbra px-5 py-20 md:px-12 md:py-[100px]">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-[11px] uppercase tracking-[0.14em] text-siena">Pricing</p>
          <h2 className="mt-3 font-display text-[clamp(32px,4vw,48px)] italic text-creta">
            Simple, honest pricing.
          </h2>
          <p className="mt-4 text-[15px] font-light text-[rgba(245,240,232,0.55)]">
            14-day free trial. No credit card required to start.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-[20px] border border-[rgba(245,240,232,0.1)] p-8 text-left">
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-pizarra">Monthly</p>
              <p className="mt-4 font-display text-[48px] italic text-creta">$2.99</p>
              <p className="text-[13px] text-pizarra">per month</p>
              <ul className="mt-6 space-y-3 text-[14px] text-[rgba(245,240,232,0.7)]">
                <li>✓ Unlimited symptom logging</li>
                <li>✓ Calendar & Insights views</li>
                <li>✓ Doctor PDF export</li>
                <li>✓ All 20+ symptoms</li>
              </ul>
              <a
                href="https://apps.apple.com/es/app/peri-perimenopause-tracker/id6762806616"
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex h-12 items-center justify-center rounded-[100px] border border-[rgba(245,240,232,0.25)] text-[15px] font-medium text-creta transition-colors hover:bg-[rgba(245,240,232,0.06)]"
              >
                Start free trial
              </a>
            </div>

            <div className="relative rounded-[20px] bg-siena p-8 text-left">
              <span className="absolute right-6 top-6 rounded-full bg-[rgba(245,240,232,0.2)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-creta">
                Best value
              </span>
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-[rgba(245,240,232,0.75)]">
                Annual
              </p>
              <p className="mt-4 font-display text-[48px] italic text-creta">$24.99</p>
              <p className="text-[13px] text-[rgba(245,240,232,0.75)]">per year · ~$2.08/month</p>
              <p className="mt-1 text-[12px] font-medium text-[rgba(245,240,232,0.9)]">Save 40% vs monthly</p>
              <ul className="mt-6 space-y-3 text-[14px] text-[rgba(245,240,232,0.85)]">
                <li>✓ Everything in Monthly</li>
                <li>✓ Priority support</li>
                <li>✓ Early access to new features</li>
                <li>✓ Best price, locked in</li>
              </ul>
              <a
                href="https://apps.apple.com/es/app/peri-perimenopause-tracker/id6762806616"
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex h-12 items-center justify-center rounded-[100px] bg-creta text-[15px] font-medium text-umbra transition-colors hover:bg-[rgba(245,240,232,0.9)]"
              >
                Start free trial
              </a>
            </div>
          </div>

          <p className="mt-8 text-[12px] text-pizarra">Subscriptions managed via Apple. Cancel anytime.</p>
        </div>
      </section>

      <section className="bg-creta px-5 py-20 md:px-12 md:py-[100px]">
        <div className="mx-auto max-w-[720px]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-siena">FAQ</p>
          <h2 className="mt-3 font-display text-[clamp(28px,3.5vw,40px)] text-umbra">Common questions.</h2>
          <div className="mt-10">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="bg-creta px-5 pb-20 md:px-12 md:pb-[100px]">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-lg font-semibold text-umbra mb-6">Tools & Resources</h2>
          <div className="grid gap-3">
            {[
              {
                href: "/perimenopause-symptom-tracker",
                label: "Perimenopause Symptom Tracker",
                description: "Full overview of what Peri Tracker tracks and how it works"
              },
              {
                href: "/hot-flash-tracker",
                label: "Hot Flash Tracker",
                description: "Log frequency, severity, and time of day - identify your triggers"
              },
              {
                href: "/perimenopause-sleep-tracker",
                label: "Perimenopause Sleep Tracker",
                description: "Track night sweats, sleep quality, and morning energy"
              },
              {
                href: "/doctor-visit-prep",
                label: "Doctor Visit Prep",
                description: "Export a PDF symptom report for your gynecologist"
              },
              {
                href: "/apple-health-perimenopause",
                label: "Apple Health Integration",
                description: "Automatic sleep and heart rate data from Apple Watch"
              },
              {
                href: "/balance-app-alternative",
                label: "Balance App Alternative",
                description: "How Peri Tracker compares to Balance for symptom tracking"
              }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-2xl border border-[rgba(44,40,37,0.12)] bg-white px-5 py-4 transition-colors hover:border-siena"
              >
                <div>
                  <p className="text-sm font-medium text-umbra group-hover:underline">{link.label}</p>
                  <p className="mt-0.5 text-xs text-pizarra">{link.description}</p>
                </div>
                <span className="ml-4 shrink-0 text-pizarra">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-umbra px-5 py-20 text-center md:px-12 md:py-[120px]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-siena opacity-[0.07] blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="font-display text-[clamp(36px,5vw,60px)] italic leading-[1.1] text-creta">
            Know your body.
            <br />
            Talk to your doctor.
          </h2>
          <p className="mt-5 text-[15px] font-light text-[rgba(245,240,232,0.55)]">
            14-day free trial · $2.99/month or $24.99/year · iOS only
          </p>
          <a
            href="https://apps.apple.com/es/app/peri-perimenopause-tracker/id6762806616"
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex h-12 items-center rounded-[100px] bg-siena px-8 text-[15px] font-medium text-creta transition-colors hover:bg-[#b5623e]"
          >
            Download on App Store
          </a>
          <p className="mt-4 text-[11px] text-pizarra">Requires iOS 16+ · Subscriptions via Apple</p>
        </motion.div>
      </section>
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[rgba(44,40,37,0.1)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-[16px] font-medium text-umbra"
      >
        {q}
        <span className={`ml-4 text-siena transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14px] leading-relaxed text-pizarra">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function iconBase(children: React.ReactNode) {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-siena" fill="none" strokeWidth="1.5">
      {children}
    </svg>
  );
}

function ClockIcon() {
  return iconBase(
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </>
  );
}

function TrendIcon() {
  return iconBase(
    <>
      <path d="M4 17l5-5 4 3 7-8" />
      <path d="M4 20h16" />
    </>
  );
}

function DocIcon() {
  return iconBase(
    <>
      <path d="M7 3h7l3 3v15H7z" />
      <path d="M14 3v4h4" />
      <path d="M10 13h7" />
      <path d="M10 17h5" />
    </>
  );
}

function GridIcon() {
  return iconBase(
    <>
      <rect x="4" y="4" width="6" height="6" />
      <rect x="14" y="4" width="6" height="6" />
      <rect x="4" y="14" width="6" height="6" />
      <rect x="14" y="14" width="6" height="6" />
    </>
  );
}

function ShieldIcon() {
  return iconBase(
    <>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  );
}

function StarIcon() {
  return iconBase(
    <>
      <path d="M12 4l2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 16l-4.6 2.4.9-5.2-3.8-3.7 5.2-.8z" />
    </>
  );
}
