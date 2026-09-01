import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { quiSommesNous } from "@/lib/pages"

export const metadata = {
  title: "Qui sommes-nous",
  description:
    "Vision, mission, valeurs et gouvernance d'une communauté camerounaise engagée pour la formation, l'accompagnement et les opportunités.",
}

export default function QuiSommesNousPage() {
  return <PagePlaceholder {...quiSommesNous} />
}
