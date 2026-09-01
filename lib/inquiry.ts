export const inquiryKinds = ["contact", "partner", "generic"] as const
export type InquiryKind = (typeof inquiryKinds)[number]

export const contactSubjects = [
  "Adhésion",
  "Faire un don",
  "Devenir mécène",
  "Partenariat",
  "Formation",
  "Accompagnement",
  "Programme talents",
  "Offrir des compétences",
  "Offrir du matériel",
  "Proposer une idée",
  "Signaler une situation",
  "Autre",
] as const

export type ContactSubject = (typeof contactSubjects)[number]

const subjectSlugs: Record<string, ContactSubject> = {
  adhesion: "Adhésion",
  don: "Faire un don",
  mecene: "Devenir mécène",
  partenaire: "Partenariat",
  partenariat: "Partenariat",
  formation: "Formation",
  accompagnement: "Accompagnement",
  talents: "Programme talents",
  competences: "Offrir des compétences",
  materiel: "Offrir du matériel",
  idee: "Proposer une idée",
  urgence: "Signaler une situation",
  autre: "Autre",
}

export function parseContactSubject(value?: string | string[]): ContactSubject | undefined {
  const raw = Array.isArray(value) ? value[0] : value
  if (!raw) return undefined
  const trimmed = raw.trim()
  if ((contactSubjects as readonly string[]).includes(trimmed)) {
    return trimmed as ContactSubject
  }
  return subjectSlugs[trimmed.toLowerCase()]
}

function slugForSubject(subject: ContactSubject) {
  const match = Object.entries(subjectSlugs).find(([, label]) => label === subject)
  return match?.[0] ?? encodeURIComponent(subject)
}

export function contactHref(subject?: ContactSubject) {
  if (!subject) return "/contact#message"
  return `/contact?sujet=${slugForSubject(subject)}#message`
}

export const partnershipTypes = [
  "Formation",
  "Action de terrain",
  "Mécénat de compétences",
  "Accès à des opportunités",
  "Soutien matériel",
  "Autre",
] as const

export type InquiryField = {
  name: string
  label: string
  value: string
}

export type InquiryPayload = {
  kind: InquiryKind
  intent: string
  name: string
  email: string
  whatsapp?: string
  organization?: string
  role?: string
  subject?: string
  partnershipType?: string
  message: string
  fields: InquiryField[]
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

function isKind(value: string): value is InquiryKind {
  return inquiryKinds.includes(value as InquiryKind)
}

export function parseInquiry(input: Record<string, unknown>): InquiryPayload | { error: string } {
  if (asString(input.website)) {
    return { error: "ignored" }
  }

  const kindRaw = asString(input.kind) || "contact"
  if (!isKind(kindRaw)) {
    return { error: "Type de demande invalide." }
  }

  const name = asString(input.name)
  const email = asString(input.email).toLowerCase()
  let message =
    asString(input.message) ||
    asString(input.project) ||
    asString(input.motivation) ||
    asString(input.idea) ||
    asString(input.proposal) ||
    asString(input.offer) ||
    asString(input.need) ||
    asString(input.pitch) ||
    asString(input.session)
  const whatsapp = asString(input.whatsapp)
  const organization = asString(input.organization)
  const role = asString(input.role)
  const subject = asString(input.subject)
  const partnershipType = asString(input.partnershipType)
  const intent = asString(input.intent)

  if (!name) return { error: "Indiquez votre nom." }
  if (!email || !EMAIL_RE.test(email)) return { error: "Indiquez un e-mail valide." }
  if (kindRaw === "partner" && !organization) return { error: "Indiquez le nom de votre organisation." }
  if (kindRaw === "contact" && !subject) return { error: "Choisissez un objet." }
  if (kindRaw === "partner" && !partnershipType) return { error: "Précisez le type de partenariat." }
  if (kindRaw !== "generic" && message.length < 12) {
    return { error: "Ajoutez un message un peu plus détaillé." }
  }
  if (kindRaw === "generic" && message.length < 2) {
    return { error: "Complétez le formulaire avant de l’envoyer." }
  }

  const reserved = new Set([
    "kind",
    "intent",
    "name",
    "email",
    "whatsapp",
    "organization",
    "role",
    "subject",
    "partnershipType",
    "message",
    "project",
    "motivation",
    "idea",
    "proposal",
    "offer",
    "need",
    "pitch",
    "website",
  ])

  const extraLabels = (input.fieldLabels && typeof input.fieldLabels === "object"
    ? (input.fieldLabels as Record<string, unknown>)
    : {}) as Record<string, unknown>

  const extras: InquiryField[] = Object.entries(input)
    .filter(([key, value]) => !reserved.has(key) && asString(value) && key !== "fieldLabels")
    .map(([key, value]) => ({
      name: key,
      label: asString(extraLabels[key]) || key,
      value: asString(value),
    }))

  if (!message) {
    message = extras.length
      ? extras.map((field) => `${field.label} : ${field.value}`).join("\n")
      : "Nouvelle demande envoyée depuis le site."
  }

  const fields: InquiryField[] = [
    { name: "name", label: "Nom", value: name },
    { name: "email", label: "E-mail", value: email },
  ]

  if (organization) fields.push({ name: "organization", label: "Organisation", value: organization })
  if (role) fields.push({ name: "role", label: "Fonction", value: role })
  if (whatsapp) fields.push({ name: "whatsapp", label: "WhatsApp", value: whatsapp })
  if (subject) fields.push({ name: "subject", label: "Objet", value: subject })
  if (partnershipType) fields.push({ name: "partnershipType", label: "Type de partenariat", value: partnershipType })
  fields.push(...extras)
  fields.push({ name: "message", label: "Message", value: message })

  const resolvedIntent =
    intent ||
    (kindRaw === "partner" ? "Partenariat" : kindRaw === "contact" ? subject || "Contact" : "Demande")

  return {
    kind: kindRaw,
    intent: resolvedIntent,
    name,
    email,
    whatsapp: whatsapp || undefined,
    organization: organization || undefined,
    role: role || undefined,
    subject: subject || undefined,
    partnershipType: partnershipType || undefined,
    message,
    fields,
  }
}

export function inquiryHeadline(payload: InquiryPayload) {
  if (payload.kind === "partner") return "Proposition de partenariat"
  if (payload.kind === "contact") return payload.subject ?? "Nouveau message"
  return payload.intent
}
