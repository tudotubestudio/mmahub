import { ArrowRight, CheckCircle2, CreditCard, Plane, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Como funciona</h2>
          <p className="text-lg text-gray-600">
            Nosso processo é simples e transparente. Veja como você pode começar a negociar suas milhas 
            em apenas alguns passos.
          </p>
        </div>
        
        <div className="relative">
          {/* Linha conectora */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            <Step 
              number={1}
              title="Cadastre-se na plataforma"
              description="Crie sua conta gratuitamente em menos de 2 minutos. Você só precisa de um e-mail válido e seus dados básicos."
              icon={<CheckCircle2 className="h-8 w-8" />}
              isLeft={true}
            />
            
            <Step 
              number={2}
              title="Informe suas milhas"
              description="Selecione o programa de fidelidade e a quantidade de milhas que deseja vender ou comprar."
              icon={<Plane className="h-8 w-8" />}
              isLeft={false}
            />
            
            <Step 
              number={3}
              title="Receba uma proposta"
              description="Nossa equipe analisará sua solicitação e enviará uma proposta com as melhores taxas do mercado."
              icon={<CreditCard className="h-8 w-8" />}
              isLeft={true}
            />
            
            <Step 
              number={4}
              title="Receba seu pagamento"
              description="Após a confirmação da transação, você receberá o pagamento em sua conta bancária em até 48 horas."
              icon={<Wallet className="h-8 w-8" />}
              isLeft={false}
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="px-8 group">
            <span>Comece agora</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLeft: boolean;
}

function Step({ number, title, description, icon, isLeft }: StepProps) {
  return (
    <div className={`md:flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <div className={`bg-white p-6 rounded-xl shadow-md inline-block ${isLeft ? 'md:ml-auto' : ''}`}>
          <h3 className="text-xl font-bold mb-2 flex items-center">
            {!isLeft && <span className="md:hidden mr-2">{icon}</span>}
            {title}
            {isLeft && <span className="md:hidden ml-2">{icon}</span>}
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className="hidden md:flex items-center justify-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center">
          {icon}
        </div>
        <div className="absolute -z-10 w-20 h-20 rounded-full bg-primary/20 animate-pulse"></div>
      </div>
      
      <div className="md:w-1/2"></div>
    </div>
  )
} 