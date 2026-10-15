import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { InlineScript, motionBootScript } from "@/components/InlineScript";
import { site } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Nutriționist Brașov — Prestige Nutrition by Oana Năstase",
    template: "%s — Prestige Nutrition Brașov",
  },
  description:
    "Cabinet de nutriție în Brașov, pe Calea București 57. Consultații fizice și online, planuri alimentare 100% personalizate și monitorizare săptămânală cu Oana Năstase.",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: site.name,
    images: [{ url: "/images/cabinet/oana-birou.jpg", width: 1600, height: 1067 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#fdf8f1",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Prestige Nutrition by Oana Năstase",
  url: site.url,
  telephone: "+40725819215",
  email: site.email,
  image: `${site.url}/images/cabinet/interior.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calea București nr. 57",
    addressLocality: "Brașov",
    addressCountry: "RO",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${outfit.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        <InlineScript html={motionBootScript} />
      </head>
      <body className="pn-root">
        <a className="skip-link" href="#continut">
          Sari la conținut
        </a>
        <SmoothScroll />
        <Header />
        <main id="continut">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
