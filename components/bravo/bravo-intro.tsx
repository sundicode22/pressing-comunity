import { INTRO_EN, INTRO_FR } from "@/lib/bravo/messages"
import type { BravoWindowStatus } from "@/lib/bravo/window"
import { Button } from "@/components/ui/button"

export function BravoIntro({
  status,
  onStart,
}: {
  status: BravoWindowStatus
  onStart: () => void
}) {
  return (
    <div className="mx-auto max-w-xl">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-teal uppercase">
        The Pressing Community
      </p>
      <h1 className="mt-3 text-[1.65rem] leading-[1.15] tracking-tight text-ink sm:text-3xl">
        {INTRO_FR.title}
      </h1>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-ink/70 sm:text-[1.05rem]">
        {INTRO_FR.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h2 className="mt-10 text-[1.65rem] leading-[1.15] tracking-tight text-ink sm:text-3xl">
        {INTRO_EN.title}
      </h2>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-ink/70 sm:text-[1.05rem]">
        {INTRO_EN.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {status === "closed" ? (
        <p className="mt-8 rounded-2xl bg-ink/4 px-4 py-4 text-base leading-relaxed text-ink/70">
          Les candidatures sont closes. Les vingt noms seront annoncés le samedi
          26 septembre à 20 h 30, en direct.
        </p>
      ) : (
        <div className="mt-8">
          {status === "soon" ? (
            <p className="mb-4 rounded-2xl bg-orange/15 px-4 py-3 text-base leading-relaxed text-ink/80">
              Ouverture lundi 7 septembre. Vous pouvez déjà préparer votre
              dossier ; l&apos;envoi ne sera possible qu&apos;à l&apos;ouverture.
            </p>
          ) : null}
          <Button
            type="button"
            onClick={onStart}
            className="h-13 w-full rounded-full px-7 text-base font-semibold sm:h-14"
          >
            {status === "soon" ? "Préparer ma candidature" : "Candidater — c'est gratuit"}
          </Button>
          <p className="mt-3 text-center text-sm text-ink/50">
            Moins de cinq minutes. Pas de compte à créer.
          </p>
        </div>
      )}
    </div>
  )
}
