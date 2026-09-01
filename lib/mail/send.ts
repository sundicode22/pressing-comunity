import { Resend } from "resend"

import { type InquiryPayload } from "@/lib/inquiry"
import { confirmationEmail, inboxEmail } from "@/lib/mail/templates"

function requiredEnv(name: string) {
  const value = process.env[name]?.trim()
  if (!value) {
    throw new Error(`Missing ${name}`)
  }
  return value
}

export async function sendInquiryEmails(payload: InquiryPayload) {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured")
  }

  const from = process.env.RESEND_FROM?.trim() || "The Pressing Community <beth.t@example.com>"
  const to = requiredEnv("RESEND_TO")
  const resend = new Resend(apiKey)
  const inbox = inboxEmail(payload)
  const confirmation = confirmationEmail(payload)

  const [{ error: inboxError }, { error: confirmError }] = await Promise.all([
    resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject: inbox.subject,
      html: inbox.html,
    }),
    resend.emails.send({
      from,
      to: payload.email,
      subject: confirmation.subject,
      html: confirmation.html,
    }),
  ])

  if (inboxError) throw new Error(inboxError.message)
  if (confirmError) throw new Error(confirmError.message)
}
