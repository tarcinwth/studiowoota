import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Instagram,
  Twitter,
  Linkedin,
  Calendar,
  Camera,
  MessageCircle,
  Target,
  BarChart3,
  Users,
  Check,
} from "lucide-react"
import HeroSection from "@/components/social/HeroSection"
import PricingSection from "@/components/social/PricingSection"
import CtaSection from "@/components/social/CtaSection"

export default function SocialService() {
  return (
    <div className="min-h-screen">
      <HeroSection />

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
                    <span className="text-white">Gestão de mensagens</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Moderação de conteúdo</span>
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
                  Análise detalhada de performance com insights valiosos para otimizar sua estratégia.
                </p>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Relatórios mensais</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Análise de engajamento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Métricas de conversão</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Publicidade Paga</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Campanhas publicitárias estratégicas que maximizam seu ROI e alcançam o público certo.
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

      <PricingSection />
      <CtaSection />
    </div>
  )
}
