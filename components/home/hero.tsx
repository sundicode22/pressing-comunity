"use client"

import { HeroMosaic } from "@/components/home/hero-mosaic"
import { StackPanel } from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import { site } from "@/lib/navigation"

export function HomeHero() {
  return (
    <StackPanel
      theme="white"
      flush
      pin={false}
      className="flex min-h-[120svh] flex-col bg-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,rgba(0,124,140,0.10),transparent_52%)]"
      />

      <div className="relative z-10 flex min-h-[120svh] w-full min-w-0 flex-1 flex-col pt-[var(--header-height)] pb-8 md:pb-12">
        <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center px-5 py-6 text-center sm:px-8 md:px-12 md:py-8">
          <FadeIn className="w-full min-w-0 max-w-5xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal">
              {site.city}
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-[1.65rem] leading-[1.12] text-balance text-ink sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              {site.signature}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
              Une communauté camerounaise, née à Douala, qui transforme la
              solidarité en formation, en accompagnement et en opportunités
              concrètes.
            </p>
            <CtaRow className="mt-8">
              <CtaLink
                href="/devenir-membre"
                icon
                className="h-14 gap-3 px-8 text-lg sm:h-16 sm:px-10 sm:text-xl max-sm:w-full max-sm:max-w-sm [&_svg]:size-5 sm:[&_svg]:size-6"
              >
                Rejoindre la communauté
              </CtaLink>
            </CtaRow>
          </FadeIn>
        </div>

        <HeroMosaic />
      </div>
    </StackPanel>
  )
}
