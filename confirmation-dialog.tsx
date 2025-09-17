"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle } from "lucide-react"

interface ConfirmationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  action: string
  onConfirm: () => void
  variant?: "default" | "destructive"
}

export function ConfirmationDialog({
  open,
  onOpenChange,
  title,
  description,
  action,
  onConfirm,
  variant = "default",
}: ConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="eclipse-card border-0 max-w-md">
        <DialogHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center">
            {variant === "destructive" ? (
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full eclipse-gradient flex items-center justify-center">
                <CheckCircle className="h-6 w-6 eclipse-accent" />
              </div>
            )}
          </div>
          <DialogTitle className="eclipse-title text-xl">{title}</DialogTitle>
          <p className="eclipse-text-muted text-sm mt-2">{description}</p>
        </DialogHeader>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1 eclipse-button rounded-xl">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              onConfirm()
              onOpenChange(false)
            }}
            className={`flex-1 rounded-xl ${
              variant === "destructive"
                ? "bg-red-500 hover:bg-red-600 text-white border-red-500"
                : "eclipse-button-primary"
            }`}
          >
            {action}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
