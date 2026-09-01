import { NextResponse } from "next/server"

import { parseInquiry } from "@/lib/inquiry"
import { sendInquiryEmails } from "@/lib/mail/send"

export async function POST(request: Request) {
  let body: Record<string, unknown>

  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 })
  }

  const parsed = parseInquiry(body)
  if ("error" in parsed) {
    if (parsed.error === "ignored") {
      return NextResponse.json({ ok: true })
    }
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }

  try {
    await sendInquiryEmails(parsed)
    return NextResponse.json({ ok: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Envoi impossible."
    const misconfigured =
      message.includes("RESEND") || message.includes("Missing") || message.includes("not configured")

    console.error("[inquiry]", message)
    return NextResponse.json(
      {
        error: misconfigured
          ? "L’envoi d’e-mail n’est pas encore configuré. Ajoutez RESEND_API_KEY et RESEND_TO."
          : "Le message n’a pas pu être envoyé. Réessayez dans un instant.",
      },
      { status: misconfigured ? 503 : 500 }
    )
  }
}
