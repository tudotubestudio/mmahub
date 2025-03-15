import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowDownLeft, ArrowUpRight, Calendar, Download, Filter, PlaneTakeoff, Search } from "lucide-react"

export default function TransacoesPage() {
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
    {
      id: 5,
      type: "purchase",
      description: "Compra de Milhas Azul",
      amount: 12000,
      value: 336.0,
      date: "25/03/2025",
      status: "Concluído",
    },
    {
      id: 6,
      type: "sale",
      description: "Venda de Milhas GOL",
      amount: 18000,
      value: 504.0,
      date: "20/03/2025",
      status: "Concluído",
    },
    {
      id: 7,
      type: "purchase",
      description: "Compra de Milhas LATAM",
      amount: 25000,
      value: 700.0,
      date: "15/03/2025",
      status: "Pendente",
    },
    {
      id: 8,
      type: "sale",
      description: "Venda de Milhas Azul",
      amount: 10000,
      value: 290.0,
      date: "10/03/2025",
      status: "Pendente",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Transações</h1>
          <p className="text-muted-foreground">Histórico completo de compras e vendas de milhas.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Calendar className="h-4 w-4" />
            Período
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-4 w-4" />
            Filtrar
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar transações..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="purchases">Compras</TabsTrigger>
          <TabsTrigger value="sales">Vendas</TabsTrigger>
          <TabsTrigger value="pending">Pendentes</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
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
                      <th className="text-right p-4 font-medium">Ações</th>
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
                        <td className="p-4">
                          R$ {transaction.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="p-4">{transaction.date}</td>
                        <td className="p-4">
                          <Badge
                            variant="outline"
                            className={`
                            ${
                              transaction.status === "Concluído"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-amber-100 text-amber-800 border-amber-200"
                            }
                          `}
                          >
                            {transaction.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-right">
                          <Button variant="ghost" size="sm">
                            Detalhes
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="purchases" className="space-y-4">
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
                      <th className="text-right p-4 font-medium">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions
                      .filter((t) => t.type === "purchase")
                      .map((transaction) => (
                        <tr key={transaction.id} className="border-b hover:bg-muted/50">
                          <td className="p-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-green-100">
                                <ArrowDownLeft className="h-4 w-4 text-green-600" />
                              </div>
                              <div>
                                <div className="font-medium">{transaction.description}</div>
                                <div className="text-sm text-muted-foreground">Compra</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <PlaneTakeoff className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{transaction.amount.toLocaleString()}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            R$ {transaction.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </td>
                          <td className="p-4">{transaction.date}</td>
                          <td className="p-4">
                            <Badge
                              variant="outline"
                              className={`
                            ${
                              transaction.status === "Concluído"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-amber-100 text-amber-800 border-amber-200"
                            }
                          `}
                            >
                              {transaction.status}
                            </Badge>
                          </td>
                          <td className="p-4 text-right">
                            <Button variant="ghost" size="sm">
                              Detalhes
                            </Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sales" className="space-y-4">
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
                      <th className="text-right p-4 font-medium">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions
                      .filter((t) => t.type === "sale")
                      .map((transaction) => (
                        <tr key={transaction.id} className="border-b hover:bg-muted/50">
                          <td className="p-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-blue-100">
                                <ArrowUpRight className="h-4 w-4 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-medium">{transaction.description}</div>
                                <div className="text-sm text-muted-foreground">Venda</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <PlaneTakeoff className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{transaction.amount.toLocaleString()}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            R$ {transaction.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </td>
                          <td className="p-4">{transaction.date}</td>
                          <td className="p-4">
                            <Badge
                              variant="outline"
                              className={`
                            ${
                              transaction.status === "Concluído"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-amber-100 text-amber-800 border-amber-200"
                            }
                          `}
                            >
                              {transaction.status}
                            </Badge>
                          </td>
                          <td className="p-4 text-right">
                            <Button variant="ghost" size="sm">
                              Detalhes
                            </Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
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
                      <th className="text-right p-4 font-medium">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions
                      .filter((t) => t.status === "Pendente")
                      .map((transaction) => (
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
                          <td className="p-4">
                            R$ {transaction.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </td>
                          <td className="p-4">{transaction.date}</td>
                          <td className="p-4">
                            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                              {transaction.status}
                            </Badge>
                          </td>
                          <td className="p-4 text-right">
                            <Button variant="ghost" size="sm">
                              Detalhes
                            </Button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

