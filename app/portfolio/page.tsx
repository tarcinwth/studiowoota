"use client"

import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import DownloadPressKitButton from "@/components/ui/DownloadPressKitButton";

// Tipar os projetos para incluir 'destaque'
type Projeto = { titulo: string; descricao: string; cliente: string; link: string; midias?: string[]; destaque?: boolean };
const categorias: { nome: string; projetos: Projeto[] }[] = [
  {
    nome: "Websites",
    projetos: [
      {
        titulo: "Site Institucional Exemplo",
        descricao: "Website moderno para empresa de tecnologia.",
        cliente: "Cliente A (em breve)",
        link: "#",
        midias: [
          "/portfolio/site-exemplo1.jpg",
          "/portfolio/site-exemplo2.jpg"
        ],
        destaque: true
      },
      {
        titulo: "Landing Page Produto X",
        descricao: "Landing page focada em conversão.",
        cliente: "Cliente B (em breve)",
        link: "#",
        midias: [
          "/portfolio/landing1.jpg"
        ],
        destaque: false
      },
    ],
  },
  {
    nome: "Design",
    projetos: [
      {
        titulo: "Identidade Visual Startup Y",
        descricao: "Criação de logo, paleta e tipografia.",
        cliente: "Cliente C (em breve)",
        link: "#",
        midias: [
          "/portfolio/design1.jpg"
        ]
      },
      {
        titulo: "Branding Empresa Z",
        descricao: "Desenvolvimento de identidade visual completa.",
        cliente: "Cliente Z (em breve)",
        link: "#",
        midias: [
          "/portfolio/design2.jpg"
        ]
      },
      {
        titulo: "UI/UX App Mobile",
        descricao: "Design de interface para aplicativo mobile.",
        cliente: "Cliente W (em breve)",
        link: "#",
        midias: [
          "/portfolio/design3.jpg"
        ]
      }
    ],
  },
  {
    nome: "Social",
    projetos: [
      {
        titulo: "Campanha Instagram Z",
        descricao: "Conteúdo visual e estratégia para redes sociais.",
        cliente: "Cliente D (em breve)",
        link: "#",
        midias: [
          "/portfolio/social1.jpg"
        ]
      },
      {
        titulo: "Estratégia LinkedIn",
        descricao: "Gestão de conteúdo e engajamento no LinkedIn.",
        cliente: "Cliente E (em breve)",
        link: "#",
        midias: [
          "/portfolio/social2.jpg"
        ]
      },
      {
        titulo: "Campanha Facebook",
        descricao: "Campanha publicitária no Facebook.",
        cliente: "Cliente F (em breve)",
        link: "#",
        midias: [
          "/portfolio/social3.jpg"
        ]
      }
    ],
  },
  {
    nome: "Mídia",
    projetos: [
      {
        titulo: "Vídeo Promocional W",
        descricao: "Edição e pós-produção de vídeo institucional.",
        cliente: "Cliente E (em breve)",
        link: "#",
        midias: [
          "/portfolio/midia1.jpg",
          "/portfolio/midia2.mp4"
        ]
      },
      {
        titulo: "Fotografia de Produto",
        descricao: "Sessão fotográfica para catálogo de produtos.",
        cliente: "Cliente G (em breve)",
        link: "#",
        midias: [
          "/portfolio/midia3.jpg"
        ]
      },
      {
        titulo: "Edição de Vídeo",
        descricao: "Edição de vídeo para campanha publicitária.",
        cliente: "Cliente H (em breve)",
        link: "#",
        midias: [
          "/portfolio/midia4.mp4"
        ]
      }
    ],
  },
];

const clientes = [
  "Todos",
  ...Array.from(new Set(categorias.flatMap(cat => cat.projetos.map(p => p.cliente))))
];
const categoriasNomes = ["Todos", ...categorias.map(c => c.nome)];

const depoimentos = [
  {
    nome: "Ana Souza",
    cargo: "CEO - Startup Y",
    foto: "/portfolio/avatar1.png",
    comentario: "A Woota Studio superou nossas expectativas! O site ficou incrível, moderno e já trouxe resultados reais para nosso negócio.",
  },
  {
    nome: "Carlos Lima",
    cargo: "Diretor de Marketing - Empresa X",
    foto: "/portfolio/avatar2.png",
    comentario: "Equipe criativa, atenciosa e muito profissional. Recomendo para quem busca qualidade e inovação.",
  },
  {
    nome: "Juliana Alves",
    cargo: "Empreendedora",
    foto: "/portfolio/avatar3.png",
    comentario: "O design do meu projeto ficou sensacional! Atendimento rápido e personalizado. Voltarei a contratar!",
  },
];

function PortfolioPage() {
  const [nome, setNome] = useState("");
  const [projeto, setProjeto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todos");
  const [clienteFiltro, setClienteFiltro] = useState("Todos");
  const [modalProjeto, setModalProjeto] = useState<null | { titulo: string; descricao: string; cliente: string; link: string; midias?: string[]; destaque?: boolean }>(null);
  const [mostrarMais, setMostrarMais] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    setSucesso(false);
    const texto = `Olá! Meu nome é ${nome}. Gostaria de saber mais sobre: ${projeto}. ${mensagem}`;
    const url = `https://wa.me/SEU_NUMERO_AQUI?text=${encodeURIComponent(texto)}`;
    setTimeout(() => {
      setEnviando(false);
      setSucesso(true);
      setNome("");
      setProjeto("");
      setMensagem("");
      window.open(url, "_blank");
      setTimeout(() => setSucesso(false), 4000);
    }, 1200);
  }

  // Filtragem dos projetos
  const categoriasFiltradas = categorias
    .filter(cat => categoriaFiltro === "Todos" || cat.nome === categoriaFiltro)
    .map(cat => ({
      ...cat,
      projetos: cat.projetos.filter(
        p => clienteFiltro === "Todos" || p.cliente === clienteFiltro
      ),
    }))
    .filter(cat => cat.projetos.length > 0);

  // Dados mockados para o press kit
  const empresa = {
    nome: "Woota Studio",
    site: "https://woota.studio",
    apresentacao: "Somos especialistas em design, mídia, social e websites. Transformamos ideias em experiências digitais de alto impacto.",
    contato: "contato@woota.studio",
    telefone: "+55 11 99999-9999",
    local: "São Paulo, SP"
  };
  const servicos = [
    "Design Gráfico",
    "Desenvolvimento de Websites",
    "Gestão de Mídias Sociais",
    "Produção de Vídeo e Foto"
  ];
  const projetos = [
    { titulo: "Landing Page Woota", descricao: "Site institucional moderno para apresentação da Woota Studio.", cliente: "Woota Studio", link: "#", destaque: true },
    { titulo: "Campanha Social", descricao: "Gestão de campanha para redes sociais de cliente X.", cliente: "Cliente X", link: "#" }
  ];

  // Adicionar mais dois projetos em destaque
  const projetosDestaque = [
    ...categorias.flatMap(cat => cat.projetos.filter(p => p.destaque)),
    {
      titulo: "E-commerce Fashion",
      descricao: "Loja virtual moderna para marca de moda, com integração de pagamentos e UX otimizada.",
      cliente: "Fashion Brand (em breve)",
      link: "#",
      midias: ["/portfolio/fashion1.jpg"],
      destaque: true
    },
    {
      titulo: "App Delivery Food",
      descricao: "Aplicativo de delivery com painel administrativo e experiência mobile-first.",
      cliente: "Food Express (em breve)",
      link: "#",
      midias: ["/portfolio/food1.jpg"],
      destaque: true
    }
  ].slice(0, 5);

  // Função utilitária para pegar todos os projetos filtrados
  const todosProjetosFiltrados = categoriasFiltradas.flatMap(cat => cat.projetos);
  const projetosParaExibir = mostrarMais ? todosProjetosFiltrados : todosProjetosFiltrados.slice(0, 8);

  return (
    <div className="min-h-screen pb-20">
      <section className="pt-32 pb-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium">Portfólio de Projetos</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-4">
          Nosso <span className="text-gray-400">Portfólio</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Conheça alguns dos projetos que já desenvolvemos, separados por categoria de serviço. Em breve, você poderá filtrar por cliente!
        </p>
      </section>
      {/* Seção de projetos em destaque */}
      <section className="container mx-auto px-6 pt-40 pb-16">
        <div className="flex flex-col gap-4 items-center mb-8">
          <h2 className="text-4xl font-black text-center text-white">Projetos em Destaque</h2>
          <p className="text-gray-300 text-center max-w-2xl">Conheça alguns dos nossos principais cases, desenvolvidos para diferentes segmentos e clientes. Cada projeto é pensado para gerar resultados reais e fortalecer marcas no ambiente digital.</p>
          <DownloadPressKitButton
            empresa={empresa}
            servicos={servicos}
            projetos={projetos}
            depoimentos={depoimentos}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {projetosDestaque.map((proj, idx) => (
            <div key={proj.titulo + idx} className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl shadow-xl flex-1 flex flex-col max-w-md mx-auto overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => setModalProjeto(proj)}>
              {proj.midias && proj.midias[0] && (
                proj.midias[0].endsWith('.mp4') ? (
                  <video src={proj.midias[0]} controls className="w-full h-48 object-cover bg-black" />
                ) : (
                  <img src={proj.midias[0]} alt={proj.titulo} className="w-full h-48 object-cover bg-black" />
                )
              )}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-bold mb-2 text-white">{proj.titulo}</h3>
                <p className="text-gray-200 mb-4 text-sm">{proj.descricao}</p>
                <span className="text-xs text-gray-400 block mb-2">{proj.cliente}</span>
                <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-2 rounded-full text-sm border-2 border-white shadow-md focus:ring-2 focus:ring-white mt-auto">Ver mais</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Filtros */}
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {categoriasNomes.map(cat => (
            <Button
              key={cat}
              variant={categoriaFiltro === cat ? "default" : "outline"}
              className={
                categoriaFiltro === cat
                  ? "bg-white text-black border-white hover:bg-gray-200 font-semibold border-2 shadow-md focus:ring-2 focus:ring-white"
                  : "border-white text-white bg-transparent hover:bg-white/20 hover:text-black font-semibold border-2 transition-colors"
              }
              onClick={() => setCategoriaFiltro(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <select
          className="bg-black/60 border border-white/20 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
          value={clienteFiltro}
          onChange={e => setClienteFiltro(e.target.value)}
        >
          {clientes.map(cliente => (
            <option key={cliente} value={cliente}>{cliente}</option>
          ))}
        </select>
      </div>
      <main className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {projetosParaExibir.map((proj, idx) => (
            <Card key={proj.titulo + idx} className="bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer" onClick={() => setModalProjeto(proj)}>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 text-white">{proj.titulo}</h3>
                <p className="text-gray-300 mb-2 text-sm">{proj.descricao}</p>
                <span className="text-xs text-gray-400 block mb-2">{proj.cliente}</span>
                <span className="text-sm text-gray-200 underline underline-offset-4 hover:text-white transition-colors">Ver detalhes</span>
              </CardContent>
            </Card>
          ))}
        </div>
        {todosProjetosFiltrados.length > 8 && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setMostrarMais(!mostrarMais)}
              className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-2 rounded-full text-sm border-2 border-white shadow-md focus:ring-2 focus:ring-white"
            >
              {mostrarMais ? "Mostrar menos" : "Mostrar mais projetos"}
            </Button>
          </div>
        )}
        {/* Seção de depoimentos */}
        <section className="mt-24 mb-24">
          <h2 className="text-3xl font-bold text-center mb-10 text-white">O que nossos clientes dizem</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {depoimentos.map((dep, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex-1 flex flex-col items-center shadow-lg max-w-md mx-auto">
                {dep.foto ? (
                  <img src={dep.foto} alt={dep.nome} className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-white/20" />
                ) : (
                  <div className="w-16 h-16 rounded-full mb-4 bg-gray-700 flex items-center justify-center text-white text-xl font-bold border-2 border-white/20">
                    {dep.nome[0]}
                  </div>
                )}
                <p className="text-gray-100 italic mb-4 text-center">&ldquo;{dep.comentario}&rdquo;</p>
                <div className="text-white font-semibold">{dep.nome}</div>
                <div className="text-gray-400 text-sm">{dep.cargo}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Modal de detalhes do projeto */}
        {modalProjeto && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-white text-black rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
              <button className="absolute top-2 right-2 text-black text-2xl" onClick={() => setModalProjeto(null)}>&times;</button>
              <h2 className="text-2xl font-bold mb-2">{modalProjeto.titulo}</h2>
              <p className="mb-2">{modalProjeto.descricao}</p>
              <p className="mb-2 text-sm text-gray-600">Cliente: {modalProjeto.cliente}</p>
              <a href={modalProjeto.link} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Ver link do projeto</a>
              {/* Galeria de mídias */}
              {modalProjeto.midias && modalProjeto.midias.length > 0 && (
                <div className="mt-6 flex gap-2 overflow-x-auto">
                  {modalProjeto.midias.map((midia, idx) => (
                    midia.endsWith('.mp4') ? (
                      <video key={idx} src={midia} controls className="w-40 h-28 rounded-lg object-cover bg-black" />
                    ) : (
                      <img key={idx} src={midia} alt={modalProjeto.titulo} className="w-40 h-28 rounded-lg object-cover bg-black" />
                    )
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        {/* Formulário de contato para WhatsApp */}
        <section className="mt-24 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white text-center">Solicite um Orçamento</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="nome">Seu nome</label>
              <input
                id="nome"
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-black/60 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
                autoComplete="name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="projeto">Sobre qual serviço/projeto?</label>
              <input
                id="projeto"
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-black/60 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white"
                value={projeto}
                onChange={e => setProjeto(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1" htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                className="w-full px-4 py-2 rounded-lg bg-black/60 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white"
                rows={4}
                value={mensagem}
                onChange={e => setMensagem(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-500 text-white hover:bg-green-600 font-semibold px-8 py-4 rounded-full text-lg border-2 border-green-500 shadow-md focus:ring-2 focus:ring-green-500 flex items-center justify-center gap-2 disabled:opacity-60"
              disabled={enviando}
            >
              {enviando ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar para WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
            {sucesso && (
              <div className="w-full text-center text-green-400 font-semibold mt-2 animate-fade-in">Mensagem enviada com sucesso! Abrindo WhatsApp...</div>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}

export default PortfolioPage;
