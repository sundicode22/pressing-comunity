"use client"

import { useReducedMotion } from "framer-motion"

export function useCanMotion() {
  const reduce = useReducedMotion()
  return !reduce
}
