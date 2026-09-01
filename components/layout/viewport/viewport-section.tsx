import { cn } from "@/lib/utils"

import { themeClass, type ViewportTheme } from "./themes"

type ViewportSectionProps = {
  id?: string
  theme?: ViewportTheme
  snap?: boolean
  className?: string
  children: React.ReactNode
}

export function ViewportSection({
  id,
  theme = "white",
  snap = true,
  className,
  children,
}: ViewportSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative h-svh min-h-svh w-full overflow-hidden",
        snap && "snap-start snap-always",
        themeClass(theme),
        className
      )}
    >
      {children}
    </section>
  )
}
