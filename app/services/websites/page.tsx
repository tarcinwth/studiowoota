'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  ArrowLeft,
  Check,
  Zap,
  Shield,
  Search,
  BarChart3,
  Code,
  Users,
  ArrowRight,
  Smartphone,
} from "lucide-react"
import Link from "next/link"

export default function WebsitesService() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">W</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Woota Studio</span>
            </Link>

            <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-sm font-medium">Criação de Websites</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              WEBSITES QUE
              <br />
              <span className="text-gray-100">CONVERTEM</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Desenvolvemos websites modernos, responsivos e otimizados que não apenas impressionam visualmente, mas
              também geram resultados reais para seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg"
                onClick={() => window.open('https://wa.me/SEU_NUMERO_AQUI', '_blank')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 rounded-full text-lg border-2 border-white shadow-md focus:ring-2 focus:ring-white"
                asChild
              >
                <Link href="/portfolio">Ver Exemplos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">100% Responsivo</h3>
                <p className="text-gray-100 leading-relaxed">
                  Websites que funcionam perfeitamente em todos os dispositivos, desde smartphones até desktops.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Performance Otimizada</h3>
                <p className="text-gray-100 leading-relaxed">
                  Carregamento ultra-rápido com otimizações avançadas para melhor experiência do usuário.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">SEO Avançado</h3>
                <p className="text-gray-100 leading-relaxed">
                  Otimização completa para mecanismos de busca, garantindo maior visibilidade online.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Segurança Máxima</h3>
                <p className="text-gray-100 leading-relaxed">
                  Implementação de protocolos de segurança avançados para proteger seus dados e usuários.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Analytics Integrado</h3>
                <p className="text-gray-100 leading-relaxed">
                  Acompanhe o desempenho do seu site com relatórios detalhados e insights valiosos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Suporte Contínuo</h3>
                <p className="text-gray-100 leading-relaxed">
                  Suporte técnico especializado e atualizações regulares para manter seu site sempre atual.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              NOSSO <span className="text-gray-100">PROCESSO</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Um processo estruturado que garante resultados excepcionais em cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Descoberta</h3>
              <p className="text-gray-100">
                Entendemos seu negócio, objetivos e público-alvo para criar a estratégia perfeita.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Planejamento</h3>
              <p className="text-gray-100">
                Criamos wireframes, arquitetura da informação e definimos a experiência do usuário.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Desenvolvimento</h3>
              <p className="text-gray-100">
                Codificamos seu website com as melhores práticas e tecnologias mais modernas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Lançamento</h3>
              <p className="text-gray-100">Testamos, otimizamos e lançamos seu website com suporte completo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              TECNOLOGIAS <span className="text-gray-100">MODERNAS</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Utilizamos as tecnologias mais avançadas do mercado para criar websites excepcionais
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "MongoDB"].map((tech) => (
              <Card key={tech} className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-2xl group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">{tech}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              PLANOS E <span className="text-gray-100">PREÇOS</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">Escolha o plano ideal para seu projeto</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Básico</h3>
                  <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 2.500</div>
                  <p className="text-white">Ideal para pequenos negócios</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Até 5 páginas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Design responsivo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">SEO básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Formulário de contato</span>
                  </li>
                </ul>
                <Button className="w-full bg-white/10 text-white hover:bg-white/20 rounded-full">Escolher Plano</Button>
              </CardContent>
            </Card>

            {/* Professional */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-500 rounded-3xl group relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-black font-semibold px-4 py-1">Mais Popular</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Profissional</h3>
                  <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 5.000</div>
                  <p className="text-white">Para empresas em crescimento</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Até 15 páginas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Design personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">SEO avançado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Integração com CMS</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Analytics integrado</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full">Escolher Plano</Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
                  <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 10.000+</div>
                  <p className="text-white">Soluções corporativas</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Páginas ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Funcionalidades customizadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Integrações avançadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Suporte prioritário</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Consultoria estratégica</span>
                  </li>
                </ul>
                <Button className="w-full bg-white/10 text-white hover:bg-white/20 rounded-full">
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              PRONTO PARA <span className="text-gray-100">COMEÇAR?</span>
            </h2>
            <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
              Vamos criar um website incrível que vai transformar seu negócio. Entre em contato e receba uma proposta
              personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg"
                onClick={() => window.open('https://wa.me/SEU_NUMERO_AQUI', '_blank')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600 font-semibold px-8 py-4 rounded-full text-lg border-2 border-green-500 shadow-md focus:ring-2 focus:ring-green-500"
                onClick={() => window.open('https://wa.me/SEU_NUMERO_AQUI', '_blank')}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
                <span className="text-2xl font-bold">Woota Studio</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Criamos experiências digitais únicas que transformam negócios e conectam marcas com seus públicos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/services/websites" className="hover:text-white transition-colors">
                    Websites
                  </Link>
                </li>
                <li>
                  <Link href="/services/design" className="hover:text-white transition-colors">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/social" className="hover:text-white transition-colors">
                    Redes Sociais
                  </Link>
                </li>
                <li>
                  <Link href="/services/media" className="hover:text-white transition-colors">
                    Edição de Mídia
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-gray-400">
                <li>contato@wootastudio.com</li>
                <li>+55 (11) 99999-9999</li>
                <li>São Paulo, Brasil</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Woota Studio. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
