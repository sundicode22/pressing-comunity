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
  nav: "h-14 w-14 md:h-12 md:w-12 lg:h-14 lg:w-14",
  hero: "h-28 w-28 sm:h-32 sm:w-32 lg:h-40 lg:w-40 xl:h-44 xl:w-44",
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
