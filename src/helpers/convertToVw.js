'use client'

export default function vw(number) {
  if (typeof window !== 'undefined') {
    const vwRatio = window.innerWidth / 100
    return number * vwRatio
  }
}
