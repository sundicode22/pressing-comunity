import {
  ImageField,
  PanelContent,
  StackPanel,
  StackTrack,
} from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import { contactHref } from "@/lib/inquiry"

export function PartnerView() {
  return (
    <StackTrack>
      <StackPanel theme="black" flush>
        <ImageField name="team" label="Devenir partenaire" priority />
        <PanelContent className="items-center justify-end text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange">
              Nous soutenir
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl text-balance md:text-6xl">
              Devenir partenaire
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Entreprises, institutions, associations : construisons un projet
              commun. Une formation, une action de terrain, un mécénat de
              compétences — pas seulement un logo sur une affiche.
            </p>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      <StackPanel theme="white">
        <div className="grid min-h-svh md:grid-cols-2">
          <div className="relative min-h-[42vh] md:min-h-svh">
            <ImageField
              name="meeting"
              label="Avec qui nous travaillons"
              overlay={false}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <PanelContent>
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
                Avec qui nous travaillons
              </p>
              <h2 className="mt-4 max-w-xl text-3xl md:text-5xl">
                Un partenariat se définit par un projet
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Nous cherchons des alliés capables de créer un impact concret
                pour nos membres : ouvrir une session de formation, accueillir
                une action, prêter des compétences, relayer une opportunité.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Écrivez-nous depuis la page contact et choisissez « Partenariat ».
                Nous vous répondons pour en discuter, pas pour remplir une liste
                d’attente.
              </p>
              <CtaRow className="justify-start">
                <CtaLink href={contactHref("Partenariat")} variant="default">
                  Proposer un partenariat
                </CtaLink>
              </CtaRow>
            </FadeIn>
          </PanelContent>
        </div>
      </StackPanel>
    </StackTrack>
  )
}
