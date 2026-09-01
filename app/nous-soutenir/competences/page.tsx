import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { competences } from "@/lib/pages"

export const metadata = {
  title: "Offrir vos compétences",
}

export default function CompetencesPage() {
  return <PagePlaceholder {...competences} />
}
