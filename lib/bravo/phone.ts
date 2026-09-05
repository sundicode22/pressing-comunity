/** Normalize Cameroon mobile numbers to +237 followed by 9 digits starting with 6. */
export function normalizeCameroonPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "")
  if (!digits) return null

  let national = digits
  if (digits.startsWith("237") && digits.length >= 12) {
    national = digits.slice(3)
  } else if (digits.startsWith("00237") && digits.length >= 14) {
    national = digits.slice(5)
  }

  if (national.length === 10 && national.startsWith("06")) {
    national = national.slice(1)
  }

  if (!/^6\d{8}$/.test(national)) return null
  return `+237${national}`
}

/** Display as +237 6XX XX XX XX */
export function formatCameroonPhone(e164: string): string {
  const national = e164.replace(/^\+237/, "")
  if (national.length !== 9) return e164
  return `+237 ${national.slice(0, 3)} ${national.slice(3, 5)} ${national.slice(5, 7)} ${national.slice(7, 9)}`
}

export function formatPhoneInput(raw: string): string {
  const normalized = normalizeCameroonPhone(raw)
  return normalized ? formatCameroonPhone(normalized) : raw
}
