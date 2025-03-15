import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDownLeft, ArrowUpRight, PlaneTakeoff } from "lucide-react"

export function RecentTransactions() {
  // Mock data
  const transactions = [
    {
      id: 1,
      type: "purchase",
      description: "Compra de Milhas LATAM",
      amount: 15000,
      value: 435.0,
      date: "10/04/2025",
      status: "Concluído",
    },
    {
      id: 2,
      type: "sale",
      description: "Venda de Milhas Azul",
      amount: 20000,
      value: 580.0,
      date: "05/04/2025",
      status: "Concluído",
    },
    {
      id: 3,
      type: "purchase",
      description: "Compra de Milhas GOL",
      amount: 8000,
      value: 216.0,
      date: "01/04/2025",
      status: "Concluído",
    },
    {
      id: 4,
      type: "sale",
      description: "Venda de Milhas LATAM",
      amount: 30000,
      value: 870.0,
      date: "28/03/2025",
      status: "Concluído",
    },
  ]

  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Transação</th>
                <th className="text-left p-4 font-medium">Milhas</th>
                <th className="text-left p-4 font-medium">Valor</th>
                <th className="text-left p-4 font-medium">Data</th>
                <th className="text-left p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-muted/50">
                  <td className="p-4">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          transaction.type === "purchase" ? "bg-green-100" : "bg-blue-100"
                        }`}
                      >
                        {transaction.type === "purchase" ? (
                          <ArrowDownLeft
                            className={`h-4 w-4 ${
                              transaction.type === "purchase" ? "text-green-600" : "text-blue-600"
                            }`}
                          />
                        ) : (
                          <ArrowUpRight
                            className={`h-4 w-4 ${
                              transaction.type === "purchase" ? "text-green-600" : "text-blue-600"
                            }`}
                          />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{transaction.description}</div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.type === "purchase" ? "Compra" : "Venda"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <PlaneTakeoff className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{transaction.amount.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="p-4">R$ {transaction.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</td>
                  <td className="p-4">{transaction.date}</td>
                  <td className="p-4">
                    <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                      {transaction.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

