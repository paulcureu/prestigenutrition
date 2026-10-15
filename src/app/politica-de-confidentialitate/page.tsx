import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Politica de confidențialitate" };

export default function Page() {
  return <LegalPage slug="politica-de-confidentialitate" />;
}
