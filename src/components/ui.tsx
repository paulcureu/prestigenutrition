import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";

type BtnProps = {
  href: string;
  children: string;
  variant?: "primary" | "dark" | "soft";
  icon?: "arrow" | "phone";
  className?: string;
};

// Butonul-pastilă din design system; literele reintră una câte una la hover (vezi .pn-btn__chars).
export function Btn({ href, children, variant = "primary", icon, className }: BtnProps) {
  const cls = ["pn-btn", variant !== "primary" && `pn-btn--${variant}`, icon && "pn-btn--icon", className].filter(Boolean).join(" ");
  const inner = (
    <>
      {icon === "phone" && <Phone className="pn-btn__icon" aria-hidden />}
      <span className="pn-btn__chars" aria-hidden>
        {Array.from(children).map((c, i) => (
          <span key={i} style={{ ["--i" as string]: i }}>
            {c}
          </span>
        ))}
      </span>
      <span className="sr-only">{children}</span>
      {icon === "arrow" && <ArrowRight className="pn-btn__icon" aria-hidden />}
    </>
  );
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}

export function SectionLabel({ children, num }: { children: ReactNode; num?: string }) {
  return (
    <div className="pn-section-label">
      {num && <span className="pn-section-label__num">{num}</span>}
      {children}
    </div>
  );
}

export function Marquee({ word, section, href, count = 6 }: { word: string; section?: boolean; href?: string; count?: number }) {
  const items = Array.from({ length: count * 2 });
  return (
    <div className={`pn-marquee${section ? " pn-marquee--section" : ""}`} aria-hidden={href ? undefined : true}>
      <div className="pn-marquee__track">
        {items.map((_, i) => (
          <div className="pn-marquee__item" key={i}>
            {href ? (
              <Link href={href} className="pn-marquee__word" tabIndex={i === 0 ? 0 : -1} aria-hidden={i === 0 ? undefined : true}>
                {word}
              </Link>
            ) : (
              <span className="pn-marquee__word">{word}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function RoundArrow({ size = 20 }: { size?: number }) {
  return <ArrowUpRight size={size} strokeWidth={1.8} aria-hidden />;
}
