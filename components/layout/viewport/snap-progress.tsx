import { cn } from "@/lib/utils"

export function SnapProgress({
  current,
  total,
  className,
}: {
  current: number
  total: number
  className?: string
}) {
  if (total <= 1) return null
  return (
    <div className={cn("pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3", className)}>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }, (_, index) => (
          <span key={index} className={cn("h-1.5 rounded-full", index === current ? "w-6 bg-current" : "w-1.5 bg-current/35")} />
        ))}
      </div>
      <span className="text-[11px] tabular-nums opacity-70">
        {current + 1} / {total}
      </span>
    </div>
  )
}
