'use client'

import { Button } from "@/components/client/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            PLANOS DE <span className="text-gray-100">GESTÃO</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Escolha o plano ideal para o crescimento das suas redes sociais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Starter</h3>
                <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 1.200<span className="text-lg font-normal text-white">/mês</span></div>
                <p className="text-white">Para pequenos negócios</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">2 redes sociais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">12 posts por mês</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Stories semanais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Relatório mensal</span>
                </li>
              </ul>
              <Button className="w-full bg-white/10 text-white hover:bg-white/20 rounded-full">Começar Agora</Button>
            </CardContent>
          </Card>

          {/* Growth */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-white text-black font-semibold px-4 py-1">Mais Escolhido</Badge>
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Growth</h3>
                <div className="text-4xl font-black mb-4 text-white">R$ 2.500<span className="text-lg font-normal text-white">/mês</span></div>
                <p className="text-white">Para empresas em crescimento</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">4 redes sociais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">20 posts por mês</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Stories diários</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Reels semanais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Gestão de comunidade</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full">Escolher Plano</Button>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl group">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
                <div className="text-4xl font-black mb-4 text-white group-hover:scale-110 transition-transform duration-300">R$ 4.500<span className="text-lg font-normal text-white">/mês</span></div>
                <p className="text-white">Solução completa</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Redes ilimitadas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">30+ posts por mês</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Campanhas pagas incluídas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white">Influencer marketing</span>
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