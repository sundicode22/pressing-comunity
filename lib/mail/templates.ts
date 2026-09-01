import { inquiryHeadline, type InquiryPayload } from "@/lib/inquiry"
import { site } from "@/lib/navigation"

const TEAL = "#007c8c"
const ORANGE = "#edaa1f"
const INK = "#1a1f25"
const PAPER = "#eef2f0"
const MUTED = "#5c6668"
const WHITE = "#ffffff"

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function nl2br(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br />")
}

function layout(options: {
  preheader: string
  kicker: string
  title: string
  intro: string
  body: string
  footerNote: string
}) {
  return `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(options.title)}</title>
  </head>
  <body style="margin:0;padding:0;background:${PAPER};font-family:Inter,Helvetica,Arial,sans-serif;color:${INK};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(options.preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAPER};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
            <tr>
              <td style="padding:0 8px 20px 8px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:36px;height:36px;border-radius:10px;background:${TEAL};color:${WHITE};font-weight:700;font-size:16px;text-align:center;line-height:36px;">P</td>
                    <td style="padding-left:10px;font-size:16px;font-weight:600;letter-spacing:-0.02em;">The Pressing Community</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background:${WHITE};border-radius:24px;overflow:hidden;box-shadow:0 12px 40px rgba(26,31,37,0.06);">
                <div style="height:6px;background:${ORANGE};"></div>
                <div style="padding:36px 36px 28px 36px;">
                  <p style="margin:0;font-size:12px;letter-spacing:0.22em;text-transform:uppercase;color:${TEAL};font-weight:700;">${escapeHtml(options.kicker)}</p>
                  <h1 style="margin:12px 0 0 0;font-size:28px;line-height:1.15;letter-spacing:-0.03em;">${escapeHtml(options.title)}</h1>
                  <p style="margin:16px 0 0 0;font-size:16px;line-height:1.65;color:${MUTED};">${escapeHtml(options.intro)}</p>
                </div>
                ${options.body}
                <div style="padding:8px 36px 32px 36px;">
                  <p style="margin:0;font-size:13px;line-height:1.6;color:${MUTED};">${escapeHtml(options.footerNote)}</p>
                  <p style="margin:18px 0 0 0;font-size:12px;color:${MUTED};">${escapeHtml(site.city)} · ${escapeHtml(site.baseline)}</p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

function fieldsTable(payload: InquiryPayload) {
  const rows = payload.fields
    .filter((field) => field.name !== "message")
    .map(
      (field) => `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #e4e9e7;width:38%;vertical-align:top;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${MUTED};font-weight:700;">${escapeHtml(field.label)}</td>
          <td style="padding:12px 0;border-bottom:1px solid #e4e9e7;font-size:16px;line-height:1.5;color:${INK};">${escapeHtml(field.value)}</td>
        </tr>`
    )
    .join("")

  return `
    <div style="padding:0 36px 8px 36px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
      <div style="margin-top:24px;padding:20px 22px;border-radius:18px;background:${PAPER};">
        <p style="margin:0 0 8px 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${TEAL};font-weight:700;">Message</p>
        <p style="margin:0;font-size:16px;line-height:1.7;color:${INK};">${nl2br(payload.message)}</p>
      </div>
    </div>`
}

export function inboxEmail(payload: InquiryPayload) {
  const title = inquiryHeadline(payload)
  const kicker = payload.kind === "partner" ? "Partenariat" : payload.kind === "contact" ? "Contact" : payload.intent
  const replyHref = `mailto:${encodeURIComponent(payload.email)}?subject=${encodeURIComponent(`Re: ${title}`)}`

  return {
    subject: `[Pressing] ${title} — ${payload.name}`,
    html: layout({
      preheader: `${payload.name} a envoyé une demande : ${title}.`,
      kicker,
      title,
      intro: `${payload.name} vient d’écrire depuis le site. Répondez directement à cet e-mail pour continuer la conversation.`,
      body: `${fieldsTable(payload)}
        <div style="padding:28px 36px 8px 36px;">
          <a href="${replyHref}" style="display:inline-block;background:${TEAL};color:${WHITE};text-decoration:none;font-weight:600;font-size:15px;padding:14px 22px;border-radius:999px;">Répondre à ${escapeHtml(payload.name)}</a>
        </div>`,
      footerNote: "Message envoyé depuis thepressingcommunity.com. Ne transférez pas cet e-mail hors de l’équipe.",
    }),
  }
}

export function confirmationEmail(payload: InquiryPayload) {
  const isPartner = payload.kind === "partner"
  const title = isPartner ? "Votre proposition est bien arrivée" : "Nous avons bien reçu votre message"
  const intro = isPartner
    ? "Merci de vouloir construire quelque chose avec The Pressing Community. Nous lisons chaque proposition et revenons vers vous pour en discuter."
    : "Merci de nous avoir écrit. L’équipe lit chaque message et vous répondra dès qu’un interlocuteur pourra vous aider."

  return {
    subject: isPartner
      ? "Pressing — Votre proposition de partenariat"
      : "Pressing — Nous avons bien reçu votre message",
    html: layout({
      preheader: intro,
      kicker: site.city,
      title,
      intro,
      body: `${fieldsTable(payload)}
        <div style="padding:28px 36px 8px 36px;">
          <a href="${site.whatsappHref}" style="display:inline-block;background:${ORANGE};color:${INK};text-decoration:none;font-weight:600;font-size:15px;padding:14px 22px;border-radius:999px;">Nous écrire sur WhatsApp</a>
          <p style="margin:18px 0 0 0;font-size:15px;line-height:1.6;color:${MUTED};">Si c’est urgent, WhatsApp reste le plus rapide.</p>
        </div>`,
      footerNote: `The Pressing Community · ${site.city}`,
    }),
  }
}
