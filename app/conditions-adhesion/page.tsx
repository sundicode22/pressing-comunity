import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { conditionsAdhesion } from "@/lib/pages"
export const metadata = {
  title: "Conditions d'adhésion",
}

export default function ConditionsAdhesionPage() {
  return <PagePlaceholder {...conditionsAdhesion} />
}
