import { cn } from "@/lib/utils"

export type ViewportTheme = "black" | "white" | "muted" | "teal"

export const viewportThemes: Record<ViewportTheme, string> = {
  black: "bg-ink text-white",
  white: "bg-background text-foreground",
  muted: "bg-paper text-foreground",
  teal: "bg-teal text-white",
}

export function isInvertedTheme(theme?: ViewportTheme) {
  return theme === "black" || theme === "teal"
}

export function themeClass(theme: ViewportTheme = "white", className?: string) {
  return cn(viewportThemes[theme], className)
}
