"use client"

import { cn } from "@/lib/utils"

import { useState, useCallback } from "react"

interface Toast {
  id: string
  title: string
  description?: string
  variant?: "default" | "destructive"
}

let toastCount = 0

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback(({ title, description, variant = "default" }: Omit<Toast, "id">) => {
    const id = `toast-${toastCount++}`
    const newToast = { id, title, description, variant }

    setToasts((prev) => [...prev, newToast])

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)

    return id
  }, [])

  return { toast, toasts }
}

// Toast container component (add to layout if needed)
export function Toaster() {
  const { toasts } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "rounded-lg p-4 shadow-lg max-w-sm",
            toast.variant === "destructive"
              ? "bg-red-600 text-white"
              : "bg-card text-card-foreground border border-border",
          )}
        >
          <div className="font-semibold">{toast.title}</div>
          {toast.description && <div className="text-sm opacity-90 mt-1">{toast.description}</div>}
        </div>
      ))}
    </div>
  )
}
