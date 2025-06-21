import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  Play,
  Check,
  ImageIcon,
  Video,
  Edit,
  Palette,
  Award,
  ArrowRight,
  Sparkles,
  Film,
  Music,
} from "lucide-react"
import Link from "next/link"

export default function MediaService() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <div className="flex items-center space-x-1">
                <Camera className="w-4 h-4 text-white" />
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Edição de Fotos e Vídeos</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              MÍDIA QUE
              <br />
              <span className="text-gray-100">IMPRESSIONA</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Edição profissional de fotos e vídeos que destacam sua marca, produtos e serviços com qualidade
              cinematográfica e impacto visual extraordinário.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 rounded-full text-lg border-2 border-white shadow-md focus:ring-2 focus:ring-white"
                asChild
              >
                <Link href="/portfolio">Ver Portfólio<Film className="ml-2 w-5 h-5" /></Link>
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
              Soluções completas de edição para todas as suas necessidades visuais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Edição de Fotos</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Tratamento profissional de imagens com correção de cores, retoque e efeitos que valorizam seus
                  produtos e marca.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Retoque
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Correção
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Efeitos
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Edição de Vídeos</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Montagem e edição de vídeos com cortes precisos, transições suaves e narrativa envolvente.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Montagem
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Transições
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Narrativa
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Color Grading</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Correção e gradação de cores profissional que cria atmosfera única e identidade visual consistente.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    LUTs
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Correção
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Atmosfera
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Motion Graphics</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Animações e gráficos em movimento que adicionam dinamismo e profissionalismo aos seus vídeos.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Animação
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Gráficos
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Títulos
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Áudio Profissional</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Tratamento de áudio, mixagem e masterização para garantir qualidade sonora excepcional.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Mixagem
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Limpeza
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Trilha
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Conteúdo Premium</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Criação de conteúdo visual premium para campanhas especiais, lançamentos e eventos importantes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Campanhas
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Eventos
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    Premium
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
              Nossa metodologia para transformar material bruto em conteúdo excepcional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">Briefing</h3>
              <p className="text-gray-100 text-sm">Entendemos sua visão, objetivos e estilo desejado para o projeto.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">Análise</h3>
              <p className="text-gray-100 text-sm">
                Analisamos o material fornecido e definimos a melhor abordagem criativa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">Edição</h3>
              <p className="text-gray-100 text-sm">
                Aplicamos técnicas avançadas de edição para criar o resultado desejado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">Entrega</h3>
              <p className="text-gray-100 text-sm">
                Entregamos o material finalizado nos formatos e qualidades solicitados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              SOFTWARE <span className="text-gray-100">PROFISSIONAL</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Utilizamos as ferramentas mais avançadas da indústria para resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">Photoshop</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">Lightroom</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Film className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">Premiere Pro</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">After Effects</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">DaVinci Resolve</h3>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Edit className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm text-white">Final Cut</h3>
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
              PREÇOS <span className="text-gray-100">TRANSPARENTES</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">Investimento justo para qualidade profissional</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Photo Editing */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Edição de Fotos</h3>
                  <div className="text-3xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 25<span className="text-lg font-normal text-white">/foto</span></div>
                  <p className="text-white">Tratamento profissional</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Correção de cores</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Retoque básico</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Ajustes de exposição</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Entrega em 24h</span>
                  </li>
                </ul>
                <Button className="w-full bg-white/10 text-white hover:bg-white/20 rounded-full">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>

            {/* Video Editing */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-white text-black font-semibold px-4 py-1">Mais Popular</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Edição de Vídeos</h3>
                  <div className="text-3xl font-black mb-4 text-white">R$ 150<span className="text-lg font-normal text-white">/min</span></div>
                  <p className="text-white">Montagem profissional</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-white">Cortes e montagem</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-white">Color grading</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-white">Trilha sonora</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-white">Títulos e legendas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-white">Entrega em 3-5 dias</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full">Escolher Plano</Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Pacote Premium</h3>
                  <div className="text-3xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 2.500<span className="text-lg font-normal text-white">/projeto</span></div>
                  <p className="text-white">Solução completa</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Edição completa</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Motion graphics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Áudio profissional</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Revisões ilimitadas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white">Suporte dedicado</span>
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
              PRONTO PARA <span className="text-gray-100">IMPRESSIONAR?</span>
            </h2>
            <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
              Transforme seu material bruto em conteúdo visual excepcional. Vamos criar algo que realmente impressiona e
              gera resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg"
              >
                Enviar Material
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
    </div>
  )
}
