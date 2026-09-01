import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { WhatsAppFab } from "@/components/layout/whatsapp-fab"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "The Pressing Community — Communauté camerounaise d'entraide, de formation et d'opportunités",
    template: "%s — The Pressing Community",
  },
  description:
    "Solidarité, formation, accompagnement et développement des talents au Cameroun. Rejoignez une communauté qui crée des opportunités concrètes pour les Camerounais.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={cn("antialiased", inter.variable, "font-sans")}>
      <body className="min-h-svh bg-white text-black">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  )
}
