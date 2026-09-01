import { HomeHero } from "@/components/home/hero"
import { HomeStacks } from "@/components/home/home-stacks"
import { StackTrack } from "@/components/layout/viewport"

export const metadata = {
  title: {
    absolute:
      "The Pressing Community — Communauté camerounaise d'entraide, de formation et d'opportunités",
  },
  description:
    "Solidarité, formation, accompagnement et développement des talents au Cameroun. Rejoignez une communauté qui crée des opportunités concrètes pour les Camerounais.",
}

export default function HomePage() {
  return (
    <StackTrack snap="y">
      <HomeHero />
      <HomeStacks />
    </StackTrack>
  )
}
