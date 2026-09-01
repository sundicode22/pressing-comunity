"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Location01Icon,
  Mail01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"

import {
  PanelContent,
  StackPanel,
  StackTrack,
} from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import { site, socialLinks } from "@/lib/navigation"

const subjects = [
  "Adhésion",
  "Don ou mécénat",
  "Partenariat",
  "Formation",
  "Accompagnement",
  "Programme talents",
  "Signaler une situation",
  "Autre",
]

const channels = [
  {
    icon: WhatsappIcon,
    title: "WhatsApp",
    text: "La façon la plus rapide de nous joindre.",
    detail: `Numéro ${site.whatsapp}`,
    href: site.whatsappHref,
    cta: "Ouvrir WhatsApp",
    theme: "black" as const,
  },
  {
    icon: Mail01Icon,
    title: "E-mail",
    text: "Pour les demandes détaillées et les dossiers.",
    detail: `Adresse ${site.email}`,
    theme: "white" as const,
  },
  {
    icon: Location01Icon,
    title: "Nous rencontrer",
    text: "Adresse du siège, Douala.",
    detail: site.address,
    theme: "muted" as const,
  },
]

const fieldClass =
  "h-12 w-full rounded-2xl border-0 bg-white px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-black/15"

export function ContactView() {
  return (
    <StackTrack>
      <StackPanel theme="black" flush>
        <PanelContent className="items-center text-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] text-white/55">
              {site.city}
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-medium tracking-tight text-balance md:text-6xl">
              Nous contacter
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Une question, une proposition, une situation à signaler :
              écrivez-nous.
            </p>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      {channels.map((channel) => (
        <StackPanel key={channel.title} theme={channel.theme}>
          <PanelContent>
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.24em] opacity-50">
                Moyens de contact
              </p>
              <div className="mt-4 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-xl">
                  <span className="grid size-14 place-items-center rounded-full bg-current/10">
                    <HugeiconsIcon icon={channel.icon} strokeWidth={1.75} className="size-7" />
                  </span>
                  <h2 className="mt-6 text-4xl font-medium tracking-tight md:text-6xl">
                    {channel.title}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed opacity-75">
                    {channel.text}
                  </p>
                  {channel.cta ? (
                    <CtaRow className="justify-start">
                      <CtaLink
                        href={channel.href ?? "#"}
                        className={
                          channel.theme === "black"
                            ? "bg-white text-black hover:bg-white/90"
                            : undefined
                        }
                        icon
                      >
                        {channel.cta}
                      </CtaLink>
                    </CtaRow>
                  ) : null}
                </div>
                <p className="text-lg font-medium tracking-tight md:text-right md:text-2xl">
                  {channel.detail}
                </p>
              </div>
            </FadeIn>
          </PanelContent>
        </StackPanel>
      ))}

      <StackPanel id="message" theme="muted" pin={false}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
          <FadeIn>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              Formulaire
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-5xl">
              Envoyer un message
            </h2>
          </FadeIn>

          <div className="mt-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <form
              className="lg:col-span-7"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Nom">
                  <Input id="name" name="name" className={fieldClass} />
                </Field>
                <Field id="email" label="E-mail">
                  <Input id="email" name="email" type="email" className={fieldClass} />
                </Field>
                <Field id="whatsapp" label="WhatsApp">
                  <Input id="whatsapp" name="whatsapp" className={fieldClass} />
                </Field>
                <Field id="subject" label="Objet">
                  <select id="subject" name="subject" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Choisir un objet
                    </option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="message" label="Message" className="sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="min-h-36 w-full rounded-2xl border-0 bg-white px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-black/15"
                  />
                </Field>
              </div>
              <Button
                type="submit"
                className="mt-8 h-12 w-full rounded-full text-sm sm:w-auto sm:px-8"
              >
                Envoyer mon message
              </Button>
            </form>

            <aside className="lg:col-span-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                Moyens de contact
              </p>
              <ul className="mt-5 divide-y divide-black/10">
                {channels.map((channel) => (
                  <li key={channel.title}>
                    <ChannelRow
                      label={channel.title}
                      value={channel.detail}
                      href={channel.href}
                    />
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                Suivez nos actions au quotidien
              </p>
              <ul className="mt-5 divide-y divide-black/10">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <ChannelRow label={item.label} value="…" href={item.href} />
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </StackPanel>
    </StackTrack>
  )
}

function ChannelRow({
  label,
  value,
  href,
}: {
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-baseline justify-between gap-6 py-3.5">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-right text-sm text-neutral-500">{value}</span>
    </div>
  )

  if (!href) return content

  return (
    <a href={href} className="block hover:opacity-70">
      {content}
    </a>
  )
}

function Field({
  id,
  label,
  children,
  className,
}: {
  id: string
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 text-sm text-neutral-700">
        {label}
      </Label>
      {children}
    </div>
  )
}
