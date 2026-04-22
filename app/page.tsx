const features = [
  {
    title: "Log in seconds",
    body: "Tap a symptom, set intensity, done. Daily logging takes under 30 seconds.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-siena" fill="none" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </svg>
    )
  },
  {
    title: "See your patterns",
    body: "Weekly and monthly views show what's changing — hot flashes, sleep, mood — without noise.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-siena" fill="none" strokeWidth="1.5">
        <path d="M4 17l5-5 4 3 7-8" />
        <path d="M4 20h16" />
      </svg>
    )
  },
  {
    title: "Doctor-ready export",
    body: "Generate a structured PDF report your doctor can read in a clinical context — not a screenshot.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-siena" fill="none" strokeWidth="1.5">
        <path d="M7 3h7l3 3v15H7z" />
        <path d="M14 3v4h4" />
        <path d="M10 13h7" />
        <path d="M10 17h5" />
      </svg>
    )
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden border-b border-[rgba(245,240,232,0.12)] bg-umbra px-5 pb-20 pt-[80px] md:px-12">
        <div className="pointer-events-none absolute right-6 top-10 select-none font-display text-[160px] italic leading-none text-[rgba(245,240,232,0.04)] md:right-12 md:text-[280px]">
          peri
        </div>

        <div className="relative z-10 max-w-[760px]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-siena">
            Perimenopause symptom tracker
          </p>
          <h1 className="mt-4 font-display text-[clamp(52px,7vw,88px)] italic leading-[1.05] text-creta">
            Perimenopause,
            <br />
            finally legible.
          </h1>
          <p className="mt-6 max-w-[480px] text-[16px] font-light leading-relaxed text-[rgba(245,240,232,0.6)]">
            Track your symptoms. See your patterns. Share data your doctor can actually use.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-[100px] bg-siena px-6 text-[15px] font-medium text-creta"
            >
              Download on App Store
            </a>
            <a
              href="#features"
              className="inline-flex h-12 items-center rounded-[100px] border border-[rgba(245,240,232,0.2)] px-6 text-[15px] font-medium text-creta"
            >
              Learn more ↓
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="bg-creta px-5 py-20 md:px-12 md:py-[100px]">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="font-display text-[36px] text-umbra">Data without drama.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-[14px] bg-[rgba(44,40,37,0.04)] p-7">
                {feature.icon}
                <h3 className="mt-4 text-[17px] font-semibold text-umbra">{feature.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-pizarra">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creta px-5 py-20 text-center md:px-12">
        <div className="mx-auto flex max-w-[640px] flex-col items-center">
          <div className="h-[1.5px] w-10 bg-siena" />
          <blockquote className="mt-8 font-display text-[24px] italic leading-[1.5] text-umbra">
            This is the kind of structured symptom data I wish my patients brought to their
            appointments.
          </blockquote>
          <p className="mt-5 text-[12px] font-medium uppercase tracking-[0.08em] text-pizarra">
            — Endocrinologist, Madrid
          </p>
        </div>
      </section>

      <section className="bg-umbra px-5 py-20 text-center md:px-12 md:py-[100px]">
        <h2 className="font-display text-[clamp(36px,5vw,56px)] italic leading-[1.1] text-creta">
          Know your body.
          <br />
          Talk to your doctor.
        </h2>
        <p className="mt-5 text-[15px] font-light text-[rgba(245,240,232,0.55)]">
          Free to download. No account required.
        </p>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex h-12 items-center rounded-[100px] bg-siena px-6 text-[15px] font-medium text-creta"
        >
          Download on App Store
        </a>
        <p className="mt-4 text-[11px] text-pizarra">iOS only · Requires iOS 16+</p>
      </section>
    </>
  );
}
