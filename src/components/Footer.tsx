import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { legal, nav, site } from "@/content/site";
import { Btn, Marquee, RoundArrow } from "./ui";
import { MotionScope } from "./MotionScope";

export function Footer() {
  return (
    <footer className="footer">
      <MotionScope>
        <section className="container cta-wrap" aria-labelledby="cta-title">
          <div className="pn-cta" data-reveal="60">
            <h2 className="pn-cta__title" id="cta-title">
              Ești pregătit să faci o schimbare reală?
            </h2>
            <p className="pn-cta__text">
              Programează o consultație nutrițională în cabinet și află cum un plan alimentar personalizat te poate ajuta să obții
              rezultate durabile.
            </p>
            <Btn href={site.phoneHref} variant="dark" icon="phone">
              {`Sună: ${site.phone}`}
            </Btn>
            <Link href="/contact" className="pn-cta__circle" aria-label="Mergi la pagina de contact">
              <RoundArrow size={32} />
            </Link>
          </div>
        </section>
      </MotionScope>

      <div className="footer__marquee">
        <Marquee word="Programează-te" href="/contact" count={4} />
      </div>

      <div className="footer__main">
        <div className="footer__content">
          <div className="footer__top">
            <div className="footer__brand">
              <Link href="/" className="footer__logo" aria-label={`${site.name} — acasă`}>
                <Image src="/images/logo.png" alt={site.name} width={500} height={353} sizes="300px" />
              </Link>
              <p className="footer__story">{site.story}</p>
              <div className="footer__quick">
                <a href={site.phoneHref} aria-label={`Sună la ${site.phone}`}>
                  <Phone size={18} />
                </a>
                <a href={`mailto:${site.email}`} aria-label={`Scrie la ${site.email}`}>
                  <Mail size={18} />
                </a>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Deschide locația în Google Maps">
                  <MapPin size={18} />
                </a>
              </div>
            </div>
            <div className="footer__cols">
              <div>
                <div className="footer__heading">Pagini</div>
                <div className="footer__list">
                  {nav.map((n) => (
                    <Link key={n.href} href={n.href}>
                      {n.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="footer__heading">Program</div>
                <div className="footer__list footer__hours">
                  {site.hours.map((h) => (
                    <div key={h.days}>
                      {h.days}
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="footer__heading">Contact</div>
                <div className="footer__list">
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {site.address}
                  </a>
                  <a href={site.phoneHref}>{site.phone}</a>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>
              <div>
                <div className="footer__heading">Utile</div>
                <div className="footer__list">
                  {legal.map((l) => (
                    <Link key={l.href} href={l.href}>
                      {l.label}
                    </Link>
                  ))}
                  <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">
                    ANPC
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2026 | Prestige Nutrition by Oana Năstase — Toate drepturile rezervate.</span>
            <div className="footer__badges">
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/anpc-sal.png" alt="ANPC — Soluționarea alternativă a litigiilor" width={175} height={50} />
              </a>
              <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/anpc-sol.png" alt="Soluționarea online a litigiilor" width={175} height={50} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
