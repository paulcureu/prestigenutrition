import type { Metadata } from "next";
import Image from "next/image";
import { MotionScope } from "@/components/MotionScope";
import { Btn, Marquee, SectionLabel } from "@/components/ui";
import { FaqSection, PageTitle, StatCards } from "@/components/sections";
import { pillars } from "@/content/offer";

export const metadata: Metadata = {
  title: "Despre Oana Năstase",
  description:
    "Oana Năstase, nutriționist și formator în nutriție în Brașov. Formare, abordare și misiunea cabinetului Prestige Nutrition: echilibru, nu restricții.",
};

export default function DesprePage() {
  return (
    <MotionScope>
      <PageTitle
        eyebrow="Despre mine"
        title="Transformă-ți viața prin nutriție corectă"
        lead="Sunt Oana Năstase, mamă, soție și specialist în nutriție. Întreaga mea activitate este construită în jurul unei convingeri simple: adevărata schimbare nu începe prin restricții, ci prin echilibru."
        crumbs={[{ href: "/", label: "Acasă" }, { label: "Despre" }]}
      />

      <section className="container">
        <div className="split split--top">
          <div className="split__media" data-reveal="60">
            <Image
              src="/images/cabinet/oana-portret.jpg"
              alt="Oana Năstase în cabinetul Prestige Nutrition din Brașov"
              width={1400}
              height={1400}
              sizes="(max-width: 991px) 100vw, 680px"
              preload
            />
          </div>
          <div className="split__body" data-reveal="60">
            <SectionLabel>Formare și specializare</SectionLabel>
            <h2>Nutriționist în Brașov</h2>
            <p>
              Am absolvit <strong>Facultatea de Medicină</strong> în cadrul Universității Transilvania din Brașov, specializarea AMG,
              iar apoi am ales să-mi dedic parcursul profesional nutriției și reeducării alimentare, domeniu în care am activat timp
              de 5 ani.
            </p>
            <p>
              În toată această perioadă am înțeles că sănătatea nu se obține prin soluții rapide sau diete extreme, ci prin
              consecvență, înțelegere, disciplină și obiceiuri sănătoase construite pas cu pas.
            </p>
            <p>
              Din dorința de a duce nutriția la un nivel mai profund și mai personal, mi-am extins formarea prin{" "}
              <strong>studii suplimentare de perfecționare</strong>, ca <strong>nutriționist și formator în nutriție</strong> pe toate
              categoriile de vârstă — și am creat un spațiu dedicat celor care au fost criticați, descurajați sau care, obosiți de
              atâtea încercări eșuate, au renunțat să mai spere că schimbarea este posibilă.
            </p>
            <blockquote className="motto">
              <span>Moto</span>Tu poți fi arhitectul propriei schimbări!
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionLabel>Misiune</SectionLabel>
        <div className="about__heading-wrap">
          <h2 className="about__heading" data-split="0.01" data-split-duration="0.05">
            Prestige Nutrition este mai mult decât un cabinet: este un <em>partener</em> dedicat transformării tale.
          </h2>
          <div className="about__overlay" aria-hidden />
        </div>
        <StatCards />
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body" data-reveal="60">
              <SectionLabel>Abordare</SectionLabel>
              <h2>Nutriție personalizată pentru fiecare persoană</h2>
              <p>
                Într-o societate dominată de diete extreme, soluții rapide, mituri și informații contradictorii, rolul meu este să aduc
                claritate, să simplific și să transform haosul și trendurile în direcții clare.
              </p>
              <p>
                Aleg să promovez echilibrul, autenticitatea și educația alimentară ca fundament al unei transformări reale și de durată.{" "}
                <strong>NU prin înfometare! NU prin soluții minune!</strong>
              </p>
              <div className="btn-group">
                <Btn href="/servicii" icon="arrow">
                  Vezi serviciile
                </Btn>
                <Btn href="/contact" variant="soft">
                  Programează-te
                </Btn>
              </div>
            </div>
            <div className="split__media" data-reveal="60" style={{ aspectRatio: "4 / 3" }}>
              <Image
                src="/images/cabinet/oana-online.jpg"
                alt="Oana Năstase lucrând la un plan alimentar personalizat"
                fill
                sizes="(max-width: 991px) 100vw, 680px"
              />
            </div>
          </div>
          <div className="pillars" data-stagger="75">
            {pillars.map((p, i) => (
              <div className="pn-feature" key={p.title}>
                <div className="pillar__num">0{i + 1}</div>
                <div>
                  <h3 className="pn-feature__title">{p.title}</h3>
                  <p className="pn-feature__desc" style={{ marginTop: 12 }}>
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Cabinetul">
        <div className="section-marquee">
          <Marquee word="Echilibru" section count={3} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="gallery" data-stagger="55">
            {[
              { src: "/images/cabinet/interior.jpg", alt: "Spațiul de consultații Prestige Nutrition", w: 1050, h: 1400 },
              { src: "/images/cabinet/intrare.jpg", alt: "Intrarea cabinetului de pe Calea București 57", w: 1050, h: 1400 },
              { src: "/images/cabinet/oana-studio.jpg", alt: "Oana Năstase, nutriționist", w: 1920, h: 1280 },
              { src: "/images/cabinet/oana-birou.jpg", alt: "Oana Năstase la biroul cabinetului", w: 1920, h: 1280 },
            ].map((g) => (
              <figure className="gallery__item" key={g.src}>
                <div className="gallery__media">
                  <Image src={g.src} alt={g.alt} fill sizes="(max-width: 991px) 100vw, 900px" />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </MotionScope>
  );
}
