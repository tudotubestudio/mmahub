import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

export function CreditsCard() {
  // Mock data
  const creditsData = {
    available: 2500.0,
    pending: 1200.0,
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">Meus Créditos</CardTitle>
        <DollarSign className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          R$ {creditsData.available.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </div>
        <p className="text-xs text-muted-foreground">Saldo disponível para saque</p>

        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Créditos Pendentes</p>
              <p className="text-xs text-muted-foreground">Liberação em até 7 dias</p>
            </div>
            <div className="text-sm font-bold">
              R$ {creditsData.pending.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

