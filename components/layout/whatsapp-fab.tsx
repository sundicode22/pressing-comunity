import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { WhatsappIcon } from "@hugeicons/core-free-icons"

import { site } from "@/lib/navigation"

export function WhatsAppFab() {
  return (
    <Link
      href={site.whatsappHref}
      className="group fixed right-5 bottom-5 z-40 flex items-center gap-3"
      aria-label="Écrivez-nous"
    >
      <span className="pointer-events-none translate-x-2 rounded-full bg-ink px-3 py-1.5 text-xs text-white opacity-0 shadow-lg transition group-hover:translate-x-0 group-hover:opacity-100">
        Écrivez-nous
      </span>
      <span className="grid size-14 place-items-center rounded-full bg-teal text-white shadow-lg ring-1 ring-white/10 transition group-hover:scale-105 hover:bg-teal-deep">
        <HugeiconsIcon icon={WhatsappIcon} strokeWidth={2} className="size-6" />
      </span>
    </Link>
  )
}
