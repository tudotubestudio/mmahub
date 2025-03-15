"use client"

import { useState, useMemo, memo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PlaneTakeoff, Plus, RefreshCw, TrendingDown, Shield, Clock } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"

// Importação dinâmica do modal para reduzir o tamanho inicial do bundle
const DynamicTradeMilesModal = dynamic(
  () => import("@/components/dashboard/trade-miles-modal").then(mod => ({ default: mod.TradeMilesModal })),
  { ssr: false, loading: () => null }
)

// Componente memoizado para o resumo de milhas
const MilesSummary = memo(({ 
  airlines, 
  total, 
  onSellClick,
  onBuyClick
}: { 
  airlines: Array<{
    name: string
    points: number
    color: string
    expiring: number
    expirationDate: string | null
  }>
  total: number
  onSellClick: (airline: string, amount: number) => void
  onBuyClick: (airline: string) => void
}) => (
  <Card className="col-span-1 md:col-span-3">
    <CardHeader className="pb-3">
      <CardTitle>Resumo de Milhas</CardTitle>
      <CardDescription>Total de milhas disponíveis: {total.toLocaleString()}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {airlines.map((airline) => (
          <div key={airline.name} className="space-y-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${airline.color}`}></div>
                <span className="font-medium">{airline.name}</span>
              </div>
              <span>{airline.points.toLocaleString()} milhas</span>
            </div>
            <Progress value={(airline.points / total) * 100} className={airline.color} />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>
                {airline.expiring > 0 && `${airline.expiring.toLocaleString()} milhas expiram em ${airline.expirationDate}`}
              </span>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 px-2 text-xs"
                  onClick={() => onBuyClick(airline.name)}
                >
                  <Plus className="mr-1 h-3 w-3" />
                  Comprar
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 px-2 text-xs"
                  onClick={() => onSellClick(airline.name, airline.points)}
                >
                  <TrendingDown className="mr-1 h-3 w-3" />
                  Vender
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
))

MilesSummary.displayName = "MilesSummary"

// Componente memoizado para o card de companhia aérea
const AirlineCard = memo(({ 
  airline, 
  onSellClick,
  onBuyClick
}: { 
  airline: {
    name: string
    points: number
    color: string
    expiring: number
    expirationDate: string | null
  }
  onSellClick: (airline: string, amount: number) => void
  onBuyClick: (airline: string) => void
}) => (
  <Card key={airline.name} className="overflow-hidden">
    <div className={`h-2 ${airline.color}`} />
    <CardHeader className="pb-2">
      <CardTitle>{airline.name}</CardTitle>
      <CardDescription>{airline.points.toLocaleString()} milhas disponíveis</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">Valor estimado:</span>
          <span className="font-bold">
            R$ {((airline.points / 1000) * 22).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </div>
        {airline.expiring > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-sm">Expirando:</span>
            <span className="text-amber-600 font-medium">
              {airline.expiring.toLocaleString()} em {airline.expirationDate}
            </span>
          </div>
        )}
        <div className="flex justify-between items-center">
          <span className="text-sm">Milheiro (venda):</span>
          <span className="text-sm">R$ 22,00</span>
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex justify-between pt-0">
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => onBuyClick(airline.name)}
      >
        <Plus className="mr-1 h-4 w-4" />
        Comprar
      </Button>
      <Button 
        variant="default" 
        size="sm"
        onClick={() => onSellClick(airline.name, airline.points)}
      >
        <TrendingDown className="mr-1 h-4 w-4" />
        Vender
      </Button>
    </CardFooter>
  </Card>
))

AirlineCard.displayName = "AirlineCard"

// Componente memoizado para o histórico de transações
const TransactionHistory = memo(({ 
  transactions 
}: { 
  transactions: Array<{
    id: number
    airline: string
    points: number
    type: string
    date: string
    description: string
  }>
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Histórico de Transações</CardTitle>
      <CardDescription>Últimas transações de milhas</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex justify-between items-center border-b pb-3">
            <div>
              <div className="font-medium">{transaction.airline}</div>
              <div className="text-sm text-muted-foreground">{transaction.description}</div>
              <div className="text-xs text-muted-foreground">{transaction.date}</div>
            </div>
            <div className={`font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
              {transaction.type === "credit" ? "+" : "-"}
              {transaction.points.toLocaleString()} milhas
            </div>
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full">
        <RefreshCw className="mr-2 h-4 w-4" />
        Ver Histórico Completo
      </Button>
    </CardFooter>
  </Card>
))

TransactionHistory.displayName = "TransactionHistory"

// Componente memoizado para informações importantes
const ImportantInfo = memo(() => (
  <Card>
    <CardHeader>
      <CardTitle>Informações Importantes</CardTitle>
      <CardDescription>Sobre a venda de milhas no MMAHUB</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex gap-3">
        <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        <div>
          <h4 className="font-medium">Prazo de Processamento</h4>
          <p className="text-sm text-muted-foreground">
            O valor da venda de suas milhas será creditado em até 7 dias após a confirmação da transação.
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
    </CardContent>
  </Card>
))

ImportantInfo.displayName = "ImportantInfo"

export default function MinhasMilhasPage() {
  const [sellModalOpen, setSellModalOpen] = useState(false)
  const [buyModalOpen, setBuyModalOpen] = useState(false)
  const [selectedAirline, setSelectedAirline] = useState("")
  const [selectedAmount, setSelectedAmount] = useState(0)
  const router = useRouter()

  // Mock data - memoizado para evitar recriação a cada renderização
  const milesData = useMemo(() => ({
    total: 125000,
    airlines: [
      {
        name: "LATAM",
        points: 75000,
        color: "bg-red-500",
        expiring: 15000,
        expirationDate: "30/06/2025",
      },
      {
        name: "Azul",
        points: 30000,
        color: "bg-blue-500",
        expiring: 5000,
        expirationDate: "31/08/2025",
      },
      {
        name: "GOL",
        points: 20000,
        color: "bg-orange-500",
        expiring: 0,
        expirationDate: null,
      },
    ],
    history: [
      {
        id: 1,
        airline: "LATAM",
        points: 10000,
        type: "credit",
        date: "10/03/2025",
        description: "Compra de milhas",
      },
      {
        id: 2,
        airline: "LATAM",
        points: 5000,
        type: "debit",
        date: "15/03/2025",
        description: "Venda de milhas",
      },
      {
        id: 3,
        airline: "Azul",
        points: 8000,
        type: "credit",
        date: "20/03/2025",
        description: "Compra de milhas",
      },
      {
        id: 4,
        airline: "GOL",
        points: 3000,
        type: "debit",
        date: "25/03/2025",
        description: "Venda de milhas",
      },
    ],
  }), [])

  const handleSellClick = (airline: string, amount: number) => {
    setSelectedAirline(airline)
    setSelectedAmount(amount)
    setSellModalOpen(true)
  }

  const handleBuyClick = (airline: string) => {
    setSelectedAirline(airline)
    setBuyModalOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Minhas Milhas</h1>
        <p className="text-muted-foreground">
          Gerencie suas milhas aéreas, acompanhe seu saldo e realize transações.
        </p>
      </div>

      <Alert>
        <Shield className="h-4 w-4" />
        <AlertTitle>Transações Seguras</AlertTitle>
        <AlertDescription>
          Todas as transações são protegidas com criptografia de ponta a ponta, garantindo a segurança dos seus dados.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MilesSummary 
          airlines={milesData.airlines} 
          total={milesData.total} 
          onSellClick={handleSellClick}
          onBuyClick={handleBuyClick}
        />

        {milesData.airlines.map((airline) => (
          <AirlineCard 
            key={airline.name} 
            airline={airline} 
            onSellClick={handleSellClick}
            onBuyClick={handleBuyClick}
          />
        ))}
      </div>

      <TransactionHistory transactions={milesData.history} />
      <ImportantInfo />

      {sellModalOpen && (
        <DynamicTradeMilesModal
          open={sellModalOpen}
          onOpenChange={setSellModalOpen}
          type="sell"
          airline={selectedAirline}
          initialAmount={selectedAmount}
        />
      )}

      {buyModalOpen && (
        <DynamicTradeMilesModal
          open={buyModalOpen}
          onOpenChange={setBuyModalOpen}
          type="buy"
          airline={selectedAirline}
          initialAmount={10000}
        />
      )}
    </div>
  )
}

