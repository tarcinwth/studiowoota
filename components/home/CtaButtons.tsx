'use client'

import { Button } from "@/components/client/button"
import { Zap } from "lucide-react"
import Link from "next/link"

export default function CtaButtons() {
  const handleWhatsAppClick = () => {
    // Substitua pelo seu número de telefone com código do país, sem o '+' ou espaços
    const phoneNumber = "5511999999999"; 
    const message = "Olá! Tenho interesse nos serviços da Woota Studio.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <Button
        size="lg"
        className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg"
        onClick={handleWhatsAppClick}
      >
        Iniciar Projeto
        <Zap className="ml-2 w-5 h-5" />
      </Button>
      <Link href="/portfolio" passHref legacyBehavior>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-4 rounded-full text-lg border-2 border-white shadow-md focus:ring-2 focus:ring-white"
        >
          Ver Portfólio
        </Button>
      </Link>
    </div>
  )
} 