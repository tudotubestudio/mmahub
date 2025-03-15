"use client"

import { useState, useMemo, memo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PlaneTakeoff, TrendingUp, Shield, Clock, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { TradeMilesModal } from "@/components/dashboard/trade-miles-modal"
import dynamic from "next/dynamic"

// Importação dinâmica do modal para reduzir o tamanho inicial do bundle
const DynamicTradeMilesModal = dynamic(
  () => import("@/components/dashboard/trade-miles-modal").then(mod => ({ default: mod.TradeMilesModal })),
  { ssr: false, loading: () => null }
)

// Componente de oferta memoizado para evitar renderizações desnecessárias
const OfferCard = memo(({ 
  offer, 
  onBuyClick 
}: { 
  offer: {
    id: number
    airline: string
    points: number
    price: number
    pricePerThousand: number
    discount: number
    expiration: string
    trending: boolean
  }
  onBuyClick: (airline: string, amount: number) => void
}) => {
  // Determina a cor da barra com base na companhia aérea
  const barColor = useMemo(() => {
    switch (offer.airline) {
      case "LATAM": return "bg-red-500"
      case "Azul": return "bg-blue-500"
      case "GOL": return "bg-orange-500"
      default: return "bg-primary"
    }
  }, [offer.airline])

  return (
    <Card key={offer.id} className="overflow-hidden">
      <div className={`h-2 ${barColor}`} />
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg">{offer.airline}</h3>
            <p className="text-sm text-muted-foreground">{offer.points.toLocaleString()} milhas</p>
          </div>
          {offer.trending && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              <span>Popular</span>
            </Badge>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Preço:</span>
            <span className="font-bold">
              R$ {offer.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm">Milheiro:</span>
            <span className="font-medium">
              R$ {offer.pricePerThousand.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm">Desconto:</span>
            <span className="text-green-600 font-medium">{offer.discount}%</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm">Validade:</span>
            <span className="text-sm">{offer.expiration}</span>
          </div>
        </div>

        <Button 
          className="w-full mt-4"
          onClick={() => onBuyClick(offer.airline, offer.points)}
        >
          <PlaneTakeoff className="mr-2 h-4 w-4" />
          Comprar
        </Button>
      </CardContent>
    </Card>
  )
})

OfferCard.displayName = "OfferCard"

// Componente de informações importantes memoizado
const ImportantInfo = memo(() => (
  <Card>
    <CardHeader>
      <CardTitle>Informações Importantes</CardTitle>
      <CardDescription>Sobre a compra de milhas no MMAHUB</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex gap-3">
        <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        <div>
          <h4 className="font-medium">Prazo de Processamento</h4>
          <p className="text-sm text-muted-foreground">
            As milhas serão creditadas em até 7 dias após a confirmação do pagamento.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Shield className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        <div>
          <h4 className="font-medium">Segurança Garantida</h4>
          <p className="text-sm text-muted-foreground">
            Todas as transações são protegidas e garantidas pelo MMAHUB, com criptografia de ponta a ponta.
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        <div>
          <h4 className="font-medium">Política de Reembolso</h4>
          <p className="text-sm text-muted-foreground">
            Em caso de problemas, oferecemos reembolso total em até 30 dias após a compra.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
))

ImportantInfo.displayName = "ImportantInfo"

export default function OfertasPage() {
  const [buyModalOpen, setBuyModalOpen] = useState(false)
  const [selectedAirline, setSelectedAirline] = useState("")
  const [selectedAmount, setSelectedAmount] = useState(0)

  // Mock data - memoizado para evitar recriação a cada renderização
  const offers = useMemo(() => [
    {
      id: 1,
      airline: "LATAM",
      points: 10000,
      price: 290,
      pricePerThousand: 29,
      discount: 15,
      expiration: "31/12/2025",
      trending: true,
    },
    {
      id: 2,
      airline: "Azul",
      points: 5000,
      price: 140,
      pricePerThousand: 28,
      discount: 10,
      expiration: "31/12/2025",
      trending: false,
    },
    {
      id: 3,
      airline: "GOL",
      points: 7000,
      price: 189,
      pricePerThousand: 27,
      discount: 12,
      expiration: "31/12/2025",
      trending: true,
    },
    {
      id: 4,
      airline: "LATAM",
      points: 20000,
      price: 560,
      pricePerThousand: 28,
      discount: 20,
      expiration: "31/12/2025",
      trending: false,
    },
    {
      id: 5,
      airline: "Azul",
      points: 15000,
      price: 405,
      pricePerThousand: 27,
      discount: 18,
      expiration: "31/12/2025",
      trending: true,
    },
    {
      id: 6,
      airline: "GOL",
      points: 12000,
      price: 324,
      pricePerThousand: 27,
      discount: 15,
      expiration: "31/12/2025",
      trending: false,
    },
    {
      id: 7,
      airline: "LATAM",
      points: 30000,
      price: 810,
      pricePerThousand: 27,
      discount: 22,
      expiration: "31/12/2025",
      trending: true,
    },
    {
      id: 8,
      airline: "Azul",
      points: 25000,
      price: 675,
      pricePerThousand: 27,
      discount: 20,
      expiration: "31/12/2025",
      trending: false,
    },
  ], [])

  // Filtragem memoizada para cada companhia aérea
  const latamOffers = useMemo(() => offers.filter(offer => offer.airline === "LATAM"), [offers])
  const azulOffers = useMemo(() => offers.filter(offer => offer.airline === "Azul"), [offers])
  const golOffers = useMemo(() => offers.filter(offer => offer.airline === "GOL"), [offers])

  const handleBuyClick = (airline: string, amount: number) => {
    setSelectedAirline(airline)
    setSelectedAmount(amount)
    setBuyModalOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Ofertas de Milhas</h1>
        <p className="text-muted-foreground">
          Encontre as melhores ofertas para compra de milhas aéreas com descontos exclusivos.
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="latam">LATAM</TabsTrigger>
          <TabsTrigger value="azul">Azul</TabsTrigger>
          <TabsTrigger value="gol">GOL</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertTitle>Transações Seguras</AlertTitle>
            <AlertDescription>
              Todas as transações são protegidas com criptografia de ponta a ponta, garantindo a segurança dos seus dados.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {offers.map((offer) => (
              <OfferCard 
                key={offer.id} 
                offer={offer} 
                onBuyClick={handleBuyClick} 
              />
            ))}
          </div>

          <ImportantInfo />
        </TabsContent>
        <TabsContent value="latam">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {latamOffers.map((offer) => (
              <OfferCard 
                key={offer.id} 
                offer={offer} 
                onBuyClick={handleBuyClick} 
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="azul">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {azulOffers.map((offer) => (
              <OfferCard 
                key={offer.id} 
                offer={offer} 
                onBuyClick={handleBuyClick} 
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="gol">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {golOffers.map((offer) => (
              <OfferCard 
                key={offer.id} 
                offer={offer} 
                onBuyClick={handleBuyClick} 
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {buyModalOpen && (
        <DynamicTradeMilesModal
          open={buyModalOpen}
          onOpenChange={setBuyModalOpen}
          type="buy"
          airline={selectedAirline}
          initialAmount={selectedAmount}
        />
      )}
    </div>
  )
}

