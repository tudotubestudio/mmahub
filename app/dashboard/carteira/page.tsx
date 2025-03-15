import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDownToLine, ArrowUpFromLine, CreditCard, Wallet, Plus } from "lucide-react"

export default function CarteiraPage() {
  // Mock data
  const walletData = {
    balance: 3700.0,
    pendingCredits: 1200.0,
    pendingDebits: 500.0,
    transactions: [
      {
        id: 1,
        type: "deposit",
        amount: 1000.0,
        date: "10/03/2025",
        description: "Depósito via PIX",
        status: "Concluído",
      },
      {
        id: 2,
        type: "withdrawal",
        amount: 500.0,
        date: "15/03/2025",
        description: "Saque para conta bancária",
        status: "Concluído",
      },
      {
        id: 3,
        type: "deposit",
        amount: 1500.0,
        date: "20/03/2025",
        description: "Venda de milhas LATAM",
        status: "Concluído",
      },
      {
        id: 4,
        type: "withdrawal",
        amount: 300.0,
        date: "25/03/2025",
        description: "Saque para conta bancária",
        status: "Concluído",
      },
    ],
    paymentMethods: [
      {
        id: 1,
        type: "credit_card",
        name: "Cartão de Crédito",
        last4: "4567",
        expiry: "12/26",
        isDefault: true,
      },
      {
        id: 2,
        type: "bank_account",
        name: "Conta Bancária",
        bank: "Banco do Brasil",
        account: "****1234",
        isDefault: false,
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Carteira Digital</h1>
          <p className="text-muted-foreground">Gerencie seu saldo e realize transações financeiras.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <ArrowDownToLine className="h-4 w-4" />
            Depositar
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <ArrowUpFromLine className="h-4 w-4" />
            Sacar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Saldo Disponível</CardTitle>
            <CardDescription>Para uso imediato</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              R$ {walletData.balance.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Créditos Pendentes</CardTitle>
            <CardDescription>Em processamento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              R$ {walletData.pendingCredits.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Débitos Pendentes</CardTitle>
            <CardDescription>Em processamento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-500">
              R$ {walletData.pendingDebits.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Transações</TabsTrigger>
          <TabsTrigger value="payment-methods">Métodos de Pagamento</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Transações</CardTitle>
              <CardDescription>Últimas movimentações na sua carteira</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Descrição</th>
                      <th className="text-left py-3 px-4 font-medium">Data</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-right py-3 px-4 font-medium">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {walletData.transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                transaction.type === "deposit" ? "bg-green-100" : "bg-amber-100"
                              }`}
                            >
                              {transaction.type === "deposit" ? (
                                <ArrowDownToLine className={`h-4 w-4 text-green-600`} />
                              ) : (
                                <ArrowUpFromLine className={`h-4 w-4 text-amber-600`} />
                              )}
                            </div>
                            {transaction.description}
                          </div>
                        </td>
                        <td className="py-3 px-4">{transaction.date}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            {transaction.status}
                          </span>
                        </td>
                        <td
                          className={`py-3 px-4 text-right font-medium ${
                            transaction.type === "deposit" ? "text-green-600" : "text-amber-600"
                          }`}
                        >
                          {transaction.type === "deposit" ? "+" : "-"}
                          R$ {transaction.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver Histórico Completo
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="payment-methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pagamento</CardTitle>
              <CardDescription>Gerencie seus métodos de pagamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {walletData.paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {method.type === "credit_card" ? (
                        <CreditCard className="h-5 w-5 text-primary" />
                      ) : (
                        <Wallet className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{method.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {method.type === "credit_card"
                          ? `**** ${method.last4} (Expira: ${method.expiry})`
                          : `${method.bank} - ${method.account}`}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {method.isDefault && (
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        Padrão
                      </span>
                    )}
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Método de Pagamento
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

