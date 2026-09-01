import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { mentionsLegales } from "@/lib/pages"

export const metadata = {
  title: "Mentions légales",
}

export default function MentionsLegalesPage() {
  return <PagePlaceholder {...mentionsLegales} />
}
