import { PagePlaceholder } from "@/components/pages/page-placeholder"
import { talents } from "@/lib/pages"

export const metadata = {
  title: "Talents camerounais",
}

export default function TalentsPage() {
  return <PagePlaceholder {...talents} />
}
