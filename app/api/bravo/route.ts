import { NextResponse } from "next/server"

import { sendBravoEmails } from "@/lib/bravo/mail"
import { parseBravoApplication } from "@/lib/bravo/schema"
import { upsertBravoApplication } from "@/lib/bravo/sheets"
import { isBravoOpen } from "@/lib/bravo/window"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  if (!isBravoOpen()) {
    return NextResponse.json(
      { error: "Les candidatures BRAVO 2026 ne sont pas ouvertes pour le moment." },
      { status: 403 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 })
  }

  const parsed = parseBravoApplication(body)
  if (!parsed.ok) {
    if (parsed.ignored) {
      return NextResponse.json({ ok: true })
    }
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  try {
    const result = await upsertBravoApplication(parsed.application)
    try {
      await sendBravoEmails({
        application: parsed.application,
        numero: result.numero,
        updated: result.updated,
        verif_parent_momo: result.verif_parent_momo,
      })
    } catch (error) {
      console.error("[bravo] email", error)
    }

    return NextResponse.json({
      ok: true,
      numero: result.numero,
      updated: result.updated,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Enregistrement impossible."
    const misconfigured =
      message.includes("not configured") ||
      message.includes("BRAVO_APPS_SCRIPT") ||
      message.includes("Apps Script") ||
      message.includes("Unauthorized") ||
      message.includes("Missing")

    console.error("[bravo]", message)
    return NextResponse.json(
      {
        error: misconfigured
          ? "L’enregistrement n’est pas encore configuré. Ajoutez BRAVO_APPS_SCRIPT_URL (Apps Script)."
          : "La candidature n’a pas pu être enregistrée. Réessayez dans un instant.",
      },
      { status: misconfigured ? 503 : 500 }
    )
  }
}
