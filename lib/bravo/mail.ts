import { Resend } from "resend"

import { bravoCandidateEmail, bravoInboxEmail } from "@/lib/mail/templates"

import { getBravoPublicCopy } from "./config"
import { confirmationScreenText } from "./messages"
import type { BravoApplication } from "./schema"

type BravoMailInput = {
  application: BravoApplication
  numero: string
  updated: boolean
  verif_parent_momo: boolean
}

export async function sendBravoEmails({
  application,
  numero,
  updated,
  verif_parent_momo,
}: BravoMailInput) {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey) {
    console.warn("[bravo] RESEND_API_KEY missing — emails skipped")
    return
  }

  const from = process.env.RESEND_FROM?.trim() || "The Pressing Community <beth.t@example.com>"
  const to = process.env.RESEND_TO?.trim()
  if (!to) {
    console.warn("[bravo] RESEND_TO missing — emails skipped")
    return
  }
  const resend = new Resend(apiKey)
  const copy = getBravoPublicCopy()
  const flags = [
    application.alerte_numeros_identiques ? "numéros identiques" : "",
    application.verif_age ? "âge hors bornes" : "",
    verif_parent_momo ? "plus de 2 dossiers sur ce Mobile Money" : "",
  ].filter(Boolean)

  const inbox = bravoInboxEmail({
    numero,
    updated,
    name: `${application.candidat_prenom} ${application.candidat_nom}`,
    email: application.candidat_email,
    whatsapp: application.candidat_whatsapp,
    sousSysteme: application.sous_systeme,
    etabRegion: application.etab_region,
    inscriptionPayee: application.inscription_payee,
    premierFamille: application.premier_famille,
    flags,
  })

  const jobs = [
    resend.emails.send({
      from,
      to,
      replyTo: application.candidat_email || undefined,
      subject: inbox.subject,
      html: inbox.html,
    }),
  ]

  if (application.candidat_email) {
    const confirmation = bravoCandidateEmail({
      prenom: application.candidat_prenom,
      numero,
      body: confirmationScreenText(numero, copy),
    })
    jobs.push(
      resend.emails.send({
        from,
        to: application.candidat_email,
        subject: confirmation.subject,
        html: confirmation.html,
      })
    )
  }

  const results = await Promise.allSettled(jobs)
  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[bravo] email failed", result.reason)
    } else if (result.value.error) {
      console.error("[bravo] email failed", result.value.error.message)
    }
  }
}
