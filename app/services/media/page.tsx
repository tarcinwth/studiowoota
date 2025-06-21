import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ImageIcon,
  Video,
  Palette,
  Award,
  Sparkles,
  Music,
} from "lucide-react"
import HeroSection from "@/components/media/HeroSection"
import PricingSection from "@/components/media/PricingSection"

export default function MediaService() {
  return (
    <div className="min-h-screen">
      <HeroSection />

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
                Executamos a edição seguindo o planejamento, com foco em qualidade e detalhes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">Entrega</h3>
              <p className="text-gray-100 text-sm">
                Entregamos o material finalizado e revisado, pronto para ser publicado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              TRANSFORME SUA <span className="text-gray-100">VISÃO</span>
            </h2>
            <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
              Vamos dar vida às suas ideias com edições de fotos e vídeos que capturam a essência da sua mensagem e
              impressionam seu público.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
