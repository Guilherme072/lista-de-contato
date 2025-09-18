"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Globe, MessageSquare, AlertTriangle, Edit, Calendar, User } from "lucide-react"

interface BrandCardProps {
  brand: any
  onClick: () => void
  onUpdate: (brand: any) => void
}

export function BrandCard({ brand, onClick, onUpdate }: BrandCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Prospecto":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Inativo":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getRelationshipColor = (level: string) => {
    switch (level) {
      case "Excelente":
        return "text-green-400"
      case "Bom":
        return "text-blue-400"
      case "Regular":
        return "text-yellow-400"
      case "Fraco":
        return "text-orange-400"
      case "Nenhum":
        return "text-gray-400"
      default:
        return "text-gray-400"
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <Card className="eclipse-card eclipse-card-hover rounded-2xl cursor-pointer h-full flex flex-col" onClick={onClick}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Avatar className="w-12 h-12 border-2 border-[#8A4BFF]/30">
              <AvatarImage src={brand.logo || "/placeholder.svg"} alt={`${brand.name} logo`} />
              <AvatarFallback className="bg-gradient-to-br from-[#8A4BFF] to-[#DB9EFF] text-white font-bold text-sm">
                {getInitials(brand.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="eclipse-text-primary font-bold text-lg truncate">{brand.name}</h3>
              <p className="eclipse-text-muted text-sm">{brand.category}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <Badge className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(brand.status)}`}>
              {brand.status}
            </Badge>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  onClick()
                }}
                className="h-8 w-8 p-0 eclipse-button rounded-lg"
              >
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6 flex-1 flex flex-col">
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 eclipse-accent" />
            <span className="eclipse-text-muted">{brand.contacts?.length || 0} contatos</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 eclipse-accent" />
            <span className="eclipse-text-muted">{brand.observations?.length || 0} obs.</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm">
          <span className="eclipse-text-muted">Relacionamento:</span>
          <span className={`font-medium ${getRelationshipColor(brand.relationshipLevel)}`}>
            {brand.relationshipLevel}
          </span>
        </div>

        {brand.neverContacted ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <div>
                <h4 className="text-red-400 font-medium text-sm">Nunca Contatado</h4>
                <p className="eclipse-text-muted text-xs">Precisa de primeira abordagem</p>
              </div>
            </div>
          </div>
        ) : (
          brand.lastContact && (
            <div className="eclipse-gradient border border-[#8A4BFF]/20 rounded-xl p-3 mb-4">
              <h4 className="eclipse-text-primary font-medium text-sm mb-1">Último Contato</h4>
              <div className="space-y-1 text-xs eclipse-text-muted">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(brand.lastContact).toLocaleDateString("pt-BR")}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  <span>Por {brand.lastContactBy}</span>
                </div>
                {brand.lastContactWith && (
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    <span>Com {brand.lastContactWith}</span>
                  </div>
                )}
              </div>
            </div>
          )
        )}

        <div className="mt-auto flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={(e) => {
              e.stopPropagation()
              if (brand.website) {
                window.open(brand.website, "_blank")
              }
            }}
            disabled={!brand.website}
            className="flex-1 eclipse-button rounded-xl"
          >
            <Globe className="h-4 w-4 mr-2" />
            Site
          </Button>
          <Button size="sm" onClick={onClick} className="flex-1 eclipse-button-primary rounded-xl">
            Ver Detalhes
          </Button>
        </div>

        <div className="mt-3 text-xs eclipse-text-muted text-center">
          Adicionado por {brand.addedBy}
          {brand.suggestedBy && (
            <>
              {" • "}
              <span className="eclipse-accent">Sugerido por {brand.suggestedBy}</span>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
