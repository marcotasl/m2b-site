type Variant = "light" | "dark";

export default function Logo({
  variant = "light",
  className = "",
  showWordmark = true,
}: {
  variant?: Variant;
  className?: string;
  showWordmark?: boolean;
}) {
  const textColor = variant === "light" ? "text-white" : "text-navy";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <svg
        viewBox="0 0 260 100"
        className="h-9 w-auto text-orange"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinejoin="miter"
        aria-label="M2B"
      >
        <path d="M12 88 V16 H38 L60 58 L82 16 H108 V88" />
        <path d="M124 30 Q124 14 144 14 H168 Q188 14 188 34 Q188 52 168 62 L124 88 H188" />
        <path d="M204 88 V14 H244 Q262 14 262 32 Q262 48 244 50 H204 M204 50 H248 Q268 50 268 68 Q268 88 248 88 H204" />
      </svg>
      {showWordmark && (
        <div className={`hidden sm:flex flex-col justify-center leading-none ${textColor}`}>
          <span className="font-display font-medium tracking-[0.22em] text-[9px] uppercase">
            Projetos e
          </span>
          <span className="font-display font-medium tracking-[0.22em] text-[9px] uppercase mt-[2px]">
            Consultoria
          </span>
        </div>
      )}
    </div>
  );
}
