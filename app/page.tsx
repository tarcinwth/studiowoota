import { Card, CardContent } from "@/components/ui/card"
import { Globe, Palette, Share2, Camera, ArrowRight, ArrowDown, Sparkles } from "lucide-react"
import Link from "next/link"
import CtaButtons from "@/components/home/CtaButtons"

export default function WootaStudioHome() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-white rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-bounce delay-300 opacity-50"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Headline */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-gray-300">Experiências Digitais Premium</span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-6">
                <span className="block">CRIAMOS</span>
                <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                  EXPERIÊNCIAS
                </span>
                <span className="block text-4xl md:text-6xl lg:text-7xl font-light text-gray-400 mt-4">
                  que transformam negócios
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Somos especialistas em criar soluções digitais únicas que elevam marcas e geram resultados extraordinários
              através de design inovador e tecnologia de ponta.
            </p>

            {/* CTA Buttons */}
            <CtaButtons />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              NOSSOS <span className="text-gray-400">SERVIÇOS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluções completas para elevar sua presença digital ao próximo nível
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Websites */}
            <Link href="/services/websites" className="group">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Websites</h3>
                      <p className="text-gray-400">Modernos e Responsivos</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Desenvolvemos websites de alta performance, focados em experiência de usuário e otimizados para
                    conversão.
                  </p>
                  <span className="font-semibold text-white flex items-center">
                    Saber Mais <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* Web Design */}
            <Link href="/services/design" className="group">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Web Design</h3>
                      <p className="text-gray-400">UI/UX e Identidade Visual</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Criamos interfaces intuitivas e esteticamente atraentes que fortalecem a identidade da sua marca e
                    encantam seus clientes.
                  </p>
                  <span className="font-semibold text-white flex items-center">
                    Saber Mais <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* Redes Sociais */}
            <Link href="/services/social" className="group">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                      <Share2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Redes Sociais</h3>
                      <p className="text-gray-400">Gerenciamento e Conteúdo</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Gerenciamos suas redes sociais, criando conteúdo relevante que engaja seu público e aumenta sua
                    visibilidade online.
                  </p>
                  <span className="font-semibold text-white flex items-center">
                    Saber Mais <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* Edição de Mídia */}
            <Link href="/services/media" className="group">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Edição de Mídia</h3>
                      <p className="text-gray-400">Fotos e Vídeos</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Edição profissional de fotos e vídeos para campanhas, redes sociais e materiais de marketing.
                  </p>
                  <span className="font-semibold text-white flex items-center">
                    Saber Mais <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2">100+</div>
              <div className="text-gray-400 font-medium">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2">50+</div>
              <div className="text-gray-400 font-medium">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2">5+</div>
              <div className="text-gray-400 font-medium">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-2">24/7</div>
              <div className="text-gray-400 font-medium">Suporte Dedicado</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              PRONTO PARA <span className="text-gray-400">TRANSFORMAR</span>
              <br />
              SEU NEGÓCIO?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Vamos criar algo extraordinário juntos. Entre em contato e descubra como podemos elevar sua marca ao
              próximo nível.
            </p>
            <CtaButtons />
          </div>
        </div>
      </section>
    </div>
  )
}
