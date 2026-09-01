import { actionAxes, homeSupportCards, virtuousCircle } from "@/lib/content"
import {
  ImageField,
  PanelContent,
  SnapRow,
  SnapSlide,
  StackPanel,
} from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import { site } from "@/lib/navigation"

export function HomeStacks() {
  return (
    <>
      <StackPanel theme="black">
        <ImageField seed={1} label="Actions de la communauté" />
      </StackPanel>

      <StackPanel theme="white">
        <PanelContent>
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
              Notre principe
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">
              Nous progressons ensemble
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
              Nous ne voulons pas nous limiter à la solidarité ponctuelle. Nous
              voulons transformer progressivement cette solidarité en formation,
              en accompagnement, en connexion et en opportunités concrètes. Notre
              principe est simple : lorsque nous progressons ensemble, notre
              impact devient plus grand.
            </p>
            <CtaRow className="justify-start">
              <CtaLink href="/qui-sommes-nous" variant="outline" icon>
                Découvrir notre vision
              </CtaLink>
            </CtaRow>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      <StackPanel theme="black">
        <ImageField seed={2} label={site.baseline} />
        <PanelContent className="justify-end">
          <FadeIn>
            <p className="max-w-xl text-2xl font-medium tracking-tight text-white md:text-4xl">
              {site.baseline}
            </p>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      <StackPanel theme="muted">
        <PanelContent>
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
              Ce que nous faisons
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">
              Cinq axes, une seule direction
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
              Donner à chacun les moyens de construire une meilleure situation.
            </p>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      <StackPanel theme="white">
        <SnapRow>
          {actionAxes.map((axe, index) => (
            <SnapSlide key={axe.title} theme={index % 2 === 0 ? "white" : "muted"}>
              <ImageField seed={index + 1} className="opacity-40" />
              <PanelContent>
                <FadeIn>
                  <p className="text-xs uppercase tracking-[0.24em] opacity-50">
                    Axe 0{index + 1}
                  </p>
                  <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight md:text-6xl">
                    {axe.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed opacity-75">
                    {axe.text}
                  </p>
                  {axe.href ? (
                    <CtaRow className="justify-start">
                      <CtaLink href={axe.href} variant="outline" icon>
                        En savoir plus
                      </CtaLink>
                    </CtaRow>
                  ) : null}
                </FadeIn>
              </PanelContent>
            </SnapSlide>
          ))}
        </SnapRow>
      </StackPanel>

      <StackPanel theme="black">
        <SnapRow>
          {virtuousCircle.map((step, index) => (
            <SnapSlide key={step.title} theme={index % 2 === 0 ? "black" : "muted"}>
              <PanelContent>
                <FadeIn>
                  <p className="text-xs uppercase tracking-[0.24em] opacity-50">
                    Comment nous créons de l&apos;impact · 0{index + 1}
                  </p>
                  <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight md:text-6xl">
                    {step.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed opacity-75">
                    {step.text}
                  </p>
                </FadeIn>
              </PanelContent>
            </SnapSlide>
          ))}
        </SnapRow>
      </StackPanel>

      <StackPanel theme="black">
        <PanelContent>
          <FadeIn>
            <h2 className="max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">
              Être membre, c&apos;est participer et contribuer
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">
              Un membre de The Pressing Community participe aux activités, accède
              aux formations et à l&apos;accompagnement, propose des initiatives et
              développe ses projets. Mais l&apos;adhésion n&apos;est pas seulement un
              droit : c&apos;est aussi une responsabilité. Chaque membre est
              encouragé à contribuer, selon ses possibilités, au développement de
              la communauté.
            </p>
            <CtaRow className="justify-start">
              <CtaLink
                href="/devenir-membre"
                className="bg-white text-black hover:bg-white/90"
              >
                Devenir membre
              </CtaLink>
            </CtaRow>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      <StackPanel theme="white">
        <SnapRow>
          {homeSupportCards.map((card, index) => (
            <SnapSlide key={card.title} theme={index % 2 === 0 ? "white" : "muted"}>
              <PanelContent>
                <FadeIn>
                  <p className="text-xs uppercase tracking-[0.24em] opacity-50">
                    Nous soutenir
                  </p>
                  <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight md:text-6xl">
                    {card.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed opacity-75">
                    {card.text}
                  </p>
                  {card.href ? (
                    <CtaRow className="justify-start">
                      <CtaLink href={card.href} icon>
                        Continuer
                      </CtaLink>
                    </CtaRow>
                  ) : null}
                </FadeIn>
              </PanelContent>
            </SnapSlide>
          ))}
        </SnapRow>
      </StackPanel>

      <StackPanel theme="black">
        <PanelContent className="items-center text-center">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">
              Comment pouvons-nous réussir ensemble ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75">
              Une personne peut changer sa vie grâce à une opportunité. Une
              communauté peut en créer des milliers.
            </p>
            <CtaRow>
              <CtaLink
                href="/devenir-membre"
                className="bg-white text-black hover:bg-white/90"
              >
                Rejoindre la communauté
              </CtaLink>
              <CtaLink
                href="/nous-soutenir/faire-un-don"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
              >
                Faire un don
              </CtaLink>
            </CtaRow>
          </FadeIn>
        </PanelContent>
      </StackPanel>
    </>
  )
}
