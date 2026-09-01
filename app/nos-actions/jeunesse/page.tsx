import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { jeunesse } from "@/lib/pages"

export const metadata = {
  title: "Jeunesse & développement",
}

export default function JeunessePage() {
  return <PagePlaceholder {...jeunesse} />
}
