'use client'

import { Button } from "@/components/client/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="py-20 px-6 bg-white/[0.02]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            INVESTIMENTO EM <span className="text-gray-100">MÍDIA</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Planos flexíveis para diferentes necessidades e orçamentos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Foto Essencial */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Foto Essencial</h3>
                <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 500</div>
                <p className="text-white">Para edições rápidas</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Edição de até 20 fotos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Correção de cor e luz</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">1 revisão incluída</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Entrega em 3 dias</span>
                </li>
              </ul>
              <Button className="w-full bg-white/10 text-white hover:bg-white/20 rounded-full">Escolher Plano</Button>
            </CardContent>
          </Card>

          {/* Vídeo Profissional */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-500 rounded-3xl group relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-white text-black font-semibold px-4 py-1">Recomendado</Badge>
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Vídeo Pro</h3>
                <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 1.200</div>
                <p className="text-white">Solução completa para vídeos</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Edição de vídeo até 5 min</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Color grading básico</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Trilha sonora e áudio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">3 revisões incluídas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Entrega em 7 dias</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full">Escolher Plano</Button>
            </CardContent>
          </Card>

          {/* Produção Completa */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Produção Completa</h3>
                <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 3.000+</div>
                <p className="text-white">Projeto customizado</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Edição de fotos ilimitadas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Edição de vídeo avançada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Motion graphics e VFX</span>
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
                Falar com Produtor
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 