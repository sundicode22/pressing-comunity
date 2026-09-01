import { actionAxes, homeSupportCards, virtuousCircle } from "@/lib/content"
import {
  ImageField,
  PanelContent,
  SnapRow,
  SnapSlide,
  StackPanel,
} from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { CategoryCards } from "@/components/pages/category-cards"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import { site } from "@/lib/navigation"

export function HomeStacks() {
  return (
    <>
      <StackPanel theme="black">
        <ImageField name="charity" label="Actions de la communauté" priority />
      </StackPanel>

      <StackPanel theme="white">
        <PanelContent>
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
              Notre principe
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
              Nous progressons ensemble
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Nous ne voulons pas nous limiter à la solidarité ponctuelle. Nous
              voulons transformer progressivement cette solidarité en formation,
              en accompagnement, en connexion et en opportunités concrètes. Aider
              aujourd&apos;hui reste nécessaire. Former et ouvrir des portes, c&apos;est
              ce qui change une trajectoire. Notre principe est simple : lorsque
              nous progressons ensemble, notre impact devient plus grand.
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
        <ImageField name="crowd" label={site.baseline} />
        <PanelContent className="justify-end">
          <FadeIn>
            <h2 className="max-w-3xl text-4xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
              {site.baseline}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Nous commençons ensemble à Douala. La solidarité ouvre le chemin.
              La formation et l&apos;accompagnement le prolongent.
            </p>
            <CtaRow className="justify-start">
              <CtaLink href="/devenir-membre" variant="accent">
                Rejoindre la communauté
              </CtaLink>
            </CtaRow>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      <StackPanel theme="muted" pin={false}>
        <div className="mx-auto w-full max-w-6xl px-6 pt-[calc(var(--header-height)+1.25rem)] pb-20 md:px-12">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
              Ce que nous faisons
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
              Cinq axes, une seule direction
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Donner à chacun les moyens de construire une meilleure situation.
              La solidarité ouvre le chemin. La formation et l&apos;accompagnement
              le prolongent. Les talents et la jeunesse en sont l&apos;horizon.
              Ces cinq catégories ne sont pas des tiroirs séparés : une action
              peut en ouvrir une autre.
            </p>
          </FadeIn>
          <CategoryCards items={actionAxes} />
        </div>
      </StackPanel>

      <StackPanel theme="black">
        <SnapRow>
          {virtuousCircle.map((step, index) => (
            <SnapSlide key={step.title} theme="black">
              {step.image ? (
                <ImageField name={step.image} label={step.title} />
              ) : null}
              <PanelContent>
                <FadeIn>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">
                    Comment nous créons de l&apos;impact · 0{index + 1}
                  </p>
                  <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
                    {step.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                    {step.text}
                  </p>
                </FadeIn>
              </PanelContent>
            </SnapSlide>
          ))}
        </SnapRow>
      </StackPanel>

      <StackPanel theme="black">
        <ImageField name="hands" overlay={false} className="opacity-30" />
        <PanelContent>
          <FadeIn>
            <h2 className="max-w-3xl text-3xl md:text-5xl">
              Être membre, c&apos;est participer et contribuer
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Un membre de The Pressing Community participe aux activités, accède
              aux formations et à l&apos;accompagnement, propose des initiatives et
              développe ses projets. Mais l&apos;adhésion n&apos;est pas seulement un
              droit : c&apos;est aussi une responsabilité. Chaque membre est
              encouragé à contribuer, selon ses possibilités, au développement de
              la communauté — une compétence, un relais, une présence, un don.
              Il n&apos;y a pas une seule manière d&apos;être utile. Il y a celle que
              l&apos;on tient.
            </p>
            <CtaRow className="justify-start">
              <CtaLink href="/devenir-membre" variant="accent">
                Devenir membre
              </CtaLink>
            </CtaRow>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      <StackPanel theme="white">
        <SnapRow>
          {homeSupportCards.map((card) => (
            <SnapSlide key={card.title} theme="black">
              {card.image ? <ImageField name={card.image} label={card.title} /> : null}
              <PanelContent>
                <FadeIn>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">
                    Nous soutenir
                  </p>
                  <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
                    {card.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                    {card.text}
                  </p>
                  {card.href ? (
                    <CtaRow className="justify-start">
                      <CtaLink href={card.href} variant="accent" icon>
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

      <StackPanel theme="teal">
        <PanelContent className="items-center text-center">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-3xl md:text-5xl">
              Comment pouvons-nous réussir ensemble ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Une personne peut changer sa vie grâce à une opportunité. Une
              communauté peut en créer des milliers. Rejoignez-nous à Douala —
              ou soutenez ce que nous construisons, où que vous soyez.
            </p>
            <CtaRow>
              <CtaLink href="/devenir-membre" variant="accent">
                Rejoindre la communauté
              </CtaLink>
              <CtaLink
                href="/nous-soutenir/faire-un-don"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10"
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
