"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Building, Globe, Star, AlertTriangle, Plus } from "lucide-react"

interface AddBrandDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAdd: (brand: any) => void
}

export function AddBrandDialog({ open, onOpenChange, onAdd }: AddBrandDialogProps) {
  const [brandData, setBrandData] = useState({
    name: "",
    category: "",
    website: "",
    status: "Prospecto",
    relationshipLevel: "Nenhum",
    neverContacted: true,
    observations: "",
    suggestedBy: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!brandData.name.trim()) return

    const newBrand = {
      ...brandData,
      id: Date.now(),
      addedBy: "Usuário Atual",
      addedDate: new Date().toISOString().split("T")[0],
      contacts: [],
      observations: brandData.observations.trim()
        ? [
            {
              id: 1,
              text: brandData.observations,
              author: "Usuário Atual",
              date: new Date().toISOString().split("T")[0],
            },
          ]
        : [],
      suggestedInfluencers: [],
    }

    onAdd(newBrand)
    setBrandData({
      name: "",
      category: "",
      website: "",
      status: "Prospecto",
      relationshipLevel: "Nenhum",
      neverContacted: true,
      observations: "",
      suggestedBy: "",
    })
    onOpenChange(false)
  }

  const handleCancel = () => {
    setBrandData({
      name: "",
      category: "",
      website: "",
      status: "Prospecto",
      relationshipLevel: "Nenhum",
      neverContacted: true,
      observations: "",
      suggestedBy: "",
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="eclipse-card border-0 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full eclipse-gradient flex items-center justify-center">
            <Building className="h-6 w-6 eclipse-accent" />
          </div>
          <DialogTitle className="eclipse-title text-xl">Adicionar Nova Marca</DialogTitle>
          <p className="eclipse-text-muted text-sm">Preencha as informações da nova marca ou contato</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Básicas */}
          <div className="space-y-4">
            <h3 className="eclipse-title text-lg font-semibold">Informações Básicas</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="eclipse-text-primary flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Nome *
                </Label>
                <Input
                  value={brandData.name}
                  onChange={(e) => setBrandData({ ...brandData, name: e.target.value })}
                  placeholder="Nome da marca ou pessoa"
                  className="eclipse-input rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="eclipse-text-primary">Categoria *</Label>
                <Select
                  value={brandData.category}
                  onValueChange={(value) => setBrandData({ ...brandData, category: value })}
                  required
                >
                  <SelectTrigger className="eclipse-input rounded-xl">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent className="eclipse-card rounded-xl border-0">
                    <SelectItem value="Marca">Marca</SelectItem>
                    <SelectItem value="Bet">Bet</SelectItem>
                    <SelectItem value="Agência">Agência</SelectItem>
                    <SelectItem value="Influenciador">Influenciador</SelectItem>
                    <SelectItem value="Pessoa Influente">Pessoa Influente</SelectItem>
                    <SelectItem value="Freelancer">Freelancer</SelectItem>
                    <SelectItem value="Influenciador que já fechou">Influenciador que já fechou</SelectItem>
                    <SelectItem value="Influenciador sugerido">Influenciador sugerido</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="eclipse-text-primary flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Website
              </Label>
              <Input
                type="url"
                value={brandData.website}
                onChange={(e) => setBrandData({ ...brandData, website: e.target.value })}
                placeholder="https://exemplo.com"
                className="eclipse-input rounded-xl"
              />
            </div>
          </div>

          {/* Status e Relacionamento */}
          <div className="space-y-4">
            <h3 className="eclipse-title text-lg font-semibold">Status e Relacionamento</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="eclipse-text-primary">Status</Label>
                <Select
                  value={brandData.status}
                  onValueChange={(value) => setBrandData({ ...brandData, status: value })}
                >
                  <SelectTrigger className="eclipse-input rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="eclipse-card rounded-xl border-0">
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Prospecto">Prospecto</SelectItem>
                    <SelectItem value="Inativo">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="eclipse-text-primary flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Nível de Relacionamento
                </Label>
                <Select
                  value={brandData.relationshipLevel}
                  onValueChange={(value) => setBrandData({ ...brandData, relationshipLevel: value })}
                >
                  <SelectTrigger className="eclipse-input rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="eclipse-card rounded-xl border-0">
                    <SelectItem value="Excelente">Excelente</SelectItem>
                    <SelectItem value="Bom">Bom</SelectItem>
                    <SelectItem value="Regular">Regular</SelectItem>
                    <SelectItem value="Fraco">Fraco</SelectItem>
                    <SelectItem value="Nenhum">Nenhum</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 eclipse-card rounded-xl">
              <Switch
                id="never-contacted"
                checked={brandData.neverContacted}
                onCheckedChange={(checked) => setBrandData({ ...brandData, neverContacted: checked })}
              />
              <div className="flex-1">
                <Label
                  htmlFor="never-contacted"
                  className="eclipse-text-primary flex items-center gap-2 cursor-pointer"
                >
                  <AlertTriangle className="h-4 w-4 text-yellow-400" />
                  Nunca foi contatado
                </Label>
                <p className="eclipse-text-muted text-xs">Marque se esta marca/pessoa nunca foi contatada antes</p>
              </div>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="space-y-4">
            <h3 className="eclipse-title text-lg font-semibold">Informações Adicionais</h3>

            <div className="space-y-2">
              <Label className="eclipse-text-primary">Sugerido por</Label>
              <Input
                value={brandData.suggestedBy}
                onChange={(e) => setBrandData({ ...brandData, suggestedBy: e.target.value })}
                placeholder="Nome de quem sugeriu esta marca (opcional)"
                className="eclipse-input rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label className="eclipse-text-primary">Observação inicial</Label>
              <Textarea
                value={brandData.observations}
                onChange={(e) => setBrandData({ ...brandData, observations: e.target.value })}
                placeholder="Adicione uma observação inicial sobre esta marca..."
                rows={3}
                className="eclipse-input rounded-xl"
              />
            </div>
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
              disabled={!brandData.name.trim() || !brandData.category}
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Marca
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
