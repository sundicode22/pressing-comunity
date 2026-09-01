"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  FavouriteIcon,
  SmileIcon,
} from "@hugeicons/core-free-icons"

import { ImageField } from "@/components/layout/viewport"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { cn } from "@/lib/utils"

export function HeroMosaic() {
  return (
    <>
      <div className="mx-auto hidden min-h-0 w-full max-w-[1400px] flex-1 px-4 pb-5 pt-5 md:px-8 lg:block lg:pb-6 lg:pt-6">
        <Stagger className="grid h-full grid-cols-[1fr_1.15fr_0.95fr_1.15fr_1fr] items-end gap-3">
          <StaggerItem className="flex h-full min-h-0 flex-col gap-3">
            <DonateCard className="min-h-0 flex-[1.75]" />
            <IconCard
              href="/nos-actions/solidarite"
              icon={SmileIcon}
              label="Faire entendre leur voix"
              className="min-h-0 flex-1"
            />
          </StaggerItem>

          <StaggerItem className="h-full min-h-0">
            <PhotoCard
              href="/nos-actions/solidarite"
              seed={1}
              kicker="Solidarité"
              title="Orphelinats, veuves et familles à Douala"
              className="h-full"
            />
          </StaggerItem>

          <StaggerItem className="h-[62%] min-h-0">
            <JoinCard className="h-full" />
          </StaggerItem>

          <StaggerItem className="h-full min-h-0">
            <PhotoCard
              href="/nos-actions/formation"
              seed={2}
              kicker="Formation"
              title="Anglais, TCF, IA et entrepreneuriat"
              className="h-full"
            />
          </StaggerItem>

          <StaggerItem className="flex h-full min-h-0 flex-col gap-3">
            <ExploreCard className="min-h-0 flex-[1.75]" />
            <IconCard
              href="/qui-sommes-nous"
              icon={FavouriteIcon}
              label="Un lieu pour s'entraider"
              className="min-h-0 flex-1"
            />
          </StaggerItem>
        </Stagger>
      </div>

      <div className="grid w-full min-w-0 flex-1 grid-cols-2 content-end gap-2.5 px-4 pt-5 pb-5 sm:px-6 lg:hidden">
        <PhotoCard
          href="/nos-actions/solidarite"
          seed={1}
          kicker="Solidarité"
          title="Aider à Douala"
          className="h-32 sm:h-40"
        />
        <PhotoCard
          href="/nos-actions/formation"
          seed={2}
          kicker="Formation"
          title="Se former ensemble"
          className="h-32 sm:h-40"
        />
        <JoinCard className="col-span-2 h-28" />
      </div>
    </>
  )
}

function DonateCard({ className }: { className?: string }) {
  return (
    <Link
      href="/nous-soutenir/faire-un-don"
      className={cn(
        "group flex flex-col justify-between rounded-[1.65rem] bg-neutral-900 p-4 text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 sm:p-5",
        className
      )}
    >
      <div>
        <p className="text-3xl font-medium tracking-tight sm:text-4xl">Aider.</p>
        <p className="mt-2 max-w-[16ch] text-xs leading-relaxed text-white/65 sm:text-sm">
          Nous intervenons auprès des orphelinats, des veuves et des familles.
        </p>
      </div>
      <span className="mt-4 flex items-center justify-between gap-3 text-sm">
        Faire un don
        <ArrowDisc className="bg-white text-black group-hover:bg-neutral-200" />
      </span>
    </Link>
  )
}

function JoinCard({ className }: { className?: string }) {
  return (
    <Link
      href="/devenir-membre"
      className={cn(
        "group flex flex-col justify-between rounded-[1.65rem] bg-white p-4 text-neutral-950 ring-1 ring-black/8 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 sm:p-5",
        className
      )}
    >
      <p className="max-w-[12ch] text-lg font-medium tracking-tight sm:text-xl">
        Rejoindre la communauté
      </p>
      <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-black py-1 pr-1 pl-3 text-xs text-white">
        Devenir membre
        <ArrowDisc className="size-7 bg-white text-black group-hover:bg-neutral-200" />
      </span>
    </Link>
  )
}

function ExploreCard({ className }: { className?: string }) {
  return (
    <Link
      href="/nos-actions"
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-[1.65rem] bg-neutral-300 p-4 text-neutral-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 sm:p-5",
        className
      )}
    >
      <ImageField seed={4} className="opacity-50" />
      <div className="absolute inset-0 bg-neutral-200/50" />
      <span className="relative z-10 flex items-center justify-between gap-3 text-sm font-medium">
        Explorer
        <ArrowDisc className="bg-neutral-950 text-white group-hover:bg-black" />
      </span>
    </Link>
  )
}

function PhotoCard({
  href,
  seed,
  kicker,
  title,
  className,
}: {
  href: string
  seed: number
  kicker: string
  title: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-[1.65rem] p-4 text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        className
      )}
    >
      <ImageField seed={seed} />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/35" />
      <p className="relative z-10 text-xs tracking-wide text-white/85">{kicker}</p>
      <p className="relative z-10 max-w-[16ch] text-sm font-medium leading-snug drop-shadow-sm">
        {title}
      </p>
    </Link>
  )
}

function IconCard({
  href,
  icon,
  label,
  className,
}: {
  href: string
  icon: typeof SmileIcon
  label: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-[1.65rem] bg-neutral-950 px-4 py-3 text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25",
        className
      )}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10">
        <HugeiconsIcon icon={icon} strokeWidth={1.75} className="size-4" />
      </span>
      <span className="text-sm font-medium leading-snug">{label}</span>
    </Link>
  )
}

function ArrowDisc({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-8 shrink-0 place-items-center rounded-full transition-colors",
        className
      )}
    >
      <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} className="size-3.5" />
    </span>
  )
}
