"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Building2,
  HelpCircle,
  Target,
  Briefcase,
  TrendingUp,
  Star,
  UserCheck,
  Palette,
  ChevronRight,
  Sparkles,
  Zap,
  Heart,
  Code,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import './globals.css';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, AlertTriangle } from "lucide-react";
import { BrandCard } from "@/components/brand-card";
import { AddBrandDialog } from "@/components/add-brand-dialog";
import { BrandDetailsModal } from "@/components/brand-details-modal";

// Dados completos baseados na lista de contatos fornecida
const initialBrands = [
  // EMPRESAS - Tecnologia e E-commerce
  {
    id: 1,
    name: "Casas Bahia / Ponto Frio",
    category: "Marca",
    website: "https://casasbahia.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=CB",
    contacts: [
      {
        id: 1,
        name: "Itana Oliveira",
        role: "Gerente de Marketing",
        email: "itana.oliveira@grupocasasbahia.com.br",
        phone: "+55 11 99999-0001",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
      {
        id: 2,
        name: "Luiz Moura",
        role: "Coordenador Digital",
        email: "luiz.moura@grupocasasbahia.com.br",
        phone: "+55 11 99999-0002",
        department: "Marketing Digital",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Grupo varejista líder no Brasil. Foco em eletrodomésticos e móveis. Campanhas sazonais importantes.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Itana Oliveira",
    contactMethod: "Email",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 2,
    name: "Opera GX",
    category: "Marca",
    website: "https://operagx.gg",
    logo: "/placeholder.svg?height=60&width=60&text=OGX",
    contacts: [
      {
        id: 3,
        name: "Juliana A.",
        role: "Partnership Manager",
        email: "juliana.a@chocoagency.com",
        phone: "+55 11 99999-0003",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Navegador focado em gamers. Público jovem e engajado. Parcerias via Choco Agency.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Juliana A.",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 3,
    name: "Nord VPN",
    category: "Marca",
    website: "https://nordvpn.com",
    logo: "/placeholder.svg?height=60&width=60&text=NVPN",
    contacts: [
      {
        id: 4,
        name: "Affiliate Team",
        role: "Affiliate Manager",
        email: "affiliate@nordvpnmedia.com",
        phone: "+1 800 000-0000",
        department: "Affiliates",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "VPN líder mundial. Programa de afiliados ativo. Contato via formulário: https://support.nordvpn.com/Contact-us/",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Affiliate Team",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 4,
    name: "Spotify",
    category: "Marca",
    website: "https://spotify.com",
    logo: "/placeholder.svg?height=60&width=60&text=SPOT",
    contacts: [
      {
        id: 5,
        name: "Office Team",
        role: "Partnership Manager",
        email: "office@spotify.com",
        phone: "+1 800 000-0001",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Plataforma de streaming musical. Contato em inglês. Foco em criadores de conteúdo musical.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Office Team",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 5,
    name: "Fifine",
    category: "Marca",
    website: "https://fifine.cc",
    logo: "/placeholder.svg?height=60&width=60&text=FIF",
    contacts: [
      {
        id: 6,
        name: "Web Team",
        role: "Contact Manager",
        email: "web@fifine.cc",
        phone: "+86 400 000-0000",
        department: "Web",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Marca de microfones e equipamentos de áudio. Foco em streamers e podcasters.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Web Team",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 6,
    name: "Duolingo",
    category: "Marca",
    website: "https://duolingo.com",
    logo: "/placeholder.svg?height=60&width=60&text=DUO",
    contacts: [
      {
        id: 7,
        name: "Partnerships Team",
        role: "Partnership Manager",
        email: "partnerships@duolingo.com",
        phone: "+1 800 000-0002",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "App de aprendizado de idiomas. Campanhas educativas e divertidas. Público diverso.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Partnerships Team",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 7,
    name: "Sofá na Caixa",
    category: "Marca",
    website: "https://sofanacaixa.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=SNC",
    contacts: [
      {
        id: 8,
        name: "SAC Team",
        role: "Customer Service",
        email: "sac@sofanacaixa.com.br",
        phone: "+55 11 93926-2069",
        department: "Atendimento",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "E-commerce de móveis. Instagram: @sofanacaixabr. WhatsApp: (11) 93926-2069. Pós-venda: (11) 91487-0284",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "SAC Team",
    contactMethod: "WhatsApp",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 8,
    name: "KaBum",
    category: "Marca",
    website: "https://kabum.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=KB",
    contacts: [
      {
        id: 9,
        name: "Influencers Team",
        role: "Influencer Manager",
        email: "influencers@kabum.com.br",
        phone: "+55 11 99999-0009",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "E-commerce de tecnologia líder no Brasil. Foco em gamers e tech enthusiasts. Programa de influenciadores ativo.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Influencers Team",
    contactMethod: "Email",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 9,
    name: "Panasonic",
    category: "Marca",
    website: "https://panasonic.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=PAN",
    contacts: [
      {
        id: 10,
        name: "Caroline Santos",
        role: "Marketing Manager",
        email: "santos.caroline@br.panasonic.com",
        phone: "+55 11 3889-4000",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
      {
        id: 11,
        name: "Natalia Sugiyama",
        role: "Brand Manager",
        email: "sugiyama.natalia@br.panasonic.com",
        phone: "+55 11 99999-0011",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Multinacional japonesa de eletrônicos. Telefone principal: +55 (11) 3889-4000",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Caroline Santos",
    contactMethod: "Email",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 10,
    name: "Amazon",
    category: "Marca",
    website: "https://amazon.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=AMZ",
    contacts: [
      {
        id: 12,
        name: "Ajuda Amazon",
        role: "Support Team",
        email: "ajuda-amazon@amazon.com.br",
        phone: "0800 038 0541",
        department: "Suporte",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "E-commerce global. Telefones: 0800 038 0541 (Brasil), +55 11 3958 5225 (EUA), +1 888 280 4331 (Internacional)",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Ajuda Amazon",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },

  // EMPRESAS - Alimentos e Bebidas
  {
    id: 11,
    name: "Ambev",
    category: "Marca",
    website: "https://ambev.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=AMB",
    contacts: [
      {
        id: 13,
        name: "Atendimento",
        role: "Customer Service",
        email: "faleonosco@ambev.com.br",
        phone: "+55 11 99999-0013",
        department: "Atendimento",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Maior cervejaria da América Latina. Marcas: Skol, Brahma, Antarctica, Stella Artois. Campanhas de grande impacto.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Atendimento",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 12,
    name: "Burger King",
    category: "Marca",
    website: "https://burgerking.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=BK",
    contacts: [
      {
        id: 14,
        name: "Atendimento BK",
        role: "Customer Service",
        email: "atendimento@burgerking.com.br",
        phone: "+55 11 3003-5464",
        department: "Atendimento",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Rede de fast food. Campanhas criativas e irreverentes. WhatsApp: (11) 3003-5464",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Atendimento BK",
    contactMethod: "WhatsApp",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 13,
    name: "Danone",
    category: "Marca",
    website: "https://danone.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=DAN",
    contacts: [
      {
        id: 15,
        name: "Jessica Batista",
        role: "Marketing Manager",
        email: "jessica.batista@external.danone.com",
        phone: "+55 11 3095-8482",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
      {
        id: 16,
        name: "Stephanie Pereira",
        role: "Brand Manager",
        email: "stephanie.pereira@external.danone.com",
        phone: "+55 11 99999-0016",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Multinacional de alimentos. Foco em saúde e nutrição. WhatsApp: (11) 3095-8482",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Jessica Batista",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 14,
    name: "iFood",
    category: "Marca",
    website: "https://ifood.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=IF",
    contacts: [
      {
        id: 17,
        name: "Priscilla Bastos",
        role: "Partnership Manager",
        email: "priscilla.bastos@ifood.com.br",
        phone: "+55 11 99999-0017",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Líder em delivery no Brasil. Campanhas focadas em food influencers e lifestyle.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Priscilla Bastos",
    contactMethod: "Email",
    relationshipLevel: "Excelente",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 15,
    name: "Heineken",
    category: "Marca",
    website: "https://heineken.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=HEI",
    contacts: [
      {
        id: 18,
        name: "SAC Heineken",
        role: "Customer Service",
        email: "sac@heineken.com.br",
        phone: "+55 11 98904-4041",
        department: "Atendimento",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Cervejaria internacional. WhatsApp: +55 11 98904-4041. Campanhas premium e eventos.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "SAC Heineken",
    contactMethod: "WhatsApp",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },

  // CASAS DE APOSTAS
  {
    id: 16,
    name: "KTO",
    category: "Bet",
    website: "https://kto.com",
    logo: "/placeholder.svg?height=60&width=60&text=KTO",
    contacts: [
      {
        id: 19,
        name: "João Izzo",
        role: "Partnership Manager",
        email: "joao.izzo@kto.com",
        phone: "+55 11 96693-5252",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Casa de apostas esportivas. IMPORTANTE: Sempre promover jogo responsável. Público 18+.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "João Izzo",
    contactMethod: "WhatsApp",
    relationshipLevel: "Excelente",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 17,
    name: "Sportsbet.io",
    category: "Bet",
    website: "https://sportsbet.io",
    logo: "/placeholder.svg?height=60&width=60&text=SB",
    contacts: [
      {
        id: 20,
        name: "Iza",
        role: "Influencer Manager",
        email: "influencers@sportsbet.io",
        phone: "+55 11 94692-2410",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Casa de apostas com foco em cripto. Programa de influenciadores ativo. ATENÇÃO: Jogo responsável obrigatório.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Iza",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 18,
    name: "Stake",
    category: "Bet",
    website: "https://stake.com",
    logo: "/placeholder.svg?height=60&width=60&text=STK",
    contacts: [
      {
        id: 21,
        name: "Guilherme",
        role: "Partnership Manager",
        email: "guilherme@stake.com",
        phone: "+61 479 086 217",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Casa de apostas internacional. Contato também via partners@stake.com. Compliance rigoroso necessário.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Guilherme",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 19,
    name: "Esportes da Sorte",
    category: "Bet",
    website: "https://esportesdasorte.com",
    logo: "/placeholder.svg?height=60&width=60&text=ES",
    contacts: [
      {
        id: 22,
        name: "Diego Borges",
        role: "Project Manager",
        email: "projetos@esportesdasorte.com",
        phone: "+55 81 7341-7773",
        department: "Projetos",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Casa de apostas brasileira em crescimento. Foco em esportes nacionais. Campanhas com influenciadores esportivos.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Diego Borges",
    contactMethod: "WhatsApp",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 20,
    name: "DuelBits",
    category: "Bet",
    website: "https://duelbits.com",
    logo: "/placeholder.svg?height=60&width=60&text=DB",
    contacts: [
      {
        id: 23,
        name: "Arthur Calixto",
        role: "Partnership Manager",
        email: "arthur.calixto@duelbits.com",
        phone: "+55 31 8211-6974",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Casa de apostas com foco em esports. Contatos: +55 31 8211-6974 / +55 31 98736-0610",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Arthur Calixto",
    contactMethod: "WhatsApp",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },

  // AGÊNCIAS
  {
    id: 21,
    name: "Publination",
    category: "Agência",
    website: "https://publination.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=PUB",
    contacts: [
      {
        id: 24,
        name: "Simone Blaz",
        role: "Gerente de Marketing",
        email: "simone@publination.com.br",
        phone: "+55 17 99231-0751",
        department: "Marketing",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
      {
        id: 25,
        name: "Victoria",
        role: "Comercial",
        email: "victoria@publination.com.br",
        phone: "+55 13 99690-1201",
        department: "Comercial",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
      {
        id: 26,
        name: "Giulia Rangel",
        role: "Account Manager",
        email: "giulia.rangel@publination.com.br",
        phone: "+55 11 97376-1590",
        department: "Atendimento",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Agência especializada em influencer marketing. Múltiplos contatos ativos. Atende marcas como Manual e Nestlé.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Simone Blaz",
    contactMethod: "WhatsApp",
    relationshipLevel: "Excelente",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 22,
    name: "Choco Agency",
    category: "Agência",
    website: "https://chocoagency.com",
    logo: "/placeholder.svg?height=60&width=60&text=CHO",
    contacts: [
      {
        id: 27,
        name: "Juliana A.",
        role: "Account Manager",
        email: "juliana.a@chocoagency.com",
        phone: "+55 11 99999-0027",
        department: "Atendimento",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Agência que atende Opera GX. Foco em gaming e tecnologia. Boa para benchmarking no setor tech.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Juliana A.",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 23,
    name: "Jones.ag",
    category: "Agência",
    website: "https://jones.ag",
    logo: "/placeholder.svg?height=60&width=60&text=JON",
    contacts: [
      {
        id: 28,
        name: "Marina Silva",
        role: "Partnership Manager",
        email: "marina.silva@jones.ag",
        phone: "+55 11 99999-0028",
        department: "Partnerships",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Agência que atende Tinder. Especializada em apps e tecnologia. Instagram: @jonesagencia",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Marina Silva",
    contactMethod: "Email",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 24,
    name: "DL7 Assessoria",
    category: "Agência",
    website: "https://dl7assessoria.com",
    logo: "/placeholder.svg?height=60&width=60&text=DL7",
    contacts: [
      {
        id: 29,
        name: "Atendimento DL7",
        role: "Account Manager",
        email: "contato@dl7assessoria.com",
        phone: "+55 11 5199-3161",
        department: "Atendimento",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Assessoria de imprensa e comunicação. Telefone: +55 11 5199-3161",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Atendimento DL7",
    contactMethod: "Telefone",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },

  // PESSOAS INFLUENTES
  {
    id: 25,
    name: "Allan Jesus",
    category: "Pessoa Influente",
    website: "https://instagram.com/allanjesus",
    logo: "/placeholder.svg?height=60&width=60&text=AJ",
    contacts: [
      {
        id: 30,
        name: "Allan Jesus",
        role: "Consultor",
        email: "contato@allanjesus.com",
        phone: "+55 21 99743-3686",
        department: "Consultoria",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Consultor e pessoa influente no mercado digital. ASJ Consultoria. Networking valioso no setor.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Allan Jesus",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 26,
    name: "Guilherme Raya",
    category: "Pessoa Influente",
    website: "https://x.com/guilhermeraya",
    logo: "/placeholder.svg?height=60&width=60&text=GR",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "O Milionário. Influenciador financeiro. DM aberta no X (Twitter). Foco em investimentos e empreendedorismo.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 27,
    name: "Kaarolzx",
    category: "Pessoa Influente",
    website: "https://instagram.com/kaarolzx",
    logo: "/placeholder.svg?height=60&width=60&text=KZ",
    contacts: [
      {
        id: 31,
        name: "Kaarolzx",
        role: "Influenciador",
        email: "contato@kaarolzx.com",
        phone: "+55 64 9346-0189",
        department: "Conteúdo",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Influenciador digital com grande engajamento. Contato direto disponível.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Kaarolzx",
    contactMethod: "WhatsApp",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },

  // FREELANCERS
  {
    id: 28,
    name: "Yago - Relam⚡",
    category: "Freelancer",
    website: "https://behance.net/RelampEditor",
    logo: "/placeholder.svg?height=60&width=60&text=YR",
    contacts: [
      {
        id: 32,
        name: "Yago",
        role: "Editor de Vídeo",
        email: "contato@relampeditor.com",
        phone: "+55 19 98957-3979",
        department: "Edição",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Editor de vídeo especializado. Portfólio no Behance. Valores competitivos e qualidade comprovada.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Yago",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 29,
    name: "Kaio Caldera",
    category: "Freelancer",
    website: "https://behance.net/bykaiox",
    logo: "/placeholder.svg?height=60&width=60&text=KC",
    contacts: [
      {
        id: 33,
        name: "Kaio Caldera",
        role: "Designer Gráfico",
        email: "contato@kaiocaldera.com",
        phone: "+55 64 9294-6612",
        department: "Design",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Designer gráfico especializado em redes sociais. Portfólio no Behance: @bykaiox. Estilo moderno e criativo.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Kaio Caldera",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 30,
    name: "Tharlles",
    category: "Freelancer",
    website: "https://behance.net/tharlleseditor",
    logo: "/placeholder.svg?height=60&width=60&text=TH",
    contacts: [
      {
        id: 34,
        name: "Tharlles",
        role: "Editor de Vídeo",
        email: "contato@tharlles.com",
        phone: "+55 62 9916-2123",
        department: "Edição",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Editor de vídeo profissional. Portfólio no Behance. Especializado em conteúdo para redes sociais.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Tharlles",
    contactMethod: "WhatsApp",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },

  // INFLUENCIADORES QUE JÁ FECHARAM
  {
    id: 39,
    name: "Felipe Neto",
    category: "Influenciador que já fechou",
    website: "https://youtube.com/felipeneto",
    logo: "/placeholder.svg?height=60&width=60&text=FN",
    contacts: [
      {
        id: 35,
        name: "Assessoria Felipe Neto",
        role: "Manager",
        email: "contato@felipeneto.com",
        phone: "+55 21 99999-0035",
        department: "Assessoria",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "YouTuber com milhões de seguidores. Campanhas de grande alcance. Contrato fechado para Q1 2025.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Assessoria Felipe Neto",
    contactMethod: "Email",
    relationshipLevel: "Excelente",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 40,
    name: "Whindersson Nunes",
    category: "Influenciador que já fechou",
    website: "https://youtube.com/whinderssonnunes",
    logo: "/placeholder.svg?height=60&width=60&text=WN",
    contacts: [
      {
        id: 36,
        name: "Empresário Whindersson",
        role: "Business Manager",
        email: "negocios@whindersson.com",
        phone: "+55 85 99999-0036",
        department: "Negócios",
        addedBy: "Sistema",
        addedDate: "2025-01-01",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Comediante e YouTuber nordestino. Público fiel e engajado. Parceria renovada para 2025.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Ativo",
    lastContact: "2025-01-01",
    lastContactBy: "Sistema",
    lastContactWith: "Empresário Whindersson",
    contactMethod: "WhatsApp",
    relationshipLevel: "Excelente",
    neverContacted: false,
    addedBy: "Sistema",
    suggestedBy: null,
  },

  // INFLUENCIADORES SUGERIDOS
  {
    id: 41,
    name: "Casimiro Miguel",
    category: "Influenciador sugerido",
    website: "https://twitch.tv/casimito",
    logo: "/placeholder.svg?height=60&width=60&text=CM",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Streamer e apresentador. Público jovem masculino. Sugerido pela equipe de marketing para campanhas de gaming.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: "Equipe Marketing",
  },
  {
    id: 42,
    name: "Bianca Andrade (Boca Rosa)",
    category: "Influenciador sugerido",
    website: "https://instagram.com/biancaandradee",
    logo: "/placeholder.svg?height=60&width=60&text=BA",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Influenciadora de beleza e lifestyle. Público feminino engajado. Sugerida para campanhas de cosméticos.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: "Cliente",
  },

  // PARCERIAS A SEREM BUSCADAS (sem contatos)
  {
    id: 31,
    name: "Nike",
    category: "Marca",
    website: "https://nike.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=NIKE",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Marca esportiva global. Foco em atletas e lifestyle. Campanhas de alto impacto. Parceria estratégica importante.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 32,
    name: "Netflix",
    category: "Marca",
    website: "https://netflix.com",
    logo: "/placeholder.svg?height=60&width=60&text=NFLX",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Plataforma de streaming líder mundial. Campanhas de lançamento de séries e filmes. Alto potencial de parceria.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 33,
    name: "Coca-Cola",
    category: "Marca",
    website: "https://cocacola.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=COCA",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Marca icônica mundial. Campanhas sempre envolvem grandes nomes e eventos. Orçamento alto para ativações.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 34,
    name: "McDonald's",
    category: "Marca",
    website: "https://mcdonalds.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=MCD",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Rede de fast food global. Campanhas criativas e sazonais. Foco em família e jovens. Parceria de alto valor.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 35,
    name: "Samsung",
    category: "Marca",
    website: "https://samsung.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=SAMS",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Gigante da tecnologia. Smartphones, TVs, eletrodomésticos. Campanhas de lançamento de produtos. Tech influencers.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 36,
    name: "Blaze",
    category: "Bet",
    website: "https://blaze.com",
    logo: "/placeholder.svg?height=60&width=60&text=BLZ",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Casa de apostas com foco em jogos online. ATENÇÃO: Verificar compliance rigoroso. Jogo responsável obrigatório.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 37,
    name: "Alura",
    category: "Marca",
    website: "https://alura.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=ALU",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Plataforma de educação em tecnologia. E-mail para parcerias: creators@alura.com.br. Foco em tech creators.",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
  {
    id: 38,
    name: "EBAC",
    category: "Marca",
    website: "https://ebaconline.com.br",
    logo: "/placeholder.svg?height=60&width=60&text=EBAC",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Escola Britânica de Artes Criativas. Telefone: +55 (11) 3030-3200. E-mail: suporte@ebaconline.com.br",
        author: "Sistema",
        date: "2025-01-01",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Sistema",
    suggestedBy: null,
  },
];

const getFaqByCategory = (category: string) => {
  const baseFaq = [
    {
      question: "Qual o melhor horário para contato?",
      answer:
        "• WhatsApp: 9h às 18h (dias úteis)\n• Email: Terça a quinta, 10h às 16h\n• LinkedIn: Qualquer horário, resposta em 24-48h\n• Telefone: 14h às 17h (evitar início da manhã)\n• Evite sextas-feiras após 15h e segundas antes das 10h\n• Dezembro e Janeiro: reduzir contatos, período de férias\n• Vésperas de feriados: evitar completamente",
    },
    {
      question: "Como manter o relacionamento ativo?",
      answer:
        "• Envie updates mensais sobre performance das campanhas\n• Compartilhe tendências do mercado relevantes\n• Lembre de datas importantes da marca (aniversário, lançamentos)\n• Proponha ideias criativas regularmente (pelo menos 1x/mês)\n• Seja proativo em resolver problemas antes que escalem\n• Parabenize por conquistas e premiações\n• Convide para eventos e networking\n• Mantenha contato mesmo sem projetos ativos",
    },
    {
      question: "O que fazer quando não respondem?",
      answer:
        "• Aguarde 1 semana antes do primeiro follow-up\n• Mude o canal de comunicação (email → WhatsApp → LinkedIn)\n• Ofereça algo de valor (relatório, insight, tendência)\n• Tente contatar outra pessoa da equipe\n• Use gatilhos de urgência (oportunidade limitada, deadline)\n• Referencie conversas ou projetos anteriores\n• Seja persistente mas respeitoso (máximo 3 tentativas)\n• Se não responder, aguarde 1 mês antes de tentar novamente",
    },
    {
      question: "Como estruturar uma proposta comercial?",
      answer:
        "• Assunto claro e direto no email\n• Apresentação pessoal e da empresa (máximo 2 parágrafos)\n• Contextualize por que está entrando em contato\n• Apresente a proposta de valor específica\n• Inclua cases relevantes e resultados mensuráveis\n• Defina próximos passos claros\n• Anexe portfólio ou deck comercial\n• Inclua prazo para resposta (sem pressionar)\n• Termine com call-to-action específico",
    },
    {
      question: "Como lidar com objeções e negativas?",
      answer:
        "• Escute atentamente a objeção completa\n• Agradeça pela transparência\n• Faça perguntas para entender melhor o contexto\n• Ofereça alternativas ou soluções adaptadas\n• Se for questão de orçamento, proponha fases ou teste menor\n• Se for timing, pergunte quando seria ideal retomar\n• Mantenha a porta aberta para futuras oportunidades\n• Documente as objeções para melhorar abordagens futuras",
    },
    {
      question: "Como fazer follow-up efetivo?",
      answer:
        "• Sempre referencie a conversa anterior\n• Traga informação nova ou valor adicional\n• Seja específico sobre o que precisa\n• Use diferentes formatos (texto, áudio, vídeo)\n• Varie os horários de contato\n• Personalize cada mensagem\n• Mantenha tom profissional mas amigável\n• Defina expectativas claras de resposta",
    },
    {
      question: "Erros mais comuns que devem ser evitados",
      answer:
        "• NUNCA envie propostas genéricas (sempre personalize)\n• NÃO insista após 3 tentativas sem resposta\n• EVITE contatos em horários inadequados\n• NÃO prometa o que não pode entregar\n• JAMAIS critique concorrentes diretamente\n• NÃO use linguagem muito informal no primeiro contato\n• EVITE anexos muito pesados (máximo 5MB)\n• NÃO esqueça de fazer spell check antes de enviar\n• NUNCA minta sobre resultados ou experiências",
    },
    {
      question: "Como organizar e documentar contatos?",
      answer:
        "• Registre TODAS as interações (data, canal, resultado)\n• Anote preferências pessoais e profissionais\n• Documente objeções e feedbacks recebidos\n• Mantenha histórico de propostas enviadas\n• Atualize status regularmente\n• Configure lembretes para follow-ups\n• Backup dos dados semanalmente\n• Compartilhe informações relevantes com a equipe",
    },
  ];

  const categorySpecific = {
    Marca: [
      {
        question: "Como abordar marcas grandes pela primeira vez?",
        answer:
          "• Pesquise campanhas recentes e mencione especificamente\n• Apresente cases similares com ROI comprovado e métricas\n• Proponha teste pequeno antes de campanha grande\n• Destaque diferencial competitivo claro\n• Seja persistente mas respeitoso (máximo 3 contatos)\n• Use LinkedIn para encontrar decisores corretos\n• Mencione clientes em comum se houver\n• Prepare-se para processo de aprovação longo (30-90 dias)",
      },
      {
        question: "Onde encontrar contatos corretos de marcas?",
        answer:
          "• LinkedIn - Marketing Manager, Brand Manager, CMO\n• Site oficial - seção Imprensa, Contato, Trabalhe Conosco\n• Eventos de marketing e publicidade (presencial/online)\n• Redes sociais corporativas (Instagram, Twitter)\n• Indicações de outros clientes ou parceiros\n• Agências que atendem a marca\n• Associações setoriais (ABMN, ABRADI, etc.)\n• Premiações e cases publicados",
      },
      {
        question: "Como negociar com grandes corporações?",
        answer:
          "• Tenha proposta estruturada e profissional\n• Apresente múltiplas opções de investimento\n• Inclua cláusulas de performance e KPIs\n• Prepare contratos detalhados\n• Negocie prazos de pagamento realistas (30-60 dias)\n• Tenha plano B para objeções comuns\n• Documente tudo por escrito\n• Envolva jurídico quando necessário",
      },
      {
        question: "Sazonalidades importantes para marcas",
        answer:
          "• Janeiro-Março: Planejamento anual, orçamentos liberados\n• Abril-Junho: Campanhas de outono/inverno, Dia das Mães\n• Julho-Setembro: Dia dos Pais, volta às aulas, primavera\n• Outubro-Dezembro: Black Friday, Natal, fim de orçamento\n• Evite: Carnaval, Copa do Mundo, eleições\n• Datas específicas: Dia da Mulher, Dia do Consumidor\n• Lançamentos sazonais: verão (dezembro-março)",
      },
      {
        question: "Como apresentar ROI e métricas para marcas?",
        answer:
          "• Use dados específicos e mensuráveis\n• Compare com benchmarks do setor\n• Apresente CPM, CPC, CTR, conversões\n• Inclua métricas de brand awareness\n• Mostre crescimento de seguidores qualificados\n• Documente menções e engajamento\n• Use ferramentas de monitoramento profissionais\n• Apresente relatórios visuais e claros",
      },
    ],
    Bet: [
      {
        question: "Cuidados legais obrigatórios com casas de apostas",
        answer:
          "• SEMPRE incluir aviso 'Jogo responsável - Maiores de 18 anos'\n• Verificar licença da casa de apostas no Brasil\n• Incluir link para organizações de ajuda (ex: jogadores anônimos)\n• NUNCA usar linguagem que incentive vício ou dependência\n• Evitar termos como 'ganho garantido', 'dinheiro fácil'\n• Documentar todas as aprovações legais\n• Ter advogado especializado na equipe\n• Seguir diretrizes da SENAD e órgãos reguladores",
      },
      {
        question: "Como abordar o mercado de apostas responsavelmente?",
        answer:
          "• Foque em entretenimento e diversão, não em ganhos\n• Use influenciadores que já trabalham no setor\n• Destaque aspectos de socialização e comunidade\n• Sempre mencione riscos e estabeleça limites\n• Promova ferramentas de autocontrole\n• Evite horários de grande audiência infantil\n• Monitore comentários e interações\n• Tenha canal direto para denúncias",
      },
      {
        question: "Compliance e documentação necessária",
        answer:
          "• Contrato específico com cláusulas de compliance\n• Aprovação prévia de todo conteúdo\n• Documentação de idade dos influenciadores\n• Registro de todas as peças publicitárias\n• Relatórios de monitoramento de conteúdo\n• Backup de todas as comunicações\n• Processo de aprovação em múltiplas etapas\n• Auditoria regular das campanhas",
      },
      {
        question: "Influenciadores adequados para apostas",
        answer:
          "• Maiores de 25 anos (preferível)\n• Histórico limpo e sem polêmicas\n• Público adulto e engajado\n• Experiência com marcas regulamentadas\n• Disposição para seguir guidelines rígidas\n• Conhecimento sobre jogo responsável\n• Capacidade de lidar com críticas\n• Alinhamento com valores da marca",
      },
    ],
    Agência: [
      {
        question: "Como fazer benchmarking construtivo com agências?",
        answer:
          "• Analise cases públicos e premiações do setor\n• Participe de eventos como ABMN, Cannes Lions\n• Conecte-se com profissionais no LinkedIn\n• Estude metodologias e processos inovadores\n• Proponha trocas de conhecimento e parcerias\n• Monitore redes sociais das agências\n• Acompanhe movimentações de profissionais\n• Mantenha relacionamento mesmo sendo concorrente",
      },
      {
        question: "Como se relacionar com agências concorrentes?",
        answer:
          "• Mantenha relacionamento profissional e respeitoso\n• Compartilhe oportunidades que não servem ao seu perfil\n• Participe de grupos e associações do setor\n• Seja transparente sobre especialidades e limitações\n• Busque parcerias em projetos grandes\n• Evite 'roubar' clientes diretamente\n• Colabore em pitches quando fizer sentido\n• Mantenha ética profissional sempre",
      },
      {
        question: "Networking efetivo no mercado de agências",
        answer:
          "• Participe de eventos setoriais regularmente\n• Mantenha presença ativa no LinkedIn\n• Compartilhe conhecimento e insights\n• Conecte pessoas do seu network\n• Seja generoso com indicações\n• Mantenha contato regular com ex-colegas\n• Participe de júris e premiações\n• Ofereça palestras e workshops",
      },
    ],
    Influenciador: [
      {
        question: "Como avaliar um influenciador corretamente?",
        answer:
          "• Analise engajamento real vs seguidores (taxa mínima 3%)\n• Verifique alinhamento com valores da marca\n• Observe qualidade e consistência do conteúdo\n• Cheque histórico de parcerias e comportamento\n• Use ferramentas de análise (HypeAuditor, Klear)\n• Avalie audiência (demografia, interesses)\n• Teste com campanha pequena primeiro\n• Monitore comentários e interações",
      },
      {
        question: "Como negociar com influenciadores de forma justa?",
        answer:
          "• Seja transparente sobre orçamento desde o início\n• Ofereça contrapartidas além do dinheiro (produtos, experiências)\n• Negocie exclusividade apenas quando necessário\n• Defina entregáveis claramente (posts, stories, reels)\n• Estabeleça prazos realistas para criação\n• Inclua revisões e aprovações no cronograma\n• Mantenha relacionamento pós-campanha\n• Pague pontualmente conforme acordado",
      },
      {
        question: "Red flags para evitar em influenciadores",
        answer:
          "• Crescimento muito rápido de seguidores (possível compra)\n• Engajamento desproporcional (muito alto ou baixo)\n• Comentários genéricos e repetitivos\n• Histórico de polêmicas graves\n• Falta de transparência sobre parcerias\n• Conteúdo inconsistente com persona\n• Dificuldade de comunicação\n• Exigências abusivas ou irreais",
      },
      {
        question: "Como manter relacionamento de longo prazo?",
        answer:
          "• Trate como parceiro, não apenas fornecedor\n• Envolva em estratégias e planejamentos\n• Ofereça crescimento e oportunidades\n• Seja flexível com prazos e demandas\n• Reconheça publicamente bons resultados\n• Convide para eventos e lançamentos\n• Mantenha contato regular mesmo sem projetos\n• Invista no crescimento profissional deles",
      },
    ],
    "Pessoa Influente": [
      {
        question: "Como abordar pessoas muito famosas?",
        answer:
          "• SEMPRE via assessoria, empresário ou agente oficial\n• Prepare proposta muito bem estruturada e profissional\n• Tenha orçamento compatível com o status da pessoa\n• Seja extremamente profissional em todas as interações\n• Respeite tempos de resposta longos (até 30 dias)\n• Prepare documentação completa (contratos, seguros)\n• Tenha plano de contingência para imprevistos\n• Considere custos adicionais (segurança, rider)",
      },
      {
        question: "Cuidados especiais com celebridades",
        answer:
          "• Contratos muito detalhados com cláusulas específicas\n• Cláusulas de imagem, uso e direitos autorais\n• Seguro para eventos presenciais obrigatório\n• Backup plans para cancelamentos de última hora\n• Equipe jurídica especializada em entretenimento\n• Confidencialidade e NDAs rigorosos\n• Protocolo de segurança e privacidade\n• Gestão de crise preparada",
      },
      {
        question: "Como justificar investimento alto em celebridades?",
        answer:
          "• Apresente alcance e impacto potencial\n• Compare CPM com outras mídias tradicionais\n• Destaque valor de brand awareness\n• Inclua métricas de recall e reconhecimento\n• Mostre cases similares e resultados\n• Calcule valor de mídia espontânea\n• Apresente ROI em múltiplas métricas\n• Considere impacto de longo prazo na marca",
      },
    ],
    Freelancer: [
      {
        question: "Como gerenciar freelancers eficientemente?",
        answer:
          "• Defina briefings muito claros e detalhados\n• Estabeleça prazos realistas considerando revisões\n• Mantenha comunicação constante mas não invasiva\n• Tenha sempre backup de profissionais qualificados\n• Pague em dia para manter relacionamento\n• Forneça feedback construtivo e específico\n• Documente processos e aprovações\n• Mantenha contratos atualizados",
      },
      {
        question: "Como encontrar freelancers qualificados?",
        answer:
          "• Behance e Dribbble para designers e criativos\n• LinkedIn para diversos profissionais\n• Indicações de outros clientes e parceiros\n• Portfólios online e redes sociais profissionais\n• Plataformas como 99designs, Workana\n• Grupos e comunidades especializadas\n• Teste com projetos pequenos primeiro\n• Mantenha banco de talentos atualizado",
      },
      {
        question: "Como avaliar qualidade e confiabilidade?",
        answer:
          "• Analise portfólio completo e casos recentes\n• Peça referências de clientes anteriores\n• Faça teste pequeno antes de projetos grandes\n• Avalie capacidade de comunicação\n• Verifique cumprimento de prazos\n• Observe atenção aos detalhes\n• Teste conhecimento técnico\n• Avalie proatividade e sugestões",
      },
      {
        question: "Gestão de pagamentos e contratos",
        answer:
          "• Defina forma de pagamento antes do início\n• Use contratos mesmo para projetos pequenos\n• Estabeleça marcos de pagamento para projetos longos\n• Inclua cláusulas de revisão e alterações\n• Defina direitos autorais e uso de imagem\n• Mantenha registro de todas as transações\n• Use ferramentas de gestão financeira\n• Tenha processo de aprovação claro",
      },
    ],
    "Influenciador que já fechou": [
      {
        question: "Como manter engajamento com influenciadores ativos?",
        answer:
          "• Monitore performance constantemente\n• Forneça feedback regular e construtivo\n• Ajuste estratégias baseado em resultados\n• Mantenha comunicação próxima e frequente\n• Reconheça e celebre bons resultados\n• Ofereça suporte criativo quando necessário\n• Seja flexível com mudanças de cronograma\n• Planeje renovações com antecedência",
      },
      {
        question: "Como otimizar campanhas em andamento?",
        answer:
          "• Analise métricas semanalmente\n• Teste diferentes formatos de conteúdo\n• Ajuste horários de publicação\n• Monitore comentários e engajamento\n• Faça A/B test com diferentes abordagens\n• Adapte mensagem baseado no feedback\n• Use insights para próximas campanhas\n• Documente aprendizados e melhores práticas",
      },
    ],
    "Influenciador sugerido": [
      {
        question: "Como avaliar sugestões de influenciadores?",
        answer:
          "• Analise fit com objetivos da campanha\n• Verifique alinhamento de audiência\n• Estude histórico de parcerias\n• Avalie custo-benefício proposto\n• Considere timing e disponibilidade\n• Analise potencial de longo prazo\n• Compare com outras opções\n• Teste com projeto piloto se possível",
      },
      {
        question: "Como fazer primeira abordagem com sugeridos?",
        answer:
          "• Mencione quem fez a sugestão\n• Explique por que foi escolhido\n• Apresente proposta clara e objetiva\n• Inclua informações sobre a marca\n• Seja transparente sobre expectativas\n• Ofereça reunião para alinhamento\n• Mantenha tom profissional mas amigável\n• Defina próximos passos claramente",
      },
    ],
  };

  return [...baseFaq, ...(categorySpecific[category] || [])];
};

export default function MailingControl() {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("todos");
  const [lastModified, setLastModified] = useState(null);

  // Carregar dados do localStorage na inicialização
  useEffect(() => {
    const savedBrands = localStorage.getItem("mailingControlBrands");
    const savedLastModified = localStorage.getItem(
      "mailingControlLastModified"
    );

    if (savedBrands) {
      try {
        setBrands(JSON.parse(savedBrands));
        if (savedLastModified) {
          setLastModified(new Date(savedLastModified));
        }
      } catch (error) {
        console.error("Erro ao carregar dados salvos:", error);
        setBrands(initialBrands);
        setLastModified(new Date());
      }
    } else {
      setBrands(initialBrands);
      setLastModified(new Date());
    }
  }, []);

  // Salvar dados no localStorage sempre que brands mudar
  useEffect(() => {
    if (brands.length > 0) {
      const now = new Date();
      localStorage.setItem("mailingControlBrands", JSON.stringify(brands));
      localStorage.setItem("mailingControlLastModified", now.toISOString());
      setLastModified(now);
    }
  }, [brands]);

  // Simular loading ao trocar de aba
  const handleTabChange = (value: string) => {
    setIsLoading(true);
    setActiveTab(value);
    setTimeout(() => setIsLoading(false), 300);
  };

  const getFilteredBrands = (category = "all") => {
    return brands.filter((brand) => {
      const matchesSearch =
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || brand.category === categoryFilter;
      const matchesStatus =
        statusFilter === "all" || brand.status === statusFilter;
      const matchesTabCategory =
        category === "all" || brand.category === category;

      return (
        matchesSearch && matchesCategory && matchesStatus && matchesTabCategory
      );
    });
  };

  const categories = [...new Set(brands.map((brand) => brand.category))];
  const statuses = [...new Set(brands.map((brand) => brand.status))];

  // Marcas sem contatos para a seção "Parcerias a serem buscadas"
  const getBrandsWithoutContacts = (category = "all") => {
    return brands.filter(
      (brand) =>
        brand.contacts.length === 0 &&
        (category === "all" || brand.category === category)
    );
  };

  const stats = {
    totalBrands: brands.length,
    totalContacts: brands.reduce(
      (acc, brand) => acc + brand.contacts.length,
      0
    ),
    activeBrands: brands.filter((brand) => brand.status === "Ativo").length,
    prospects: brands.filter((brand) => brand.status === "Prospecto").length,
    neverContacted: brands.filter((brand) => brand.neverContacted).length,
    byCategory: {
      Marca: brands.filter((brand) => brand.category === "Marca").length,
      Bet: brands.filter((brand) => brand.category === "Bet").length,
      Agência: brands.filter((brand) => brand.category === "Agência").length,
      Influenciador: brands.filter(
        (brand) => brand.category === "Influenciador"
      ).length,
      "Pessoa Influente": brands.filter(
        (brand) => brand.category === "Pessoa Influente"
      ).length,
      Freelancer: brands.filter((brand) => brand.category === "Freelancer")
        .length,
      "Influenciador que já fechou": brands.filter(
        (brand) => brand.category === "Influenciador que já fechou"
      ).length,
      "Influenciador sugerido": brands.filter(
        (brand) => brand.category === "Influenciador sugerido"
      ).length,
    },
  };

  const getCategoryMessage = (category: string) => {
    switch (category) {
      case "Marca":
        return {
          title: "💼 Foco em Parcerias Comerciais",
          message:
            "Priorize fechar parcerias duradouras. Apresente cases de sucesso e ROI comprovado.",
          icon: Briefcase,
        };
      case "Bet":
        return {
          title: "⚠️ Jogo Responsável",
          message:
            "IMPORTANTE: Sempre promover jogo responsável. Público 18+. Verificar compliance legal.",
          icon: AlertTriangle,
        };
      case "Agência":
        return {
          title: "📊 Benchmarking Construtivo",
          message:
            "Analise estratégias e cases. Oportunidade de aprendizado mútuo e parcerias estratégicas.",
          icon: TrendingUp,
        };
      case "Influenciador":
        return {
          title: "🌟 Relacionamento Direto",
          message:
            "Construa relacionamentos autênticos. Foque no fit com a marca e engajamento real.",
          icon: Star,
        };
      case "Pessoa Influente":
        return {
          title: "👑 Alto Impacto",
          message:
            "Contatos de alto valor. Abordagem mais formal. Geralmente via assessoria ou empresários.",
          icon: UserCheck,
        };
      case "Freelancer":
        return {
          title: "🎨 Talentos Criativos",
          message:
            "Profissionais para demandas específicas. Mantenha portfólio atualizado e prazos claros.",
          icon: Palette,
        };
      case "Influenciador que já fechou":
        return {
          title: "✅ Parcerias Ativas",
          message:
            "Influenciadores com contratos fechados. Foque em otimização e manutenção do relacionamento.",
          icon: UserCheck,
        };
      case "Influenciador sugerido":
        return {
          title: "💡 Oportunidades Sugeridas",
          message:
            "Influenciadores indicados pela equipe ou clientes. Avalie fit e potencial antes de abordar.",
          icon: Sparkles,
        };
      default:
        return null;
    }
  };

  const renderTabContent = (category = "all") => {
    const filteredBrands = getFilteredBrands(category);
    const categoryMessage = getCategoryMessage(category);
    const categoryBrandsWithoutContacts = getBrandsWithoutContacts(category);
    const faqData = getFaqByCategory(category);

    return (
      <div className="space-y-16">
        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-24">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-transparent border-t-[#8A4BFF] animate-spin"></div>
              <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-transparent border-r-[#DB9EFF] animate-spin animation-delay-150"></div>
            </div>
          </div>
        )}

        <div
          className={`transition-all duration-500 space-y-16 ${
            isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Category Message */}
          {categoryMessage && (
            <Card className="eclipse-card eclipse-card-hover rounded-2xl border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl eclipse-gradient">
                    <categoryMessage.icon className="h-8 w-8 eclipse-text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="eclipse-title text-2xl font-bold mb-3 flex items-center gap-4">
                      {categoryMessage.title}
                      <ChevronRight className="h-6 w-6 eclipse-accent eclipse-pulse" />
                    </h3>
                    <p className="eclipse-text-secondary text-base leading-relaxed">
                      {categoryMessage.message}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Filters */}
          <Card className="eclipse-card eclipse-card-hover rounded-2xl">
            <CardHeader className="pb-6">
              <CardTitle className="eclipse-title text-2xl flex items-center gap-4">
                <Search className="h-6 w-6 eclipse-accent" />
                Filtros e Busca
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 eclipse-text-muted transition-colors group-focus-within:eclipse-accent" />
                    <Input
                      placeholder="Buscar por nome ou categoria..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-14 h-14 rounded-xl eclipse-input border-0 focus:ring-2 focus:ring-[#8A4BFF]/30 transition-all duration-300 text-base"
                    />
                  </div>
                </div>

                <Select
                  value={categoryFilter}
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger className="w-full md:w-56 h-14 rounded-xl eclipse-input border-0 eclipse-text-primary text-base">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent className="eclipse-card rounded-xl border-0">
                    <SelectItem value="all">Todas as Categorias</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem
                        key={cat}
                        value={cat}
                        className="eclipse-text-primary hover:eclipse-gradient"
                      >
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-56 h-14 rounded-xl eclipse-input border-0 eclipse-text-primary text-base">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="eclipse-card rounded-xl border-0">
                    <SelectItem value="all">Todos os Status</SelectItem>
                    {statuses.map((status) => (
                      <SelectItem
                        key={status}
                        value={status}
                        className="eclipse-text-primary hover:eclipse-gradient"
                      >
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand, index) => (
              <div
                key={brand.id}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BrandCard
                  brand={brand}
                  onClick={() => setSelectedBrand(brand)}
                  onUpdate={(updatedBrand) => {
                    setBrands(
                      brands.map((b) =>
                        b.id === updatedBrand.id ? updatedBrand : b
                      )
                    );
                  }}
                />
              </div>
            ))}
          </div>

          {filteredBrands.length === 0 && !isLoading && (
            <Card className="eclipse-card eclipse-card-hover rounded-2xl">
              <CardContent className="text-center py-20">
                <div className="p-6 rounded-2xl eclipse-gradient inline-block mb-8">
                  <Building2 className="h-16 w-16 eclipse-text-primary eclipse-pulse" />
                </div>
                <h3 className="eclipse-title text-2xl font-bold mb-4">
                  Nenhum resultado encontrado
                </h3>
                <p className="eclipse-text-secondary mb-8 max-w-md mx-auto text-base leading-relaxed">
                  Tente ajustar os filtros ou adicione um novo contato para
                  começar.
                </p>
                <Button
                  onClick={() => setShowAddDialog(true)}
                  className="eclipse-button-primary h-14 px-10 rounded-xl font-semibold text-base"
                >
                  <Plus className="h-5 w-5 mr-3" />
                  Adicionar Novo
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Parcerias a Serem Buscadas */}
          {categoryBrandsWithoutContacts.length > 0 && (
            <Card className="eclipse-card eclipse-card-hover rounded-2xl border-2 border-red-500/20">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <Target className="h-8 w-8 text-red-400 eclipse-pulse" />
                  </div>
                  <div>
                    <CardTitle className="eclipse-title text-2xl flex items-center gap-4">
                      Parcerias a Serem Buscadas
                      <Badge className="eclipse-badge-danger text-sm px-4 py-2 rounded-full">
                        {categoryBrandsWithoutContacts.length}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="eclipse-text-secondary mt-2 text-base">
                      {category === "all"
                        ? "Contatos que ainda não possuem informações cadastradas e precisam de prospecção"
                        : `${category}s que precisam de prospecção e desenvolvimento de relacionamento`}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryBrandsWithoutContacts.map((brand, index) => (
                    <Card
                      key={brand.id}
                      className="eclipse-card eclipse-card-hover rounded-xl border border-red-500/20 animate-in fade-in slide-in-from-left-4 h-full"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                            <AlertTriangle className="h-7 w-7 text-red-400" />
                          </div>
                          <div>
                            <h3 className="eclipse-text-primary font-semibold text-lg">
                              {brand.name}
                            </h3>
                            <p className="eclipse-text-muted text-sm">
                              {brand.category}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4 text-sm flex-1">
                          <div className="flex justify-between items-center">
                            <span className="eclipse-text-muted">
                              Adicionado por:
                            </span>
                            <span className="eclipse-text-secondary font-medium">
                              {brand.addedBy}
                            </span>
                          </div>

                          {brand.suggestedBy && (
                            <div className="flex justify-between items-center">
                              <span className="eclipse-text-muted">
                                Sugerido por:
                              </span>
                              <span className="eclipse-accent font-medium">
                                {brand.suggestedBy}
                              </span>
                            </div>
                          )}

                          <div className="flex justify-between items-center">
                            <span className="eclipse-text-muted">
                              Influenciadores:
                            </span>
                            <Badge className="eclipse-badge text-xs px-3 py-1 rounded-full">
                              {brand.suggestedInfluencers.length}
                            </Badge>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          className="w-full mt-6 eclipse-button h-12 rounded-lg font-medium"
                          onClick={() => setSelectedBrand(brand)}
                        >
                          <Sparkles className="h-4 w-4 mr-2" />
                          Ver Detalhes
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* FAQ */}
          <Card className="eclipse-card eclipse-card-hover rounded-2xl">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl eclipse-gradient">
                  <HelpCircle className="h-8 w-8 eclipse-text-primary eclipse-pulse" />
                </div>
                <div>
                  <CardTitle className="eclipse-title text-2xl flex items-center gap-4">
                    Dúvidas Frequentes e Dicas
                    {category !== "all" && (
                      <Badge className="eclipse-badge text-sm px-4 py-2 rounded-full">
                        {category}
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="eclipse-text-secondary mt-2 text-base">
                    {category === "all"
                      ? "Guia prático para melhorar suas abordagens e relacionamentos"
                      : `Dicas específicas para trabalhar com ${category.toLowerCase()}s`}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 px-8 pb-8">
              {faqData.map((faq, index) => (
                <Collapsible key={index}>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-6 h-auto eclipse-card eclipse-card-hover rounded-xl border-0"
                    >
                      <span className="eclipse-text-primary font-medium text-left flex items-center gap-4 text-base">
                        <Zap className="h-5 w-5 eclipse-accent" />
                        {faq.question}
                      </span>
                      <ChevronDown className="h-5 w-5 eclipse-accent transition-transform duration-200" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6 animate-in slide-in-from-top-2">
                    <div className="eclipse-text-secondary text-sm whitespace-pre-line eclipse-gradient p-6 rounded-xl border border-[#8A4BFF]/20 leading-relaxed mt-4">
                      {faq.answer}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen eclipse-bg eclipse-scroll">
      <div className="max-w-7xl mx-auto p-10 space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between animate-in fade-in slide-in-from-top-4">
          <div className="space-y-3">
            <h1 className="eclipse-title text-5xl font-bold">
              Controle de Mailing
            </h1>
            <p className="eclipse-text-secondary text-xl">
              Gerencie contatos de marcas, agências, influenciadores e
              freelancers
            </p>
          </div>
          <Button
            onClick={() => setShowAddDialog(true)}
            className="eclipse-button-primary h-14 px-8 rounded-xl font-semibold flex items-center gap-3 text-base"
          >
            <Plus className="h-6 w-6" />
            Novo Contato
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {[
            {
              title: "Total",
              value: stats.totalBrands,
              icon: Building2,
              color: "eclipse-text-primary",
            },
            {
              title: "Marcas",
              value: stats.byCategory.Marca,
              icon: Briefcase,
              color: "text-blue-400",
            },
            {
              title: "Bets",
              value: stats.byCategory.Bet,
              icon: TrendingUp,
              color: "text-red-400",
            },
            {
              title: "Agências",
              value: stats.byCategory.Agência,
              icon: Building2,
              color: "text-purple-400",
            },
            {
              title: "Influencers",
              value: stats.byCategory.Influenciador,
              icon: Star,
              color: "text-yellow-400",
            },
            {
              title: "Influentes",
              value: stats.byCategory["Pessoa Influente"],
              icon: UserCheck,
              color: "text-green-400",
            },
            {
              title: "Freelancers",
              value: stats.byCategory.Freelancer,
              icon: Palette,
              color: "text-orange-400",
            },
            {
              title: "Fechados",
              value: stats.byCategory["Influenciador que já fechou"],
              icon: UserCheck,
              color: "text-emerald-400",
            },
          ].map((stat, index) => (
            <Card
              key={stat.title}
              className="eclipse-stats-card eclipse-card-hover rounded-xl animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="eclipse-text-secondary text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="space-y-12"
        >
          <TabsList className="grid w-full grid-cols-9 p-2 eclipse-card rounded-2xl h-16">
            {[
              { value: "todos", label: "Todos" },
              { value: "marcas", label: "Marcas" },
              { value: "bets", label: "Bets" },
              { value: "agencias", label: "Agências" },
              { value: "influenciadores", label: "Influenciadores" },
              { value: "pessoas-influentes", label: "Pessoas Influentes" },
              { value: "freelancers", label: "Freelancers" },
              { value: "fechados", label: "Fechados" },
              { value: "sugeridos", label: "Sugeridos" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="eclipse-tab rounded-xl h-12 font-medium transition-all duration-300 text-xs"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="todos">{renderTabContent("all")}</TabsContent>

          <TabsContent value="marcas">{renderTabContent("Marca")}</TabsContent>

          <TabsContent value="bets">{renderTabContent("Bet")}</TabsContent>

          <TabsContent value="agencias">
            {renderTabContent("Agência")}
          </TabsContent>

          <TabsContent value="influenciadores">
            {renderTabContent("Influenciador")}
          </TabsContent>

          <TabsContent value="pessoas-influentes">
            {renderTabContent("Pessoa Influente")}
          </TabsContent>

          <TabsContent value="freelancers">
            {renderTabContent("Freelancer")}
          </TabsContent>

          <TabsContent value="fechados">
            {renderTabContent("Influenciador que já fechou")}
          </TabsContent>

          <TabsContent value="sugeridos">
            {renderTabContent("Influenciador sugerido")}
          </TabsContent>
        </Tabs>

        <AddBrandDialog
          open={showAddDialog}
          onOpenChange={setShowAddDialog}
          onAdd={(newBrand) => {
            const newId = Math.max(...brands.map((b) => b.id), 0) + 1;
            setBrands([...brands, { ...newBrand, id: newId }]);
            setShowAddDialog(false);
          }}
        />

        <BrandDetailsModal
          brand={selectedBrand}
          open={!!selectedBrand}
          onClose={() => setSelectedBrand(null)}
          onUpdate={(updatedBrand) => {
            setBrands(
              brands.map((b) => (b.id === updatedBrand.id ? updatedBrand : b))
            );
            setSelectedBrand(updatedBrand);
          }}
        />
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-[#8A4BFF]/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg eclipse-gradient flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="eclipse-title font-bold">Controle de Mailing</h3>
                <p className="eclipse-text-muted text-sm">
                  Sistema de gestão de contatos profissionais
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 text-sm eclipse-text-muted">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{stats.totalContacts} contatos</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>{stats.totalBrands} empresas</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>
                  {lastModified
                    ? `Atualizado ${lastModified.toLocaleDateString(
                        "pt-BR"
                      )} às ${lastModified.toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}`
                    : "Carregando..."}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>v1.0.0</span>
              </div>
            </div>

            <div className="flex items-center gap-2 eclipse-text-muted text-sm">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>para profissionais de marketing</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
