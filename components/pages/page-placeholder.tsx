import {
  ImageField,
  PanelContent,
  SnapRow,
  SnapSlide,
  StackPanel,
  StackTrack,
  isInvertedTheme,
  type ViewportTheme,
} from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import type { MediaKey } from "@/lib/media"
import { cn } from "@/lib/utils"

import { CategoryCards } from "./category-cards"

export type PlaceholderCta = {
  label: string
  href: string
  variant?: "default" | "outline"
}

export type PlaceholderItem = {
  title: string
  text?: string
  href?: string
  image?: MediaKey
}

export type PlaceholderSection = {
  id?: string
  title: string
  subtitle?: string
  body?: string | string[]
  theme?: ViewportTheme
  layout?: "stack" | "snap" | "image" | "split" | "cards"
  items?: PlaceholderItem[]
  ctas?: PlaceholderCta[]
  image?: MediaKey
  imageSeed?: number
}

export type PagePlaceholderProps = {
  title: string
  subtitle?: string
  theme?: ViewportTheme
  cover?: MediaKey
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
          className={
            inverted
              ? index === 0
                ? undefined
                : "border-white/50 text-white hover:bg-white/10"
              : undefined
          }
          variant={
            inverted
              ? index === 0
                ? "accent"
                : (cta.variant ?? "outline")
              : (cta.variant ?? (index === 0 ? "default" : "outline"))
          }
        >
          {cta.label}
        </CtaLink>
      ))}
    </CtaRow>
  )
}

function SectionBody({
  body,
  className,
}: {
  body?: string | string[]
  className?: string
}) {
  if (!body) return null
  const paragraphs = Array.isArray(body) ? body : [body]

  return (
    <div className={cn("mt-4 sm:mt-6 max-w-xl space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed opacity-75", className)}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  )
}

function SectionInner({
  section,
  inverted,
}: {
  section: PlaceholderSection
  inverted: boolean
}) {
  return (
    <FadeIn>
      <h2 className="max-w-3xl text-2xl sm:text-3xl md:text-5xl">{section.title}</h2>
      {section.subtitle ? (
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm uppercase tracking-[0.2em] opacity-50">
          {section.subtitle}
        </p>
      ) : null}
      <SectionBody body={section.body} />
      {section.items?.length ? (
        <ul className="mt-6 sm:mt-8 grid max-w-xl gap-2.5 sm:gap-3 text-sm sm:text-base opacity-80">
          {section.items.map((item) => (
            <li key={item.title} className="border-b border-current/10 pb-2.5 sm:pb-3">
              <span className="font-medium">{item.title}</span>
              {item.text ? <span className="opacity-70"> — {item.text}</span> : null}
            </li>
          ))}
        </ul>
      ) : null}
      <Ctas ctas={section.ctas} inverted={inverted} />
    </FadeIn>
  )
}

export function PagePlaceholder({
  title,
  subtitle,
  theme = "black",
  cover,
  ctas,
  sections,
}: PagePlaceholderProps) {
  return (
    <StackTrack snap="y">
      <StackPanel theme={theme} flush>
        {cover ? <ImageField name={cover} label={title} priority /> : null}
        <PanelContent className={cover ? "items-center justify-end text-center" : "items-center text-center"}>
          <FadeIn>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-orange">
              The Pressing Community
            </p>
            <h1 className="mx-auto mt-4 sm:mt-5 max-w-4xl text-3xl leading-[1.08] text-balance sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base leading-relaxed opacity-75 sm:text-lg">
                {subtitle}
              </p>
            ) : null}
            <Ctas ctas={ctas} align="center" inverted={isInvertedTheme(theme) || Boolean(cover)} />
          </FadeIn>
        </PanelContent>
      </StackPanel>

      {sections.map((section, index) => {
        const sectionTheme = section.theme ?? (index % 2 === 0 ? "white" : "muted")
        const inverted = isInvertedTheme(sectionTheme)

        if (section.layout === "image") {
          return (
            <StackPanel key={section.id ?? section.title} id={section.id} theme="black">
              <ImageField
                name={section.image}
                seed={section.imageSeed ?? index}
                label={section.title}
              />
              <PanelContent className="justify-end">
                <FadeIn>
                  <h2 className="max-w-xl text-2xl sm:text-3xl md:text-5xl">{section.title}</h2>
                  <SectionBody body={section.body} className="text-white/75" />
                  <Ctas ctas={section.ctas} inverted />
                </FadeIn>
              </PanelContent>
            </StackPanel>
          )
        }

        if (section.layout === "split" && section.image) {
          return (
            <StackPanel
              key={section.id ?? section.title}
              id={section.id}
              theme={sectionTheme}
              pin={false}
            >
              <div className="grid min-h-svh md:grid-cols-2">
                <div className="relative min-h-[35vh] sm:min-h-[42vh] md:min-h-svh">
                  <ImageField
                    name={section.image}
                    label={section.title}
                    overlay={false}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <PanelContent>
                  <SectionInner section={section} inverted={inverted} />
                </PanelContent>
              </div>
            </StackPanel>
          )
        }

        if (section.layout === "cards" && section.items?.length) {
          return (
            <StackPanel
              key={section.id ?? section.title}
              id={section.id}
              theme={sectionTheme}
              pin={false}
            >
              <div className="mx-auto w-full max-w-6xl px-4 pt-[calc(var(--header-height)+1rem)] pb-16 sm:px-6 sm:pb-20 md:px-12">
                <FadeIn>
                  <h2 className="max-w-3xl text-2xl sm:text-3xl md:text-5xl">{section.title}</h2>
                  {section.subtitle ? (
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm uppercase tracking-[0.2em] opacity-50">
                      {section.subtitle}
                    </p>
                  ) : null}
                  <SectionBody body={section.body} className="max-w-2xl" />
                </FadeIn>
                <CategoryCards items={section.items} inverted={inverted} />
                <Ctas ctas={section.ctas} inverted={inverted} />
              </div>
            </StackPanel>
          )
        }

        if (section.layout === "snap" && section.items?.length) {
          return (
            <StackPanel key={section.id ?? section.title} id={section.id} theme={sectionTheme}>
              <SnapRow>
                {section.items.map((item, itemIndex) => {
                  const slideTheme = item.image
                    ? "black"
                    : itemIndex % 2 === 0
                      ? sectionTheme
                      : sectionTheme === "black"
                        ? "muted"
                        : "white"

                  return (
                    <SnapSlide key={item.title} theme={slideTheme}>
                      {item.image ? (
                        <ImageField name={item.image} label={item.title} />
                      ) : null}
                      <PanelContent>
                        <FadeIn>
                          <p
                            className={cn(
                              "text-xs font-semibold uppercase tracking-[0.24em]",
                              isInvertedTheme(slideTheme) || item.image ? "text-orange" : "text-teal"
                            )}
                          >
                            {section.title} · 0{itemIndex + 1}
                          </p>
                          <h2 className="mt-3 sm:mt-4 max-w-2xl text-3xl sm:text-4xl md:text-6xl">{item.title}</h2>
                          {item.text ? (
                            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed opacity-75">
                              {item.text}
                            </p>
                          ) : null}
                          {item.href ? (
                            <Ctas
                              ctas={[{ label: "En savoir plus", href: item.href }]}
                              inverted={isInvertedTheme(slideTheme) || Boolean(item.image)}
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
          <StackPanel key={section.id ?? section.title} id={section.id} theme={sectionTheme}>
            <PanelContent>
              <SectionInner section={section} inverted={inverted} />
            </PanelContent>
          </StackPanel>
        )
      })}
    </StackTrack>
  )
}
