import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { proposerIdee } from "@/lib/pages"

export const metadata = {
  title: "Proposer une idée",
  description: "Registre des Idées, Propositions & Innovations.",
}

export default function ProposerIdeePage() {
  return <PagePlaceholder {...proposerIdee} />
}
