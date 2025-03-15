import { BenefitCard } from "@/components/home/benefit-card"

export function BenefitsSection() {
  return (
    <section className="container mx-auto py-20 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Por que escolher o MMAHUB?
        </h2>
        <p className="text-lg text-gray-600">
          Nossa plataforma oferece a melhor experiência para compra e venda de milhas aéreas, 
          com segurança, rapidez e as melhores taxas do mercado.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BenefitCard
          icon="Wallet"
          title="Converta Milhas em Dinheiro"
          description="Transforme suas milhas não utilizadas em dinheiro real na sua conta em até 48 horas."
        />
        <BenefitCard
          icon="TrendingUp"
          title="Melhores Taxas do Mercado"
          description="Oferecemos as taxas mais competitivas para compra e venda de milhas aéreas."
        />
        <BenefitCard
          icon="Shield"
          title="100% Seguro"
          description="Transações protegidas e garantidas. Sua segurança é nossa prioridade."
        />
        <BenefitCard
          icon="Clock"
          title="Rapidez nas Transações"
          description="Processo simplificado para que você receba seu dinheiro ou milhas rapidamente."
        />
        <BenefitCard
          icon="Award"
          title="Programa de Fidelidade"
          description="Ganhe bônus exclusivos a cada transação realizada na plataforma."
        />
        <BenefitCard
          icon="Users"
          title="Comunidade Ativa"
          description="Faça parte de uma comunidade de viajantes e troque experiências."
        />
      </div>
      
      {/* Badges de credibilidade */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="bg-green-50 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Transações Seguras</p>
            <p className="text-sm text-gray-500">SSL Certificado</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="bg-blue-50 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Proteção de Dados</p>
            <p className="text-sm text-gray-500">LGPD Compliant</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="bg-yellow-50 p-2 rounded-full mr-3">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-medium">Suporte 24/7</p>
            <p className="text-sm text-gray-500">Sempre disponível</p>
          </div>
        </div>
      </div>
    </section>
  )
} 