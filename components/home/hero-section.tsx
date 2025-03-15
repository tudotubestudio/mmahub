import { Button } from "@/components/ui/button"
import { BadgeCheck, Star, TrendingUp, Users } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark pt-16 pb-32">
      {/* Padrão de fundo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Imagem de fundo cobrindo toda a seção */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.jpg"
          alt="Pessoas viajando com milhas"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4">
                <BadgeCheck className="h-4 w-4 mr-2" />
                Plataforma certificada e segura
              </div>
              
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Multiplique suas</span>
                <span className="block text-primary-foreground">milhas aéreas</span>
              </h1>
              
              <p className="mt-3 text-base text-white/90 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Compre ou venda milhas aéreas com as melhores taxas do mercado. Plataforma 100% segura e com pagamento
                em até 48 horas.
              </p>
              
              <div className="mt-10 sm:mt-12">
                <div className="sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button size="lg" className="w-full font-medium">
                      Vender Milhas
                    </Button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button size="lg" variant="outline" className="w-full bg-white text-primary hover:bg-white/90 font-medium">
                      Comprar Milhas
                    </Button>
                  </div>
                </div>
                
                {/* Estatísticas e social proof */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-white">5.000+</p>
                    <p className="text-sm text-white/80">Usuários ativos</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-white">R$5M+</p>
                    <p className="text-sm text-white/80">Em transações</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-white">4.9/5</p>
                    <p className="text-sm text-white/80">Avaliação média</p>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://randomuser.me/api/portraits/men/41.jpg"
                      alt="Usuário 1"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://randomuser.me/api/portraits/men/42.jpg"
                      alt="Usuário 2"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://randomuser.me/api/portraits/men/43.jpg"
                      alt="Usuário 3"
                    />
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src="https://randomuser.me/api/portraits/men/44.jpg"
                      alt="Usuário 4"
                    />
                  </div>
                  <p className="text-sm font-medium text-white">Mais de 5.000 usuários confiam em nós</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card flutuante na direita (visível apenas em desktop) */}
          <div className="hidden lg:flex lg:items-center">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold">Melhores taxas do mercado</h3>
                  <p className="text-sm text-gray-500">Atualizado hoje</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Smiles</span>
                  <span className="text-green-600 font-bold">R$ 18,50 / 1000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Latam Pass</span>
                  <span className="text-green-600 font-bold">R$ 19,20 / 1000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Azul Fidelidade</span>
                  <span className="text-green-600 font-bold">R$ 17,80 / 1000</span>
                </div>
              </div>
              
              <Button className="w-full mt-6">Ver todas as taxas</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

