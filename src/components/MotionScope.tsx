"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { initMotion } from "@/lib/motion";

// Rulează animațiile doar în interiorul paginii vizibile. Cu Cache Components, paginile vizitate rămân în DOM
// (ascunse de <Activity>), iar efectul se curăță când pagina e ascunsă și repornește când revine.
export function MotionScope({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => (ref.current ? initMotion(ref.current) : undefined), []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
