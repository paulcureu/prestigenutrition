"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

// Fără server de e-mail deocamdată: formularul compune mesajul și deschide aplicația de e-mail a vizitatorului.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `${f.get("subiect")} — ${f.get("nume")}`;
    const body = [
      `Nume: ${f.get("nume")}`,
      `E-mail: ${f.get("email")}`,
      `Telefon: ${f.get("telefon")}`,
      "",
      `${f.get("mesaj") ?? ""}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form-card" onSubmit={onSubmit} data-reveal="60">
      <h2>Programează o consultație</h2>
      <p>Lasă-mi datele tale și te contactez pentru programare. Câmpurile cu * sunt obligatorii.</p>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="nume">Nume complet *</label>
          <input id="nume" name="nume" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="telefon">Telefon *</label>
          <input id="telefon" name="telefon" type="tel" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="email">E-mail *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="subiect">Subiect *</label>
          <input id="subiect" name="subiect" required defaultValue="Programare consultație" />
        </div>
        <div className="field field--full">
          <label htmlFor="mesaj">Mesaj</label>
          <textarea id="mesaj" name="mesaj" placeholder="Spune-mi pe scurt ce obiective ai sau ce întrebări." />
        </div>
        <label className="consent field--full">
          <input type="checkbox" name="gdpr" required />
          <span>
            Prin completarea formularului confirm că am citit și sunt de acord cu{" "}
            <Link href="/politica-de-confidentialitate">Politica de confidențialitate</Link> (GDPR).
          </span>
        </label>
        <div className="field--full">
          <button type="submit" className="pn-btn" style={{ width: "100%" }}>
            Trimite mesajul
          </button>
          <p className="form-note">Se va deschide aplicația ta de e-mail cu mesajul completat. Sau sună direct la {site.phone}.</p>
          {sent && (
            <p className="form-sent" role="status">
              Mulțumesc! Dacă aplicația de e-mail nu s-a deschis, scrie-mi la {site.email}.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
