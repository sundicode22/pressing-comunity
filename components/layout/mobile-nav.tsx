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
            className="size-10 rounded-full"
            aria-label="Ouvrir le menu"
          />
        }
      >
        <HugeiconsIcon icon={Menu02Icon} strokeWidth={2} className="size-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="h-full w-full max-w-none border-0 bg-white p-0 text-black sm:max-w-none"
      >
        <SheetHeader className="border-b border-black/10 px-6 py-5">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <BrandMark />
        </SheetHeader>
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-6">
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
                          "text-2xl font-medium tracking-tight",
                          active && "underline underline-offset-8"
                        )}
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                  {item.children ? (
                    <ul className="mt-3 space-y-2 pl-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <SheetClose
                            render={
                              <Link
                                href={child.href}
                                className="text-sm text-neutral-600"
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
        <div className="sticky bottom-0 grid gap-2 border-t border-black/10 bg-white p-6">
          <SheetClose
            render={
              <Link
                href={memberCta.href}
                className={cn(buttonVariants(), "h-11 rounded-full text-sm")}
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
                  buttonVariants({ variant: "outline" }),
                  "h-11 rounded-full border-black text-sm"
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
