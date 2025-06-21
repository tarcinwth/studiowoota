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
            PLANOS E <span className="text-gray-100">PREÇOS</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">Escolha o plano ideal para seu projeto</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Básico</h3>
                <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 2.500</div>
                <p className="text-white">Ideal para pequenos negócios</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Até 5 páginas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Design responsivo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">SEO básico</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Formulário de contato</span>
                </li>
              </ul>
              <Button className="w-full bg-white/10 text-white hover:bg-white/20 rounded-full">Escolher Plano</Button>
            </CardContent>
          </Card>

          {/* Professional */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-500 rounded-3xl group relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-white text-black font-semibold px-4 py-1">Mais Popular</Badge>
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Profissional</h3>
                <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 5.000</div>
                <p className="text-white">Para empresas em crescimento</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Até 15 páginas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Design personalizado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">SEO avançado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Integração com CMS</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Analytics integrado</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full">Escolher Plano</Button>
            </CardContent>
          </Card>

          {/* Enterprise */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
                <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 10.000+</div>
                <p className="text-white">Soluções corporativas</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Páginas ilimitadas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Funcionalidades customizadas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Integrações avançadas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Suporte prioritário</span>
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
  )
} 