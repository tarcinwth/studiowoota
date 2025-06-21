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
  )
} 