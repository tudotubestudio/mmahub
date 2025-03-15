import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Download, LineChart, PieChart } from "lucide-react"

export default function AnalisesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Análises</h1>
          <p className="text-muted-foreground">Visualize estatísticas e tendências das suas milhas.</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Últimos 7 dias</SelectItem>
              <SelectItem value="30">Últimos 30 dias</SelectItem>
              <SelectItem value="90">Últimos 90 dias</SelectItem>
              <SelectItem value="365">Último ano</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total de Milhas Negociadas</CardTitle>
            <CardDescription>Últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">125.000</div>
            <p className="text-sm text-green-600 flex items-center mt-1">
              <span className="i-lucide-trending-up mr-1"></span>
              +15% em relação ao período anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Valor Total Negociado</CardTitle>
            <CardDescription>Últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 3.500,00</div>
            <p className="text-sm text-green-600 flex items-center mt-1">
              <span className="i-lucide-trending-up mr-1"></span>
              +12% em relação ao período anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Preço Médio do Milheiro</CardTitle>
            <CardDescription>Últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 28,00</div>
            <p className="text-sm text-red-600 flex items-center mt-1">
              <span className="i-lucide-trending-down mr-1"></span>
              -2% em relação ao período anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="miles">Milhas</TabsTrigger>
          <TabsTrigger value="transactions">Transações</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5" />
                  Evolução de Milhas
                </CardTitle>
                <CardDescription>Saldo de milhas ao longo do tempo</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <LineChart className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                  <p>Gráfico de evolução de milhas</p>
                  <p className="text-sm">Dados dos últimos 30 dias</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Distribuição por Companhia
                </CardTitle>
                <CardDescription>Porcentagem de milhas por companhia aérea</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <PieChart className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                  <p>Gráfico de distribuição por companhia</p>
                  <p className="text-sm">LATAM, Azul, GOL e outras</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="miles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Compra vs. Venda de Milhas
              </CardTitle>
              <CardDescription>Comparativo entre compras e vendas de milhas</CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <BarChart3 className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                <p>Gráfico de compra vs. venda de milhas</p>
                <p className="text-sm">Dados dos últimos 30 dias</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                Volume de Transações
              </CardTitle>
              <CardDescription>Número de transações ao longo do tempo</CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <LineChart className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                <p>Gráfico de volume de transações</p>
                <p className="text-sm">Dados dos últimos 30 dias</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

