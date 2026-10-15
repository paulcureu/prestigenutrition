import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { legal, nav, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...nav.map((n) => ({ url: `${site.url}${n.href === "/" ? "" : n.href}`, changeFrequency: "monthly" as const, priority: n.href === "/" ? 1 : 0.8 })),
    ...articles.map((a) => ({ url: `${site.url}/articole/${a.slug}`, lastModified: a.date, priority: 0.6 })),
    ...legal.map((l) => ({ url: `${site.url}${l.href}`, priority: 0.2 })),
  ];
}
