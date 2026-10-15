"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { Btn } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`navbar${scrolled ? " is-scrolled" : ""}`}>
      <div className="container container--wide">
        <div className="navbar__inner">
          <Link href="/" className="navbar__logo" aria-label={`${site.name} — acasă`} onNavigate={() => setOpen(false)}>
            <Image src="/images/logo.png" alt={site.name} width={500} height={353} preload sizes="91px" />
          </Link>
          <nav className="navbar__menu pn-nav" aria-label="Principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`pn-nav-link${isCurrent(item.href) ? " is-current" : ""}`}
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="navbar__cta">
            <Btn href="/contact" variant="dark">
              Programează-te
            </Btn>
            <button
              type="button"
              className="navbar__burger"
              aria-label={open ? "Închide meniul" : "Deschide meniul"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} inert={!open}>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mobile-menu__link"
            aria-current={isCurrent(item.href) ? "page" : undefined}
            onNavigate={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="mobile-menu__foot">
          <Btn href={site.phoneHref} icon="phone">
            {`Sună: ${site.phone}`}
          </Btn>
          <Btn href="/contact" variant="dark">
            Programează-te
          </Btn>
        </div>
      </div>
    </header>
  );
}
