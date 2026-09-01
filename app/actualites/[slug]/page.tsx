import { PagePlaceholder } from "@/components/pages/page-placeholder"

export const metadata = {
  title: "Article",
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <PagePlaceholder
      title="Article"
      subtitle={slug.replace(/-/g, " ")}
      sections={[
        {
          layout: "image",
          title: "Image principale",
          body: "Les photos d'actions seront ajoutées ici.",
          imageSeed: 4,
        },
        {
          title: "Corps de l'article",
          body: "Le contenu de l'article sera publié depuis l'administration. Cette page est un gabarit.",
        },
        {
          title: "Vous voulez participer aux prochaines actions ?",
          theme: "black",
          ctas: [
            { label: "Devenir membre", href: "/devenir-membre" },
            { label: "Faire un don", href: "/nous-soutenir/faire-un-don", variant: "outline" },
          ],
        },
      ]}
    />
  )
}
