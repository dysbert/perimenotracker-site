import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 h-[52px] border-b border-[rgba(44,40,37,0.08)] bg-[rgba(245,240,232,0.92)] backdrop-blur-[12px]">
      <nav className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-5 md:px-12">
        <Link href="/" aria-label="peri home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/privacy"
            className="text-[12px] font-medium uppercase tracking-[0.04em] text-pizarra transition-colors hover:text-siena"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-[12px] font-medium uppercase tracking-[0.04em] text-pizarra transition-colors hover:text-siena"
          >
            Terms
          </Link>
        </div>

        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center rounded-[100px] bg-siena px-[18px] text-[13px] font-medium text-creta"
        >
          Download on App Store ↗
        </a>
      </nav>
    </header>
  );
}
