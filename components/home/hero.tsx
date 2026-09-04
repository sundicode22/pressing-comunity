"use client"

import { HeroMosaic } from "@/components/home/hero-mosaic"
import { BrandMark } from "@/components/layout/brand-mark"
import { StackPanel } from "@/components/layout/viewport"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import { site } from "@/lib/navigation"

export function HomeHero() {
  return (
    <StackPanel
      theme="white"
      flush
      pin={false}
      className="flex min-h-svh flex-col bg-paper lg:min-h-[120svh]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(0,124,140,0.12),transparent_48%)] lg:bg-[radial-gradient(ellipse_at_50%_28%,rgba(0,124,140,0.10),transparent_52%)]"
      />

      <div className="relative z-10 flex min-h-svh w-full min-w-0 flex-1 flex-col pt-[var(--header-height)] pb-6 lg:min-h-[120svh] lg:pb-12">
        <div className="flex w-full flex-col px-4 pt-3 text-left sm:px-6 lg:min-h-0 lg:flex-1 lg:items-center lg:justify-center lg:px-12 lg:py-8 lg:text-center">
          <Stagger className="w-full min-w-0 max-w-5xl">
            <StaggerItem>
              <BrandMark size="hero" className="lg:mx-auto" />
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-3 max-w-[16ch] text-[1.7rem] leading-[1.12] text-balance text-ink sm:mt-4 sm:max-w-xl sm:text-[2.35rem] lg:mx-auto lg:max-w-4xl lg:text-[3.25rem] xl:text-6xl">
                {site.signature}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-pretty text-muted-foreground sm:mt-4 sm:text-base lg:mx-auto lg:max-w-xl lg:mt-5 lg:text-lg">
                Une communauté camerounaise, née à Douala, qui transforme la
                solidarité en formation, en accompagnement et en opportunités
                concrètes.
              </p>
            </StaggerItem>
            <StaggerItem>
              <CtaRow className="mt-5 justify-start lg:mt-8 lg:justify-center">
                <CtaLink
                  href="/devenir-membre"
                  icon
                  className="h-12 w-full max-w-none gap-2.5 px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg lg:h-16 lg:px-10 lg:text-xl lg:gap-3 [&_svg]:size-4 sm:[&_svg]:size-5 lg:[&_svg]:size-6"
                >
                  Rejoindre la communauté
                </CtaLink>
              </CtaRow>
            </StaggerItem>
          </Stagger>
        </div>

        <HeroMosaic />
      </div>
    </StackPanel>
  )
}
