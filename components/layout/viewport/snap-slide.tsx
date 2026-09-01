import { cn } from "@/lib/utils"

import { themeClass, type ViewportTheme } from "./themes"

type SnapSlideProps = {
  theme?: ViewportTheme
  className?: string
  children: React.ReactNode
}

export function SnapSlide({ theme, className, children }: SnapSlideProps) {
  return (
    <div
      data-snap-slide
      className={cn(
        "relative min-h-svh h-full w-full min-w-full shrink-0 overflow-hidden",
        theme ? themeClass(theme) : null,
        className
      )}
      style={{ scrollSnapAlign: "none start" }}
    >
      {children}
    </div>
  )
}
