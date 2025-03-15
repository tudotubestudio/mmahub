import { Button } from "@/components/ui/button"
import { LoginForm } from "@/components/auth/login-form"
import { ArrowRight, CheckCircle } from "lucide-react"

export function AuthSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-2">Acesse sua Conta</h3>
              <p className="text-gray-500 mb-6">Entre para gerenciar suas transações e acompanhar seus ganhos.</p>
              <LoginForm />
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-primary to-blue-700 p-8 md:p-12 text-white flex items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-4">
                  Comece agora mesmo
                </div>
                <h3 className="text-3xl font-bold mb-4">Novo no MMAHUB?</h3>
                <p className="mb-8 text-white/90">
                  Crie sua conta agora e comece a negociar suas milhas com as melhores taxas do mercado.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-white/90 mt-0.5" />
                    <p>Cadastro rápido e simplificado</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-white/90 mt-0.5" />
                    <p>Receba pagamentos em até 48 horas</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-white/90 mt-0.5" />
                    <p>Suporte personalizado para suas dúvidas</p>
                  </div>
                </div>
                
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary group">
                  <span>Criar Conta</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 