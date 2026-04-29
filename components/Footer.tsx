import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-umbra px-5 py-12 md:px-12">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-[22px] italic text-creta">peri</p>
          <p className="mt-1 text-[12px] text-pizarra">Perimenopause, finally legible.</p>
        </div>
        <div className="flex flex-wrap gap-6 text-[12px] text-pizarra">
          <a
            href="https://apps.apple.com/es/app/peri-perimenopause-tracker/id6762806616"
            className="transition-colors hover:text-creta"
          >
            App Store
          </a>
          <Link href="/faq" className="transition-colors hover:text-creta">
            FAQ
          </Link>
          <Link href="/facts" className="transition-colors hover:text-creta">
            Facts
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-creta">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-creta">
            Terms
          </Link>
        </div>
        <p className="text-[11px] text-[rgba(158,163,168,0.5)]">© 2026 peri. All rights reserved.</p>
      </div>
    </footer>
  );
}
