export const BRAVO_YEAR = "2026"
export const BRAVO_NUMBER_PREFIX = "BRAVO26-"
export const BRAVO_DRAFT_KEY = "bravo-2026-draft"
export const BRAVO_PATH = "/bravo-2026"

export const REGIONS = [
  "Adamaoua",
  "Centre",
  "Est",
  "Extrême-Nord",
  "Littoral",
  "Nord",
  "Nord-Ouest",
  "Ouest",
  "Sud",
  "Sud-Ouest",
] as const

export const SEXES = ["Féminin", "Masculin"] as const

export const SOUS_SYSTEMES = [
  "Le Baccalauréat (francophone)",
  "The GCE Advanced Level (anglophone)",
] as const

export const ETAB_TYPES = ["Public", "Privé confessionnel", "Privé laïc"] as const

export const PARENT_LIENS = [
  "Mère",
  "Père",
  "Tuteur",
  "Tutrice",
  "Grand-parent",
  "Frère ou sœur aîné(e)",
] as const

export const OPERATEURS = ["MTN Mobile Money", "Orange Money"] as const

export const INSCRIPTION_PAYEE = ["Oui", "Non", "Non, mais le dossier est prêt"] as const

export const PREMIER_FAMILLE = ["Oui", "Non", "Je ne sais pas"] as const

export const FOYER_SITUATIONS = [
  "Les deux parents",
  "Un seul parent",
  "Orphelin d'un parent",
  "Orphelin des deux parents",
  "Autre",
] as const

export const CANAUX = [
  "TikTok de Céleste Victorien",
  "Facebook",
  "WhatsApp",
  "Un ami ou un parent",
  "Une page de The Pressing Community",
  "Autre",
] as const

export const BIRTH_MIN = "2000-01-01"
export const BIRTH_MAX = "2011-12-31"

export const USAGE_DON_MAX = 300
export const REUSSIR_MAX = 200

export const SHEET_TAB = "candidatures"

export const SHEET_HEADERS = [
  "numero",
  "submitted_at",
  "updated_at",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm",
  "candidat_nom",
  "candidat_prenom",
  "candidat_naissance",
  "candidat_sexe",
  "candidat_whatsapp",
  "candidat_email",
  "candidat_region",
  "candidat_ville",
  "sous_systeme",
  "serie",
  "annee",
  "etab_region",
  "etab_type",
  "projet_filiere",
  "projet_etab",
  "parent_nom",
  "parent_lien",
  "parent_momo",
  "parent_operateur",
  "parent_nom_compte",
  "parent_whatsapp",
  "parent_informe",
  "inscription_payee",
  "premier_famille",
  "foyer_situation",
  "foyer_charges",
  "foyer_prise_en_charge",
  "usage_don",
  "reussir",
  "dispo_live",
  "autorisation_image",
  "sincerite",
  "canal",
  "base_contact",
  "alerte_numeros_identiques",
  "verif_age",
  "verif_parent_momo",
] as const

export type SheetHeader = (typeof SHEET_HEADERS)[number]
export type Region = (typeof REGIONS)[number]
export type Sexe = (typeof SEXES)[number]
export type SousSysteme = (typeof SOUS_SYSTEMES)[number]
export type EtabType = (typeof ETAB_TYPES)[number]
export type ParentLien = (typeof PARENT_LIENS)[number]
export type Operateur = (typeof OPERATEURS)[number]
export type InscriptionPayee = (typeof INSCRIPTION_PAYEE)[number]
export type PremierFamille = (typeof PREMIER_FAMILLE)[number]
export type FoyerSituation = (typeof FOYER_SITUATIONS)[number]
export type Canal = (typeof CANAUX)[number]
