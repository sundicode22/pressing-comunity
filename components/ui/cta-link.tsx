import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost" | "secondary"
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
        buttonVariants({ variant }),
        "h-11 rounded-full px-5 text-sm font-medium sm:h-12 sm:px-6",
        variant === "default" && "bg-black text-white hover:bg-black/80",
        variant === "outline" && "border-current bg-transparent",
        className
      )}
    >
      {children}
      {icon ? (
        <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} className="size-4" />
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
