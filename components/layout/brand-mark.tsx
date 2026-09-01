import Link from "next/link"

import { cn } from "@/lib/utils"
import { site } from "@/lib/navigation"

type BrandMarkProps = {
  className?: string
  inverted?: boolean
}

export function BrandMark({ className, inverted = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 font-heading tracking-tight",
        inverted ? "text-white" : "text-ink",
        className
      )}
    >
      <span
        aria-hidden
        className="relative grid size-7 place-items-center rounded-lg bg-teal text-xs font-semibold text-white md:size-8 md:text-sm"
      >
        P
        <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-orange md:size-2" />
      </span>
      <span className="truncate text-[15px] md:text-base">{site.shortName}</span>
      <span className="sr-only">{site.name}</span>
    </Link>
  )
}
