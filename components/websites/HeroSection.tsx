'use client'

import { Button } from "@/components/client/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium">Desenvolvimento Web</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            WEBSITES QUE
            <br />
            <span className="text-gray-100">CONVERTEM</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Criamos websites modernos, responsivos e otimizados que não apenas impressionam visualmente, mas
            também geram resultados reais para seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg"
              onClick={() => window.open('https://wa.me/SEU_NUMERO_AQUI', '_blank')}
            >
              Solicitar Orçamento
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
  )
} 