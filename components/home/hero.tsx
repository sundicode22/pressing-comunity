"use client"

import { HeroMosaic } from "@/components/home/hero-mosaic"
import { StackPanel } from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import { site } from "@/lib/navigation"

export function HomeHero() {
  return (
    <StackPanel theme="white" flush className="bg-[#f6f6f4]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_22%,rgba(0,0,0,0.06),transparent_52%)]"
      />

      <div className="relative z-10 flex h-full min-h-0 w-full min-w-0 flex-col">
        <div className="flex w-full shrink-0 flex-col items-center px-5 pt-[calc(var(--header-height)+0.75rem)] text-center sm:px-8 md:px-12 lg:pt-[calc(var(--header-height)+1rem)]">
          <FadeIn className="w-full min-w-0 max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">
              {site.city}
            </p>
            <h1 className="mx-auto mt-3 max-w-3xl text-[1.55rem] leading-[1.12] font-medium tracking-tight text-balance text-neutral-950 sm:text-3xl md:text-4xl lg:text-[2.75rem]">
              {site.signature}
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-pretty text-neutral-500 md:mt-3.5">
              The Pressing Community est une communauté camerounaise qui
              transforme la solidarité en formation, en accompagnement et en
              opportunités concrètes. Nous aidons aujourd&apos;hui, et nous
              construisons ce qui aidera demain.
            </p>
            <CtaRow className="mt-4 flex-col sm:flex-row">
              <CtaLink href="/devenir-membre" className="max-sm:w-full max-sm:max-w-xs">
                Rejoindre la communauté
              </CtaLink>
              <CtaLink
                href="/nos-actions"
                variant="secondary"
                className="bg-neutral-200 text-neutral-950 hover:bg-neutral-300 max-sm:w-full max-sm:max-w-xs"
              >
                Découvrir nos actions
              </CtaLink>
            </CtaRow>
          </FadeIn>
        </div>

        <HeroMosaic />
      </div>
    </StackPanel>
  )
}
