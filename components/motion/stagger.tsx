"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type StaggerProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Stagger({ children, className, delay = 0 }: StaggerProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.1, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }
      }
    >
      {children}
    </motion.div>
  )
}
