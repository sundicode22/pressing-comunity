import { cn } from "@/lib/utils"

const patterns = [
  "radial-gradient(circle at 28% 22%, #4a4a4a 0%, transparent 46%), radial-gradient(circle at 78% 72%, #2a2a2a 0%, transparent 42%), linear-gradient(160deg, #111 0%, #2b2b2b 100%)",
  "radial-gradient(circle at 70% 18%, #555 0%, transparent 40%), radial-gradient(circle at 20% 80%, #1c1c1c 0%, transparent 45%), linear-gradient(200deg, #0d0d0d 0%, #3a3a3a 100%)",
  "radial-gradient(circle at 50% 40%, #666 0%, transparent 38%), linear-gradient(180deg, #1a1a1a 0%, #000 100%)",
  "linear-gradient(135deg, #000 0%, #444 48%, #111 100%)",
  "radial-gradient(circle at 12% 30%, #3d3d3d 0%, transparent 36%), linear-gradient(90deg, #0a0a0a 0%, #2f2f2f 100%)",
]

type ImageFieldProps = {
  seed?: number
  className?: string
  label?: string
}

export function ImageField({ seed = 0, className, label }: ImageFieldProps) {
  const pattern = patterns[seed % patterns.length]

  return (
    <div
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn("absolute inset-0 grayscale", className)}
      style={{ backgroundImage: pattern }}
    >
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
}
