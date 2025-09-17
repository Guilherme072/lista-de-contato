const mockBrands = [
  // Marcas
  {
    id: 1,
    name: "Nike Brasil",
    category: "Marca",
    website: "https://nike.com.br",
    logo: "fas fa-running",
    contacts: [
      {
        id: 3,
        name: "Carlos Oliveira",
        role: "Diretor de Marketing Digital",
        email: "carlos@nike.com",
        phone: "+55 11 77777-7777",
        department: "Marketing Digital",
        addedBy: "Pedro Costa",
        addedDate: "2023-11-15",
      },
    ],
    suggestedInfluencers: [
      { name: "Neymar Jr", phone: "+55 11 99999-0001", instagram: "@neymarjr" },
      { name: "Rayssa Leal", phone: "+55 11 99999-0002", instagram: "@rayssalealsk8" },
      { name: "Gabriel Medina", phone: "+55 11 99999-0003", instagram: "@gabrielmedina" },
    ],
    observations: [
      {
        id: 1,
        text: "Foco em atletas e lifestyle esportivo. Campanhas sazonais importantes. Processo de aprovação longo.",
        author: "Pedro Costa",
        date: "2024-01-10",
      },
    ],
    status: "Ativo",
    lastContact: "2024-01-10",
    lastContactBy: "Pedro Costa",
    lastContactWith: "Carlos Oliveira",
    contactMethod: "Email",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Pedro Costa",
    suggestedBy: null,
  },
  {
    id: 2,
    name: "Coca-Cola Brasil",
    category: "Marca",
    website: "https://cocacola.com.br",
    logo: "fas fa-glass-whiskey",
    contacts: [
      {
        id: 8,
        name: "Patricia Souza",
        role: "Diretora de Marketing",
        email: "patricia@cocacola.com",
        phone: "+55 11 92222-2222",
        department: "Marketing",
      },
    ],
    suggestedInfluencers: [
      { name: "Iza", phone: "+55 21 99999-1313", instagram: "@iza" },
      { name: "Ludmilla", phone: "+55 21 99999-1414", instagram: "@ludmilla" },
      { name: "Pabllo Vittar", phone: "+55 85 99999-1515", instagram: "@pabllovittar" },
    ],
    observations: [
      {
        id: 1,
        text: "Marca icônica mundial. Campanhas sempre envolvem grandes nomes e eventos.",
        author: "Rafael Lima",
        date: "2024-01-22",
      },
    ],
    status: "Ativo",
    lastContact: "2024-01-22",
    lastContactBy: "Rafael Lima",
    lastContactWith: "Patricia Souza",
    contactMethod: "Reunião Presencial",
    relationshipLevel: "Excelente",
    neverContacted: false,
    addedBy: "Rafael Lima",
    suggestedBy: null,
  },
  {
    id: 13,
    name: "Adidas Brasil",
    category: "Marca",
    website: "https://adidas.com.br",
    logo: "fas fa-shoe-prints",
    contacts: [],
    suggestedInfluencers: [
      { name: "Messi", phone: "+54 11 99999-0000", instagram: "@leomessi" },
      { name: "Pogba", phone: "+33 1 99999-0000", instagram: "@paulpogba" },
    ],
    observations: [
      {
        id: 1,
        text: "Concorrente direto da Nike. Foco em futebol e streetwear. Precisa encontrar contatos internos.",
        author: "João Pedro",
        date: "2023-12-15",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "João Pedro",
    suggestedBy: null,
  },
  // Bets
  {
    id: 3,
    name: "Bet365",
    category: "Bet",
    website: "https://bet365.com",
    logo: "fas fa-dice",
    contacts: [
      {
        id: 1,
        name: "João Silva",
        role: "Gerente de Marketing",
        email: "joao@bet365.com",
        phone: "+55 11 99999-9999",
        department: "Marketing",
        addedBy: "Ana Silva",
        addedDate: "2023-12-01",
      },
      {
        id: 2,
        name: "Maria Santos",
        role: "Coordenadora de Influenciadores",
        email: "maria@bet365.com",
        phone: "+55 11 88888-8888",
        department: "Influencer Marketing",
        addedBy: "Pedro Costa",
        addedDate: "2024-01-05",
      },
    ],
    suggestedInfluencers: [
      { name: "Casimiro Miguel", phone: "+55 11 99887-7665", instagram: "@casimiro" },
      { name: "Gaules", phone: "+55 11 98765-4321", instagram: "@gaules" },
      { name: "Loud Coringa", phone: "+55 11 97654-3210", instagram: "@loudcoringa" },
    ],
    observations: [
      {
        id: 1,
        text: "Marca focada em esportes, especialmente futebol. Preferem influenciadores gamers e esportivos. Orçamento alto para campanhas.",
        author: "Ana Silva",
        date: "2024-01-15",
      },
      {
        id: 2,
        text: "IMPORTANTE: Sempre lembrar sobre jogo responsável nas campanhas. Público 18+.",
        author: "Pedro Costa",
        date: "2024-01-20",
      },
    ],
    status: "Ativo",
    lastContact: "2024-01-15",
    lastContactBy: "Ana Silva",
    lastContactWith: "Maria Santos",
    contactMethod: "WhatsApp",
    relationshipLevel: "Excelente",
    neverContacted: false,
    addedBy: "Ana Silva",
    suggestedBy: "Casimiro Miguel",
  },
  {
    id: 4,
    name: "Blaze",
    category: "Bet",
    website: "https://blaze.com",
    logo: "fas fa-fire",
    contacts: [],
    suggestedInfluencers: [
      { name: "Nobru", phone: "+55 11 99999-2525", instagram: "@nobru" },
      { name: "Cerol", phone: "+55 11 99999-2626", instagram: "@cerol" },
      { name: "Yoda", phone: "+55 11 99999-2727", instagram: "@yoda" },
    ],
    observations: [
      {
        id: 1,
        text: "Casa de apostas com foco em jogos online e esports. Público jovem e engajado. ATENÇÃO: Verificar compliance com jogo responsável.",
        author: "Marina Oliveira",
        date: "2024-01-25",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Marina Oliveira",
    suggestedBy: "Nobru",
  },
  // Agências
  {
    id: 5,
    name: "Agência Publicis",
    category: "Agência",
    website: "https://publicis.com.br",
    logo: "fas fa-bullhorn",
    contacts: [
      {
        id: 4,
        name: "Ana Costa",
        role: "Account Manager",
        email: "ana@publicis.com",
        phone: "+55 11 66666-6666",
        department: "Atendimento",
        addedBy: "Carla Mendes",
        addedDate: "2023-10-15",
      },
    ],
    suggestedInfluencers: [
      { name: "Whindersson Nunes", phone: "+55 85 99999-1111", instagram: "@whinderssonnunes" },
      { name: "Kéfera", phone: "+55 11 99999-2222", instagram: "@kefera" },
      { name: "Felipe Neto", phone: "+55 21 99999-3333", instagram: "@felipeneto" },
    ],
    observations: [
      {
        id: 1,
        text: "Agência que atende múltiplas marcas. Boa para parcerias de longo prazo. Pagamento em 60 dias. Estudar cases para benchmarking.",
        author: "Carla Mendes",
        date: "2024-01-05",
      },
    ],
    status: "Prospecto",
    lastContact: "2024-01-05",
    lastContactBy: "Carla Mendes",
    lastContactWith: "Ana Costa",
    contactMethod: "Telefone",
    relationshipLevel: "Regular",
    neverContacted: false,
    addedBy: "Carla Mendes",
    suggestedBy: null,
  },
  {
    id: 6,
    name: "Agência DM9",
    category: "Agência",
    website: "https://dm9.com.br",
    logo: "fas fa-ad",
    contacts: [],
    suggestedInfluencers: [
      { name: "Bruna Marquezine", phone: "+55 21 99999-3434", instagram: "@brunamarquezine" },
      { name: "Giovanna Ewbank", phone: "+55 21 99999-3535", instagram: "@gioewbank" },
    ],
    observations: [
      {
        id: 1,
        text: "Agência tradicional com cases premiados. Analisar estratégias para benchmarking. Forte em campanhas de TV.",
        author: "Lucas Santos",
        date: "2024-01-20",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Lucas Santos",
    suggestedBy: null,
  },
  // Influenciadores
  {
    id: 7,
    name: "Casimiro Miguel",
    category: "Influenciador",
    website: "https://twitch.tv/casimito",
    logo: "fas fa-video",
    contacts: [
      {
        id: 9,
        name: "Roberto Manager",
        role: "Empresário",
        email: "roberto@casimiro.com",
        phone: "+55 11 99999-7777",
        department: "Gestão",
        addedBy: "Ana Silva",
        addedDate: "2024-01-10",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Streamer com 2M+ seguidores. Foco em esportes e games. Público masculino 18-35 anos. Valores: R$ 50k-100k por post.",
        author: "Ana Silva",
        date: "2024-01-10",
      },
    ],
    status: "Ativo",
    lastContact: "2024-01-10",
    lastContactBy: "Ana Silva",
    lastContactWith: "Roberto Manager",
    contactMethod: "WhatsApp",
    relationshipLevel: "Excelente",
    neverContacted: false,
    addedBy: "Ana Silva",
    suggestedBy: null,
  },
  {
    id: 8,
    name: "Virginia Fonseca",
    category: "Influenciador",
    website: "https://instagram.com/virginia",
    logo: "fas fa-heart",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Influenciadora lifestyle com 40M+ seguidores. Público feminino 16-40 anos. Valores altos, mas ROI comprovado.",
        author: "Marina Oliveira",
        date: "2024-01-18",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Marina Oliveira",
    suggestedBy: null,
  },
  // Pessoas Influentes
  {
    id: 9,
    name: "Luciano Huck",
    category: "Pessoa Influente",
    website: "https://globo.com/lucianohuck",
    logo: "fas fa-tv",
    contacts: [
      {
        id: 10,
        name: "Assessoria Huck",
        role: "Assessor de Imprensa",
        email: "assessoria@huck.com",
        phone: "+55 21 99999-8888",
        department: "Comunicação",
        addedBy: "Rafael Lima",
        addedDate: "2024-01-05",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Apresentador da Globo. Influência nacional. Projetos sociais. Contato via assessoria apenas.",
        author: "Rafael Lima",
        date: "2024-01-05",
      },
    ],
    status: "Prospecto",
    lastContact: "2024-01-05",
    lastContactBy: "Rafael Lima",
    lastContactWith: "Assessoria Huck",
    contactMethod: "Email",
    relationshipLevel: "Fraco",
    neverContacted: false,
    addedBy: "Rafael Lima",
    suggestedBy: null,
  },
  {
    id: 10,
    name: "Neymar Jr",
    category: "Pessoa Influente",
    website: "https://instagram.com/neymarjr",
    logo: "fas fa-futbol",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Jogador de futebol com alcance global. Valores milionários. Contato via empresários apenas.",
        author: "Pedro Costa",
        date: "2024-01-12",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Pedro Costa",
    suggestedBy: null,
  },
  // Freelancers
  {
    id: 11,
    name: "João Designer",
    category: "Freelancer",
    website: "https://behance.net/joaodesigner",
    logo: "fas fa-palette",
    contacts: [
      {
        id: 11,
        name: "João Silva",
        role: "Designer Gráfico",
        email: "joao@designer.com",
        phone: "+55 11 99999-9999",
        department: "Criação",
        addedBy: "Beatriz Almeida",
        addedDate: "2024-01-08",
      },
    ],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Designer especializado em redes sociais. Portfólio forte. Valores: R$ 500-1500 por peça. Prazo: 2-5 dias.",
        author: "Beatriz Almeida",
        date: "2024-01-08",
      },
    ],
    status: "Ativo",
    lastContact: "2024-01-08",
    lastContactBy: "Beatriz Almeida",
    lastContactWith: "João Silva",
    contactMethod: "WhatsApp",
    relationshipLevel: "Bom",
    neverContacted: false,
    addedBy: "Beatriz Almeida",
    suggestedBy: null,
  },
  {
    id: 12,
    name: "Maria Editora",
    category: "Freelancer",
    website: "https://youtube.com/mariaeditora",
    logo: "fas fa-video",
    contacts: [],
    suggestedInfluencers: [],
    observations: [
      {
        id: 1,
        text: "Editora de vídeos especializada em conteúdo para redes sociais. After Effects e Premiere. Valores: R$ 200-800 por vídeo.",
        author: "Lucas Santos",
        date: "2024-01-15",
      },
    ],
    status: "Prospecto",
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Lucas Santos",
    suggestedBy: "João Designer",
  },
]

// FAQ Data
const faqData = {
  base: [
    {
      question: "Qual o melhor horário para contato?",
      answer:
        "• WhatsApp: 9h às 18h (dias úteis)\n• Email: Terça a quinta, 10h às 16h\n• LinkedIn: Qualquer horário, resposta em 24-48h\n• Telefone: 14h às 17h (evitar início da manhã)\n• Evite sextas-feiras após 15h",
    },
    {
      question: "Como manter o relacionamento?",
      answer:
        "• Envie updates mensais sobre performance\n• Compartilhe tendências do mercado\n• Lembre de datas importantes da marca\n• Proponha ideias criativas regularmente\n• Seja proativo em resolver problemas",
    },
    {
      question: "O que fazer quando não respondem?",
      answer:
        "• Aguarde 1 semana antes do follow-up\n• Mude o canal de comunicação (email → WhatsApp)\n• Ofereça algo de valor (relatório, insight)\n• Tente contatar outra pessoa da equipe\n• Use gatilhos de urgência (oportunidade limitada)",
    },
  ],
  Marca: [
    {
      question: "Como abordar marcas grandes?",
      answer:
        "• Pesquise campanhas recentes e mencione\n• Apresente cases similares com ROI comprovado\n• Proponha teste pequeno antes de campanha grande\n• Destaque diferencial competitivo\n• Seja persistente mas respeitoso",
    },
    {
      question: "Onde encontrar contatos de marcas?",
      answer:
        "• LinkedIn - Marketing Manager, Brand Manager\n• Site oficial - seção Imprensa ou Contato\n• Eventos de marketing e publicidade\n• Redes sociais corporativas\n• Indicações de outros clientes",
    },
  ],
  Bet: [
    {
      question: "Cuidados especiais com casas de apostas?",
      answer:
        "• SEMPRE incluir aviso de jogo responsável\n• Verificar compliance legal da campanha\n• Público obrigatoriamente 18+\n• Evitar linguagem que incentive vício\n• Documentar todas as aprovações legais",
    },
    {
      question: "Como abordar o mercado de apostas?",
      answer:
        "• Foque em entretenimento, não em ganhos\n• Use influenciadores que já trabalham no setor\n• Destaque aspectos de diversão e socialização\n• Sempre mencione riscos e limites\n• Tenha advogado especializado na equipe",
    },
  ],
  Agência: [
    {
      question: "Como fazer benchmarking com agências?",
      answer:
        "• Analise cases públicos e premiações\n• Participe de eventos do setor\n• Conecte-se com profissionais no LinkedIn\n• Estude metodologias e processos\n• Proponha trocas de conhecimento",
    },
    {
      question: "Como se relacionar com agências concorrentes?",
      answer:
        "• Mantenha relacionamento profissional\n• Compartilhe oportunidades que não servem\n• Participe de grupos e associações\n• Seja transparente sobre especialidades\n• Busque parcerias em projetos grandes",
    },
  ],
  Influenciador: [
    {
      question: "Como avaliar um influenciador?",
      answer:
        "• Analise engajamento real vs seguidores\n• Verifique alinhamento com valores da marca\n• Observe qualidade do conteúdo\n• Cheque histórico de parcerias\n• Teste com campanha pequena primeiro",
    },
    {
      question: "Como negociar com influenciadores?",
      answer:
        "• Seja transparente sobre orçamento\n• Ofereça contrapartidas além do dinheiro\n• Negocie exclusividade quando necessário\n• Defina entregáveis claramente\n• Mantenha relacionamento pós-campanha",
    },
  ],
  "Pessoa Influente": [
    {
      question: "Como abordar pessoas muito famosas?",
      answer:
        "• SEMPRE via assessoria ou empresário\n• Prepare proposta muito bem estruturada\n• Tenha orçamento compatível com o status\n• Seja extremamente profissional\n• Respeite tempos de resposta longos",
    },
    {
      question: "Cuidados com celebridades?",
      answer:
        "• Contratos muito detalhados\n• Cláusulas de imagem e uso\n• Seguro para eventos presenciais\n• Backup plans para imprevistos\n• Equipe jurídica especializada",
    },
  ],
  Freelancer: [
    {
      question: "Como gerenciar freelancers?",
      answer:
        "• Defina briefings muito claros\n• Estabeleça prazos realistas\n• Mantenha comunicação constante\n• Tenha sempre backup de profissionais\n• Pague em dia para manter relacionamento",
    },
    {
      question: "Como encontrar bons freelancers?",
      answer:
        "• Behance e Dribbble para designers\n• LinkedIn para diversos profissionais\n• Indicações de outros clientes\n• Portfólios online e redes sociais\n• Teste com projetos pequenos primeiro",
    },
  ],
}

// Category Messages
const categoryMessages = {
  Marca: {
    title: "💼 Foco em Parcerias Comerciais",
    message: "Priorize fechar parcerias duradouras. Apresente cases de sucesso e ROI comprovado.",
    icon: "fas fa-briefcase",
  },
  Bet: {
    title: "⚠️ Jogo Responsável",
    message: "IMPORTANTE: Sempre promover jogo responsável. Público 18+. Verificar compliance legal.",
    icon: "fas fa-exclamation-triangle",
  },
  Agência: {
    title: "📊 Benchmarking Construtivo",
    message: "Analise estratégias e cases. Oportunidade de aprendizado mútuo e parcerias estratégicas.",
    icon: "fas fa-chart-line",
  },
  Influenciador: {
    title: "🌟 Relacionamento Direto",
    message: "Construa relacionamentos autênticos. Foque no fit com a marca e engajamento real.",
    icon: "fas fa-star",
  },
  "Pessoa Influente": {
    title: "👑 Alto Impacto",
    message: "Contatos de alto valor. Abordagem mais formal. Geralmente via assessoria ou empresários.",
    icon: "fas fa-crown",
  },
  Freelancer: {
    title: "🎨 Talentos Criativos",
    message: "Profissionais para demandas específicas. Mantenha portfólio atualizado e prazos claros.",
    icon: "fas fa-palette",
  },
}

// Global State
const brands = [...mockBrands]
let currentTab = "todos"
let currentBrand = null
let searchTerm = ""
let categoryFilter = "all"
let statusFilter = "all"

// DOM Elements
const addBrandBtn = document.getElementById("addBrandBtn")
const addBrandModal = document.getElementById("addBrandModal")
const brandDetailsModal = document.getElementById("brandDetailsModal")
const addContactModal = document.getElementById("addContactModal")
const loadingOverlay = document.getElementById("loadingOverlay")
const tabsList = document.getElementById("tabsList")
const tabContent = document.getElementById("tabContent")
const searchInput = document.getElementById("searchInput")
const categoryFilterSelect = document.getElementById("categoryFilter")
const statusFilterSelect = document.getElementById("statusFilter")
const brandsGrid = document.getElementById("brandsGrid")
const noResults = document.getElementById("noResults")
const statsGrid = document.getElementById("statsGrid")

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  setupEventListeners()
  populateFilters()
  renderStats()
  renderTabContent()
}

function setupEventListeners() {
  // Add Brand Button
  addBrandBtn.addEventListener("click", openAddBrandModal)

  // Tab Navigation
  tabsList.addEventListener("click", handleTabClick)

  // Search and Filters
  searchInput.addEventListener("input", handleSearch)
  categoryFilterSelect.addEventListener("change", handleCategoryFilter)
  statusFilterSelect.addEventListener("change", handleStatusFilter)

  // Forms
  document.getElementById("addBrandForm").addEventListener("submit", handleAddBrand)
  document.getElementById("addContactForm").addEventListener("submit", handleAddContact)

  // Modal Close Events
  document.addEventListener("click", handleModalClose)
  document.addEventListener("keydown", handleKeyDown)
}

function handleTabClick(e) {
  if (e.target.classList.contains("tab-trigger")) {
    const tabValue = e.target.dataset.tab
    switchTab(tabValue)
  }
}

function switchTab(tabValue) {
  showLoading()

  // Update active tab
  document.querySelectorAll(".tab-trigger").forEach((tab) => {
    tab.classList.remove("active")
  })
  document.querySelector(`[data-tab="${tabValue}"]`).classList.add("active")

  currentTab = tabValue

  setTimeout(() => {
    renderTabContent()
    hideLoading()
  }, 300)
}

function handleSearch(e) {
  searchTerm = e.target.value.toLowerCase()
  renderTabContent()
}

function handleCategoryFilter(e) {
  categoryFilter = e.target.value
  renderTabContent()
}

function handleStatusFilter(e) {
  statusFilter = e.target.value
  renderTabContent()
}

function handleModalClose(e) {
  if (e.target.classList.contains("modal") || e.target.classList.contains("modal-close")) {
    closeAllModals()
  }
}

function handleKeyDown(e) {
  if (e.key === "Escape") {
    closeAllModals()
  }
}

function populateFilters() {
  const categories = [...new Set(brands.map((brand) => brand.category))]
  const statuses = [...new Set(brands.map((brand) => brand.status))]

  // Populate category filter
  categoryFilterSelect.innerHTML = '<option value="all">Todas as Categorias</option>'
  categories.forEach((category) => {
    const option = document.createElement("option")
    option.value = category
    option.textContent = category
    categoryFilterSelect.appendChild(option)
  })

  // Populate status filter
  statusFilterSelect.innerHTML = '<option value="all">Todos os Status</option>'
  statuses.forEach((status) => {
    const option = document.createElement("option")
    option.value = status
    option.textContent = status
    statusFilterSelect.appendChild(option)
  })
}

function renderStats() {
  const stats = calculateStats()

  const statsData = [
    { title: "Total", value: stats.totalBrands, icon: "fas fa-building", color: "var(--accent-primary)" },
    { title: "Marcas", value: stats.byCategory.Marca || 0, icon: "fas fa-briefcase", color: "#3B82F6" },
    { title: "Bets", value: stats.byCategory.Bet || 0, icon: "fas fa-dice", color: "#EF4444" },
    { title: "Agências", value: stats.byCategory.Agência || 0, icon: "fas fa-bullhorn", color: "#8B5CF6" },
    { title: "Influencers", value: stats.byCategory.Influenciador || 0, icon: "fas fa-star", color: "#F59E0B" },
    { title: "Influentes", value: stats.byCategory["Pessoa Influente"] || 0, icon: "fas fa-crown", color: "#10B981" },
    { title: "Freelancers", value: stats.byCategory.Freelancer || 0, icon: "fas fa-palette", color: "#F97316" },
  ]

  statsGrid.innerHTML = statsData
    .map(
      (stat, index) => `
    <div class="stat-card" style="animation-delay: ${index * 100}ms">
      <div class="stat-content">
        <div class="stat-info">
          <h3>${stat.title}</h3>
          <div class="stat-value" style="color: ${stat.color}">${stat.value}</div>
        </div>
        <i class="${stat.icon} stat-icon" style="color: ${stat.color}"></i>
      </div>
    </div>
  `,
    )
    .join("")
}

function calculateStats() {
  const stats = {
    totalBrands: brands.length,
    totalContacts: brands.reduce((acc, brand) => acc + brand.contacts.length, 0),
    activeBrands: brands.filter((brand) => brand.status === "Ativo").length,
    prospects: brands.filter((brand) => brand.status === "Prospecto").length,
    neverContacted: brands.filter((brand) => brand.neverContacted).length,
    byCategory: {},
  }

  // Calculate by category
  const categories = [...new Set(brands.map((brand) => brand.category))]
  categories.forEach((category) => {
    stats.byCategory[category] = brands.filter((brand) => brand.category === category).length
  })

  return stats
}

function renderTabContent() {
  const category = getTabCategory(currentTab)
  const filteredBrands = getFilteredBrands(category)
  const brandsWithoutContacts = getBrandsWithoutContacts(category)

  // Show/hide category message
  renderCategoryMessage(category)

  // Render brands grid
  renderBrandsGrid(filteredBrands)

  // Show/hide partnerships section
  renderPartnershipsSection(brandsWithoutContacts, category)

  // Render FAQ
  renderFAQ(category)
}

function getTabCategory(tab) {
  const tabMap = {
    todos: "all",
    marcas: "Marca",
    bets: "Bet",
    agencias: "Agência",
    influenciadores: "Influenciador",
    "pessoas-influentes": "Pessoa Influente",
    freelancers: "Freelancer",
  }
  return tabMap[tab] || "all"
}

function getFilteredBrands(category = "all") {
  return brands.filter((brand) => {
    const matchesSearch =
      brand.name.toLowerCase().includes(searchTerm) || brand.category.toLowerCase().includes(searchTerm)
    const matchesCategory = categoryFilter === "all" || brand.category === categoryFilter
    const matchesStatus = statusFilter === "all" || brand.status === statusFilter
    const matchesTabCategory = category === "all" || brand.category === category

    return matchesSearch && matchesCategory && matchesStatus && matchesTabCategory
  })
}

function getBrandsWithoutContacts(category = "all") {
  return brands.filter((brand) => brand.contacts.length === 0 && (category === "all" || brand.category === category))
}

function renderCategoryMessage(category) {
  const categoryMessage = document.getElementById("categoryMessage")
  const categoryIcon = document.getElementById("categoryIcon")
  const categoryTitle = document.getElementById("categoryTitle")
  const categoryDescription = document.getElementById("categoryDescription")

  if (category !== "all" && categoryMessages[category]) {
    const message = categoryMessages[category]
    categoryIcon.className = message.icon
    categoryTitle.textContent = message.title
    categoryDescription.textContent = message.message
    categoryMessage.style.display = "block"
  } else {
    categoryMessage.style.display = "none"
  }
}

function renderBrandsGrid(filteredBrands) {
  if (filteredBrands.length === 0) {
    brandsGrid.style.display = "none"
    noResults.style.display = "block"
    return
  }

  brandsGrid.style.display = "grid"
  noResults.style.display = "none"

  brandsGrid.innerHTML = filteredBrands
    .map(
      (brand, index) => `
    <div class="card brand-card" onclick="openBrandDetailsModal(${brand.id})" style="animation-delay: ${index * 100}ms">
      <div class="brand-card-header">
        <div class="brand-header">
          <div class="brand-main-info">
            <div class="brand-logo">
              <i class="${brand.logo}"></i>
            </div>
            <div class="brand-info">
              <h3>${brand.name}</h3>
              <p>${brand.category}</p>
            </div>
          </div>
          <div class="brand-status">
            ${getBrandStatusBadges(brand)}
          </div>
        </div>
      </div>
      
      <div class="brand-card-content">
        <div class="brand-stats">
          <div class="brand-stat">
            <i class="fas fa-users"></i>
            <span>${brand.contacts.length} contato${brand.contacts.length !== 1 ? "s" : ""}</span>
          </div>
          <div class="brand-stat">
            <i class="fas fa-comment"></i>
            <span>${brand.observations.length} obs.</span>
          </div>
        </div>
        
        <div class="brand-relationship">
          <span>Relacionamento:</span>
          ${getRelationshipBadge(brand.relationshipLevel)}
        </div>
        
        ${renderBrandContactInfo(brand)}
        
        <div class="brand-actions">
          ${
            brand.website
              ? `
            <button class="btn btn-secondary" onclick="event.stopPropagation(); window.open('${brand.website}', '_blank')">
              <i class="fas fa-globe"></i>
              Site
            </button>
          `
              : ""
          }
          <button class="btn btn-primary">
            <i class="fas fa-sparkles"></i>
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

function getBrandStatusBadges(brand) {
  let badges = `<div class="badge ${getStatusBadgeClass(brand.status)}">${brand.status}</div>`

  if (brand.neverContacted) {
    badges += `<div class="badge badge-danger pulse">
      <i class="fas fa-exclamation-triangle"></i>
      Nunca contatada
    </div>`
  }

  return badges
}

function getStatusBadgeClass(status) {
  switch (status) {
    case "Ativo":
      return "badge-success"
    case "Prospecto":
      return "badge-primary"
    case "Inativo":
      return "badge-secondary"
    default:
      return "badge-secondary"
  }
}

function getRelationshipBadge(level) {
  const badgeClass = getRelationshipBadgeClass(level)
  return `<div class="badge ${badgeClass}">${level}</div>`
}

function getRelationshipBadgeClass(level) {
  switch (level) {
    case "Excelente":
      return "badge-success"
    case "Bom":
      return "badge-primary"
    case "Regular":
      return "badge-warning"
    case "Fraco":
      return "badge-danger"
    case "Nenhum":
      return "badge-secondary"
    default:
      return "badge-secondary"
  }
}

function renderBrandContactInfo(brand) {
  if (brand.neverContacted) {
    return `
      <div class="brand-never-contacted">
        <div class="brand-never-contacted-content">
          <i class="fas fa-exclamation-triangle"></i>
          <div class="brand-never-contacted-text">
            <h4>Nunca contatado</h4>
            <p>Precisa de prospecção</p>
          </div>
        </div>
      </div>
    `
  }

  if (brand.lastContact) {
    return `
      <div class="brand-last-contact">
        <h4>Último contato: ${formatDate(brand.lastContact)}</h4>
        <p>
          Por <strong>${brand.lastContactBy}</strong><br>
          com <strong>${brand.lastContactWith}</strong><br>
          via <strong>${brand.contactMethod}</strong>
        </p>
      </div>
    `
  }

  return ""
}

function renderPartnershipsSection(brandsWithoutContacts, category) {
  const partnershipsCard = document.getElementById("partnershipsCard")
  const partnershipsCount = document.getElementById("partnershipsCount")
  const partnershipsDescription = document.getElementById("partnershipsDescription")
  const partnershipsGrid = document.getElementById("partnershipsGrid")

  if (brandsWithoutContacts.length === 0) {
    partnershipsCard.style.display = "none"
    return
  }

  partnershipsCard.style.display = "block"
  partnershipsCount.textContent = brandsWithoutContacts.length

  const description =
    category === "all"
      ? "Contatos que ainda não possuem informações cadastradas e precisam de prospecção"
      : `${category}s que precisam de prospecção e desenvolvimento de relacionamento`
  partnershipsDescription.textContent = description

  partnershipsGrid.innerHTML = brandsWithoutContacts
    .map(
      (brand, index) => `
    <div class="card partnership-card" onclick="openBrandDetailsModal(${brand.id})" style="animation-delay: ${index * 150}ms">
      <div class="partnership-card-content">
        <div class="partnership-header">
          <div class="partnership-icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <div class="partnership-info">
            <h3>${brand.name}</h3>
            <p>${brand.category}</p>
          </div>
        </div>
        
        <div class="partnership-details">
          <div class="partnership-detail">
            <span>Adicionado por:</span>
            <span>${brand.addedBy}</span>
          </div>
          ${
            brand.suggestedBy
              ? `
            <div class="partnership-detail">
              <span>Sugerido por:</span>
              <span>${brand.suggestedBy}</span>
            </div>
          `
              : ""
          }
          <div class="partnership-detail">
            <span>Influenciadores:</span>
            <span class="badge badge-secondary">${brand.suggestedInfluencers.length}</span>
          </div>
        </div>
        
        <button class="btn btn-primary">
          <i class="fas fa-sparkles"></i>
          Ver Detalhes
        </button>
      </div>
    </div>
  `,
    )
    .join("")
}

function renderFAQ(category) {
  const faqCategoryBadge = document.getElementById("faqCategoryBadge")
  const faqDescription = document.getElementById("faqDescription")
  const faqList = document.getElementById("faqList")

  // Update FAQ header
  if (category !== "all") {
    faqCategoryBadge.textContent = category
    faqCategoryBadge.style.display = "inline-block"
    faqDescription.textContent = `Dicas específicas para trabalhar com ${category.toLowerCase()}s`
  } else {
    faqCategoryBadge.style.display = "none"
    faqDescription.textContent = "Guia prático para melhorar suas abordagens e relacionamentos"
  }

  // Get FAQ data
  const categoryFaq = category !== "all" && faqData[category] ? faqData[category] : []
  const allFaq = [...faqData.base, ...categoryFaq]

  // Render FAQ items
  faqList.innerHTML = allFaq
    .map(
      (faq, index) => `
    <div class="faq-item" id="faq-${index}">
      <button class="faq-question" onclick="toggleFAQ(${index})">
        <span>
          <i class="fas fa-bolt"></i>
          ${faq.question}
        </span>
        <i class="fas fa-chevron-down"></i>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-content">
          <p>${faq.answer}</p>
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

function toggleFAQ(index) {
  const faqItem = document.getElementById(`faq-${index}`)
  faqItem.classList.toggle("active")
}

// Modal Functions
function openAddBrandModal() {
  addBrandModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeAddBrandModal() {
  addBrandModal.classList.remove("active")
  document.body.style.overflow = "auto"
  document.getElementById("addBrandForm").reset()
}

function openBrandDetailsModal(brandId) {
  const brand = brands.find((b) => b.id === brandId)
  if (!brand) return

  currentBrand = brand
  renderBrandDetailsModal(brand)
  brandDetailsModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeBrandDetailsModal() {
  brandDetailsModal.classList.remove("active")
  document.body.style.overflow = "auto"
  currentBrand = null
}

function openAddContactModal() {
  addContactModal.classList.add("active")
}

function closeAddContactModal() {
  addContactModal.classList.remove("active")
  document.getElementById("addContactForm").reset()
}

function openEditBrandModal() {
  // Placeholder for edit functionality
  alert("Funcionalidade de edição será implementada em breve!")
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.classList.remove("active")
  })
  document.body.style.overflow = "auto"
  currentBrand = null
}

function renderBrandDetailsModal(brand) {
  // Update header
  document.getElementById("brandIcon").className = brand.logo
  document.getElementById("brandDetailsName").textContent = brand.name

  // Update badges
  const brandBadges = document.getElementById("brandBadges")
  brandBadges.innerHTML = `
    <div class="badge badge-secondary">${brand.category}</div>
    <div class="badge ${getStatusBadgeClass(brand.status)}">${brand.status}</div>
    <div class="badge ${getRelationshipBadgeClass(brand.relationshipLevel)}">
      Relacionamento: ${brand.relationshipLevel}
    </div>
  `

  // Update website button
  const websiteBtn = document.getElementById("brandWebsiteBtn")
  if (brand.website) {
    websiteBtn.style.display = "inline-flex"
    websiteBtn.onclick = () => window.open(brand.website, "_blank")
  } else {
    websiteBtn.style.display = "none"
  }

  // Update counts
  document.getElementById("contactsCount").textContent = brand.contacts.length
  document.getElementById("influencersCount").textContent = brand.suggestedInfluencers.length
  document.getElementById("observationsCount").textContent = brand.observations.length

  // Render tab content
  renderContactsTab(brand)
  renderInfluencersTab(brand)
  renderObservationsTab(brand)
  renderHistoryTab(brand)

  // Setup modal tabs
  setupModalTabs()
}

function setupModalTabs() {
  const modalTabTriggers = brandDetailsModal.querySelectorAll(".tab-trigger")
  const modalTabPanes = brandDetailsModal.querySelectorAll(".tab-pane")

  modalTabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const tabName = trigger.dataset.tab

      // Update active trigger
      modalTabTriggers.forEach((t) => t.classList.remove("active"))
      trigger.classList.add("active")

      // Update active pane
      modalTabPanes.forEach((pane) => pane.classList.remove("active"))
      document.getElementById(`${tabName}Tab`).classList.add("active")
    })
  })
}

function renderContactsTab(brand) {
  const contactsList = document.getElementById("contactsList")

  if (brand.contacts.length === 0) {
    contactsList.innerHTML = `
      <div class="card">
        <div class="card-content" style="text-align: center; padding: 3rem;">
          <div style="width: 4rem; height: 4rem; border-radius: 12px; background: linear-gradient(135deg, var(--accent-secondary), var(--accent-primary)); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
            <i class="fas fa-users" style="font-size: 2rem; color: white;"></i>
          </div>
          <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Nenhum contato cadastrado</h4>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Adicione o primeiro contato para começar o relacionamento.</p>
          <button class="btn btn-primary" onclick="openAddContactModal()">
            <i class="fas fa-plus"></i>
            Adicionar Primeiro Contato
          </button>
        </div>
      </div>
    `
    return
  }

  contactsList.innerHTML = brand.contacts
    .map(
      (contact) => `
    <div class="contact-card">
      <div class="contact-header">
        <div class="contact-info">
          <h4>${contact.name}</h4>
          <p>${contact.role}</p>
          ${contact.department ? `<p style="font-size: 0.75rem; opacity: 0.7;">${contact.department}</p>` : ""}
        </div>
        <div class="badge badge-secondary">${contact.department || "N/A"}</div>
      </div>
      <div class="contact-details">
        ${
          contact.email
            ? `
          <div class="contact-detail">
            <i class="fas fa-envelope"></i>
            <a href="mailto:${contact.email}">${contact.email}</a>
          </div>
        `
            : ""
        }
        ${
          contact.phone
            ? `
          <div class="contact-detail">
            <i class="fas fa-phone"></i>
            <a href="tel:${contact.phone}">${contact.phone}</a>
          </div>
        `
            : ""
        }
        ${
          contact.addedBy
            ? `
          <div class="contact-detail">
            <i class="fas fa-user"></i>
            <span>Adicionado por ${contact.addedBy}</span>
          </div>
        `
            : ""
        }
      </div>
    </div>
  `,
    )
    .join("")
}

function renderInfluencersTab(brand) {
  const influencersList = document.getElementById("influencersList")

  if (brand.suggestedInfluencers.length === 0) {
    influencersList.innerHTML = `
      <div class="card">
        <div class="card-content" style="text-align: center; padding: 3rem;">
          <div style="width: 4rem; height: 4rem; border-radius: 12px; background: linear-gradient(135deg, var(--accent-secondary), var(--accent-primary)); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
            <i class="fas fa-star" style="font-size: 2rem; color: white;"></i>
          </div>
          <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Nenhum influenciador sugerido</h4>
          <p style="color: var(--text-secondary);">Adicione sugestões de influenciadores que fazem sentido para esta marca.</p>
        </div>
      </div>
    `
    return
  }

  influencersList.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
      ${brand.suggestedInfluencers
        .map(
          (influencer) => `
        <div class="card" style="cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
          <div class="card-content" style="padding: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
              <div style="width: 2.5rem; height: 2.5rem; border-radius: 8px; background: linear-gradient(135deg, var(--accent-secondary), var(--accent-primary)); display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-star" style="color: white;"></i>
              </div>
              <div>
                <h4 style="color: var(--text-primary); font-size: 1rem; margin-bottom: 0.25rem;">${influencer.name}</h4>
                <p style="color: var(--text-muted); font-size: 0.75rem;">${influencer.instagram}</p>
              </div>
            </div>
            ${
              influencer.phone
                ? `
              <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary); font-size: 0.75rem;">
                <i class="fas fa-phone" style="color: var(--accent-primary);"></i>
                <span>${influencer.phone}</span>
              </div>
            `
                : ""
            }
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `
}

function renderObservationsTab(brand) {
  const observationsList = document.getElementById("observationsList")

  if (brand.observations.length === 0) {
    observationsList.innerHTML = `
      <div class="card">
        <div class="card-content" style="text-align: center; padding: 3rem;">
          <div style="width: 4rem; height: 4rem; border-radius: 12px; background: linear-gradient(135deg, var(--accent-secondary), var(--accent-primary)); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
            <i class="fas fa-comment" style="font-size: 2rem; color: white;"></i>
          </div>
          <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Nenhuma observação</h4>
          <p style="color: var(--text-secondary);">Adicione observações importantes sobre esta marca.</p>
        </div>
      </div>
    `
    return
  }

  observationsList.innerHTML = brand.observations
    .map(
      (obs) => `
    <div class="card">
      <div class="card-content" style="padding: 1.5rem;">
        <div style="display: flex; align-items: start; justify-content: space-between; margin-bottom: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 2rem; height: 2rem; border-radius: 8px; background: linear-gradient(135deg, var(--accent-secondary), var(--accent-primary)); display: flex; align-items: center; justify-content: center;">
              <i class="fas fa-comment" style="color: white; font-size: 0.875rem;"></i>
            </div>
            <div>
              <p style="color: var(--text-primary); font-weight: 500; font-size: 0.875rem; margin-bottom: 0.25rem;">${obs.author}</p>
              <p style="color: var(--text-muted); font-size: 0.75rem;">${formatDate(obs.date)}</p>
            </div>
          </div>
        </div>
        <p style="color: var(--text-secondary); line-height: 1.6;">${obs.text}</p>
      </div>
    </div>
  `,
    )
    .join("")
}

function renderHistoryTab(brand) {
  const historyContent = document.getElementById("historyContent")

  if (brand.neverContacted) {
    historyContent.innerHTML = `
      <div class="card" style="border: 2px solid rgba(239, 68, 68, 0.2);">
        <div class="card-content" style="text-align: center; padding: 3rem;">
          <div style="width: 4rem; height: 4rem; border-radius: 12px; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
            <i class="fas fa-exclamation-triangle pulse" style="font-size: 2rem; color: #EF4444;"></i>
          </div>
          <h4 style="color: #FCA5A5; margin-bottom: 0.5rem;">Nunca Contatado</h4>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Este contato ainda não foi abordado. Inicie o relacionamento!</p>
          <button class="btn btn-primary" onclick="openAddContactModal()">
            <i class="fas fa-sparkles"></i>
            Fazer Primeiro Contato
          </button>
        </div>
      </div>
    `
    return
  }

  historyContent.innerHTML = `
    <div class="card">
      <div class="card-content" style="padding: 1.5rem;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div style="width: 3rem; height: 3rem; border-radius: 12px; background: linear-gradient(135deg, var(--accent-secondary), var(--accent-primary)); display: flex; align-items: center; justify-content: center;">
            <i class="fas fa-calendar" style="color: white; font-size: 1.5rem;"></i>
          </div>
          <div style="flex: 1;">
            <h4 style="color: var(--text-primary); font-weight: 600; margin-bottom: 0.5rem;">Último Contato</h4>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.875rem;">
              <p style="color: var(--text-secondary);">
                <span style="color: var(--text-muted);">Data:</span> ${formatDate(brand.lastContact)}
              </p>
              <p style="color: var(--text-secondary);">
                <span style="color: var(--text-muted);">Feito por:</span> ${brand.lastContactBy}
              </p>
              <p style="color: var(--text-secondary);">
                <span style="color: var(--text-muted);">Contato com:</span> ${brand.lastContactWith}
              </p>
              <p style="color: var(--text-secondary);">
                <span style="color: var(--text-muted);">Método:</span> ${brand.contactMethod}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

// Form Handlers
function handleAddBrand(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const newBrand = {
    id: brands.length + 1,
    name: formData.get("brandName") || document.getElementById("brandName").value,
    category: formData.get("brandCategory") || document.getElementById("brandCategory").value,
    website: formData.get("brandWebsite") || document.getElementById("brandWebsite").value,
    status: formData.get("brandStatus") || document.getElementById("brandStatus").value,
    logo: getCategoryIcon(document.getElementById("brandCategory").value),
    contacts: [],
    suggestedInfluencers: [],
    observations: document.getElementById("brandObservations").value
      ? [
          {
            id: 1,
            text: document.getElementById("brandObservations").value,
            author: "Usuário Atual",
            date: new Date().toISOString().split("T")[0],
          },
        ]
      : [],
    lastContact: null,
    lastContactBy: null,
    lastContactWith: null,
    contactMethod: null,
    relationshipLevel: "Nenhum",
    neverContacted: true,
    addedBy: "Usuário Atual",
    suggestedBy: null,
  }

  brands.push(newBrand)
  closeAddBrandModal()
  renderStats()
  renderTabContent()
  populateFilters()
}

function handleAddContact(e) {
  e.preventDefault()

  if (!currentBrand) return

  const formData = new FormData(e.target)
  const newContact = {
    id: currentBrand.contacts.length + 1,
    name: formData.get("contactName") || document.getElementById("contactName").value,
    role: formData.get("contactRole") || document.getElementById("contactRole").value,
    email: formData.get("contactEmail") || document.getElementById("contactEmail").value,
    phone: formData.get("contactPhone") || document.getElementById("contactPhone").value,
    department: formData.get("contactDepartment") || document.getElementById("contactDepartment").value,
    notes: formData.get("contactNotes") || document.getElementById("contactNotes").value,
    addedBy: "Usuário Atual",
    addedDate: new Date().toISOString().split("T")[0],
  }

  // Update brand
  const brandIndex = brands.findIndex((b) => b.id === currentBrand.id)
  if (brandIndex !== -1) {
    brands[brandIndex].contacts.push(newContact)
    brands[brandIndex].neverContacted = false
    brands[brandIndex].lastContact = new Date().toISOString().split("T")[0]
    brands[brandIndex].lastContactBy = "Usuário Atual"
    brands[brandIndex].lastContactWith = newContact.name
    brands[brandIndex].contactMethod = "Cadastro Inicial"

    currentBrand = brands[brandIndex]
  }

  closeAddContactModal()
  renderBrandDetailsModal(currentBrand)
  renderStats()
  renderTabContent()
}

// Utility Functions
function getCategoryIcon(category) {
  const iconMap = {
    Marca: "fas fa-building",
    Bet: "fas fa-dice",
    Agência: "fas fa-bullhorn",
    Influenciador: "fas fa-star",
    "Pessoa Influente": "fas fa-crown",
    Freelancer: "fas fa-palette",
  }
  return iconMap[category] || "fas fa-building"
}

function formatDate(dateString) {
  if (!dateString) return "N/A"
  const date = new Date(dateString)
  return date.toLocaleDateString("pt-BR")
}

function showLoading() {
  loadingOverlay.style.display = "flex"
}

function hideLoading() {
  loadingOverlay.style.display = "none"
}

// Initialize tooltips and other interactive elements
function initializeInteractiveElements() {
  // Add hover effects to cards
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(".brand-card")) {
      e.target.closest(".brand-card").style.transform = "translateY(-4px)"
    }
  })

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(".brand-card")) {
      e.target.closest(".brand-card").style.transform = "translateY(0)"
    }
  })
}

// Call initialization
document.addEventListener("DOMContentLoaded", () => {
  initializeInteractiveElements()
})
