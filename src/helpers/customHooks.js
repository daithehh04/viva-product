'use client'

import { useEffect } from 'react'

export function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (event.target.classList.contains('filter-item') || !ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}
