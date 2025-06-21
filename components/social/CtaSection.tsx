'use client'

import { Button } from "@/components/client/button"
import { Zap } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-32 px-6 bg-white/[0.02]">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            PRONTO PARA <span className="text-gray-100">VIRALIZAR?</span>
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Transforme suas redes sociais em uma máquina de vendas. Vamos criar uma estratégia que gera resultados
            reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg border-2 border-white shadow-md focus:ring-2 focus:ring-white"
            >
              Começar Agora
              <Zap className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="bg-green-500 text-white hover:bg-green-600 font-semibold px-8 py-4 rounded-full text-lg border-2 border-green-500 shadow-md focus:ring-2 focus:ring-green-500"
              onClick={() => window.open('https://wa.me/SEU_NUMERO_AQUI', '_blank')}
            >
              Agendar Consultoria
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 