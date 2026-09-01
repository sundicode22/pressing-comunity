import { cn } from "@/lib/utils"

export type ViewportTheme = "black" | "white" | "muted"

export const viewportThemes: Record<ViewportTheme, string> = {
  black: "bg-black text-white",
  white: "bg-white text-black",
  muted: "bg-neutral-100 text-black",
}

export function themeClass(theme: ViewportTheme = "white", className?: string) {
  return cn(viewportThemes[theme], className)
}
