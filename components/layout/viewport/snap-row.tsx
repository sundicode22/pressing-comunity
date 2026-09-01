"use client"

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"

import { SnapProgress } from "./snap-progress"

type SnapRowProps = {
  className?: string
  children: ReactNode
}

export function SnapRow({ className, children }: SnapRowProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const lockRef = useRef(false)
  const [index, setIndex] = useState(0)
  const [total, setTotal] = useState(0)

  const updateIndex = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const width = el.clientWidth || 1
    setIndex(Math.round(el.scrollLeft / width))
  }, [])

  const scrollToIndex = useCallback((next: number) => {
    const el = scrollerRef.current
    if (!el) return
    const slides = el.querySelectorAll("[data-snap-slide]")
    const clamped = Math.max(0, Math.min(next, slides.length - 1))
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" })
    setIndex(clamped)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const slides = el.querySelectorAll("[data-snap-slide]")
    setTotal(slides.length)

    const onScroll = () => updateIndex()
    el.addEventListener("scroll", onScroll, { passive: true })

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")

    const onWheel = (event: WheelEvent) => {
      if (reduced.matches) return
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return

      const atStart = el.scrollLeft <= 1
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1

      if ((event.deltaY > 0 && atEnd) || (event.deltaY < 0 && atStart)) {
        return
      }

      event.preventDefault()
      if (lockRef.current) return

      lockRef.current = true
      const direction = event.deltaY > 0 ? 1 : -1
      const width = el.clientWidth || 1
      const current = Math.round(el.scrollLeft / width)
      scrollToIndex(current + direction)
      window.setTimeout(() => {
        lockRef.current = false
      }, 650)
    }

    el.addEventListener("wheel", onWheel, { passive: false })

    return () => {
      el.removeEventListener("scroll", onScroll)
      el.removeEventListener("wheel", onWheel)
    }
  }, [children, scrollToIndex, updateIndex])

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollToIndex(index + 1)
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollToIndex(index - 1)
    }
  }

  return (
    <div className={cn("relative h-full w-full", className)}>
      <div
        ref={scrollerRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="scrollbar-none flex h-full w-full overflow-x-auto overflow-y-hidden overscroll-x-contain snap-x snap-mandatory snap-always outline-none"
      >
        {children}
      </div>
      <SnapProgress current={index} total={total} />
    </div>
  )
}
