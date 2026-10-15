import { Btn } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container not-found">
      <div className="not-found__code" aria-hidden>
        404
      </div>
      <h1 style={{ fontSize: "var(--h3)" }}>Pagina nu a fost găsită</h1>
      <p style={{ color: "var(--ink-muted)", maxWidth: 480 }}>
        Poate a fost mutată odată cu noul site. Te poți întoarce pe prima pagină sau poți citi articolele.
      </p>
      <div className="btn-group" style={{ justifyContent: "center" }}>
        <Btn href="/" icon="arrow">
          Înapoi acasă
        </Btn>
        <Btn href="/articole" variant="soft">
          Articole
        </Btn>
      </div>
    </section>
  );
}
