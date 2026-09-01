import Link from "next/link"

import { ImageField } from "@/components/layout/viewport"
import { cn } from "@/lib/utils"

import type { PlaceholderItem } from "./page-placeholder"

function badgeLabel(title: string) {
  return title.split(/\s*[&—|]\s*/)[0]?.trim() ?? title
}

export function CategoryCards({
  items,
  inverted = false,
}: {
  items: PlaceholderItem[]
  inverted?: boolean
}) {
  const mosaic = items.length === 5 || items.length === 7

  return (
    <ul
      className={cn(
        "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        mosaic ? "auto-rows-[minmax(16.5rem,1fr)]" : "auto-rows-[minmax(22rem,1fr)]"
      )}
    >
      {items.map((item, index) => {
        const tall = mosaic && index === 0
        const inner = (
          <>
            {item.image ? (
              <ImageField
                name={item.image}
                label={item.title}
                overlay={false}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className={cn("absolute inset-0", inverted ? "bg-ink/40" : "bg-teal")} />
            )}
            <div
              className={cn(
                "absolute inset-0 bg-linear-to-t via-ink/15 to-ink/25",
                inverted ? "from-ink/70" : "from-ink/85"
              )}
            />
            <p className="relative z-10 w-fit rounded-full bg-orange px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-ink">
              {badgeLabel(item.title)}
            </p>
            <div className="relative z-10 mt-auto">
              <h3 className="max-w-none text-[15px] sm:text-base font-bold leading-snug text-white sm:max-w-[22ch]">
                {item.title}
              </h3>
              {item.text ? (
                <p className="mt-1.5 line-clamp-2 text-xs sm:text-[13px] font-semibold leading-relaxed text-white/75">
                  {item.text}
                </p>
              ) : null}
            </div>
          </>
        )

        return (
          <li
            key={item.title}
            className={cn(tall && "sm:row-span-2")}
          >
            {item.href ? (
              <Link
                href={item.href}
                className="group relative flex h-full min-h-[16.5rem] flex-col justify-between overflow-hidden rounded-[1.65rem] p-4 text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {inner}
              </Link>
            ) : (
              <article className="relative flex h-full min-h-[16.5rem] flex-col justify-between overflow-hidden rounded-[1.65rem] p-4 text-white">
                {inner}
              </article>
            )}
          </li>
        )
      })}
    </ul>
  )
}
