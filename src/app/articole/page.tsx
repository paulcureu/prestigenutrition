import type { Metadata } from "next";
import { MotionScope } from "@/components/MotionScope";
import { PageTitle, PostCard } from "@/components/sections";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Articole despre nutriție",
  description:
    "Articole despre nutriție și alimentație sănătoasă scrise de Oana Năstase, nutriționist în Brașov: slăbit sănătos, hidratare, foamea emoțională și multe altele.",
};

export default function ArticolePage() {
  return (
    <MotionScope>
      <PageTitle
        eyebrow="Blog"
        title="Articole despre nutriție și alimentație sănătoasă"
        lead="Răspunsuri clare la întrebările pe care le primesc cel mai des în cabinet — fără mituri și fără soluții minune."
        crumbs={[{ href: "/", label: "Acasă" }, { label: "Articole" }]}
      />
      <section className="container">
        <div className="posts" data-stagger="55">
          {articles.map((a) => (
            <PostCard a={a} key={a.slug} />
          ))}
        </div>
      </section>
    </MotionScope>
  );
}
