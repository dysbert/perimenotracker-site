type LogoProps = {
  dark?: boolean;
  accent?: boolean;
  className?: string;
};

export default function Logo({ dark = false, accent = false, className = "" }: LogoProps) {
  const textColor = accent || dark ? "#F5F0E8" : "#2C2825";
  const ruleOpacity = dark ? 0.35 : 1;

  return (
    <div className={`inline-flex min-w-[80px] items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="inline-block h-[1.5px] w-5 bg-siena"
        style={{ opacity: ruleOpacity }}
      />
      <span
        className="relative inline-block text-[32px] italic leading-none"
        style={{ color: textColor, fontFamily: '"DM Serif Display", Georgia, serif' }}
      >
        perı
        <span
          aria-hidden
          className="absolute left-[80%] top-[4px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-siena"
        />
      </span>
    </div>
  );
}
