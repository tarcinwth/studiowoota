import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Palette, Share2, Camera, Play, ArrowRight, ArrowDown, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export default function WootaStudioHome() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight">Woota Studio</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#home" className="text-gray-300 hover:text-white transition-colors font-medium">
                Início
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors font-medium">
                Serviços
              </Link>
              <Link href="#work" className="text-gray-300 hover:text-white transition-colors font-medium">
                Trabalhos
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">
                Sobre
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium">
                Contato
              </Link>
            </nav>

            <Button className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-2 rounded-full">
              Começar Projeto
            </Button>
          </div>
        </div>
      </header>

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
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg group"
              >
                Ver Nossos Trabalhos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 backdrop-blur-sm font-semibold px-8 py-4 rounded-full text-lg"
              >
                Iniciar Conversa
              </Button>
            </div>

            {/* Services Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link href="/services/websites" className="group">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-8 h-8 mx-auto mb-3 text-white group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-sm text-white">Websites</h3>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/design" className="group">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <Palette className="w-8 h-8 mx-auto mb-3 text-white group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-sm text-white">Design</h3>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/social" className="group">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <Share2 className="w-8 h-8 mx-auto mb-3 text-white group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-sm text-white">Social</h3>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/media" className="group">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <Camera className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform ml-1" />
                    </div>
                    <h3 className="font-semibold text-sm text-white">Mídia</h3>
                  </CardContent>
                </Card>
              </Link>
            </div>
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
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Criação de Websites</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Desenvolvemos websites modernos, responsivos e otimizados para conversão. Do conceito ao lançamento,
                    criamos experiências digitais que impressionam.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">SEO</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Design */}
            <Link href="/services/design" className="group">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Web Design</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Criamos interfaces únicas e experiências visuais marcantes que conectam emocionalmente com seu
                    público e fortalecem sua marca.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">UI/UX</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Figma</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Branding</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Social Media */}
            <Link href="/services/social" className="group">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Share2 className="w-8 h-8 text-white" />
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Redes Sociais</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Gestão estratégica completa das suas redes sociais com conteúdo personalizado que gera engajamento e
                    converte seguidores em clientes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Instagram</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">TikTok</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">LinkedIn</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Media Editing */}
            <Link href="/services/media" className="group">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="flex">
                        <Camera className="w-6 h-6 text-white mr-1" />
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Edição de Mídia</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Edição profissional de fotos e vídeos que destacam sua marca, produtos e serviços com qualidade
                    cinematográfica.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Photoshop</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">Premiere</span>
                    <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">After Effects</span>
                  </div>
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg"
              >
                Iniciar Projeto
                <Zap className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 backdrop-blur-sm font-semibold px-8 py-4 rounded-full text-lg"
              >
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
