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
        "flex items-center gap-2.5 font-medium tracking-tight",
        inverted ? "text-white" : "text-current",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "grid size-7 place-items-center rounded-md border",
          inverted ? "border-white/40" : "border-current/40"
        )}
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M12 3 4.5 6.5v5.2c0 5 3.3 8.2 7.5 9.3 4.2-1.1 7.5-4.3 7.5-9.3V6.5L12 3Z" />
        </svg>
      </span>
      <span className="text-sm md:text-base">{site.shortName}</span>
      <span className="sr-only">{site.name}</span>
    </Link>
  )
}
