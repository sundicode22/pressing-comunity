export type NavLink = {
  label: string
  href: string
}

export type NavItem = NavLink & {
  children?: NavLink[]
}

export const site = {
  name: "The Pressing Community",
  shortName: "Pressing",
  baseline: "Une communauté. Des opportunités. Un impact.",
  city: "Douala, Cameroun",
  registration: "Statut juridique et numéro d'enregistrement …",
  whatsapp: "…",
  email: "…",
  address: "…",
  whatsappHref: "#",
  signature: "Chaque opportunité peut changer une vie. Construisons-les ensemble.",
}

export const headerNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Qui sommes-nous",
    href: "/qui-sommes-nous",
    children: [
      { label: "Notre vision", href: "/qui-sommes-nous#vision" },
      { label: "Nos valeurs", href: "/qui-sommes-nous#valeurs" },
      { label: "Notre gouvernance", href: "/qui-sommes-nous#gouvernance" },
      { label: "Notre développement", href: "/qui-sommes-nous#developpement" },
    ],
  },
  {
    label: "Nos actions",
    href: "/nos-actions",
    children: [
      { label: "Solidarité & action sociale", href: "/nos-actions/solidarite" },
      { label: "Opportunités & accompagnement", href: "/nos-actions/accompagnement" },
      { label: "Formation & développement", href: "/nos-actions/formation" },
      { label: "Talents camerounais", href: "/nos-actions/talents" },
      { label: "Jeunesse & développement", href: "/nos-actions/jeunesse" },
    ],
  },
  { label: "Devenir membre", href: "/devenir-membre" },
  {
    label: "Nous soutenir",
    href: "/nous-soutenir",
    children: [
      { label: "Faire un don", href: "/nous-soutenir/faire-un-don" },
      { label: "Devenir mécène", href: "/nous-soutenir/mecene" },
      { label: "Devenir partenaire", href: "/nous-soutenir/partenaire" },
      { label: "Offrir mes compétences", href: "/nous-soutenir/competences" },
      { label: "Proposer une idée", href: "/proposer-une-idee" },
    ],
  },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
]

export const donateCta: NavLink = {
  label: "Faire un don",
  href: "/nous-soutenir/faire-un-don",
}

export const memberCta: NavLink = {
  label: "Devenir membre",
  href: "/devenir-membre",
}

export const footerNavigate: NavLink[] = [
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Nos actions", href: "/nos-actions" },
  { label: "Devenir membre", href: "/devenir-membre" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
]

export const footerAct: NavLink[] = [
  { label: "Faire un don", href: "/nous-soutenir/faire-un-don" },
  { label: "Devenir mécène", href: "/nous-soutenir/mecene" },
  { label: "Devenir partenaire", href: "/nous-soutenir/partenaire" },
  { label: "Offrir mes compétences", href: "/nous-soutenir/competences" },
  { label: "Proposer une idée", href: "/proposer-une-idee" },
]

export const legalLinks: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Conditions d'adhésion", href: "/conditions-adhesion" },
]

export const socialLinks: NavLink[] = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
]
