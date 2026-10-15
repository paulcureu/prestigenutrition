import type { NextConfig } from "next";
import wp from "./src/content/wp.json";

// Adresele vechi de pe site-ul WordPress, ca link-urile existente și pozițiile din Google să rămână valabile.
const oldPages: Record<string, string> = {
  "/despre-cabinet-nutritie-brasov": "/despre",
  "/servicii-nutritionist-brasov": "/servicii",
  "/articole-despre-nutritie-si-alimentatie-sanatoasa": "/articole",
  "/contact-cabinet-nutritie-brasov": "/contact",
};

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      ...Object.entries(oldPages).map(([source, destination]) => ({ source, destination, permanent: true })),
      // Articolele erau direct la rădăcină: /<slug>/ → /articole/<slug>
      ...wp.articles.map((a) => ({ source: `/${a.slug}`, destination: `/articole/${a.slug}`, permanent: true })),
      { source: "/category/:path*", destination: "/articole", permanent: true },
    ];
  },
};

export default nextConfig;
