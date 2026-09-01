import Image from "next/image"

import { getMedia, type MediaKey } from "@/lib/media"
import { cn } from "@/lib/utils"

type ImageFieldProps = {
  name?: MediaKey
  seed?: number
  src?: string
  alt?: string
  className?: string
  label?: string
  overlay?: boolean
  priority?: boolean
  sizes?: string
}

export function ImageField({
  name,
  seed = 0,
  src,
  alt,
  className,
  label,
  overlay = true,
  priority = false,
  sizes = "100vw",
}: ImageFieldProps) {
  const asset = src
    ? { src, alt: alt ?? label ?? "" }
    : getMedia(name, seed)
  const imageAlt = alt ?? label ?? asset.alt

  return (
    <div
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn("absolute inset-0 overflow-hidden bg-ink", className)}
    >
      <Image
        src={asset.src}
        alt={imageAlt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized
        className="object-cover object-[center_20%]"
      />
      {overlay ? (
        <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/25 to-ink/40" />
      ) : null}
    </div>
  )
}
