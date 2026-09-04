import { cn } from "@/lib/utils"

type StackTrackProps = {
  snap?: "y" | "none"
  className?: string
  children: React.ReactNode
}

export function StackTrack({ className, children }: StackTrackProps) {
  return (
    <div id="stack-track" className={cn("relative w-full", className)}>
      {children}
    </div>
  )
}
