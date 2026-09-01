import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { devenirMembre } from "@/lib/pages"

export const metadata = {
  title: "Devenir membre",
  description:
    "Rejoignez une communauté camerounaise qui forme, accompagne et crée des opportunités. Adhésion en ligne.",
}

export default function DevenirMembrePage() {
  return <PagePlaceholder {...devenirMembre} />
}
