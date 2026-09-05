import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { jeunesse } from "@/lib/pages"

export const metadata = {
  title: "Jeunesse & développement",
  description:
    "BRAVO 2026 : 50 000 FCFA pour vingt bacheliers et titulaires du GCE. Ateliers, métiers, numérique et sport pour la jeunesse camerounaise.",
}

export default function JeunessePage() {
  return <PagePlaceholder {...jeunesse} />
}
