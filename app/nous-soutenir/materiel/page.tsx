import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { materiel } from "@/lib/pages"

export const metadata = {
  title: "Offrir du matériel",
}

export default function MaterielPage() {
  return <PagePlaceholder {...materiel} />
}
