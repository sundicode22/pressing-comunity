import {
  ImageField,
  PanelContent,
  StackPanel,
  StackTrack,
} from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import { formatNewsDate, type NewsArticle } from "@/lib/news"

export function NewsArticleView({ article }: { article: NewsArticle }) {
  return (
    <StackTrack snap="y">
      <StackPanel theme="black" flush>
        <ImageField name={article.image} label={article.title} priority />
        <PanelContent className="justify-end">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">
              {article.category} · {formatNewsDate(article.date)}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] text-balance md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              {article.excerpt}
            </p>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      <StackPanel theme="white" pin={false}>
        <PanelContent className="justify-start py-20">
          <FadeIn>
            <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted-foreground">
              {article.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <CtaRow className="justify-start">
              <CtaLink href="/actualites" variant="outline" icon>
                Toutes les actualités
              </CtaLink>
            </CtaRow>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      <StackPanel theme="black">
        <PanelContent className="items-center text-center">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-3xl md:text-5xl">
              Vous voulez participer aux prochaines actions ?
            </h2>
            <CtaRow>
              <CtaLink href="/devenir-membre" variant="accent">
                Devenir membre
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
    </StackTrack>
  )
}
