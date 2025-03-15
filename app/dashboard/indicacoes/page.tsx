"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Copy, Gift, Share2, Users } from "lucide-react"

export default function IndicacoesPage() {
  // Mock data
  const referralData = {
    code: "JOAO2025",
    url: "https://mmahub.com.br/r/JOAO2025",
    totalReferrals: 12,
    activeReferrals: 8,
    pendingReferrals: 4,
    totalEarnings: 240.0,
    pendingEarnings: 80.0,
    referrals: [
      {
        id: 1,
        name: "Maria Silva",
        date: "15/03/2025",
        status: "Ativo",
        earnings: 40.0,
      },
      {
        id: 2,
        name: "Carlos Oliveira",
        date: "20/03/2025",
        status: "Ativo",
        earnings: 40.0,
      },
      {
        id: 3,
        name: "Ana Santos",
        date: "25/03/2025",
        status: "Ativo",
        earnings: 40.0,
      },
      {
        id: 4,
        name: "Pedro Costa",
        date: "01/04/2025",
        status: "Pendente",
        earnings: 0.0,
      },
      {
        id: 5,
        name: "Juliana Lima",
        date: "05/04/2025",
        status: "Pendente",
        earnings: 0.0,
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Programa de Indicações</h1>
          <p className="text-muted-foreground">Indique amigos e ganhe bônus em milhas ou dinheiro.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1">
            <Share2 className="h-4 w-4" />
            Compartilhar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total de Indicações</CardTitle>
            <CardDescription>Desde o início</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{referralData.totalReferrals}</div>
            <div className="flex gap-2 mt-2">
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                {referralData.activeReferrals} ativos
              </Badge>
              <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                {referralData.pendingReferrals} pendentes
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Ganhos Totais</CardTitle>
            <CardDescription>Em bônus de indicação</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              R$ {referralData.totalEarnings.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              R$ {referralData.pendingEarnings.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} pendentes de
              liberação
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Seu Código</CardTitle>
            <CardDescription>Compartilhe com amigos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Input value={referralData.code} readOnly className="pr-10 font-medium" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={() => navigator.clipboard.writeText(referralData.code)}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copiar código</span>
              </Button>
            </div>
            <div className="relative mt-2">
              <Input value={referralData.url} readOnly className="pr-10 text-xs" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={() => navigator.clipboard.writeText(referralData.url)}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copiar link</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Como Funciona
          </CardTitle>
          <CardDescription>Entenda como ganhar com o programa de indicações</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">1. Compartilhe seu código</h3>
              <p className="text-sm text-muted-foreground">Envie seu código de indicação para amigos e familiares.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">2. Amigos se cadastram</h3>
              <p className="text-sm text-muted-foreground">
                Seus amigos criam uma conta usando seu código de indicação.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">3. Ganhe recompensas</h3>
              <p className="text-sm text-muted-foreground">
                Receba R$ 40,00 para cada amigo que realizar uma transação.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="active">Ativas</TabsTrigger>
          <TabsTrigger value="pending">Pendentes</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Suas Indicações</CardTitle>
              <CardDescription>Lista de pessoas que você indicou</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Nome</th>
                      <th className="text-left py-3 px-4 font-medium">Data</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-right py-3 px-4 font-medium">Ganhos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referralData.referrals.map((referral) => (
                      <tr key={referral.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">{referral.name}</td>
                        <td className="py-3 px-4">{referral.date}</td>
                        <td className="py-3 px-4">
                          <Badge
                            variant="outline"
                            className={`
                            ${
                              referral.status === "Ativo"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-amber-100 text-amber-800 border-amber-200"
                            }
                          `}
                          >
                            {referral.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-right font-medium">
                          {referral.earnings > 0
                            ? `R$ ${referral.earnings.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
                            : "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver Todas as Indicações
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Indicações Ativas</CardTitle>
              <CardDescription>Indicações que já geraram ganhos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Nome</th>
                      <th className="text-left py-3 px-4 font-medium">Data</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-right py-3 px-4 font-medium">Ganhos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referralData.referrals
                      .filter((r) => r.status === "Ativo")
                      .map((referral) => (
                        <tr key={referral.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">{referral.name}</td>
                          <td className="py-3 px-4">{referral.date}</td>
                          <td className="py-3 px-4">
                            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                              {referral.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-right font-medium">
                            R$ {referral.earnings.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
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
            <CardHeader>
              <CardTitle>Indicações Pendentes</CardTitle>
              <CardDescription>Indicações que ainda não geraram ganhos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Nome</th>
                      <th className="text-left py-3 px-4 font-medium">Data</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-right py-3 px-4 font-medium">Ganhos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {referralData.referrals
                      .filter((r) => r.status === "Pendente")
                      .map((referral) => (
                        <tr key={referral.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">{referral.name}</td>
                          <td className="py-3 px-4">{referral.date}</td>
                          <td className="py-3 px-4">
                            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                              {referral.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-right font-medium">-</td>
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

