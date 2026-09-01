import { notFound } from "next/navigation"

import { NewsArticleView } from "@/components/pages/news-article"
import { getNewsArticle, newsArticles } from "@/lib/news"

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getNewsArticle(slug)
  if (!article) return { title: "Article" }
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getNewsArticle(slug)
  if (!article) notFound()

  return <NewsArticleView article={article} />
}
