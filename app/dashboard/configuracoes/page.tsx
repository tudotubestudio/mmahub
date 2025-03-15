import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BellRing, CreditCard, Lock, User, Wallet } from "lucide-react"

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Gerencie suas preferências e informações da conta.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="payment">Pagamento</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informações Pessoais
              </CardTitle>
              <CardDescription>Atualize suas informações pessoais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" defaultValue="João Silva" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="joao.silva@exemplo.com" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="(11) 99999-9999" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" defaultValue="123.456.789-00" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="birthdate">Data de Nascimento</Label>
                  <Input id="birthdate" type="date" defaultValue="1990-01-01" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="gender">Gênero</Label>
                  <Select defaultValue="male">
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Masculino</SelectItem>
                      <SelectItem value="female">Feminino</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                      <SelectItem value="prefer_not_to_say">Prefiro não informar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Endereço
              </CardTitle>
              <CardDescription>Atualize seu endereço de correspondência</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" defaultValue="01234-567" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="street">Rua</Label>
                  <Input id="street" defaultValue="Rua Exemplo" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 w-1/3">
                  <Label htmlFor="number">Número</Label>
                  <Input id="number" defaultValue="123" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="complement">Complemento</Label>
                  <Input id="complement" defaultValue="Apto 45" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="neighborhood">Bairro</Label>
                  <Input id="neighborhood" defaultValue="Centro" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" defaultValue="São Paulo" />
                </div>
                <div className="space-y-2 w-1/4">
                  <Label htmlFor="state">Estado</Label>
                  <Select defaultValue="SP">
                    <SelectTrigger id="state">
                      <SelectValue placeholder="UF" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SP">SP</SelectItem>
                      <SelectItem value="RJ">RJ</SelectItem>
                      <SelectItem value="MG">MG</SelectItem>
                      <SelectItem value="RS">RS</SelectItem>
                      {/* Outros estados */}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Segurança
              </CardTitle>
              <CardDescription>Atualize sua senha e configurações de segurança</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Senha Atual</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="new-password">Nova Senha</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor">Autenticação de Dois Fatores</Label>
                    <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança à sua conta</p>
                  </div>
                  <Switch id="two-factor" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="login-notification">Notificações de Login</Label>
                    <p className="text-sm text-muted-foreground">Receba notificações quando sua conta for acessada</p>
                  </div>
                  <Switch id="login-notification" defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Zona de Perigo</CardTitle>
              <CardDescription>Ações irreversíveis para sua conta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-medium">Desativar Conta</h3>
                  <p className="text-sm text-muted-foreground">Sua conta será desativada temporariamente</p>
                </div>
                <Button variant="outline" className="text-amber-600 border-amber-600 hover:bg-amber-50">
                  Desativar
                </Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-medium">Excluir Conta</h3>
                  <p className="text-sm text-muted-foreground">Todos os seus dados serão permanentemente excluídos</p>
                </div>
                <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                  Excluir
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Métodos de Pagamento
              </CardTitle>
              <CardDescription>Gerencie seus cartões e contas bancárias</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Cartão de Crédito</div>
                    <div className="text-sm text-muted-foreground">**** 4567 (Expira: 12/26)</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    Padrão
                  </span>
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    Remover
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Conta Bancária</div>
                    <div className="text-sm text-muted-foreground">Banco do Brasil - **** 1234</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    Remover
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Adicionar Método de Pagamento</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                Preferências de Pagamento
              </CardTitle>
              <CardDescription>Configure suas preferências para recebimentos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default-payment">Método de Recebimento Padrão</Label>
                <Select defaultValue="bank">
                  <SelectTrigger id="default-payment">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank">Conta Bancária</SelectItem>
                    <SelectItem value="credit">Crédito na Plataforma</SelectItem>
                    <SelectItem value="pix">PIX</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="auto-withdraw">Saque Automático</Label>
                <Select defaultValue="100">
                  <SelectTrigger id="auto-withdraw">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="disabled">Desativado</SelectItem>
                    <SelectItem value="100">Acima de R$ 100,00</SelectItem>
                    <SelectItem value="500">Acima de R$ 500,00</SelectItem>
                    <SelectItem value="1000">Acima de R$ 1.000,00</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="payment-notification">Notificações de Pagamento</Label>
                  <p className="text-sm text-muted-foreground">Receba notificações sobre pagamentos e recebimentos</p>
                </div>
                <Switch id="payment-notification" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BellRing className="h-5 w-5" />
                Preferências de Notificação
              </CardTitle>
              <CardDescription>Configure como e quando deseja receber notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-medium">Notificações por Email</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-transactions" className="flex-1">
                      Transações
                    </Label>
                    <Switch id="email-transactions" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-offers" className="flex-1">
                      Ofertas e Promoções
                    </Label>
                    <Switch id="email-offers" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-news" className="flex-1">
                      Novidades e Atualizações
                    </Label>
                    <Switch id="email-news" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-security" className="flex-1">
                      Alertas de Segurança
                    </Label>
                    <Switch id="email-security" defaultChecked />
                  </div>
                </div>

                <Separator className="my-4" />

                <h3 className="font-medium">Notificações no Aplicativo</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-transactions" className="flex-1">
                      Transações
                    </Label>
                    <Switch id="app-transactions" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-offers" className="flex-1">
                      Ofertas e Promoções
                    </Label>
                    <Switch id="app-offers" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-news" className="flex-1">
                      Novidades e Atualizações
                    </Label>
                    <Switch id="app-news" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-security" className="flex-1">
                      Alertas de Segurança
                    </Label>
                    <Switch id="app-security" defaultChecked />
                  </div>
                </div>

                <Separator className="my-4" />

                <h3 className="font-medium">Notificações por SMS</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sms-transactions" className="flex-1">
                      Transações
                    </Label>
                    <Switch id="sms-transactions" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sms-security" className="flex-1">
                      Alertas de Segurança
                    </Label>
                    <Switch id="sms-security" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Restaurar Padrões</Button>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

