/**
 * BRAVO 2026 — Google Apps Script
 *
 * Setup
 * 1. Create a Google Sheet.
 * 2. Extensions → Apps Script, paste this file, Save.
 * 3. Optional: set SCRIPT_SECRET below (same value as BRAVO_APPS_SCRIPT_SECRET).
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL into BRAVO_APPS_SCRIPT_URL on the site.
 *
 * The script creates a "candidatures" tab, upserts on candidat_whatsapp,
 * assigns BRAVO26-00001…, and flags more than 2 dossiers per parent_momo.
 */

var SHEET_TAB = "candidatures"
var NUMBER_PREFIX = "BRAVO26-"
/** Leave empty to disable, or set the same value as BRAVO_APPS_SCRIPT_SECRET. */
var SCRIPT_SECRET = ""

var HEADERS = [
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
]

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || "{}")
    if (SCRIPT_SECRET && body.secret !== SCRIPT_SECRET) {
      return json_({ ok: false, error: "Unauthorized" })
    }

    var application = body.application
    if (!application || typeof application !== "object") {
      return json_({ ok: false, error: "Missing application payload" })
    }

    var whatsapp = String(application.candidat_whatsapp || "").trim()
    var momo = String(application.parent_momo || "").trim()
    if (!whatsapp || !momo) {
      return json_({ ok: false, error: "candidat_whatsapp and parent_momo are required" })
    }

    var lock = LockService.getScriptLock()
    lock.waitLock(30000)

    try {
      var sheet = ensureSheet_()
      var data = sheet.getDataRange().getValues()
      var headers = data[0] || []
      var whatsappCol = headers.indexOf("candidat_whatsapp")
      var momoCol = headers.indexOf("parent_momo")
      var numeroCol = headers.indexOf("numero")
      var submittedCol = headers.indexOf("submitted_at")
      var updatedCol = headers.indexOf("updated_at")
      var verifMomoCol = headers.indexOf("verif_parent_momo")

      if (whatsappCol < 0 || momoCol < 0 || numeroCol < 0) {
        return json_({ ok: false, error: "Sheet headers are incomplete" })
      }

      var matchRow = -1
      var maxNumero = 0
      var otherMomoCount = 0

      for (var r = 1; r < data.length; r++) {
        var row = data[r]
        var rowWhatsapp = String(row[whatsappCol] || "").trim()
        var rowMomo = String(row[momoCol] || "").trim()
        var rowNumero = String(row[numeroCol] || "").trim()
        var match = rowNumero.match(/^BRAVO26-(\d+)$/)
        if (match) {
          maxNumero = Math.max(maxNumero, parseInt(match[1], 10))
        }
        if (rowWhatsapp === whatsapp) {
          matchRow = r
        } else if (rowMomo === momo) {
          otherMomoCount++
        }
      }

      var now = formatWat_()
      var updated = matchRow >= 0
      var numero = updated
        ? String(data[matchRow][numeroCol] || "").trim() || nextNumero_(maxNumero)
        : nextNumero_(maxNumero)
      var submittedAt = updated
        ? String(data[matchRow][submittedCol] || "").trim() || now
        : now
      var verifParentMomo = otherMomoCount >= 2 ? "oui" : "non"

      var record = {}
      for (var i = 0; i < HEADERS.length; i++) {
        var key = HEADERS[i]
        if (key === "numero") record[key] = numero
        else if (key === "submitted_at") record[key] = submittedAt
        else if (key === "updated_at") record[key] = now
        else if (key === "verif_parent_momo") record[key] = verifParentMomo
        else record[key] = application[key] == null ? "" : String(application[key])
      }

      var values = HEADERS.map(function (key) {
        return record[key]
      })

      if (updated) {
        sheet.getRange(matchRow + 1, 1, 1, HEADERS.length).setValues([values])
      } else {
        sheet.appendRow(values)
      }

      return json_({
        ok: true,
        numero: numero,
        updated: updated,
        verif_parent_momo: verifParentMomo === "oui",
      })
    } finally {
      lock.releaseLock()
    }
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message ? err.message : err) })
  }
}

function doGet() {
  return json_({ ok: true, service: "BRAVO 2026 candidatures" })
}

function ensureSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName(SHEET_TAB)
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_TAB)
  }

  var width = HEADERS.length
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, width).setValues([HEADERS])
    sheet.setFrozenRows(1)
    return sheet
  }

  var current = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), width)).getValues()[0]
  var matches = HEADERS.every(function (name, index) {
    return current[index] === name
  })
  if (!matches) {
    sheet.getRange(1, 1, 1, width).setValues([HEADERS])
    sheet.setFrozenRows(1)
  }
  return sheet
}

function nextNumero_(maxNumero) {
  var next = (maxNumero || 0) + 1
  var padded = ("00000" + next).slice(-5)
  return NUMBER_PREFIX + padded
}

function formatWat_() {
  return Utilities.formatDate(new Date(), "Africa/Douala", "yyyy-MM-dd HH:mm:ss") + " WAT"
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  )
}
