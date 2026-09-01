"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export type FormField = {
  name: string
  label: string
  type?: string
}

type PlaceholderFormProps = {
  fields: FormField[]
  submitLabel: string
}

export function PlaceholderForm({ fields, submitLabel }: PlaceholderFormProps) {
  return (
    <form
      className="mt-8 grid w-full max-w-md gap-4"
      onSubmit={(event) => event.preventDefault()}
    >
      {fields.map((field) => (
        <div key={field.name} className="grid gap-1.5">
          <Label htmlFor={field.name} className="text-sm">
            {field.label}
          </Label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={4}
              className="min-h-24 w-full rounded-full border border-input bg-transparent px-5 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
            />
          ) : (
            <Input
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              className="h-11 rounded-full px-5"
            />
          )}
        </div>
      ))}
      <Button type="submit" className="h-11 rounded-full text-sm">
        {submitLabel}
      </Button>
    </form>
  )
}
