import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { nosActions } from "@/lib/pages"

export const metadata = {
  title: "Nos actions",
  description: "Solidarité, formation, accompagnement et talents.",
}

export default function NosActionsPage() {
  return <PagePlaceholder {...nosActions} />
}
