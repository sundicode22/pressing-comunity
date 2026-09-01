import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Facebook01Icon,
  InstagramIcon,
  Linkedin01Icon,
  TiktokIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons"

import {
  footerAct,
  footerNavigate,
  legalLinks,
  site,
  socialLinks,
} from "@/lib/navigation"

import { BrandMark } from "./brand-mark"

const socialIcons = {
  Facebook: Facebook01Icon,
  Instagram: InstagramIcon,
  TikTok: TiktokIcon,
  YouTube: YoutubeIcon,
  LinkedIn: Linkedin01Icon,
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative z-40 flex h-svh min-h-svh w-full flex-col bg-black text-white"
      style={{ scrollSnapAlign: "start none" }}
    >
      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 content-start gap-12 px-6 pt-[calc(var(--header-height)+2.5rem)] md:grid-cols-4 md:gap-10 md:px-12">
        <div>
          <BrandMark inverted />
          <p className="mt-5 text-sm font-medium">{site.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{site.baseline}</p>
          <p className="mt-6 text-sm text-white/70">{site.city}</p>
          <p className="mt-1 text-sm text-white/50">{site.registration}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Naviguer</p>
          <ul className="mt-5 space-y-3.5">
            {footerNavigate.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Agir</p>
          <ul className="mt-5 space-y-3.5">
            {footerAct.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Nous joindre</p>
          <ul className="mt-5 space-y-3.5 text-sm text-white/80">
            <li>WhatsApp : {site.whatsapp}</li>
            <li>E-mail : {site.email}</li>
            <li>Adresse du siège : {site.address}</li>
          </ul>
          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map((item) => {
              const icon = socialIcons[item.label as keyof typeof socialIcons]
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="grid size-9 place-items-center rounded-full hover:bg-white/10"
                >
                  <HugeiconsIcon icon={icon} strokeWidth={2} className="size-4" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-auto px-6 pb-8 pt-24 text-xs text-white/55 md:px-12 md:pb-10 md:pt-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
