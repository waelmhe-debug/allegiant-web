import Image from "next/image";
import { SITE } from "@/lib/site";

// The real Allegiant logo lives at /public/logo.png (extracted from the
// current Wix site at scaffold time). If you later produce an SVG version,
// drop it at /public/logo.svg and update this component's `src`.
//
// Set NEXT_PUBLIC_NO_LOGO=1 to force the wordmark fallback (useful during
// staging if the logo asset needs replacing).

export function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const forceWordmark = process.env.NEXT_PUBLIC_NO_LOGO === "1";
  // Logo aspect ratio: 430 × 400 ≈ 1.075:1 (essentially square-ish)
  const heights = { sm: 36, md: 48, lg: 72 } as const;
  const widths = { sm: 39, md: 52, lg: 77 } as const;

  if (!forceWordmark) {
    return (
      <Image
        src="/logo.png"
        alt={`${SITE.name} logo`}
        width={widths[size]}
        height={heights[size]}
        priority
        className={className}
      />
    );
  }

  const scale = size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl";
  return (
    <span
      className={`font-serif ${scale} font-semibold tracking-tight ${className}`}
      style={{ color: "var(--color-teal-700)" }}
      aria-label={`${SITE.name} logo`}
    >
      Allegiant<span style={{ color: "var(--color-amber-400)" }}>.</span>
      <span className="sr-only"> Home Care</span>
    </span>
  );
}
