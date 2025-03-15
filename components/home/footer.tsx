import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Seção superior com newsletter */}
        <div className="bg-primary/20 backdrop-blur-sm rounded-xl p-8 mb-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Fique por dentro das novidades</h3>
              <p className="text-white/80">
                Receba atualizações sobre as melhores taxas e promoções exclusivas.
              </p>
            </div>
            <div className="flex-1 max-w-md">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="flex-1 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-r-lg transition-colors">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Links e informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-primary font-bold text-2xl">MMA</span>
              <span className="font-semibold text-xl">HUB</span>
            </div>
            <p className="text-gray-400 mb-6">
              Multiplica Milhas Aéreas HUB - A plataforma mais segura e confiável para compra e venda de milhas aéreas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Política de Reembolso
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-400">contato@mmahub.com.br</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-400">(11) 9999-9999</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-400">
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo - SP, 01310-100
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Métodos de pagamento */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <h4 className="text-center text-sm font-medium mb-4">Métodos de pagamento aceitos</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {['Visa', 'Mastercard', 'American Express', 'PayPal', 'Pix', 'Boleto'].map((method) => (
              <div key={method} className="bg-white/5 px-4 py-2 rounded text-xs text-gray-400">
                {method}
              </div>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} MMAHUB. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 