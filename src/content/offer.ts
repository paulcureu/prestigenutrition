// Oferta reală a cabinetului, preluată de pe prestigenutrition.ro/servicii-nutritionist-brasov.

export type Service = {
  slug: string;
  word: string;
  title: string;
  short: string;
  long: string;
  duration?: string;
  price: string;
  image: string;
  icon: "stethoscope" | "calendar" | "salad" | "users" | "monitor";
};

export const services: Service[] = [
  {
    slug: "consultatie",
    word: "Consultații",
    title: "Consultații nutriționale",
    short: "Anamneză detaliată, analiză corporală cu bioimpedanță și obiective clare, fizic sau online.",
    long: "Prima consultație constă într-o anamneză detaliată în care analizăm istoricul medical, antecedentele heredo-colaterale, ancheta nutrițională, analiza corporală cu bioimpedanță, măsurătorile antropometrice, precum și stabilirea obiectivelor și a unui target în funcție de nevoile tale.",
    duration: "60 de minute",
    price: "300 LEI",
    image: "/images/servicii/consultatii.jpg",
    icon: "stethoscope",
  },
  {
    slug: "monitorizare",
    word: "Monitorizare",
    title: "Monitorizări săptămânale",
    short: "În fiecare săptămână refacem măsurătorile și ajustăm planul alimentar după evoluția ta.",
    long: "Monitorizările săptămânale constau în refacerea analizei corporale și a măsurătorilor antropometrice pentru a vedea evoluția și a interveni cu ajustările necesare în planul alimentar pentru săptămâna următoare. Planul se schimbă săptămânal, în funcție de evoluție și de dorințele tale alimentare.",
    duration: "30 de minute",
    price: "150 LEI",
    image: "/images/servicii/monitorizari.jpg",
    icon: "calendar",
  },
  {
    slug: "pachet-3-luni",
    word: "Planuri",
    title: "Pachet 3 luni",
    short: "1 consultație inițială + 11 monitorizări, cu plan alimentar 100% personalizat.",
    long: "Pachetul de 3 luni include prima consultație nutrițională (anamneză completă, analiză corporală și măsurători antropometrice) și monitorizări săptămânale în Brașov, unde refacem analiza corporală și ajustăm planul alimentar personalizat în funcție de evoluția ta.",
    price: "1650 LEI",
    image: "/images/servicii/pachet-3-luni.jpg",
    icon: "salad",
  },
  {
    slug: "pachet-family",
    word: "Family",
    title: "Pachet family (2 membri)",
    short: "Consultație inițială și monitorizări pentru doi, la preț redus.",
    long: "Pentru cuplurile sau membrii familiei care vor să facă schimbarea împreună: consultația inițială pentru două persoane la 500 LEI (redus de la 600 LEI) și monitorizarea săptămânală la 250 LEI (redus de la 300 LEI).",
    price: "500 LEI",
    image: "/images/servicii/pachet-family.jpg",
    icon: "users",
  },
];

export const pricing = [
  {
    name: "Consultație inițială",
    value: "300",
    suffix: "LEI / 60 min",
    title: "Prima consultație",
    desc: "Punctul de plecare: te cunosc, înțeleg obiceiurile tale și stabilim împreună obiectivele.",
    items: ["Anamneză detaliată", "Analiză corporală cu bioimpedanță", "Măsurători antropometrice", "Obiective și target personalizat"],
  },
  {
    name: "Pachet 3 luni",
    value: "1650",
    suffix: "LEI",
    title: "1 consultație + 11 monitorizări",
    desc: "Pentru rezultate reale și ghidare constantă, pas cu pas, timp de trei luni.",
    items: ["Consultația inițială completă", "11 monitorizări săptămânale", "Analiză corporală refăcută săptămânal", "Plan alimentar ajustat în fiecare săptămână"],
    featured: true,
  },
  {
    name: "Monitorizare săptămânală",
    value: "150",
    suffix: "LEI / 30 min",
    title: "Ajustare săptămânală",
    desc: "Vedem evoluția și adaptăm planul alimentar la ce s-a schimbat.",
    items: ["Analiză corporală refăcută", "Măsurători antropometrice", "Plan nou pentru săptămâna următoare"],
  },
];

export const family = {
  title: "Pachet family (2 membri)",
  rows: [
    { label: "Consultație inițială", value: "500 LEI", old: "600 LEI" },
    { label: "Monitorizare săptămânală", value: "250 LEI", old: "300 LEI" },
  ],
};

export const facilities = [
  { title: "Consultații fizice", text: "Întâlniri față în față pentru a analiza nevoile tale, într-un spațiu confortabil și încurajator." },
  { title: "Consultații online", text: "Accesibilitate maximă prin întâlniri virtuale, cu programare flexibilă, adaptată programului tău." },
  { title: "Planuri alimentare", text: "Fiecare plan este creat special pentru tine, ținând cont de preferințele tale alimentare și de stilul tău de viață." },
  { title: "Monitorizare săptămânală", text: "Refacem analiza corporală și măsurătorile ca să vedem evoluția și să ajustăm planul la timp." },
  { title: "Educație alimentară", text: "Îți ofer cunoștințele esențiale despre nutriție, ca să iei singur cele mai bune decizii pentru sănătatea ta." },
  { title: "Sprijin constant", text: "Te încurajez în fiecare pas. Aici ești susținut și înțeles în mod individual, nu judecat." },
];

export const faq = [
  {
    q: "Cum decurge prima consultație?",
    a: "Durează aproximativ 60 de minute și începe cu o anamneză detaliată: istoricul medical, antecedentele heredo-colaterale și ancheta nutrițională. Urmează analiza corporală cu bioimpedanță și măsurătorile antropometrice, apoi stabilim împreună obiectivele.",
  },
  {
    q: "Planul alimentar ține cont de ce îmi place să mănânc?",
    a: "Da. Fiecare plan este construit de la zero împreună cu tine, ținând cont de stilul de viață, de preferințele alimentare și de analizele medicale. Nu folosesc soluții generale sau diete „universal valabile”.",
  },
  {
    q: "Ce înseamnă monitorizarea săptămânală?",
    a: "O întâlnire de 30 de minute în care refacem analiza corporală și măsurătorile antropometrice, vedem evoluția și ajustăm planul alimentar pentru săptămâna următoare.",
  },
  {
    q: "Pot face consultațiile online?",
    a: "Da. Ofer și consultații online, cu programare flexibilă, pentru cei care nu pot ajunge la cabinet.",
  },
  {
    q: "Unde este cabinetul și care este programul?",
    a: "Cabinetul Prestige Nutrition este pe Calea București nr. 57, Brașov. Programul: Luni – Vineri 8:00 – 20:00, Sâmbătă 09:00 – 13:00, Duminică închis.",
  },
];

export const pillars = [
  { title: "Sprijin constant", text: "Te încurajez în fiecare pas al călătoriei tale. Aici, ești susținut și înțeles în mod individual." },
  { title: "Abordare echilibrată", text: "Promovez un stil de viață sănătos fără restricții drastice. Schimbările durabile se construiesc cu răbdare și disciplină." },
  { title: "Educație alimentară", text: "Îți ofer cunoștințe esențiale despre nutriție, pentru a lua cele mai bune decizii pentru sănătatea ta." },
];
