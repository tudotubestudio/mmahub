import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarClock } from "lucide-react"

export function MilesSchedule() {
  // Mock data
  const milesSchedule = [
    {
      id: 1,
      airline: "LATAM",
      points: 15000,
      status: "Pendente",
      releaseDate: "15/04/2025",
      daysLeft: 5,
    },
    {
      id: 2,
      airline: "Azul",
      points: 8000,
      status: "Processando",
      releaseDate: "20/04/2025",
      daysLeft: 10,
    },
    {
      id: 3,
      airline: "GOL",
      points: 12000,
      status: "Confirmado",
      releaseDate: "25/04/2025",
      daysLeft: 15,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pendente":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Processando":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Confirmado":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-base font-medium">Liberação de Milhas</CardTitle>
        <CalendarClock className="w-5 h-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {milesSchedule.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="font-medium">{item.airline}</span>
                  <Badge variant="outline" className={`ml-2 ${getStatusColor(item.status)}`}>
                    {item.status}
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">{item.points.toLocaleString()} milhas</span>
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

