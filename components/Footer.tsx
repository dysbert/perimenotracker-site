import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-umbra px-5 py-12 md:px-12 md:py-[60px]">
      <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-2">
        <div>
          <Logo dark />
        </div>
        <div className="space-y-1 text-[12px] text-[rgba(245,240,232,0.35)]">
          <p>© 2026 peri</p>
          <p>Developed by double lab</p>
          <p>
            <Link href="/privacy" className="hover:text-creta">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link href="/terms" className="hover:text-creta">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
