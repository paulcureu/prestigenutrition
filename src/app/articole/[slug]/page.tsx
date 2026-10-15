import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, Tag } from "lucide-react";
import { MotionScope } from "@/components/MotionScope";
import { Btn, SectionLabel } from "@/components/ui";
import { PostCard } from "@/components/sections";
import { articles, articleTag, formatDate, getArticle } from "@/content/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/articole/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    openGraph: { type: "article", publishedTime: a.date, images: a.cover ? [{ url: a.cover }] : undefined },
  };
}

export default async function ArticlePage({ params }: PageProps<"/articole/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <MotionScope>
      <article>
        <header className="container article-head" data-load-stagger="40">
          <nav className="breadcrumb" aria-label="Breadcrumb" style={{ justifyContent: "center", marginTop: 0, marginBottom: 20 }}>
            <Link href="/">Acasă</Link>
            <span aria-hidden>/</span>
            <Link href="/articole">Articole</Link>
          </nav>
          <h1>{a.title}</h1>
          <div className="article-meta">
            <span>
              <CalendarDays size={16} strokeWidth={1.5} aria-hidden />
              {formatDate(a.date)}
            </span>
            <span>
              <Clock size={16} strokeWidth={1.5} aria-hidden />
              {a.readingMinutes} min de citit
            </span>
            <span>
              <Tag size={16} strokeWidth={1.5} aria-hidden />
              {articleTag(a)}
            </span>
          </div>
        </header>
        {a.cover && (
          <div className="container">
            <div className="article-cover" data-load="50" data-delay="0.5">
              <Image src={a.cover} alt={a.title} width={1100} height={1400} sizes="(max-width: 1180px) 100vw, 1100px" preload />
            </div>
          </div>
        )}
        <div className="container">
          <div className="prose" dangerouslySetInnerHTML={{ __html: a.html }} />
          <aside className="author-box" data-reveal="40">
            <Image src="/images/cabinet/oana-portret.jpg" alt="" width={192} height={192} />
            <div>
              <h2 className="pn-feature__title" style={{ fontSize: 20 }}>
                Oana Năstase
              </h2>
              <p>Nutriționist și formator în nutriție, fondatoarea Prestige Nutrition Brașov.</p>
              <div className="btn-group" style={{ marginTop: 16 }}>
                <Btn href="/contact" variant="dark">
                  Programează o consultație
                </Btn>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="section container" aria-labelledby="related-title">
        <SectionLabel>Mai multe articole</SectionLabel>
        <h2 className="sr-only" id="related-title">
          Mai multe articole
        </h2>
        <div className="posts" style={{ marginTop: "var(--section-sm)" }} data-stagger="55">
          {related.map((r) => (
            <PostCard a={r} key={r.slug} />
          ))}
        </div>
      </section>
    </MotionScope>
  );
}
