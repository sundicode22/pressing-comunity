import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { WhatsappIcon } from "@hugeicons/core-free-icons"

import { site } from "@/lib/navigation"

export function WhatsAppFab() {
  return (
    <Link
      href={site.whatsappHref}
      className="group fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:right-5 sm:bottom-5 z-40 flex items-center gap-3"
      aria-label="Écrivez-nous sur WhatsApp"
    >
      <span className="pointer-events-none hidden sm:inline-block translate-x-2 rounded-full bg-ink px-3 py-1.5 text-xs text-white opacity-0 shadow-lg transition group-hover:translate-x-0 group-hover:opacity-100">
        Écrivez-nous
      </span>
      <span className="grid size-12 sm:size-14 place-items-center rounded-full bg-teal text-white shadow-xl ring-1 ring-white/20 transition group-hover:scale-105 hover:bg-teal-deep">
        <HugeiconsIcon icon={WhatsappIcon} strokeWidth={2} className="size-5 sm:size-6" />
      </span>
    </Link>
  )
}
