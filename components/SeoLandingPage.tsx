type QAItem = { q: string; a: string };
type LinkItem = { href: string; label: string; description?: string };

type SeoLandingPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  quickAnswer: string;
  audienceBullets?: string[];
  featureBullets?: string[];
  howToSteps?: string[];
  faqs?: QAItem[];
  relatedLinks?: LinkItem[];
  legalNote?: string;
};

export function SeoLandingPage({
  eyebrow,
  title,
  subtitle,
  quickAnswer,
  audienceBullets = [],
  featureBullets = [],
  howToSteps = [],
  faqs = [],
  relatedLinks = [],
  legalNote
}: SeoLandingPageProps) {
  return (
    <main className="bg-creta px-5 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[900px]">
        <p className="text-[11px] uppercase tracking-[0.14em] text-siena">{eyebrow}</p>
        <h1 className="mt-3 font-display text-[clamp(34px,4vw,50px)] text-umbra">{title}</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-pizarra">{subtitle}</p>

        <section className="mt-10 rounded-[14px] bg-[rgba(44,40,37,0.04)] p-6">
          <h2 className="text-[18px] font-semibold text-umbra">Quick answer</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-pizarra">{quickAnswer}</p>
        </section>

        {audienceBullets.length > 0 && (
          <section className="mt-10">
            <h2 className="text-[20px] font-semibold text-umbra">Who this is for</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] text-pizarra">
              {audienceBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {featureBullets.length > 0 && (
          <section className="mt-10">
            <h2 className="text-[20px] font-semibold text-umbra">What you can do</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] text-pizarra">
              {featureBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {howToSteps.length > 0 && (
          <section className="mt-10">
            <h2 className="text-[20px] font-semibold text-umbra">How it works</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-[14px] text-pizarra">
              {howToSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>
        )}

        {faqs.length > 0 && (
          <section className="mt-10">
            <h2 className="text-[20px] font-semibold text-umbra">FAQs</h2>
            <div className="mt-4 space-y-3">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-[14px] bg-[rgba(44,40,37,0.04)] p-5">
                  <h3 className="text-[15px] font-semibold text-umbra">{item.q}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-pizarra">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {relatedLinks.length > 0 && (
          <section className="mt-10">
            <h2 className="text-[20px] font-semibold text-umbra">Related</h2>
            <div className="mt-4 grid gap-3">
              {relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-[14px] border border-[rgba(44,40,37,0.12)] bg-white px-4 py-3 transition-colors hover:border-siena"
                >
                  <p className="text-[14px] font-medium text-umbra">{link.label}</p>
                  {link.description && <p className="mt-1 text-[12px] text-pizarra">{link.description}</p>}
                </a>
              ))}
            </div>
          </section>
        )}

        {legalNote && (
          <footer className="mt-12 border-t border-[rgba(44,40,37,0.12)] pt-6">
            <p className="text-[12px] leading-relaxed text-pizarra">{legalNote}</p>
          </footer>
        )}
      </div>
    </main>
  );
}
