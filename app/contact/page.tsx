import { ContactView } from "@/components/pages/contact-view"
import { parseContactSubject } from "@/lib/inquiry"

export const metadata = {
  title: "Contact",
}

type ContactPageProps = {
  searchParams: Promise<{ sujet?: string }>
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { sujet } = await searchParams
  return <ContactView defaultSubject={parseContactSubject(sujet)} />
}
