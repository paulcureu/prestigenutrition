import type { Metadata } from "next";
import Image from "next/image";
import { Clock } from "lucide-react";
import { MotionScope } from "@/components/MotionScope";
import { Btn, SectionLabel } from "@/components/ui";
import { FaqSection, PageTitle, PricingSection, ServiceList } from "@/components/sections";
import { family, services } from "@/content/offer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicii și prețuri",
  description:
    "Consultații nutriționale (300 LEI), monitorizări săptămânale (150 LEI), pachet 3 luni (1650 LEI) și pachet family la cabinetul Prestige Nutrition din Brașov.",
};

export default function ServiciiPage() {
  return (
    <MotionScope>
      <PageTitle
        eyebrow="Servicii de nutriție — Brașov"
        title="Servicii pentru o alimentație sănătoasă"
        lead="Fiecare plan alimentar este construit de la zero, împreună cu tine. Nu folosesc soluții generale, ci abordări individualizate."
        crumbs={[{ href: "/", label: "Acasă" }, { label: "Servicii" }]}
      />

      <section className="container" aria-label="Lista serviciilor">
        <ServiceList activeIndex={0} linkBase="" />
      </section>

      <section className="section container" aria-label="Detalii servicii">
        {services.map((s, i) => (
          <article className="service-detail" id={s.slug} key={s.slug}>
            <div className="service-detail__media" data-reveal="60">
              <Image src={s.image} alt={`${s.title} — Prestige Nutrition Brașov`} width={1300} height={1209} sizes="(max-width: 991px) 100vw, 680px" />
            </div>
            <div data-reveal="60">
              <div className="service-detail__num" aria-hidden>
                0{i + 1}
              </div>
              <SectionLabel>{s.word}</SectionLabel>
              <h2>{s.title}</h2>
              <p>{s.long}</p>
              <div className="service-detail__facts">
                {s.slug === "pachet-family" ? (
                  family.rows.map((r) => (
                    <span className="chip" key={r.label}>
                      {r.label}: <strong>{r.value}</strong> <s>{r.old}</s>
                    </span>
                  ))
                ) : (
                  <>
                    <span className="chip chip--gold">{s.price}</span>
                    {s.duration && (
                      <span className="chip">
                        <Clock size={16} strokeWidth={1.6} aria-hidden /> {s.duration}
                      </span>
                    )}
                  </>
                )}
              </div>
              <div className="btn-group" style={{ marginTop: 0 }}>
                <Btn href={site.phoneHref} icon="phone">
                  Sună și programează-te
                </Btn>
                <Btn href="/contact" variant="soft">
                  Scrie-mi
                </Btn>
              </div>
            </div>
          </article>
        ))}
      </section>

      <PricingSection withMarquee />
      <FaqSection />
    </MotionScope>
  );
}
