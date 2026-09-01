import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { nousSoutenir } from "@/lib/pages"

export const metadata = {
  title: "Nous soutenir",
  description: "Don, mécénat, partenariat, compétences.",
}

export default function NousSoutenirPage() {
  return <PagePlaceholder {...nousSoutenir} />
}
