# Prestige Nutrition — site Next.js

Site-ul cabinetului [Prestige Nutrition](https://prestigenutrition.ro/) (Oana Năstase, nutriționist în Brașov), refăcut în Next.js pe structura și animațiile șablonului Webflow [LifeTrack](https://lifetrack-template.webflow.io/home), cu identitatea Prestige: crem, auriu și verdele smarald din logo.

Design system (tokeni, componente, logo, fotografii): https://claude.ai/artifact/B9DoBc6SvivL3LszcJMpfq

## Pornire

```bash
npm install
npm run dev
```

Site-ul rulează la http://localhost:3000. Pentru producție: `npm run build` și `npm start` (toate paginile sunt generate static).

## Structură

| Cale | Ce conține |
| --- | --- |
| `src/app/` | Paginile: Acasă, Despre, Servicii, Articole (+ fiecare articol), Contact, paginile legale, 404, sitemap, robots |
| `src/components/` | Header, Footer, secțiuni comune (prețuri, FAQ, servicii, recenzii), butoane, marquee, formular |
| `src/content/site.ts` | Telefon, e-mail, adresă, program, meniu |
| `src/content/offer.ts` | Servicii, prețuri, pachetul family, FAQ, facilități |
| `src/content/reviews.json` | Cele 29 de recenzii de pe site-ul actual |
| `src/content/wp.json` | Articolele și paginile legale importate din WordPress (HTML curățat) |
| `src/styles/tokens.css` | Culori, spațieri, raze, umbre — aceleași valori ca în design system |
| `src/styles/components.css` | Stilurile componentelor `pn-…` din design system |
| `src/lib/motion.ts` | Animațiile la scroll și la încărcare (GSAP + ScrollTrigger + SplitText) |
| `public/images/` | Logo, fotografiile cabinetului, afișele serviciilor, imaginile articolelor |

## Animații

Refăcute după configurația Webflow a șablonului:

- derulare lină cu Lenis (`duration 1.2`, `lerp 0.1`);
- hero: zoom lent pe fotografie (10s), titlul urcă 50px, subtitlul coboară din -20px, săgeata-ancoră sare în buclă;
- la scroll: cardurile urcă (75 / 50 / 55 / 90px) și apar pe rând, titlurile apar literă cu literă;
- benzi care curg (marquee) cu cuvinte uriașe în gradient;
- hover: literele butoanelor reintră una câte una, cardurile cu cifre se lărgesc și se umplu cu auriu, rândurile de servicii se umplu cu auriu, imaginile articolelor fac zoom.

În HTML, animațiile se activează cu atribute: `data-load`, `data-load-stagger`, `data-reveal`, `data-stagger`, `data-split` (vezi `src/lib/motion.ts`). Cine are „mișcare redusă” activată în sistem vede totul static.

## De știut

- Formularul de contact nu are încă server de e-mail: deschide aplicația de e-mail a vizitatorului cu mesajul completat. Pentru trimitere directă trebuie adăugat un serviciu de e-mail (de ex. Resend sau SMTP).
- Articolele noi se adaugă în `src/content/wp.json` (sau se poate conecta din nou la WordPress / un CMS).
- Fonturile (Outfit și Cormorant Garamond) se încarcă prin `next/font`, cu diacritice românești.
