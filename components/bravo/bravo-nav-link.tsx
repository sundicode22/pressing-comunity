"use client"

import type { ReactNode } from "react"
import Link from "next/link"

import { getBravoWindow } from "@/lib/bravo/window"
import { bravoCta } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function BravoNavLink({
  className,
  children = bravoCta.label,
}: {
  className?: string
  children?: ReactNode
}) {
  if (getBravoWindow() === "closed") return null

  return (
    <Link href={bravoCta.href} className={cn(className)}>
      {children}
    </Link>
  )
}
