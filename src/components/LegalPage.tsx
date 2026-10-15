import { notFound } from "next/navigation";
import { MotionScope } from "./MotionScope";
import { PageTitle } from "./sections";
import { formatDate, legalPages } from "@/content/articles";

export function LegalPage({ slug }: { slug: string }) {
  const page = legalPages[slug];
  if (!page) notFound();
  return (
    <MotionScope>
      <PageTitle
        title={page.title}
        lead={`Ultima actualizare: ${formatDate(page.modified)}`}
        crumbs={[{ href: "/", label: "Acasă" }, { label: page.title }]}
      />
      <div className="container">
        <div className="prose" style={{ marginTop: 0 }} dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </MotionScope>
  );
}
