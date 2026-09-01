import {
  ImageField,
  PanelContent,
  SnapRow,
  SnapSlide,
  StackPanel,
  StackTrack,
  type ViewportTheme,
} from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"

import { PlaceholderForm, type FormField } from "./placeholder-form"

export type PlaceholderCta = {
  label: string
  href: string
  variant?: "default" | "outline"
}

export type PlaceholderItem = {
  title: string
  text?: string
  href?: string
}

export type PlaceholderSection = {
  id?: string
  title: string
  subtitle?: string
  body?: string
  theme?: ViewportTheme
  layout?: "stack" | "snap" | "image"
  items?: PlaceholderItem[]
  ctas?: PlaceholderCta[]
  formFields?: FormField[]
  submitLabel?: string
  imageSeed?: number
}

export type PagePlaceholderProps = {
  title: string
  subtitle?: string
  theme?: ViewportTheme
  ctas?: PlaceholderCta[]
  sections: PlaceholderSection[]
}

function Ctas({
  ctas,
  align = "start",
  inverted = false,
}: {
  ctas?: PlaceholderCta[]
  align?: "start" | "center"
  inverted?: boolean
}) {
  if (!ctas?.length) return null

  return (
    <CtaRow className={align === "center" ? "justify-center" : "justify-start"}>
      {ctas.map((cta, index) => (
        <CtaLink
          key={cta.href + cta.label}
          href={cta.href}
          variant={cta.variant ?? (index === 0 ? "default" : "outline")}
          className={
            inverted
              ? index === 0
                ? "bg-white text-black hover:bg-white/90"
                : "border-white/40 text-white hover:bg-white/10"
              : undefined
          }
        >
          {cta.label}
        </CtaLink>
      ))}
    </CtaRow>
  )
}

export function PagePlaceholder({
  title,
  subtitle,
  theme = "black",
  ctas,
  sections,
}: PagePlaceholderProps) {
  return (
    <StackTrack snap="y">
      <StackPanel theme={theme} flush>
        <PanelContent className="items-center text-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.28em] opacity-60">
              The Pressing Community
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl leading-[1.05] font-medium tracking-tight text-balance md:text-6xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-75">
                {subtitle}
              </p>
            ) : null}
            <Ctas ctas={ctas} align="center" inverted={theme === "black"} />
          </FadeIn>
        </PanelContent>
      </StackPanel>

      {sections.map((section, index) => {
        const sectionTheme = section.theme ?? (index % 2 === 0 ? "white" : "muted")
        const inverted = sectionTheme === "black"

        if (section.layout === "image") {
          return (
            <StackPanel key={section.id ?? section.title} id={section.id} theme="black">
              <ImageField seed={section.imageSeed ?? index} label={section.title} />
              <PanelContent className="justify-end">
                <FadeIn>
                  <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-5xl">
                    {section.title}
                  </h2>
                  {section.body ? (
                    <p className="mt-4 max-w-lg text-white/75">{section.body}</p>
                  ) : null}
                </FadeIn>
              </PanelContent>
            </StackPanel>
          )
        }

        if (section.layout === "snap" && section.items?.length) {
          return (
            <StackPanel key={section.id ?? section.title} id={section.id} theme={sectionTheme}>
              <SnapRow>
                {section.items.map((item, itemIndex) => {
                  const slideTheme =
                    itemIndex % 2 === 0
                      ? sectionTheme
                      : sectionTheme === "black"
                        ? "muted"
                        : "white"

                  return (
                    <SnapSlide key={item.title} theme={slideTheme}>
                      <PanelContent>
                        <FadeIn>
                          <p className="text-xs uppercase tracking-[0.24em] opacity-50">
                            {section.title} · 0{itemIndex + 1}
                          </p>
                          <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight md:text-6xl">
                            {item.title}
                          </h2>
                          {item.text ? (
                            <p className="mt-6 max-w-xl text-base leading-relaxed opacity-75">
                              {item.text}
                            </p>
                          ) : null}
                          {item.href ? (
                            <Ctas
                              ctas={[{ label: "En savoir plus", href: item.href }]}
                              inverted={slideTheme === "black"}
                            />
                          ) : null}
                        </FadeIn>
                      </PanelContent>
                    </SnapSlide>
                  )
                })}
              </SnapRow>
            </StackPanel>
          )
        }

        return (
          <StackPanel
            key={section.id ?? section.title}
            id={section.id}
            theme={sectionTheme}
          >
            <PanelContent>
              <FadeIn>
                <h2 className="max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">
                  {section.title}
                </h2>
                {section.subtitle ? (
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] opacity-50">
                    {section.subtitle}
                  </p>
                ) : null}
                {section.body ? (
                  <p className="mt-6 max-w-xl text-base leading-relaxed opacity-75">
                    {section.body}
                  </p>
                ) : null}
                {section.items?.length ? (
                  <ul className="mt-8 grid max-w-xl gap-3 text-sm opacity-80">
                    {section.items.map((item) => (
                      <li key={item.title} className="border-b border-current/10 pb-3">
                        <span className="font-medium">{item.title}</span>
                        {item.text ? (
                          <span className="opacity-70"> — {item.text}</span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.formFields?.length ? (
                  <PlaceholderForm
                    fields={section.formFields}
                    submitLabel={section.submitLabel ?? "Envoyer"}
                  />
                ) : null}
                <Ctas ctas={section.ctas} inverted={inverted} />
              </FadeIn>
            </PanelContent>
          </StackPanel>
        )
      })}
    </StackTrack>
  )
}
