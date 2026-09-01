import { cn } from "@/lib/utils"

type StackTrackProps = {
  snap?: "y" | "none"
  className?: string
  children: React.ReactNode
}

export function StackTrack({ snap = "none", className, children }: StackTrackProps) {
  return (
    <div
      className={cn(
        "relative",
        snap === "y" && "lg:snap-y lg:snap-mandatory",
        className
      )}
    >
      {children}
    </div>
  )
}
