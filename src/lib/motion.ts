import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Animațiile din șablonul LifeTrack (Webflow IX3), refăcute cu GSAP.
// Elementele sunt ascunse din CSS doar când <html> are clasa `motion` (JS activ, fără reduced-motion).
//
//   data-load="50"            apare la încărcare, urcând N px (data-delay, data-duration)
//   data-load-stagger="50"    copiii apar pe rând la încărcare (pas 0.3s)
//   data-reveal="75"          apare la scroll, urcând N px
//   data-stagger="55"         copiii apar pe rând la scroll (pas 0.2s)
//   data-split="0.04"         titlu care apare literă cu literă (pasul în secunde); data-split-mask = literele urcă din mască

const EASE = "power3.out";
const START = "top 92%";

export function motionEnabled() {
  return typeof document !== "undefined" && document.documentElement.classList.contains("motion");
}

export function initMotion(scope: HTMLElement) {
  if (!motionEnabled()) return () => {};
  let ctx: gsap.Context | null = null;
  let cancelled = false;

  const run = () => {
    if (cancelled) return;
    ctx = gsap.context(() => {
      const q = <T extends Element = HTMLElement>(sel: string) => gsap.utils.toArray<T>(scope.querySelectorAll(sel));
      const num = (v: string | undefined, d: number) => (v === undefined || v === "" ? d : Number(v));

      q("[data-load]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: num(el.dataset.load, 50) },
          { autoAlpha: 1, y: 0, duration: num(el.dataset.duration, 1), delay: num(el.dataset.delay, 0.2), ease: "power3.out" },
        );
      });

      q("[data-load-stagger]").forEach((el) => {
        gsap.fromTo(
          el.children,
          { autoAlpha: 0, y: num(el.dataset.loadStagger, 50) },
          { autoAlpha: 1, y: 0, duration: 0.7, delay: 0.2, stagger: 0.3, ease: "power2.inOut" },
        );
      });

      q("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: num(el.dataset.reveal, 50) },
          {
            autoAlpha: 1, y: 0, duration: 0.7, delay: 0.3, ease: EASE,
            scrollTrigger: { trigger: el, start: START, toggleActions: "play none none reset" },
          },
        );
      });

      q("[data-stagger]").forEach((el) => {
        gsap.fromTo(
          el.children,
          { autoAlpha: 0, y: num(el.dataset.stagger, 55) },
          {
            autoAlpha: 1, y: 0, duration: 0.7, delay: 0.3, stagger: 0.2, ease: EASE,
            scrollTrigger: { trigger: el, start: START, toggleActions: "play none none reset" },
          },
        );
      });

      q("[data-split]").forEach((el) => {
        const mask = el.hasAttribute("data-split-mask");
        const split = SplitText.create(el, { type: "words,chars", mask: mask ? "chars" : undefined });
        gsap.set(el, { autoAlpha: 1 });
        gsap.fromTo(
          split.chars,
          { autoAlpha: 0, yPercent: mask ? 100 : 0 },
          {
            autoAlpha: 1, yPercent: 0, ease: EASE,
            duration: num(el.dataset.splitDuration, mask ? 0.5 : 0.4),
            stagger: num(el.dataset.split, 0.04),
            scrollTrigger: { trigger: el, start: START, toggleActions: "play none none reset" },
          },
        );
      });

      // Pe ecrane fără hover, rândul de serviciu se aprinde când trece prin mijlocul ecranului.
      const mm = gsap.matchMedia();
      mm.add("(max-width: 991px)", () => {
        q(".pn-service").forEach((el) => {
          ScrollTrigger.create({ trigger: el, start: "top center", end: "bottom center", toggleClass: "is-active" });
        });
      });
    }, scope);
    ScrollTrigger.refresh();
  };

  // Literele se împart după ce s-au încărcat fonturile, altfel lățimile sunt greșite.
  if (document.fonts?.status === "loaded") run();
  else document.fonts.ready.then(run);

  return () => {
    cancelled = true;
    ctx?.revert();
  };
}

export { gsap, ScrollTrigger };
