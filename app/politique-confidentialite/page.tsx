import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { politiqueConfidentialite } from "@/lib/pages"

export const metadata = {
  title: "Politique de confidentialité",
}

export default function PolitiqueConfidentialitePage() {
  return <PagePlaceholder {...politiqueConfidentialite} />
}
