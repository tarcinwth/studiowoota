import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Share2,
  Check,
  Instagram,
  Twitter,
  Linkedin,
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  Camera,
  MessageCircle,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function SocialService() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <Share2 className="w-4 h-4 text-white" />
              <span className="text-sm font-medium">Gestão de Redes Sociais</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              REDES QUE
              <br />
              <span className="text-gray-100">ENGAJAM</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Gestão estratégica completa das suas redes sociais com conteúdo personalizado que gera engajamento real e
              converte seguidores em clientes fiéis.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg border-2 border-white shadow-md focus:ring-2 focus:ring-white"
              >
                Começar Agora
                <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 rounded-full text-lg border-2 border-white shadow-md focus:ring-2 focus:ring-white"
                asChild
              >
                <Link href="/portfolio">Ver Cases</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              PLATAFORMAS <span className="text-gray-100">PRINCIPAIS</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Dominamos as principais redes sociais para maximizar seu alcance e engajamento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Instagram</h3>
                <p className="text-gray-100 mb-6">Stories, Reels, IGTV e posts que geram conexão e vendas.</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    Stories
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    Reels
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    Shopping
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">LinkedIn</h3>
                <p className="text-gray-100 mb-6">Conteúdo profissional que posiciona sua marca como autoridade.</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    B2B
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    Networking
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    Leads
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Twitter className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Twitter/X</h3>
                <p className="text-gray-100 mb-6">Conversas em tempo real que humanizam sua marca.</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    Threads
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    Trending
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    Engagement
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white font-bold text-lg">TT</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">TikTok</h3>
                <p className="text-gray-100 mb-6">Vídeos virais que alcançam milhões de pessoas.</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    Viral
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    Trends
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white text-xs">
                    Gen Z
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              NOSSOS <span className="text-gray-100">SERVIÇOS</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Soluções completas para transformar suas redes sociais em máquinas de vendas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Planejamento de Conteúdo</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Estratégia completa de conteúdo alinhada com seus objetivos de negócio e calendário editorial
                  personalizado.
                </p>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Calendário editorial mensal</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Estratégia de hashtags</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Análise de concorrentes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Criação de Conteúdo</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Produção de conteúdo visual e textual de alta qualidade que reflete a personalidade da sua marca.
                </p>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Posts e stories criativos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Vídeos e reels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Copywriting persuasivo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Gestão de Comunidade</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Interação ativa com sua audiência, respondendo comentários e mensagens para fortalecer
                  relacionamentos.
                </p>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Resposta a comentários</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Gestão de DMs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Monitoramento 24/7</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Analytics e Relatórios</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Análise detalhada de performance com insights acionáveis para otimizar continuamente sua estratégia.
                </p>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Relatórios mensais</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Métricas de engajamento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">ROI das campanhas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Campanhas Pagas</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Criação e gestão de campanhas publicitárias otimizadas para maximizar conversões e ROI.
                </p>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Facebook e Instagram Ads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">LinkedIn Ads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Otimização contínua</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Influencer Marketing</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Conexão com influenciadores relevantes para amplificar o alcance e credibilidade da sua marca.
                </p>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Seleção de influenciadores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Negociação de parcerias</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Acompanhamento de resultados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              PLANOS DE <span className="text-gray-100">GESTÃO</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Escolha o plano ideal para o crescimento das suas redes sociais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Starter</h3>
                  <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 1.200<span className="text-lg font-normal text-white">/mês</span></div>
                  <p className="text-white">Para pequenos negócios</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">2 redes sociais</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">12 posts por mês</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Stories semanais</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Relatório mensal</span>
                  </li>
                </ul>
                <Button className="w-full bg-white/10 text-white hover:bg-white/20 rounded-full">Começar Agora</Button>
              </CardContent>
            </Card>

            {/* Growth */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-black font-semibold px-4 py-1">Mais Escolhido</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Growth</h3>
                  <div className="text-4xl font-black mb-4 text-white">R$ 2.500<span className="text-lg font-normal text-white">/mês</span></div>
                  <p className="text-white">Para empresas em crescimento</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">4 redes sociais</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">20 posts por mês</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Stories diários</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Reels semanais</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Gestão de comunidade</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full">Escolher Plano</Button>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
                  <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 4.500<span className="text-lg font-normal text-white">/mês</span></div>
                  <p className="text-white">Solução completa</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Redes ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">30+ posts por mês</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Campanhas pagas incluídas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Influencer marketing</span>
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
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              PRONTO PARA <span className="text-gray-100">VIRALIZAR?</span>
            </h2>
            <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
              Transforme suas redes sociais em uma máquina de vendas. Vamos criar uma estratégia que gera resultados
              reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg border-2 border-white shadow-md focus:ring-2 focus:ring-white"
              >
                Começar Agora
                <Zap className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600 font-semibold px-8 py-4 rounded-full text-lg border-2 border-green-500 shadow-md focus:ring-2 focus:ring-green-500"
                onClick={() => window.open('https://wa.me/SEU_NUMERO_AQUI', '_blank')}
              >
                Agendar Consultoria
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
