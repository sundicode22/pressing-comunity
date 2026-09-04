import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { site } from "@/lib/navigation"

type BrandMarkSize = "nav" | "hero" | "footer"

type BrandMarkProps = {
  className?: string
  inverted?: boolean
  large?: boolean
  size?: BrandMarkSize
}

const sizeClass: Record<BrandMarkSize, string> = {
  nav: "h-11 w-11 md:h-9 md:w-9",
  hero: "h-20 w-20 sm:h-20 sm:w-20 lg:h-24 lg:w-24",
  footer: "h-auto w-[min(100%,18rem)] sm:w-80 md:w-[22rem]",
}

export function BrandMark({
  className,
  inverted = false,
  large = false,
  size,
}: BrandMarkProps) {
  const resolved: BrandMarkSize = size ?? (large ? "footer" : "nav")

  return (
    <Link
      href="/"
      aria-label={site.name}
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/logo.png"
        alt={site.name}
        width={5551}
        height={5597}
        priority={resolved !== "footer"}
        className={cn(
          "object-contain",
          sizeClass[resolved],
          inverted && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
        )}
      />
    </Link>
  )
}
