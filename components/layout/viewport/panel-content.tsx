import { cn } from "@/lib/utils"

type PanelContentProps = {
  className?: string
  children: React.ReactNode
}

export function PanelContent({ className, children }: PanelContentProps) {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 pt-[calc(var(--header-height)+1.25rem)] pb-16 md:px-12",
        className
      )}
    >
      {children}
    </div>
  )
}
