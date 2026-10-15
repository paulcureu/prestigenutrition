import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Politica cookies" };

export default function Page() {
  return <LegalPage slug="politica-cookies" />;
}
