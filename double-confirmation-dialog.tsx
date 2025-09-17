"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Shield } from "lucide-react"

interface DoubleConfirmationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  action: string
  onConfirm: () => void
  variant?: "default" | "destructive"
}

export function DoubleConfirmationDialog({
  open,
  onOpenChange,
  title,
  description,
  action,
  onConfirm,
  variant = "default",
}: DoubleConfirmationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="eclipse-card border-0 max-w-md">
        <DialogHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center">
            {variant === "destructive" ? (
              <div className="w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-500/30 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full eclipse-gradient border-2 border-[#8A4BFF]/30 flex items-center justify-center">
                <Shield className="h-8 w-8 eclipse-accent" />
              </div>
            )}
          </div>
          <DialogTitle className="eclipse-title text-xl font-bold">{title}</DialogTitle>
          <p className="eclipse-text-muted text-sm mt-2 leading-relaxed">{description}</p>
          <div className="mt-4 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
            <p className="text-yellow-400 text-xs font-medium">⚠️ Esta ação requer confirmação dupla por segurança</p>
          </div>
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
            className={`flex-1 rounded-xl font-bold ${
              variant === "destructive"
                ? "bg-red-500 hover:bg-red-600 text-white border-red-500 shadow-lg shadow-red-500/25"
                : "eclipse-button-primary shadow-lg shadow-[#8A4BFF]/25"
            }`}
          >
            {action}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
