"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, motionEnabled } from "@/lib/motion";

// Derularea lină din șablon (Lenis, sincronizat cu ScrollTrigger prin ticker-ul GSAP).
export function SmoothScroll() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    if (!motionEnabled()) return;
    const lenis = new Lenis({ duration: 1.2, lerp: 0.1, wheelMultiplier: 1, anchors: { offset: -100 } });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
  return null;
}
