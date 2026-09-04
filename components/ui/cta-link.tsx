import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost" | "secondary" | "accent"
  className?: string
  icon?: boolean
}

export function CtaLink({
  href,
  children,
  variant = "default",
  className,
  icon = false,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: variant === "accent" ? "default" : variant }),
        "h-12 rounded-full px-6 text-base font-normal sm:h-13 sm:px-7 gap-2",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-teal-deep",
        variant === "accent" && "bg-orange text-ink hover:bg-orange/90",
        variant === "outline" && "border-current bg-transparent",
        className
      )}
    >
      {children}
      {icon ? (
        <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} className="size-[1.1em]" />
      ) : null}
    </Link>
  )
}

export function CtaRow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mt-8 flex flex-wrap items-center justify-center gap-3", className)}>
      {children}
    </div>
  )
}
