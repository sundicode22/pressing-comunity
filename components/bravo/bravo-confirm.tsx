import type { BravoPublicCopy } from "@/lib/bravo/config"
import { confirmationScreenText } from "@/lib/bravo/messages"
import { Button } from "@/components/ui/button"

export function BravoConfirm({
  numero,
  copy,
  onAgain,
}: {
  numero: string
  copy: BravoPublicCopy
  onAgain?: () => void
}) {
  const paragraphs = confirmationScreenText(numero, copy).split("\n\n")
  const channelIsLink = copy.whatsappChannel.startsWith("http")

  return (
    <div className="mx-auto max-w-xl">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-teal uppercase">
        BRAVO 2026
      </p>
      <h1 className="mt-3 text-[1.65rem] leading-[1.15] tracking-tight text-ink sm:text-3xl">
        C&apos;est enregistré.
      </h1>
      <p className="mt-4 rounded-2xl bg-teal px-4 py-4 font-heading text-2xl tracking-tight text-white sm:text-3xl">
        {numero}
      </p>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {channelIsLink ? (
        <a
          href={copy.whatsappChannel}
          className="mt-8 inline-flex h-13 w-full items-center justify-center rounded-full bg-orange px-7 text-base font-semibold text-ink sm:h-14"
        >
          Rejoindre le canal WhatsApp
        </a>
      ) : null}
      {onAgain ? (
        <Button
          type="button"
          variant="outline"
          onClick={onAgain}
          className="mt-3 h-12 w-full rounded-full text-base"
        >
          Modifier ma candidature
        </Button>
      ) : null}
    </div>
  )
}
