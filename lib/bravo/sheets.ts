import type { BravoApplication } from "./schema"
import { formatWatTimestamp } from "./window"

export type BravoUpsertResult = {
  numero: string
  updated: boolean
  verif_parent_momo: boolean
}

function yesNo(value: boolean) {
  return value ? "oui" : "non"
}

function appsScriptUrl() {
  const url = process.env.BRAVO_APPS_SCRIPT_URL?.trim()
  if (!url) throw new Error("BRAVO_APPS_SCRIPT_URL is not configured")
  return url
}

function appsScriptSecret() {
  return process.env.BRAVO_APPS_SCRIPT_SECRET?.trim() || ""
}

function applicationPayload(application: BravoApplication) {
  return {
    submitted_at: formatWatTimestamp(),
    utm_source: application.utm.utm_source,
    utm_medium: application.utm.utm_medium,
    utm_campaign: application.utm.utm_campaign,
    utm_content: application.utm.utm_content,
    utm_term: application.utm.utm_term,
    utm: application.utm.utm,
    candidat_nom: application.candidat_nom,
    candidat_prenom: application.candidat_prenom,
    candidat_naissance: application.candidat_naissance,
    candidat_sexe: application.candidat_sexe,
    candidat_whatsapp: application.candidat_whatsapp,
    candidat_email: application.candidat_email,
    candidat_region: application.candidat_region,
    candidat_ville: application.candidat_ville,
    sous_systeme: application.sous_systeme,
    serie: application.serie,
    annee: application.annee,
    etab_region: application.etab_region,
    etab_type: application.etab_type,
    projet_filiere: application.projet_filiere,
    projet_etab: application.projet_etab,
    parent_nom: application.parent_nom,
    parent_lien: application.parent_lien,
    parent_momo: application.parent_momo,
    parent_operateur: application.parent_operateur,
    parent_nom_compte: application.parent_nom_compte,
    parent_whatsapp: application.parent_whatsapp,
    parent_informe: yesNo(application.parent_informe),
    inscription_payee: application.inscription_payee,
    premier_famille: application.premier_famille,
    foyer_situation: application.foyer_situation,
    foyer_charges: String(application.foyer_charges),
    foyer_prise_en_charge: application.foyer_prise_en_charge,
    usage_don: application.usage_don,
    reussir: application.reussir,
    dispo_live: yesNo(application.dispo_live),
    autorisation_image: yesNo(application.autorisation_image),
    sincerite: yesNo(application.sincerite),
    canal: application.canal,
    base_contact: yesNo(application.base_contact),
    alerte_numeros_identiques: yesNo(application.alerte_numeros_identiques),
    verif_age: yesNo(application.verif_age),
  }
}

export async function upsertBravoApplication(
  application: BravoApplication
): Promise<BravoUpsertResult> {
  const secret = appsScriptSecret()
  const response = await fetch(appsScriptUrl(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: secret || undefined,
      application: applicationPayload(application),
    }),
    // Apps Script web apps often follow a 302 to the script.googleusercontent.com result.
    redirect: "follow",
    cache: "no-store",
  })

  const text = await response.text()
  let payload: {
    ok?: boolean
    error?: string
    numero?: string
    updated?: boolean
    verif_parent_momo?: boolean
  }

  try {
    payload = JSON.parse(text) as typeof payload
  } catch {
    throw new Error(
      response.ok
        ? "Apps Script returned a non-JSON response"
        : `Apps Script request failed (${response.status})`
    )
  }

  if (!response.ok || !payload.ok || !payload.numero) {
    throw new Error(payload.error || `Apps Script request failed (${response.status})`)
  }

  return {
    numero: payload.numero,
    updated: Boolean(payload.updated),
    verif_parent_momo: Boolean(payload.verif_parent_momo),
  }
}
