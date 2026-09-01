"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu02Icon } from "@hugeicons/core-free-icons"

import { donateCta, headerNav, memberCta } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { BrandMark } from "./brand-mark"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="size-9 rounded-full"
            aria-label="Ouvrir le menu"
          />
        }
      >
        <HugeiconsIcon icon={Menu02Icon} strokeWidth={2} className="size-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="h-full w-full max-w-none border-0 bg-white p-0 text-ink sm:max-w-none"
      >
        <SheetHeader className="border-b border-ink/10 px-5 py-4 sm:px-6 sm:py-5">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <BrandMark />
        </SheetHeader>
        <nav className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
          <ul className="space-y-5">
            {headerNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.split("#")[0])

              return (
                <li key={item.href}>
                  <SheetClose
                    render={
                      <Link
                        href={item.href}
                        className={cn(
                          "inline-flex items-center gap-2.5 font-heading text-xl sm:text-2xl tracking-tight",
                          active && "text-teal"
                        )}
                      />
                    }
                  >
                    {active ? (
                      <span className="size-1.5 rounded-full bg-orange" aria-hidden />
                    ) : null}
                    {item.label}
                  </SheetClose>
                  {item.children ? (
                    <ul className="mt-2 space-y-2 pl-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SheetClose
                            render={
                              <Link
                                href={child.href}
                                className="font-heading text-sm text-muted-foreground hover:text-ink"
                              />
                            }
                          >
                            {child.label}
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="sticky bottom-0 grid gap-2.5 border-t border-ink/10 bg-white p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] sm:p-6">
          <SheetClose
            render={
              <Link
                href={memberCta.href}
                className={cn(buttonVariants(), "h-11 rounded-full text-sm font-semibold")}
              />
            }
          >
            {memberCta.label}
          </SheetClose>
          <SheetClose
            render={
              <Link
                href={donateCta.href}
                className={cn(
                  buttonVariants(),
                  "h-11 rounded-full bg-orange text-ink hover:bg-orange/90 text-sm font-semibold"
                )}
              />
            }
          >
            {donateCta.label}
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
