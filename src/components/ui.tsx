import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import logoImg from "@/assets/logo.png";

/* ---------------------------------------------------------------- Reveal --- */

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** ms delay before the element animates in */
  delay?: number;
  as?: "div" | "li" | "figure" | "article" | "section" | "span";
};

/**
 * Lightweight scroll-reveal wrapper powered by IntersectionObserver.
 * Falls back to visible content when the API is unavailable.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ Logo --- */

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  if (inverted) {
    return (
      <span className={cn("inline-flex flex-col leading-none", className)}>
        <span className="flex items-baseline gap-[0.4em]">
          <span className="font-display text-[1.6rem] font-semibold tracking-[-0.02em] text-warm-white">
            JHI
          </span>
          <span className="pb-[3px] text-[0.6rem] font-bold tracking-[0.26em] text-sky">
            SERVICES LLC
          </span>
        </span>
        <span className="mt-[7px] text-[0.55rem] font-semibold tracking-[0.32em] text-warm-white/60">
          RESIDENTIAL COMFORT
        </span>
      </span>
    );
  }

  return (
    <img
      src={logoImg}
      alt="JHI Services LLC - Residential Heating & Cooling"
      width={894}
      height={495}
      className={cn(
        "h-14 w-auto object-contain sm:h-15 md:h-[4.25rem] lg:h-[4.75rem] transition-transform duration-300 hover:scale-[1.02]",
        className,
      )}
    />
  );
}

/* ----------------------------------------------------------------- Icons --- */

type IconProps = { className?: string };
const base = "h-full w-full";
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} aria-hidden="true" {...stroke}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden="true" {...stroke}>
      <path d="M5.2 3.6h3.2l1.7 4.3-2.1 1.4a12.3 12.3 0 0 0 6.7 6.7l1.4-2.1 4.3 1.7v3.2a1.9 1.9 0 0 1-1.9 1.9A16.4 16.4 0 0 1 3.3 5.5a1.9 1.9 0 0 1 1.9-1.9Z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden="true" {...stroke}>
      <path d="M12 21s6.5-5.6 6.5-10.4A6.5 6.5 0 0 0 5.5 10.6C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.4" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden="true" {...stroke}>
      <path d="M4.6 19.4c0-7.7 5.1-14.8 14.8-14.8 0 9.7-7.1 14.8-14.8 14.8Z" />
      <path d="M4.6 19.4C8 14.6 12.3 11.2 17.6 9.2" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(base, className)} aria-hidden="true" {...stroke}>
      <path d="M12 3.2 5 5.9v5.4c0 4.3 2.9 8.2 7 9.5 4.1-1.3 7-5.2 7-9.5V5.9Z" />
      <path d="M9.1 12.1l2.2 2.2 3.9-4" />
    </svg>
  );
}

export function GearIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(base, className)} aria-hidden="true" {...stroke}>
      <circle cx="12" cy="12" r="3.1" />
      <path d="M12 2.8v2.6M12 18.6v2.6M4.7 4.7l1.9 1.9M17.4 17.4l1.9 1.9M2.8 12h2.6M18.6 12h2.6M4.7 19.3l1.9-1.9M17.4 6.6l1.9-1.9" />
    </svg>
  );
}

export function ToolsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(base, className)} aria-hidden="true" {...stroke}>
      <path d="M14.5 6.3a3.3 3.3 0 0 1 4.6-4.2l-2.4 2.4 1.8 1.8 2.4-2.4a3.3 3.3 0 0 1-4.2 4.6L7.6 17.6a2 2 0 1 1-2.8-2.8Z" />
      <path d="M4.4 4.6 8 8.2M3.2 20.8l4.4-4.4" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn(base, className)} aria-hidden="true" {...stroke}>
      <path d="M12 20s-7.4-4.4-7.4-9.4A4.1 4.1 0 0 1 12 8.1a4.1 4.1 0 0 1 7.4 2.5C19.4 15.6 12 20 12 20Z" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} aria-hidden="true" {...stroke}>
      <path d="M5 12.5l4.4 4.4L19 7.4" />
    </svg>
  );
}

export function SnowflakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden="true" {...stroke}>
      <path d="M12 2.6v18.8M4 7.2l16 9.6M20 7.2 4 16.8M9.6 4.4 12 6.8l2.4-2.4M9.6 19.6 12 17.2l2.4 2.4" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden="true" {...stroke}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M5.6 18.4l1.6-1.6M16.8 7.2l1.6-1.6" />
    </svg>
  );
}

export function WindIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden="true" {...stroke}>
      <path d="M3.5 8.5h11a3 3 0 1 0-3-3M3.5 15.5h13a3 3 0 1 1-3 3M3.5 12h17" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} aria-hidden="true" {...stroke}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-6 w-6", className)} aria-hidden="true" {...stroke}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export const iconMap = {
  shield: ShieldIcon,
  gear: GearIcon,
  tools: ToolsIcon,
  heart: HeartIcon,
  phone: PhoneIcon,
  pin: PinIcon,
  leaf: LeafIcon,
} as const;
