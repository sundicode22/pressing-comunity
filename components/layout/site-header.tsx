"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { donateCta, headerNav } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { BrandMark } from "./brand-mark"
import { MobileNav } from "./mobile-nav"

function isActivePath(pathname: string, href: string) {
  const path = href.split("#")[0]
  if (path === "/") return pathname === "/"
  return pathname === path || pathname.startsWith(`${path}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const solid = scrolled
  const lightHero = pathname === "/"
  const onDark = !solid && !lightHero

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[var(--header-height)] transition-colors duration-300",
        solid
          ? "bg-white/95 text-black shadow-sm backdrop-blur-md"
          : onDark
            ? "bg-transparent text-white"
            : "bg-transparent text-black"
      )}
    >
      <div className="mx-auto grid h-full max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8">
        <BrandMark inverted={onDark} />

        <NavigationMenu className="hidden lg:flex" align="center">
          <NavigationMenuList className="gap-0.5">
            {headerNav.map((item) => {
              const active = isActivePath(pathname, item.href)

              if (!item.children) {
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      render={<Link href={item.href} />}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-[13px] hover:bg-black/5",
                        onDark && "hover:bg-white/10",
                        active && "underline decoration-1 underline-offset-8"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              }

              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent text-[13px] hover:bg-black/5",
                      onDark && "hover:bg-white/10",
                      active && "underline decoration-1 underline-offset-8"
                    )}
                  >
                    <Link href={item.href} className="contents">
                      {item.label}
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid min-w-64 gap-0.5 p-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavigationMenuLink
                            href={child.href}
                            render={<Link href={child.href} />}
                            className="text-sm"
                          >
                            {child.label}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-end gap-2">
          <Link
            href={donateCta.href}
            className={cn(
              buttonVariants(),
              "hidden h-10 rounded-full px-4 text-xs md:inline-flex",
              onDark
                ? "bg-white text-black hover:bg-white/90"
                : "bg-black text-white hover:bg-black/80"
            )}
          >
            {donateCta.label}
          </Link>
          <div className={cn(onDark ? "text-white" : "text-black")}>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
