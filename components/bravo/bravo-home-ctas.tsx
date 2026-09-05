"use client"

import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import { getBravoWindow } from "@/lib/bravo/window"

export function BravoHomeCtas() {
  const showCampaign = getBravoWindow() !== "closed"

  return (
    <CtaRow className="mt-5 justify-start lg:mt-8 lg:justify-center">
      {showCampaign ? (
        <CtaLink
          href="/bravo-2026"
          className="h-12 w-full max-w-none gap-2.5 bg-orange px-6 text-base text-ink hover:bg-orange/90 sm:h-14 sm:w-auto sm:px-8 sm:text-lg lg:h-16 lg:px-10 lg:text-xl"
        >
          BRAVO 2026 — candidater
        </CtaLink>
      ) : null}
      <CtaLink
        href="/devenir-membre"
        icon
        variant={showCampaign ? "outline" : "default"}
        className="h-12 w-full max-w-none gap-2.5 px-6 text-base sm:h-14 sm:w-auto sm:px-8 sm:text-lg lg:h-16 lg:px-10 lg:text-xl lg:gap-3 [&_svg]:size-4 sm:[&_svg]:size-5 lg:[&_svg]:size-6"
      >
        Rejoindre la communauté
      </CtaLink>
    </CtaRow>
  )
}
