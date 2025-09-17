"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { X, Phone, Mail, Instagram, MessageCircle, Star, Calendar, TrendingUp } from "lucide-react"

interface InfluencerContactModalProps {
  influencer: any
  open: boolean
  onClose: () => void
}

export function InfluencerContactModal({ influencer, open, onClose }: InfluencerContactModalProps) {
  if (!open || !influencer) return null

  const getInitials = (name: string) => {
    if (!name) return "??"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const formatPhone = (phone: string) => {
    if (!phone) return ""
    return phone.replace(/(\d{5})(\d{4})/, "$1-$2")
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="eclipse-card border-0 max-w-lg">
        <DialogHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-2 border-[#8A4BFF]/30">
                <AvatarFallback className="bg-gradient-to-br from-[#8A4BFF] to-[#DB9EFF] text-white font-bold text-lg">
                  {getInitials(influencer.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle className="eclipse-title text-xl">{influencer.name || "Influenciador"}</DialogTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className="eclipse-badge text-xs">{influencer.platform || "Plataforma"}</Badge>
                  {influencer.followers && (
                    <Badge variant="outline" className="text-xs eclipse-text-muted">
                      {influencer.followers} seguidores
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="eclipse-button rounded-xl">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Informações de Contato */}
          <div className="eclipse-card eclipse-card-hover rounded-2xl p-6">
            <h3 className="eclipse-title text-lg font-bold mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 eclipse-accent" />
              Informações de Contato
            </h3>

            <div className="space-y-3">
              {influencer.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 eclipse-accent" />
                  <a
                    href={`tel:${influencer.phone}`}
                    className="eclipse-accent hover:eclipse-text-secondary transition-colors"
                  >
                    {formatPhone(influencer.phone)}
                  </a>
                </div>
              )}

              {influencer.email && (
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 eclipse-accent" />
                  <a
                    href={`mailto:${influencer.email}`}
                    className="eclipse-accent hover:eclipse-text-secondary transition-colors"
                  >
                    {influencer.email}
                  </a>
                </div>
              )}

              {influencer.instagram && (
                <div className="flex items-center gap-3">
                  <Instagram className="h-4 w-4 eclipse-accent" />
                  <a
                    href={`https://instagram.com/${influencer.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eclipse-accent hover:eclipse-text-secondary transition-colors"
                  >
                    {influencer.instagram}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Histórico */}
          {influencer.lastCampaign && (
            <div className="eclipse-card eclipse-card-hover rounded-2xl p-6">
              <h3 className="eclipse-title text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 eclipse-accent" />
                Histórico de Campanhas
              </h3>

              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 eclipse-accent" />
                <span className="eclipse-text-muted">Última campanha:</span>
                <span className="eclipse-text-primary font-medium">
                  {new Date(influencer.lastCampaign).toLocaleDateString("pt-BR")}
                </span>
              </div>
            </div>
          )}

          {/* Motivo da Sugestão */}
          {influencer.reason && (
            <div className="eclipse-card eclipse-card-hover rounded-2xl p-6">
              <h3 className="eclipse-title text-lg font-bold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 eclipse-accent" />
                Motivo da Sugestão
              </h3>

              <p className="eclipse-text-secondary leading-relaxed">{influencer.reason}</p>

              {influencer.suggestedBy && (
                <div className="mt-3 text-xs eclipse-text-muted">
                  Sugerido por <span className="eclipse-accent">{influencer.suggestedBy}</span>
                  {influencer.date && <> em {new Date(influencer.date).toLocaleDateString("pt-BR")}</>}
                </div>
              )}
            </div>
          )}

          {/* Ações */}
          <div className="flex gap-3">
            {influencer.phone && (
              <Button
                onClick={() => window.open(`https://wa.me/${influencer.phone.replace(/\D/g, "")}`, "_blank")}
                className="flex-1 eclipse-button-primary rounded-xl"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            )}

            {influencer.instagram && (
              <Button
                variant="outline"
                onClick={() => window.open(`https://instagram.com/${influencer.instagram.replace("@", "")}`, "_blank")}
                className="flex-1 eclipse-button rounded-xl"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
