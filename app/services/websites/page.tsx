import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  Zap,
  Search,
  Shield,
  BarChart3,
  Users,
  Code,
} from "lucide-react"
import HeroSection from "@/components/websites/HeroSection"
import PricingSection from "@/components/websites/PricingSection"
import CtaSection from "@/components/websites/CtaSection"

export default function WebsitesService() {
  return (
    <div className="min-h-screen">
      <HeroSection />

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

      <PricingSection />
      <CtaSection />
    </div>
  )
}
