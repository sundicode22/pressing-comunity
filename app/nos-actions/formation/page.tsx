import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { formation } from "@/lib/pages"

export const metadata = {
  title: "Formation & développement",
}

export default function FormationPage() {
  return <PagePlaceholder {...formation} />
}
