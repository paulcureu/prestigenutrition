import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Leaf, Plus } from "lucide-react";
import { MotionScope } from "@/components/MotionScope";
import { Btn, Marquee, RoundArrow, SectionLabel } from "@/components/ui";
import { FaqSection, PostCard, PricingSection, ServiceList, StatCards } from "@/components/sections";
import { TestimonialSlider, type Review } from "@/components/TestimonialSlider";
import { facilities } from "@/content/offer";
import { articles } from "@/content/articles";
import allReviews from "@/content/reviews.json";

const reviews = pickReviews(allReviews as Review[]);

function pickReviews(list: Review[]) {
  const wanted = ["Liliana Nastase", "Adelina Movila", "Daniel Nastase", "Alice Braniște", "Impressio", "Paula Cristina"];
  return wanted
    .map((n) => list.find((r) => r.name === n))
    .filter((r): r is Review => Boolean(r))
    .map((r) => ({ ...r, text: r.name === "Liliana Nastase" ? r.text.split("\n")[0] : r.text }));
}

const marqueeItems = [
  "Consiliere nutrițională",
  "Analize corporale",
  "Planuri alimentare personalizate",
  "Monitorizare săptămânală",
  "Consultații online",
  "Stil de viață sănătos",
];

const gallery = [
  { src: "/images/cabinet/oana-online.jpg", w: 1400, h: 1400, title: "Planul tău, scris împreună", meta: "Consultații fizice și online" },
  { src: "/images/cabinet/oana-portret.jpg", w: 1400, h: 1400, title: "Oana Năstase", meta: "Nutriționist și formator în nutriție" },
  { src: "/images/cabinet/oana-studio.jpg", w: 1920, h: 1280, title: "Fără judecăți, cu răbdare", meta: "Sprijin constant" },
  { src: "/images/cabinet/interior.jpg", w: 1050, h: 1400, title: "Cabinetul de pe Calea București 57", meta: "Brașov" },
];

function FeatureText({ title, text }: { title: string; text: string }) {
  const [first, ...rest] = title.split(" ");
  return (
    <div className="pn-feature">
      <div className="pn-feature__head">
        <h3 className="pn-feature__title">
          {first}
          <br />
          {rest.join(" ")}
        </h3>
        <div className="pn-feature__plus" aria-hidden>
          <span className="off">
            <Plus size={17} strokeWidth={1.6} />
          </span>
          <span className="on">
            <RoundArrow />
          </span>
        </div>
      </div>
      <div>
        <p className="pn-feature__desc">{text}</p>
        <Link className="pn-feature__link" href="/servicii">
          Află mai mult
        </Link>
      </div>
    </div>
  );
}

function FeaturePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="pn-feature pn-feature--image">
      <Image className="pn-feature__img" src={src} alt={alt} fill sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 340px" />
    </div>
  );
}

export default function Home() {
  const [f1, f2, f3, f4, f5, f6] = facilities;
  return (
    <MotionScope>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__bg">
            <Image
              src="/images/cabinet/oana-birou.jpg"
              alt="Oana Năstase la biroul cabinetului Prestige Nutrition din Brașov"
              fill
              preload
              sizes="100vw"
            />
          </div>
          <p className="hero__sub" data-load="-20" data-delay="0.7" data-duration="0.7">
            Prestige Nutrition <em>by Oana Năstase</em>
          </p>
          <h1 className="hero__title" data-load="50">
            Nutriționist Brașov
          </h1>
          <div className="hero__row" data-load="30" data-delay="0.9">
            <div className="hero__col">
              <div className="hero__users">
                <span className="hero__avatar" aria-hidden>
                  L
                </span>
                <span className="hero__avatar" aria-hidden>
                  A
                </span>
                <span className="hero__avatar" aria-hidden>
                  D
                </span>
                <span className="hero__users-label">29 de recenzii</span>
              </div>
              <p className="hero__desc">
                Consultații de specialitate și planuri alimentare personalizate, pentru mai multă sănătate, energie și obiceiuri
                sustenabile.
              </p>
              <div className="hero__divider" />
              <Link className="hero__link" href="/despre">
                Despre cabinet
              </Link>
            </div>
            <div className="hero__col">
              <div className="hero__growth">
                <div className="hero__growth-value">100%</div>
                <div className="hero__growth-label">
                  Planuri
                  <br />
                  personalizate
                </div>
              </div>
              <div className="hero__ticks" aria-hidden>
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className={i > 13 ? "on" : undefined} style={{ height: `${30 + i * 3}%` }} />
                ))}
              </div>
            </div>
          </div>
          <svg className="hero__notch" viewBox="0 0 118 37" aria-hidden preserveAspectRatio="none">
            <path fill="currentColor" d="M0 37C22 37 30 0 59 0s37 37 59 37Z" />
          </svg>
          <a className="hero__anchor" href="#facilitati" aria-label="Derulează la facilități">
            <ArrowDown size={22} strokeWidth={1.8} />
          </a>
        </div>
      </section>

      {/* ---------- Bandă servicii ---------- */}
      <section className="partner" aria-label="Ce găsești la cabinet">
        <div className="container">
          <div className="partner__inner">
            <div className="partner__label">
              Servicii <strong>100%</strong>
              <br />
              personalizate
            </div>
            <div className="partner__marquee">
              <div className="partner__track">
                {[...marqueeItems, ...marqueeItems].map((t, i) => (
                  <span className="partner__item" key={i} aria-hidden={i >= marqueeItems.length}>
                    <Leaf size={18} strokeWidth={1.6} aria-hidden />
                    {t}
                  </span>
                ))}
              </div>
              <div className="partner__fade partner__fade--l" />
              <div className="partner__fade partner__fade--r" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Facilități ---------- */}
      <section className="section" id="facilitati" aria-labelledby="facilitati-title">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title" id="facilitati-title" data-split="0.04">
              Facilități și servicii
            </h2>
            <div className="features" data-stagger="75">
              <div className="pn-feature pn-feature--photo-bottom">
                <div className="pn-feature__head">
                  <h3 className="pn-feature__title">
                    Consultații
                    <br />
                    fizice
                  </h3>
                  <div className="pn-feature__plus" aria-hidden>
                    <span className="off">
                      <Plus size={17} strokeWidth={1.6} />
                    </span>
                    <span className="on">
                      <RoundArrow />
                    </span>
                  </div>
                </div>
                <p className="pn-feature__desc">{f1.text}</p>
                <Image
                  className="pn-feature__photo-bottom"
                  src="/images/cabinet/intrare.jpg"
                  alt="Intrarea cabinetului Prestige Nutrition, cu serviciile scrise pe trepte"
                  width={1050}
                  height={1400}
                  sizes="(max-width: 767px) 100vw, 340px"
                  style={{ objectPosition: "50% 18%" }}
                />
              </div>
              <FeatureText title={f2.title} text={f2.text} />
              <FeaturePhoto src="/images/cabinet/oana-cabinet.jpg" alt="Oana Năstase în cabinetul de nutriție" />
              <FeatureText title={f3.title} text={f3.text} />
              <FeatureText title={f4.title} text={f4.text} />
              <FeaturePhoto src="/images/cabinet/salata.jpg" alt="Salată în formă de inimă și stetoscop" />
              <FeatureText title={f5.title} text={f5.text} />
              <div className="pn-feature pn-feature--corner">
                <div className="pn-feature__head">
                  <h3 className="pn-feature__title">
                    Sprijin
                    <br />
                    constant
                  </h3>
                  <div className="pn-feature__plus" aria-hidden>
                    <span className="off">
                      <Plus size={17} strokeWidth={1.6} />
                    </span>
                    <span className="on">
                      <RoundArrow />
                    </span>
                  </div>
                </div>
                <p className="pn-feature__desc">
                  {f6.text}
                </p>
                <Image
                  className="pn-feature__photo-corner"
                  src="/images/cabinet/interior.jpg"
                  alt="Spațiul de consultații Prestige Nutrition"
                  width={1050}
                  height={1400}
                  sizes="260px"
                  style={{ objectPosition: "50% 45%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Despre ---------- */}
      <section className="section" aria-labelledby="despre-title">
        <div className="container">
          <SectionLabel>Despre</SectionLabel>
          <div className="about__heading-wrap">
            <h2 className="about__heading" id="despre-title" data-split="0.01" data-split-duration="0.05">
              Adevărata schimbare nu începe prin restricții, ci prin <em>echilibru</em> și respect față de propria persoană.
            </h2>
            <div className="about__overlay" aria-hidden />
          </div>
          <StatCards />
        </div>
      </section>

      {/* ---------- Servicii ---------- */}
      <section className="section" aria-labelledby="servicii-title">
        <div className="container">
          <SectionLabel>Servicii</SectionLabel>
          <div className="services-head">
            <h2 id="servicii-title" data-split="0.04" data-split-mask="">
              Ce servicii ofer
            </h2>
            <div className="services-head__aside" data-reveal="40">
              <p>
                Consultații fizice și online, planuri alimentare 100% personalizate și monitorizare săptămânală — totul construit în
                jurul tău, nu al unei diete.
              </p>
              <div className="btn-group">
                <Btn href="/contact" icon="arrow">
                  Programează-te
                </Btn>
                <Btn href="/servicii#preturi" variant="soft">
                  Vezi prețurile
                </Btn>
              </div>
            </div>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* ---------- Cabinetul ---------- */}
      <section className="section" aria-labelledby="cabinet-title">
        <div className="container">
          <SectionLabel>Cabinetul</SectionLabel>
          <h2 className="sr-only" id="cabinet-title">
            Cabinetul
          </h2>
        </div>
        <div className="section-marquee">
          <Marquee word="Cabinet" section count={3} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="gallery gallery--4" data-stagger="55">
            {gallery.map((g) => (
              <figure className="gallery__item" key={g.src} tabIndex={0}>
                <div className="gallery__media">
                  <Image src={g.src} alt={`${g.title} — ${g.meta}`} fill sizes="(max-width: 991px) 100vw, 900px" />
                </div>
                <figcaption className="gallery__info">
                  <div>
                    <div className="gallery__info-inner">
                      <div>
                        <h3 className="gallery__name">{g.title}</h3>
                        <div className="gallery__meta">{g.meta}</div>
                      </div>
                      <Link href="/despre" className="gallery__go" aria-label="Despre cabinet" tabIndex={-1}>
                        <RoundArrow />
                      </Link>
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Recenzii ---------- */}
      <section className="section" aria-labelledby="recenzii-title">
        <div className="container">
          <SectionLabel>Recenzii</SectionLabel>
          <h2 className="sr-only" id="recenzii-title">
            Păreri ale clienților
          </h2>
        </div>
        <div className="section-marquee">
          <Marquee word="Recenzii" section count={3} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <TestimonialSlider reviews={reviews} />
        </div>
      </section>

      {/* ---------- Articole ---------- */}
      <section className="section" aria-labelledby="articole-title">
        <div className="container">
          <SectionLabel>Articole</SectionLabel>
          <div className="section__head">
            <h2 className="section__title" id="articole-title" data-split="0.04">
              Ultimele articole
            </h2>
            <div className="posts" data-stagger="55">
              {articles.slice(0, 3).map((a) => (
                <PostCard a={a} key={a.slug} />
              ))}
            </div>
            <div className="posts__more">
              <Btn href="/articole">Vezi toate articolele</Btn>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      <FaqSection />
    </MotionScope>
  );
}
