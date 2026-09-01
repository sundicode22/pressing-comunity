"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

export function useCanMotion() {
  const reduce = useReducedMotion()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (reduce) {
      setEnabled(false)
      return
    }

    const mq = window.matchMedia("(min-width: 1024px)")
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [reduce])

  return enabled && !reduce
}
