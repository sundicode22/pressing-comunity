"use client"

import { useMemo, useState, type FormEvent } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"

import {
  Field,
  SelectControl,
  fieldAreaClass,
  fieldControlClass,
} from "@/components/forms/field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  contactSubjects,
  partnershipTypes,
  type ContactSubject,
} from "@/lib/inquiry"
import { cn } from "@/lib/utils"

type InquiryFormProps = {
  defaultSubject?: ContactSubject
  className?: string
}

export function InquiryForm({ defaultSubject, className }: InquiryFormProps) {
  const [subject, setSubject] = useState<ContactSubject | "">(defaultSubject ?? "")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  const isPartner = subject === "Partenariat"
  const kind = isPartner ? "partner" : "contact"

  const copy = useMemo(() => {
    if (isPartner) {
      return {
        title: "Proposer un partenariat",
        text: "Présentez votre organisation et le projet que vous imaginez. Nous vous répondons pour en discuter — pas pour coller un logo.",
        submit: "Envoyer la proposition",
        messageLabel: "Projet commun envisagé",
        messagePlaceholder: "Quelle collaboration imaginez-vous, avec qui, et pour quel impact ?",
      }
    }
    return {
      title: "Envoyer un message",
      text: "Choisissez d’abord la démarche, puis dites-nous qui vous êtes et ce dont vous avez besoin. WhatsApp reste le plus rapide ; le formulaire convient aux demandes détaillées.",
      submit: "Envoyer mon message",
      messageLabel: "Message",
      messagePlaceholder: "Expliquez votre demande en quelques phrases.",
    }
  }, [isPartner])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setError(null)

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind, subject, intent: subject || "Contact" }),
      })
      const payload = (await response.json()) as { error?: string }
      if (!response.ok) {
        throw new Error(payload.error || "Envoi impossible.")
      }
      setStatus("success")
      form.reset()
    } catch (caught) {
      setStatus("error")
      setError(caught instanceof Error ? caught.message : "Envoi impossible.")
    }
  }

  if (status === "success") {
    return (
      <div className={cn("rounded-[1.75rem] bg-white p-7 ring-1 ring-ink/8 sm:p-9", className)}>
        <span className="grid size-14 place-items-center rounded-full bg-teal/10 text-teal">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={1.75} className="size-7" />
        </span>
        <h3 className="mt-5 text-2xl tracking-tight md:text-3xl">C’est envoyé.</h3>
        <p className="mt-3 max-w-md text-lg leading-relaxed text-ink/65">
          Merci. Vous recevrez un e-mail de confirmation, et l’équipe vous répondra dès qu’un
          interlocuteur pourra vous aider.
        </p>
        <Button
          type="button"
          className="mt-8 h-12 rounded-full px-6 text-base"
          onClick={() => setStatus("idle")}
        >
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("rounded-[1.5rem] bg-white p-5 ring-1 ring-ink/8 sm:rounded-[1.75rem] sm:p-8", className)}
    >
      <p className="text-[11px] font-semibold tracking-[0.2em] text-teal uppercase">
        Une seule adresse pour toutes les démarches
      </p>
      <h3 className="mt-2 text-2xl tracking-tight md:text-3xl">{copy.title}</h3>
      <p className="mt-2 max-w-xl text-base leading-relaxed text-ink/60">{copy.text}</p>

      <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2">
        <Field id="subject" label="Votre démarche" className="sm:col-span-2">
          <SelectControl
            id="subject"
            name="subject"
            required
            value={subject}
            onChange={(event) => {
              setSubject(event.target.value as ContactSubject)
              setError(null)
            }}
          >
            <option value="" disabled>
              Choisir une action
            </option>
            {contactSubjects.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </SelectControl>
        </Field>

        {isPartner ? (
          <Field id="organization" label="Organisation" className="sm:col-span-2">
            <Input
              id="organization"
              name="organization"
              required
              autoComplete="organization"
              placeholder="Entreprise, institution, association…"
              className={fieldControlClass}
            />
          </Field>
        ) : null}

        <Field id="name" label={isPartner ? "Nom du contact" : "Nom"}>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Votre nom"
            className={fieldControlClass}
          />
        </Field>

        <Field id="email" label="E-mail">
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vous@exemple.com"
            className={fieldControlClass}
          />
        </Field>

        <Field id="whatsapp" label="WhatsApp" hint="Facultatif, mais plus simple pour vous recontacter.">
          <Input
            id="whatsapp"
            name="whatsapp"
            autoComplete="tel"
            placeholder="+237 …"
            className={fieldControlClass}
          />
        </Field>

        {isPartner ? (
          <Field id="role" label="Fonction">
            <Input
              id="role"
              name="role"
              placeholder="Directeur, responsable RSE…"
              className={fieldControlClass}
            />
          </Field>
        ) : null}

        {isPartner ? (
          <Field id="partnershipType" label="Type de partenariat" className="sm:col-span-2">
            <SelectControl id="partnershipType" name="partnershipType" required defaultValue="">
              <option value="" disabled>
                Choisir une piste
              </option>
              {partnershipTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </SelectControl>
          </Field>
        ) : null}

        <Field id="message" label={copy.messageLabel} className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder={copy.messagePlaceholder}
            className={fieldAreaClass}
          />
        </Field>
      </div>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
      <input type="hidden" name="kind" value={kind} />

      {error ? (
        <p className="mt-5 text-base text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-12 w-full rounded-full px-7 text-base font-semibold sm:w-auto sm:min-w-52"
        >
          {status === "submitting" ? "Envoi…" : copy.submit}
        </Button>
        <p className="text-sm leading-relaxed text-ink/50">
          Vous recevrez un accusé de réception par e-mail.
        </p>
      </div>
    </form>
  )
}
