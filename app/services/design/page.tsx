import { Button } from "@/components/client/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  Check,
  Eye,
  Layers,
  Figma,
  Smartphone,
  Monitor,
  ArrowRight,
  Sparkles,
  Target,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function DesignService() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <Palette className="w-4 h-4 text-white" />
              <span className="text-sm font-medium">Web Design</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              DESIGN QUE
              <br />
              <span className="text-gray-100">CONECTA</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Criamos interfaces únicas e experiências visuais marcantes que conectam emocionalmente com seu público e
              fortalecem sua identidade de marca.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 rounded-full text-lg border-2 border-white shadow-md focus:ring-2 focus:ring-white"
                asChild
              >
                <Link href="/portfolio">Ver Portfólio<Eye className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-green-600 font-semibold px-8 py-4 rounded-full text-lg border-2 border-green-500 shadow-md focus:ring-2 focus:ring-green-500"
                onClick={() => window.open('https://wa.me/SEU_NUMERO_AQUI', '_blank')}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              NOSSOS <span className="text-gray-100">SERVIÇOS</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Soluções completas de design para todas as suas necessidades digitais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">UI/UX Design</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Interfaces intuitivas e experiências de usuário excepcionais que convertem visitantes em clientes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Wireframes
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Protótipos
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    User Journey
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Design Mobile</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Designs otimizados para dispositivos móveis com foco na usabilidade e performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Mobile First
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Touch UI
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Gestures
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Branding Digital</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Identidade visual consistente que fortalece sua marca em todos os pontos de contato digitais.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Logo
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Paleta
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Tipografia
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Design System</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Sistemas de design escaláveis que garantem consistência em todos os produtos digitais.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Components
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Tokens
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Guidelines
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Landing Pages</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Páginas de conversão otimizadas que transformam visitantes em leads qualificados.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    CRO
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    A/B Test
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Analytics
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Consultoria UX</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Análise e otimização da experiência do usuário para maximizar conversões e satisfação.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Research
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Testing
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Insights
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              PROCESSO <span className="text-gray-100">CRIATIVO</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Nossa metodologia comprovada para criar designs que geram resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">Research</h3>
              <p className="text-gray-100 text-sm">Pesquisa profunda sobre seu mercado, concorrentes e público-alvo.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">Estratégia</h3>
              <p className="text-gray-100 text-sm">Definição da estratégia visual e experiência do usuário.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">Conceito</h3>
              <p className="text-gray-100 text-sm">Criação de wireframes e conceitos visuais iniciais.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">Design</h3>
              <p className="text-gray-100 text-sm">Desenvolvimento do design final com todos os detalhes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">5</span>
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">Entrega</h3>
              <p className="text-gray-100 text-sm">Entrega dos arquivos finais e documentação completa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              FERRAMENTAS <span className="text-gray-100">PROFISSIONAIS</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Utilizamos as melhores ferramentas do mercado para criar designs excepcionais
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Figma className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">Figma</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">Adobe XD</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">Sketch</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">Photoshop</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">Illustrator</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">After Effects</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              INVESTIMENTO EM <span className="text-gray-100">DESIGN</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Planos flexíveis para diferentes necessidades e orçamentos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Essencial */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Essencial</h3>
                  <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 1.500</div>
                  <p className="text-white">Para projetos simples</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Design de até 3 telas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Versão mobile e desktop</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">2 revisões incluídas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Entrega em 7 dias</span>
                  </li>
                </ul>
                <Button className="w-full bg-white/10 text-white hover:bg-white/20 rounded-full">Escolher Plano</Button>
              </CardContent>
            </Card>

            {/* Profissional */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-500 rounded-3xl group relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-black font-semibold px-4 py-1">Recomendado</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Profissional</h3>
                  <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 3.500</div>
                  <p className="text-white">Solução completa</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Design de até 10 telas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Protótipo interativo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Design system básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">5 revisões incluídas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Entrega em 14 dias</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full">Escolher Plano</Button>
              </CardContent>
            </Card>

            {/* Premium */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Premium</h3>
                  <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 7.000+</div>
                  <p className="text-white">Projeto customizado</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Telas ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Design system completo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Branding incluído</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Revisões ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Suporte pós-entrega</span>
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
              VAMOS CRIAR <span className="text-gray-100">JUNTOS?</span>
            </h2>
            <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
              Transforme sua visão em um design excepcional que conecta, converte e fortalece sua marca no mercado
              digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg"
              >
                Iniciar Projeto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 rounded-full text-lg border-2 border-white shadow-md focus:ring-2 focus:ring-white"
              >
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
