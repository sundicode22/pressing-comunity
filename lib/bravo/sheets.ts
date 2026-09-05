import { google } from "googleapis"

import { BRAVO_NUMBER_PREFIX, SHEET_HEADERS, SHEET_TAB } from "./constants"
import type { BravoApplication } from "./schema"
import { formatWatTimestamp } from "./window"

export type BravoUpsertResult = {
  numero: string
  updated: boolean
  verif_parent_momo: boolean
}

type SheetRow = Record<(typeof SHEET_HEADERS)[number], string>

function yesNo(value: boolean) {
  return value ? "oui" : "non"
}

function columnLetter(index: number) {
  let n = index
  let letters = ""
  while (n > 0) {
    const rem = (n - 1) % 26
    letters = String.fromCharCode(65 + rem) + letters
    n = Math.floor((n - 1) / 26)
  }
  return letters
}

const LAST_COL = columnLetter(SHEET_HEADERS.length)

function credentials() {
  const json = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim()
  if (json) {
    const parsed = JSON.parse(json) as { client_email?: string; private_key?: string }
    if (!parsed.client_email || !parsed.private_key) {
      throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is missing client_email or private_key")
    }
    return { client_email: parsed.client_email, private_key: parsed.private_key }
  }

  const client_email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim()
  const private_key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").trim()
  if (!client_email || !private_key) {
    throw new Error("Google Sheets is not configured")
  }
  return { client_email, private_key }
}

function spreadsheetId() {
  const id = process.env.GOOGLE_SHEET_ID?.trim()
  if (!id) throw new Error("GOOGLE_SHEET_ID is not configured")
  return id
}

function sheetsClient() {
  const { client_email, private_key } = credentials()
  const auth = new google.auth.JWT({
    email: client_email,
    key: private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
  return google.sheets({ version: "v4", auth })
}

function toRow(record: SheetRow) {
  return SHEET_HEADERS.map((header) => record[header] ?? "")
}

function fromRow(values: string[]): SheetRow {
  const record = {} as SheetRow
  for (const [index, header] of SHEET_HEADERS.entries()) {
    record[header] = values[index] ?? ""
  }
  return record
}

function nextNumero(rows: SheetRow[]) {
  let max = 0
  for (const row of rows) {
    const match = row.numero.match(/^BRAVO26-(\d+)$/)
    if (match) max = Math.max(max, Number.parseInt(match[1], 10))
  }
  return `${BRAVO_NUMBER_PREFIX}${String(max + 1).padStart(5, "0")}`
}

function parentMomoOverLimit(rows: SheetRow[], momo: string, skipWhatsapp: string) {
  const others = rows.filter(
    (row) => row.parent_momo === momo && row.candidat_whatsapp !== skipWhatsapp
  )
  return others.length >= 2
}

async function ensureSheet(
  sheets: ReturnType<typeof sheetsClient>,
  id: string
) {
  const meta = await sheets.spreadsheets.get({ spreadsheetId: id })
  const exists = meta.data.sheets?.some((sheet) => sheet.properties?.title === SHEET_TAB)
  if (!exists) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: id,
      requestBody: {
        requests: [{ addSheet: { properties: { title: SHEET_TAB } } }],
      },
    })
  }

  const header = await sheets.spreadsheets.values.get({
    spreadsheetId: id,
    range: `${SHEET_TAB}!A1:${LAST_COL}1`,
  })
  const current = header.data.values?.[0] ?? []
  const matches =
    current.length === SHEET_HEADERS.length &&
    SHEET_HEADERS.every((name, index) => current[index] === name)

  if (!matches) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: id,
      range: `${SHEET_TAB}!A1:${LAST_COL}1`,
      valueInputOption: "RAW",
      requestBody: { values: [[...SHEET_HEADERS]] },
    })
  }
}

function applicationToRecord(
  application: BravoApplication,
  meta: {
    numero: string
    submitted_at: string
    updated_at: string
    verif_parent_momo: boolean
  }
): SheetRow {
  return {
    numero: meta.numero,
    submitted_at: meta.submitted_at,
    updated_at: meta.updated_at,
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
    verif_parent_momo: yesNo(meta.verif_parent_momo),
  }
}

export async function upsertBravoApplication(
  application: BravoApplication
): Promise<BravoUpsertResult> {
  const id = spreadsheetId()
  const sheets = sheetsClient()
  await ensureSheet(sheets, id)

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: id,
    range: `${SHEET_TAB}!A2:${LAST_COL}`,
  })
  const rows = (existing.data.values ?? []).map((row) => fromRow(row.map((cell) => String(cell ?? ""))))
  const matchIndex = rows.findIndex(
    (row) => row.candidat_whatsapp === application.candidat_whatsapp
  )
  const now = formatWatTimestamp()
  const updated = matchIndex >= 0
  const numero = updated ? rows[matchIndex].numero || nextNumero(rows) : nextNumero(rows)
  const submitted_at = updated ? rows[matchIndex].submitted_at || now : now
  const verif_parent_momo = parentMomoOverLimit(rows, application.parent_momo, application.candidat_whatsapp)
  const record = applicationToRecord(application, {
    numero,
    submitted_at,
    updated_at: now,
    verif_parent_momo,
  })
  const values = [toRow(record)]

  if (updated) {
    const sheetRow = matchIndex + 2
    await sheets.spreadsheets.values.update({
      spreadsheetId: id,
      range: `${SHEET_TAB}!A${sheetRow}:${LAST_COL}${sheetRow}`,
      valueInputOption: "RAW",
      requestBody: { values },
    })
  } else {
    await sheets.spreadsheets.values.append({
      spreadsheetId: id,
      range: `${SHEET_TAB}!A:${LAST_COL}`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    })
  }

  return { numero, updated, verif_parent_momo }
}
