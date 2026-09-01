import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { actualites } from "@/lib/pages"

export const metadata = {
  title: "Actualités",
}

export default function ActualitesPage() {
  return <PagePlaceholder {...actualites} />
}
