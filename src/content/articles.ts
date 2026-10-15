import data from "./wp.json";

export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string | null;
  categories: string[];
  readingMinutes: number;
  html: string;
};

export type LegalPage = { slug: string; title: string; modified: string; html: string };

// Categoriile din WordPress sunt cuvinte-cheie SEO; pe site arătăm o etichetă scurtă, aleasă pe articol.
const tags: Record<string, string> = {
  "suferinta-pretul-obligatoriu-al-slabitului": "Slăbit sănătos",
  "ai-slabit-vara-si-acum-pui-la-loc-toamna": "Slăbit sănătos",
  "pepene-rosu-pepene-galben-banane-fructe-vara": "Alimentație",
  "de-ce-nu-slabesti-in-centimetri": "Slăbit sănătos",
  "ai-incercat-toate-dietele-si-tot-nu-reusesti-sa-slabesti": "Diete",
  "transpiri-abundent-vara-apa-sau-electroliti": "Hidratare",
  "berea-hidrateaza-sau-deshidrateaza": "Hidratare",
  "de-ce-persoanele-supra-ponderale-sunt-adesea-malnutrite-cum-e-posibil-explicatie-nutritionist-brasov": "Sănătate",
  "foamea-reala-sau-foamea-emotionala-afla-diferenta-de-la-nutritionist-din-brasov": "Comportament alimentar",
  "nutritionist-brasov": "Cabinet",
};

// Titluri care în WordPress au rămas fără majusculă sau prea lungi pentru carduri.
const titles: Record<string, string> = {
  "ai-slabit-vara-si-acum-pui-la-loc-toamna": "Ai slăbit vara și acum începi să pui la loc? Află de ce se întâmplă și cum poți preveni",
};

export const articles: Article[] = (data.articles as Article[])
  .map((a) => ({ ...a, title: titles[a.slug] ?? a.title }))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function articleTag(a: Article) {
  return tags[a.slug] ?? "Nutriție";
}

const months = ["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."];

// Formatare fixă (fără Intl), ca serverul și browserul să scrie aceeași dată.
export function formatDate(iso: string) {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}

export const legalPages = data.pages as Record<string, LegalPage>;
