"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Phone, Building, Briefcase } from "lucide-react"

interface AddContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAdd: (contact: any) => void
}

export function AddContactDialog({ open, onOpenChange, onAdd }: AddContactDialogProps) {
  const [contactData, setContactData] = useState({
    name: "",
    role: "",
    department: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactData.name.trim()) return

    onAdd(contactData)
    setContactData({
      name: "",
      role: "",
      department: "",
      email: "",
      phone: "",
    })
    onOpenChange(false)
  }

  const handleCancel = () => {
    setContactData({
      name: "",
      role: "",
      department: "",
      email: "",
      phone: "",
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="eclipse-card border-0 max-w-md">
        <DialogHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full eclipse-gradient flex items-center justify-center">
            <User className="h-6 w-6 eclipse-accent" />
          </div>
          <DialogTitle className="eclipse-title text-xl">Adicionar Novo Contato</DialogTitle>
          <p className="eclipse-text-muted text-sm">Preencha as informações do contato</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label className="eclipse-text-primary flex items-center gap-2">
              <User className="h-4 w-4" />
              Nome *
            </Label>
            <Input
              value={contactData.name}
              onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
              placeholder="Nome completo do contato"
              className="eclipse-input rounded-xl"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="eclipse-text-primary flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Cargo
            </Label>
            <Input
              value={contactData.role}
              onChange={(e) => setContactData({ ...contactData, role: e.target.value })}
              placeholder="Ex: Gerente de Marketing"
              className="eclipse-input rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label className="eclipse-text-primary flex items-center gap-2">
              <Building className="h-4 w-4" />
              Departamento
            </Label>
            <Select
              value={contactData.department}
              onValueChange={(value) => setContactData({ ...contactData, department: value })}
            >
              <SelectTrigger className="eclipse-input rounded-xl">
                <SelectValue placeholder="Selecione o departamento" />
              </SelectTrigger>
              <SelectContent className="eclipse-card rounded-xl border-0">
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="vendas">Vendas</SelectItem>
                <SelectItem value="comercial">Comercial</SelectItem>
                <SelectItem value="parcerias">Parcerias</SelectItem>
                <SelectItem value="influencer">Influencer Marketing</SelectItem>
                <SelectItem value="digital">Marketing Digital</SelectItem>
                <SelectItem value="comunicacao">Comunicação</SelectItem>
                <SelectItem value="diretoria">Diretoria</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="eclipse-text-primary flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </Label>
            <Input
              type="email"
              value={contactData.email}
              onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
              placeholder="email@empresa.com"
              className="eclipse-input rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label className="eclipse-text-primary flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Telefone
            </Label>
            <Input
              type="tel"
              value={contactData.phone}
              onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
              placeholder="(11) 99999-9999"
              className="eclipse-input rounded-xl"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="flex-1 eclipse-button rounded-xl bg-transparent"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 eclipse-button-primary rounded-xl"
              disabled={!contactData.name.trim()}
            >
              Adicionar Contato
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
