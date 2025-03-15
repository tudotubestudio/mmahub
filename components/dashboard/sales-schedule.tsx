import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarClock } from "lucide-react"

export function SalesSchedule() {
  // Mock data
  const salesSchedule = [
    {
      id: 1,
      amount: 450.0,
      status: "Pendente",
      releaseDate: "18/04/2025",
      daysLeft: 8,
    },
    {
      id: 2,
      amount: 780.0,
      status: "Aprovado",
      releaseDate: "22/04/2025",
      daysLeft: 12,
    },
    {
      id: 3,
      amount: 320.0,
      status: "Processando",
      releaseDate: "28/04/2025",
      daysLeft: 18,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pendente":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Processando":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Aprovado":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-base font-medium">Liberação de Vendas</CardTitle>
        <CalendarClock className="w-5 h-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {salesSchedule.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-medium">
                    R$ {item.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </span>
                  <Badge variant="outline" className={`ml-2 ${getStatusColor(item.status)}`}>
                    {item.status}
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">Transferência bancária</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{item.releaseDate}</div>
                <div className="text-xs text-muted-foreground">
                  {item.daysLeft === 0 ? "Hoje" : item.daysLeft === 1 ? "Amanhã" : `Em ${item.daysLeft} dias`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

