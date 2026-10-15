import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { MotionScope } from "@/components/MotionScope";
import { PageTitle } from "@/components/sections";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact și programări",
  description:
    "Programează o consultație de nutriție la Prestige Nutrition, Calea București nr. 57, Brașov. Telefon 0725 819 215, e-mail prestige.nutrition@yahoo.com.",
};

export default function ContactPage() {
  return (
    <MotionScope>
      <PageTitle
        eyebrow="Contact nutriționist Brașov"
        title="Programează o consultație de nutriție"
        lead="Contactează-mă telefonic sau prin formularul online. Te aștept la cabinetul Prestige Nutrition din Brașov."
        crumbs={[{ href: "/", label: "Acasă" }, { label: "Contact" }]}
      />
      <section className="container">
        <div className="contact-grid">
          <div className="contact-cards" data-stagger="40">
            <div className="contact-card">
              <span className="contact-card__icon">
                <MapPin size={20} strokeWidth={1.6} aria-hidden />
              </span>
              <h2 className="pn-feature__title" style={{ fontSize: 20 }}>
                Adresă
              </h2>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                {site.address}
              </a>
            </div>
            <div className="contact-card">
              <span className="contact-card__icon">
                <Phone size={20} strokeWidth={1.6} aria-hidden />
              </span>
              <h2 className="pn-feature__title" style={{ fontSize: 20 }}>
                Telefon
              </h2>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
            <div className="contact-card">
              <span className="contact-card__icon">
                <Mail size={20} strokeWidth={1.6} aria-hidden />
              </span>
              <h2 className="pn-feature__title" style={{ fontSize: 20 }}>
                E-mail
              </h2>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="contact-card">
              <span className="contact-card__icon">
                <Clock size={20} strokeWidth={1.6} aria-hidden />
              </span>
              <h2 className="pn-feature__title" style={{ fontSize: 20 }}>
                Program
              </h2>
              <p>
                {site.hours.map((h) => (
                  <span key={h.days} style={{ display: "block" }}>
                    {h.days}: {h.time}
                  </span>
                ))}
              </p>
            </div>
            <div className="contact-map">
              <iframe
                src={site.mapsEmbed}
                title="Harta: Prestige Nutrition, Calea București 57, Brașov"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </MotionScope>
  );
}
