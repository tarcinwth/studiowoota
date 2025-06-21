'use client'

import { Button } from "@/components/client/button"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/logo-completa.png" 
              alt="Logo Woota Studio" 
              width={160} 
              height={64}
              className="h-16 w-auto"
              style={{ filter: 'drop-shadow(0 0 16px white)' }} 
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/#home" className="text-gray-300 hover:text-white transition-colors font-medium">
              Início
            </Link>
            <Link href="/#services" className="text-gray-300 hover:text-white transition-colors font-medium">
              Serviços
            </Link>
            <Link href="/#work" className="text-gray-300 hover:text-white transition-colors font-medium">
              Trabalhos
            </Link>
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors font-medium">
              Sobre
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors font-medium">
              Contato
            </Link>
          </nav>

          <Button className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-2 rounded-full">
            Começar Projeto
          </Button>
        </div>
      </div>
    </header>
  )
} 