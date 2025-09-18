"use client"

import { useState } from "react"
import {
  X,
  ExternalLink,
  Mail,
  Phone,
  Star,
  Plus,
  MessageCircle,
  User,
  Calendar,
  FileText,
  Edit,
  Trash2,
  Camera,
  CheckCircle,
  TrendingUp,
  Save,
  Undo2,
  Redo2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { InfluencerContactModal } from "./influencer-contact-modal"
import { AddContactDialog } from "./add-contact-dialog"
import { ConfirmationDialog } from "./confirmation-dialog"
import { DoubleConfirmationDialog } from "./double-confirmation-dialog"

interface BrandDetailsModalProps {
  brand: any
  open: boolean
  onClose: () => void
  onUpdate: (brand: any) => void
}

export function BrandDetailsModal({ brand, open, onClose, onUpdate }: BrandDetailsModalProps) {
  const { toast } = useToast()
  const [selectedInfluencer, setSelectedInfluencer] = useState(null)
  const [showAddContact, setShowAddContact] = useState(false)
  const [newObservation, setNewObservation] = useState("")
  const [showObservationForm, setShowObservationForm] = useState(false)
  const [editingContact, setEditingContact] = useState(null)
  const [editingContactData, setEditingContactData] = useState({})
  const [addingContactMethod, setAddingContactMethod] = useState(null)
  const [newContactMethod, setNewContactMethod] = useState({ type: "", value: "" })

  // Confirmation states
  const [showFirstConfirmation, setShowFirstConfirmation] = useState(false)
  const [showSecondConfirmation, setShowSecondConfirmation] = useState(false)
  const [pendingAction, setPendingAction] = useState<{
    type: string
    data: any
    description: string
  } | null>(null)

  // History for undo/redo
  const [actionHistory, setActionHistory] = useState<any[]>([])

  // Early return if modal is not open or brand is null
  if (!open || !brand) return null

  // Ensure we always have arrays to work with
  const safeObservations = Array.isArray(brand?.observations) ? brand.observations : []
  const safeContacts = Array.isArray(brand?.contacts) ? brand.contacts : []
  const safeSuggestedInfluencers = Array.isArray(brand?.suggestedInfluencers) ? brand.suggestedInfluencers : []

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

  const executeAction = (action: any) => {
    // Save current state for undo
    setActionHistory((prev) => [...prev, { ...brand }])

    const updatedBrand = { ...brand }
    let actionMessage = ""
    let undoMessage = ""

    switch (action.type) {
      case "addObservation":
        const observation = {
          id: safeObservations.length + 1,
          text: action.data.text,
          author: "Usuário Atual",
          date: new Date().toISOString().split("T")[0],
        }
        updatedBrand.observations = [...safeObservations, observation]
        actionMessage = "Observação adicionada com sucesso!"
        undoMessage = "Observação removida"
        setNewObservation("")
        setShowObservationForm(false)
        break

      case "editContact":
        updatedBrand.contacts = safeContacts.map((contact) =>
          contact.id === action.data.id ? { ...contact, ...action.data.updates } : contact,
        )
        actionMessage = "Contato editado com sucesso!"
        undoMessage = "Edição do contato desfeita"
        setEditingContact(null)
        setEditingContactData({})
        break

      case "deleteContact":
        updatedBrand.contacts = safeContacts.filter((contact) => contact.id !== action.data.id)
        actionMessage = "Contato removido com sucesso!"
        undoMessage = "Contato restaurado"
        break

      case "addContactMethod":
        updatedBrand.contacts = safeContacts.map((contact) =>
          contact.id === action.data.contactId
            ? {
                ...contact,
                contactMethods: [
                  ...(Array.isArray(contact.contactMethods) ? contact.contactMethods : []),
                  action.data.method,
                ],
              }
            : contact,
        )
        actionMessage = "Método de contato adicionado!"
        undoMessage = "Método de contato removido"
        setAddingContactMethod(null)
        setNewContactMethod({ type: "", value: "" })
        break

      case "deleteObservation":
        updatedBrand.observations = safeObservations.filter((obs) => obs.id !== action.data.id)
        actionMessage = "Observação removida!"
        undoMessage = "Observação restaurada"
        break
    }

    onUpdate(updatedBrand)

    // Show success toast with undo option
    toast({
      title: actionMessage,
      description: "Ação realizada com sucesso",
      action: (
        <Button variant="outline" size="sm" onClick={() => undoLastAction()} className="eclipse-button rounded-lg">
          <Undo2 className="h-4 w-4 mr-1" />
          Desfazer
        </Button>
      ),
    })
  }

  const undoLastAction = () => {
    if (actionHistory.length > 0) {
      const previousState = actionHistory[actionHistory.length - 1]
      setActionHistory((prev) => prev.slice(0, -1))
      onUpdate(previousState)

      toast({
        title: "Ação desfeita",
        description: "Estado anterior restaurado",
        action: (
          <Button
            variant="outline"
            size="sm"
            onClick={() => redoLastAction(previousState)}
            className="eclipse-button rounded-lg"
          >
            <Redo2 className="h-4 w-4 mr-1" />
            Refazer
          </Button>
        ),
      })
    }
  }

  const redoLastAction = (previousState: any) => {
    setActionHistory((prev) => [...prev, previousState])
    onUpdate(brand)

    toast({
      title: "Ação refeita",
      description: "Alteração reaplicada com sucesso",
    })
  }

  const initiateAction = (type: string, data: any, description: string) => {
    setPendingAction({ type, data, description })
    setShowFirstConfirmation(true)
  }

  const handleFirstConfirmation = () => {
    setShowFirstConfirmation(false)
    setShowSecondConfirmation(true)
  }

  const handleSecondConfirmation = () => {
    if (pendingAction) {
      executeAction(pendingAction)
      setPendingAction(null)
    }
    setShowSecondConfirmation(false)
  }

  const addObservation = () => {
    if (!newObservation.trim()) return

    initiateAction(
      "addObservation",
      { text: newObservation },
      `Adicionar a observação: "${newObservation.substring(0, 50)}${newObservation.length > 50 ? "..." : ""}"`,
    )
  }

  const startEditingContact = (contact: any) => {
    setEditingContact(contact.id)
    setEditingContactData({
      name: contact.name || "",
      role: contact.role || "",
      department: contact.department || "",
      email: contact.email || "",
      phone: contact.phone || "",
    })
  }

  const saveContactEdit = () => {
    initiateAction(
      "editContact",
      { id: editingContact, updates: editingContactData },
      `Salvar alterações no contato "${editingContactData.name}"`,
    )
  }

  const addContactMethod = (contactId: number) => {
    if (!newContactMethod.type || !newContactMethod.value) return

    const contact = safeContacts.find((c) => c.id === contactId)
    initiateAction(
      "addContactMethod",
      { contactId, method: newContactMethod },
      `Adicionar ${newContactMethod.type} para ${contact?.name || "contato"}`,
    )
  }

  const deleteContact = (contactId: number) => {
    const contact = safeContacts.find((c) => c.id === contactId)
    initiateAction("deleteContact", { id: contactId }, `Remover o contato "${contact?.name || "Desconhecido"}"`)
  }

  const deleteObservation = (obsId: number) => {
    const observation = safeObservations.find((obs) => obs.id === obsId)
    initiateAction(
      "deleteObservation",
      { id: obsId },
      `Remover a observação de ${observation?.author || "autor desconhecido"}`,
    )
  }

  // Mock data para demonstração
  const closedDeals = brand.closedDeals || 3
  const previousInfluencers = Array.isArray(brand.previousInfluencers)
    ? brand.previousInfluencers
    : [
        { name: "Casimiro Miguel", phone: "+55 11 99887-7665", instagram: "@casimiro", lastCampaign: "2023-12-15" },
        { name: "Gaules", phone: "+55 11 98765-4321", instagram: "@gaules", lastCampaign: "2023-11-20" },
      ]

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto eclipse-card eclipse-card-hover rounded-3xl border-0 relative">
          <CardContent className="p-0 relative z-10">
            {/* Header */}
            <div className="p-8 pb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <Avatar className="w-16 h-16 border-2 border-[#8A4BFF]/30">
                      <AvatarFallback className="bg-gradient-to-br from-[#8A4BFF] to-[#DB9EFF] text-white font-bold text-lg">
                        {getInitials(brand.name)}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full eclipse-button-primary p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <h2 className="eclipse-title text-2xl font-bold">{brand.name || "Nome da Marca"}</h2>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="eclipse-text-secondary text-sm">{brand.category || "Categoria"}</span>
                      <Badge className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(brand.status)}`}>
                        {brand.status || "Status"}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {actionHistory.length > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={undoLastAction}
                      className="eclipse-button rounded-xl bg-transparent"
                    >
                      <Undo2 className="h-4 w-4 mr-2" />
                      Desfazer
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" onClick={onClose} className="eclipse-button rounded-xl">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="eclipse-card eclipse-card-hover rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="eclipse-text-secondary text-sm">Relacionamento:</span>
                    <span className={`font-medium ${getRelationshipColor(brand.relationshipLevel)}`}>
                      {brand.relationshipLevel || "Nenhum"}
                    </span>
                  </div>
                </div>

                <div className="eclipse-card eclipse-card-hover rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="eclipse-text-secondary text-sm">Negócios Fechados:</span>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 eclipse-accent" />
                      <span className="eclipse-text-secondary font-bold">{closedDeals}</span>
                    </div>
                  </div>
                </div>

                <div className="eclipse-card eclipse-card-hover rounded-2xl p-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => brand.website && window.open(brand.website, "_blank")}
                    className="w-full eclipse-button rounded-xl"
                    disabled={!brand.website}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visitar Site
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="eclipse-text-secondary text-sm">Adicionada por:</span>
                    <span className="eclipse-text-primary font-medium">{brand.addedBy || "Desconhecido"}</span>
                  </div>

                  {brand.suggestedBy && (
                    <div className="flex items-center justify-between">
                      <span className="eclipse-text-secondary text-sm">Sugerida por:</span>
                      <span className="eclipse-accent font-medium">{brand.suggestedBy}</span>
                    </div>
                  )}
                </div>

                <div>
                  {!brand.neverContacted && brand.lastContact && (
                    <div className="text-xs eclipse-text-secondary opacity-70">
                      Último contato: {new Date(brand.lastContact).toLocaleDateString("pt-BR")}
                      <br />
                      Por <strong className="eclipse-text-primary">{brand.lastContactBy || "Desconhecido"}</strong> com{" "}
                      <strong className="eclipse-text-primary">{brand.lastContactWith || "Desconhecido"}</strong>
                    </div>
                  )}
                </div>
              </div>

              {brand.neverContacted && (
                <div className="mt-4">
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs px-4 py-2 rounded-full eclipse-pulse">
                    ⚠️ Marca nunca foi contatada
                  </Badge>
                </div>
              )}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#8A4BFF]/30 to-transparent"></div>

            {/* Contatos */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl eclipse-gradient flex items-center justify-center">
                    <User className="h-5 w-5 eclipse-accent" />
                  </div>
                  <h3 className="eclipse-title text-xl font-bold">Contatos da Marca ({safeContacts.length})</h3>
                </div>
                <Button
                  size="sm"
                  onClick={() => setShowAddContact(true)}
                  className="eclipse-button-primary rounded-xl px-6"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Contato
                </Button>
              </div>

              {safeContacts.length > 0 ? (
                <div className="space-y-6">
                  {safeContacts.map((contact: any, index: number) => (
                    <div key={contact.id || index} className="eclipse-card eclipse-card-hover rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <Avatar className="w-12 h-12 border-2 border-[#8A4BFF]/30">
                            <AvatarFallback className="bg-gradient-to-br from-[#8A4BFF] to-[#DB9EFF] text-white font-bold">
                              {getInitials(contact.name)}
                            </AvatarFallback>
                          </Avatar>
                          <Button
                            size="sm"
                            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full eclipse-button-primary p-0"
                          >
                            <Camera className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="flex-1 min-w-0">
                          {editingContact === contact.id ? (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="eclipse-text-secondary text-sm">Nome</Label>
                                  <Input
                                    value={editingContactData.name || ""}
                                    onChange={(e) =>
                                      setEditingContactData({ ...editingContactData, name: e.target.value })
                                    }
                                    className="eclipse-input rounded-xl mt-1"
                                  />
                                </div>
                                <div>
                                  <Label className="eclipse-text-secondary text-sm">Cargo</Label>
                                  <Input
                                    value={editingContactData.role || ""}
                                    onChange={(e) =>
                                      setEditingContactData({ ...editingContactData, role: e.target.value })
                                    }
                                    className="eclipse-input rounded-xl mt-1"
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div>
                                  <Label className="eclipse-text-secondary text-sm">Departamento</Label>
                                  <Input
                                    value={editingContactData.department || ""}
                                    onChange={(e) =>
                                      setEditingContactData({ ...editingContactData, department: e.target.value })
                                    }
                                    className="eclipse-input rounded-xl mt-1"
                                  />
                                </div>
                                <div>
                                  <Label className="eclipse-text-secondary text-sm">Email</Label>
                                  <Input
                                    value={editingContactData.email || ""}
                                    onChange={(e) =>
                                      setEditingContactData({ ...editingContactData, email: e.target.value })
                                    }
                                    className="eclipse-input rounded-xl mt-1"
                                  />
                                </div>
                                <div>
                                  <Label className="eclipse-text-secondary text-sm">Telefone</Label>
                                  <Input
                                    value={editingContactData.phone || ""}
                                    onChange={(e) =>
                                      setEditingContactData({ ...editingContactData, phone: e.target.value })
                                    }
                                    className="eclipse-input rounded-xl mt-1"
                                  />
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={saveContactEdit}
                                  className="eclipse-button-primary rounded-xl"
                                >
                                  <Save className="h-4 w-4 mr-2" />
                                  Salvar
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setEditingContact(null)}
                                  className="eclipse-button rounded-xl"
                                >
                                  Cancelar
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h4 className="eclipse-text-primary font-bold text-lg">
                                    {contact.name || "Nome não informado"}
                                  </h4>
                                  <p className="eclipse-text-secondary text-sm">
                                    {contact.role || "Cargo não informado"}
                                  </p>
                                  <p className="eclipse-text-muted text-xs">
                                    {contact.department || "Departamento não informado"}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => startEditingContact(contact)}
                                    className="eclipse-button rounded-xl h-8 px-3"
                                  >
                                    <Edit className="h-3 w-3 mr-1" />
                                    Editar
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => deleteContact(contact.id)}
                                    className="eclipse-button rounded-xl h-8 px-3 hover:border-red-500/50"
                                  >
                                    <Trash2 className="h-3 w-3 mr-1" />
                                    Excluir
                                  </Button>
                                </div>
                              </div>

                              <div className="space-y-2 mb-4">
                                {contact.email && (
                                  <div className="flex items-center gap-3 text-sm">
                                    <Mail className="h-4 w-4 eclipse-accent" />
                                    <a
                                      href={`mailto:${contact.email}`}
                                      className="eclipse-accent hover:eclipse-text-secondary transition-colors"
                                    >
                                      {contact.email}
                                    </a>
                                  </div>
                                )}
                                {contact.phone && (
                                  <div className="flex items-center gap-3 text-sm">
                                    <Phone className="h-4 w-4 eclipse-accent" />
                                    <a
                                      href={`tel:${contact.phone}`}
                                      className="eclipse-accent hover:eclipse-text-secondary transition-colors"
                                    >
                                      {formatPhone(contact.phone)}
                                    </a>
                                  </div>
                                )}

                                {/* Métodos de contato adicionais */}
                                {Array.isArray(contact.contactMethods) &&
                                  contact.contactMethods.map((method: any, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm">
                                      <MessageCircle className="h-4 w-4 eclipse-accent" />
                                      <span className="eclipse-text-secondary capitalize">{method.type}:</span>
                                      <span className="eclipse-text-primary">{method.value}</span>
                                    </div>
                                  ))}
                              </div>

                              {addingContactMethod === contact.id ? (
                                <div className="eclipse-card rounded-xl p-4 mb-4">
                                  <div className="flex gap-2 mb-3">
                                    <Select
                                      value={newContactMethod.type}
                                      onValueChange={(value) =>
                                        setNewContactMethod({ ...newContactMethod, type: value })
                                      }
                                    >
                                      <SelectTrigger className="w-32 eclipse-input rounded-xl">
                                        <SelectValue placeholder="Tipo" />
                                      </SelectTrigger>
                                      <SelectContent className="eclipse-card rounded-xl border-0">
                                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                                        <SelectItem value="instagram">Instagram</SelectItem>
                                        <SelectItem value="telegram">Telegram</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <Input
                                      placeholder="Valor do contato"
                                      value={newContactMethod.value}
                                      onChange={(e) =>
                                        setNewContactMethod({ ...newContactMethod, value: e.target.value })
                                      }
                                      className="flex-1 eclipse-input rounded-xl"
                                    />
                                  </div>
                                  <div className="flex gap-2">
                                    <Button
                                      size="sm"
                                      onClick={() => addContactMethod(contact.id)}
                                      className="eclipse-button-primary rounded-xl"
                                    >
                                      Adicionar
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => setAddingContactMethod(null)}
                                      className="eclipse-button rounded-xl"
                                    >
                                      Cancelar
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setAddingContactMethod(contact.id)}
                                  className="eclipse-button rounded-xl"
                                >
                                  <Plus className="h-4 w-4 mr-2" />
                                  Adicionar Forma de Contato
                                </Button>
                              )}

                              <div className="text-xs eclipse-text-muted mt-3">
                                Adicionado por {contact.addedBy || "Desconhecido"} em{" "}
                                {contact.addedDate
                                  ? new Date(contact.addedDate).toLocaleDateString("pt-BR")
                                  : "Data não informada"}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="eclipse-card eclipse-card-hover rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-2xl eclipse-gradient mx-auto mb-4 flex items-center justify-center">
                    <User className="h-8 w-8 eclipse-accent eclipse-pulse" />
                  </div>
                  <h3 className="eclipse-title text-lg font-bold mb-2">Nenhum contato cadastrado</h3>
                  <p className="eclipse-text-secondary mb-6">Adicione o primeiro contato desta marca.</p>
                  <Button onClick={() => setShowAddContact(true)} className="eclipse-button-primary rounded-xl px-8">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Contato
                  </Button>
                </div>
              )}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#8A4BFF]/30 to-transparent"></div>

            {/* Observações */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl eclipse-gradient flex items-center justify-center">
                    <FileText className="h-5 w-5 eclipse-accent" />
                  </div>
                  <h3 className="eclipse-title text-xl font-bold">Observações ({safeObservations.length})</h3>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowObservationForm(!showObservationForm)}
                  className="eclipse-button rounded-xl px-6"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Observação
                </Button>
              </div>

              {showObservationForm && (
                <div className="eclipse-card eclipse-card-hover rounded-2xl p-6 mb-6">
                  <Textarea
                    placeholder="Digite sua observação sobre esta marca..."
                    value={newObservation}
                    onChange={(e) => setNewObservation(e.target.value)}
                    rows={3}
                    className="eclipse-input rounded-xl mb-4"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={addObservation} className="eclipse-button-primary rounded-xl">
                      Salvar Observação
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setShowObservationForm(false)
                        setNewObservation("")
                      }}
                      className="eclipse-button rounded-xl"
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {safeObservations.map((obs: any, index: number) => (
                  <div key={obs.id || index} className="eclipse-card eclipse-card-hover rounded-2xl p-6">
                    <div className="flex justify-between items-start mb-3">
                      <p className="eclipse-text-secondary leading-relaxed flex-1">
                        {obs.text || "Observação sem texto"}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteObservation(obs.id)}
                        className="eclipse-button rounded-lg h-8 w-8 p-0 ml-4 hover:border-red-500/50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 text-xs eclipse-text-muted">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span className="eclipse-text-primary">{obs.author || "Autor desconhecido"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{obs.date ? new Date(obs.date).toLocaleDateString("pt-BR") : "Data não informada"}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {safeObservations.length === 0 && !showObservationForm && (
                <div className="eclipse-card eclipse-card-hover rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-2xl eclipse-gradient mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 eclipse-accent eclipse-pulse" />
                  </div>
                  <h3 className="eclipse-title text-lg font-bold mb-2">Nenhuma observação registrada</h3>
                  <p className="eclipse-text-secondary">Adicione observações importantes sobre esta marca.</p>
                </div>
              )}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#8A4BFF]/30 to-transparent"></div>

            {/* Influenciadores */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Influenciadores que já fecharam */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-xl eclipse-gradient flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 eclipse-accent" />
                    </div>
                    <h3 className="eclipse-title text-xl font-bold">
                      Influenciadores que Fecharam ({previousInfluencers.length})
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {previousInfluencers.map((influencer: any, index: number) => (
                      <div
                        key={index}
                        className="eclipse-card eclipse-card-hover rounded-xl p-4 cursor-pointer transition-all duration-300"
                        onClick={() => setSelectedInfluencer(influencer)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <div>
                              <span className="eclipse-text-primary font-medium">
                                {influencer.name || "Nome não informado"}
                              </span>
                              <p className="eclipse-text-muted text-xs">
                                Última campanha:{" "}
                                {influencer.lastCampaign
                                  ? new Date(influencer.lastCampaign).toLocaleDateString("pt-BR")
                                  : "Data não informada"}
                              </p>
                            </div>
                          </div>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs px-3 py-1 rounded-full">
                            Fechado
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  {previousInfluencers.length === 0 && (
                    <div className="eclipse-card eclipse-card-hover rounded-2xl p-8 text-center">
                      <TrendingUp className="h-12 w-12 eclipse-accent mx-auto mb-3 opacity-50" />
                      <p className="eclipse-text-secondary text-sm">
                        Nenhum influenciador fechou ainda com esta marca.
                      </p>
                    </div>
                  )}
                </div>

                {/* Influenciadores Sugeridos */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-xl eclipse-gradient flex items-center justify-center">
                      <Star className="h-5 w-5 eclipse-accent" />
                    </div>
                    <h3 className="eclipse-title text-xl font-bold">
                      Influenciadores Sugeridos ({safeSuggestedInfluencers.length})
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {safeSuggestedInfluencers.map((influencer: any, index: number) => (
                      <div
                        key={index}
                        className="eclipse-card eclipse-card-hover rounded-xl p-4 cursor-pointer transition-all duration-300"
                        onClick={() => setSelectedInfluencer(influencer)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Star className="w-5 h-5 eclipse-accent" />
                            <span className="eclipse-text-primary font-medium">
                              {influencer.name || "Nome não informado"}
                            </span>
                          </div>
                          <Badge className="eclipse-badge text-xs px-3 py-1 rounded-full">Sugerido</Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  {safeSuggestedInfluencers.length === 0 && (
                    <div className="eclipse-card eclipse-card-hover rounded-2xl p-8 text-center">
                      <Star className="h-12 w-12 eclipse-accent mx-auto mb-3 opacity-50" />
                      <p className="eclipse-text-secondary text-sm">Nenhum influenciador sugerido ainda.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Confirmation Dialogs */}
      <ConfirmationDialog
        open={showFirstConfirmation}
        onOpenChange={setShowFirstConfirmation}
        title={`Você tem certeza que deseja ${pendingAction?.type === "deleteContact" || pendingAction?.type === "deleteObservation" ? "remover" : "realizar esta ação"}?`}
        description={pendingAction?.description || "Esta ação será executada."}
        action="Continuar"
        onConfirm={handleFirstConfirmation}
        variant={
          pendingAction?.type === "deleteContact" || pendingAction?.type === "deleteObservation"
            ? "destructive"
            : "default"
        }
      />

      <DoubleConfirmationDialog
        open={showSecondConfirmation}
        onOpenChange={setShowSecondConfirmation}
        title={`Confirmar ${pendingAction?.type === "deleteContact" || pendingAction?.type === "deleteObservation" ? "Remoção" : "Ação"}`}
        description={`Confirme que deseja ${pendingAction?.description?.toLowerCase() || "executar esta ação"}. Esta ação pode ser desfeita posteriormente.`}
        action={`Confirmar ${pendingAction?.type === "deleteContact" || pendingAction?.type === "deleteObservation" ? "Remoção" : "Ação"}`}
        onConfirm={handleSecondConfirmation}
        variant={
          pendingAction?.type === "deleteContact" || pendingAction?.type === "deleteObservation"
            ? "destructive"
            : "default"
        }
      />

      <InfluencerContactModal
        influencer={selectedInfluencer}
        open={!!selectedInfluencer}
        onClose={() => setSelectedInfluencer(null)}
      />

      <AddContactDialog
        open={showAddContact}
        onOpenChange={setShowAddContact}
        onAdd={(newContact) => {
          const updatedBrand = {
            ...brand,
            contacts: [
              ...safeContacts,
              {
                ...newContact,
                id: safeContacts.length + 1,
                addedBy: "Usuário Atual",
                addedDate: new Date().toISOString().split("T")[0],
              },
            ],
          }
          onUpdate(updatedBrand)
          setShowAddContact(false)

          toast({
            title: "Contato adicionado!",
            description: `${newContact.name} foi adicionado com sucesso`,
          })
        }}
      />
    </>
  )
}
