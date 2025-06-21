import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="/logo-texto.png" 
                alt="Logo Woota Studio"
                width={200}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 max-w-md">
              Criamos experiências digitais únicas que transformam negócios e conectam marcas com seus públicos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/services/websites" className="hover:text-white transition-colors">
                  Websites
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="hover:text-white transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/social" className="hover:text-white transition-colors">
                  Redes Sociais
                </Link>
              </li>
              <li>
                <Link href="/services/media" className="hover:text-white transition-colors">
                  Edição de Mídia
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Woota Studio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 