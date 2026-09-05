export type BravoPublicCopy = {
  liveAccount: string
  whatsappChannel: string
  parentContact: string
}

function read(name: string) {
  return process.env[name]?.trim() ?? ""
}

export function getBravoPublicCopy(): BravoPublicCopy {
  return {
    liveAccount: read("NEXT_PUBLIC_BRAVO_LIVE_ACCOUNT") || "[COMPTE]",
    whatsappChannel: read("NEXT_PUBLIC_BRAVO_WHATSAPP_CHANNEL") || "[LIEN]",
    parentContact: read("BRAVO_PARENT_CONTACT") || read("NEXT_PUBLIC_BRAVO_PARENT_CONTACT") || "[CONTACT]",
  }
}
