import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Clock, Monitor, Salad, Stethoscope, Users } from "lucide-react";
import { faq, family, pricing, services, type Service } from "@/content/offer";
import { articleTag, formatDate, type Article } from "@/content/articles";
import { Btn, Marquee, RoundArrow, SectionLabel } from "./ui";
import { Accordion } from "./Accordion";

const serviceIcons: Record<Service["icon"], typeof Salad> = {
  stethoscope: Stethoscope,
  calendar: CalendarCheck,
  salad: Salad,
  users: Users,
  monitor: Monitor,
};

export function StatCards() {
  const stats = [
    { title: "Personalizare", value: "100%", desc: "Fiecare plan alimentar e construit de la zero, împreună cu tine, după stilul tău de viață." },
    { title: "Monitorizare", value: "1×/săpt.", desc: "Refacem analiza corporală și măsurătorile, apoi ajustăm planul pentru săptămâna următoare." },
    { title: "Prima consultație", value: "60 min", desc: "Anamneză detaliată, bioimpedanță, măsurători antropometrice și obiective clare." },
  ];
  return (
    <div className="pn-stat-row about__stats" data-stagger="50">
      {stats.map((s) => (
        <div className="pn-stat" key={s.title}>
          <div className="pn-stat__bg" />
          <div className="pn-stat__title">{s.title}</div>
          <div>
            <div className="pn-stat__value">{s.value}</div>
            <div className="pn-stat__desc">{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ServiceList({ activeIndex = 1, linkBase = "/servicii" }: { activeIndex?: number; linkBase?: string }) {
  return (
    <div className="pn-services services-list">
      {services.map((s, i) => {
        const Icon = serviceIcons[s.icon];
        return (
          <Link
            key={s.slug}
            href={`${linkBase}#${s.slug}`}
            className={`pn-service${i === activeIndex ? " is-active" : ""}`}
            aria-label={`${s.title} — ${s.price}`}
          >
            <div className="pn-service__bg" />
            <div className="pn-service__a">
              <div className="pn-service__title" aria-hidden>
                {s.word}
              </div>
            </div>
            <div className="pn-service__b">
              <p className="pn-service__desc">{s.short}</p>
              <span className="pn-service__icon">
                <Icon size={18} strokeWidth={1.6} aria-hidden />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function PricingSection({ withMarquee = true }: { withMarquee?: boolean }) {
  return (
    <section className="section pricing" id="preturi" aria-labelledby="preturi-title">
      <div className="container">
        <SectionLabel>Prețuri</SectionLabel>
        <h2 className="sr-only" id="preturi-title">
          Prețuri
        </h2>
      </div>
      {withMarquee && (
        <div className="section-marquee">
          <Marquee word="Prețuri" section count={3} />
        </div>
      )}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="pn-price-row" data-stagger="60">
          {pricing.map((p) => (
            <div className={`pn-price${p.featured ? " pn-price--featured" : ""}`} key={p.name}>
              <div className="pn-price__head">
                <div className="pn-price__name">
                  <span className="pn-price__dot" />
                  {p.name}
                </div>
                <div className="pn-price__amount">
                  <span className="pn-price__value">{p.value}</span>
                  <span className="pn-price__suffix">{p.suffix}</span>
                </div>
              </div>
              <div className="pn-price__body">
                <div>
                  <div className="pn-price__title">{p.title}</div>
                  <div className="pn-price__desc">{p.desc}</div>
                  <div className="pn-price__divider" />
                  <ul className="pn-price__list">
                    {p.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
                <div className="pn-price__cta">
                  <Btn href="/contact" variant={p.featured ? "primary" : "soft"}>
                    Programează-te
                  </Btn>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="family" data-reveal="40">
          <div className="family__title">
            <Users size={22} strokeWidth={1.6} aria-hidden /> {family.title}
          </div>
          <div className="family__rows">
            {family.rows.map((r) => (
              <div className="family__row" key={r.label}>
                <span className="family__label">{r.label}</span>
                <span className="family__value">{r.value}</span>
                <span className="family__old">{r.old}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container">
        <SectionLabel>Întrebări</SectionLabel>
        <div className="faq__inner">
          <h2 id="faq-title" data-split="0.04">
            Întrebări frecvente
          </h2>
          <Accordion items={faq} />
        </div>
      </div>
    </section>
  );
}

export function PostCard({ a }: { a: Article }) {
  return (
    <Link href={`/articole/${a.slug}`} className="pn-post">
      <div className="pn-post__info">
        <h3 className="pn-post__title">{a.title}</h3>
        <div className="pn-post__meta">
          <span>
            <Clock size={16} strokeWidth={1.5} aria-hidden />
            {formatDate(a.date)}
          </span>
          <span className="pn-post__cat">{articleTag(a)}</span>
        </div>
      </div>
      {a.cover && (
        <div className="pn-post__media">
          <Image src={a.cover} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 460px" />
          <span className="pn-post__go">
            <RoundArrow />
          </span>
        </div>
      )}
    </Link>
  );
}

export function PageTitle({
  title,
  eyebrow,
  lead,
  crumbs,
}: {
  title: string;
  eyebrow?: string;
  lead?: string;
  crumbs: { href?: string; label: string }[];
}) {
  return (
    <section className="container page-title" data-load-stagger="50">
      {eyebrow && <div className="page-title__eyebrow">{eyebrow}</div>}
      <h1>{title}</h1>
      {lead && <p className="page-title__lead">{lead}</p>}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        {crumbs.map((c, i) => (
          <span key={c.label} style={{ display: "contents" }}>
            {i > 0 && <span aria-hidden>/</span>}
            {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </span>
        ))}
      </nav>
    </section>
  );
}
