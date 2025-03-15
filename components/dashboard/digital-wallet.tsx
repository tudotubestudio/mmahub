"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownToLine, ArrowUpFromLine, CreditCard, CheckCircle2, AlertCircle, Shield } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Componente para o modal de depósito
function DepositModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [amount, setAmount] = useState(100)
  const [paymentMethod, setPaymentMethod] = useState("pix")
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleContinue = () => {
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      setIsProcessing(true)
      // Simula processamento
      setTimeout(() => {
        setIsProcessing(false)
        setIsComplete(true)
      }, 1000)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    
    // Atrasa o reset do estado para evitar flashes de UI durante a animação de fechamento
    setTimeout(() => {
      setStep(1)
      setIsProcessing(false)
      setIsComplete(false)
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        {!isComplete ? (
          <>
            <DialogHeader>
              <DialogTitle>Depositar na Carteira</DialogTitle>
              <DialogDescription>
                Adicione fundos à sua carteira digital para comprar milhas.
              </DialogDescription>
            </DialogHeader>

            {step === 1 ? (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right">
                    Valor
                  </Label>
                  <div className="col-span-3 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                    <Input
                      id="amount"
                      type="number"
                      min={10}
                      step={10}
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Alert className="mt-4">
                  <Shield className="h-4 w-4" />
                  <AlertTitle>Transação Segura</AlertTitle>
                  <AlertDescription>
                    Todas as transações são protegidas com criptografia de ponta a ponta.
                  </AlertDescription>
                </Alert>
              </div>
            ) : (
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label>Método de Pagamento</Label>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="pix" id="pix" className="peer sr-only" />
                      <Label
                        htmlFor="pix"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span>PIX</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="credit-card" id="credit-card" className="peer sr-only" />
                      <Label
                        htmlFor="credit-card"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span>Cartão de Crédito</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Alert className="mt-4 bg-yellow-50 border-yellow-200">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-600">Prazo de Processamento</AlertTitle>
                  <AlertDescription className="text-yellow-700">
                    O depósito via PIX é processado imediatamente. Depósitos via cartão podem levar até 1 dia útil.
                  </AlertDescription>
                </Alert>
              </div>
            )}

            <DialogFooter>
              {step === 1 ? (
                <Button onClick={handleContinue}>Continuar</Button>
              ) : (
                <Button onClick={handleContinue} disabled={isProcessing}>
                  {isProcessing ? "Processando..." : "Confirmar Depósito"}
                </Button>
              )}
            </DialogFooter>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">Depósito Confirmado!</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Seu depósito de R$ {amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} foi confirmado com sucesso.
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleClose}>Fechar</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

// Componente para o modal de saque
function WithdrawModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [amount, setAmount] = useState(100)
  const [withdrawMethod, setWithdrawMethod] = useState("pix")
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleContinue = () => {
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      setIsProcessing(true)
      // Simula processamento
      setTimeout(() => {
        setIsProcessing(false)
        setIsComplete(true)
      }, 1000)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    
    // Atrasa o reset do estado para evitar flashes de UI durante a animação de fechamento
    setTimeout(() => {
      setStep(1)
      setIsProcessing(false)
      setIsComplete(false)
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        {!isComplete ? (
          <>
            <DialogHeader>
              <DialogTitle>Sacar da Carteira</DialogTitle>
              <DialogDescription>
                Retire fundos da sua carteira digital para sua conta bancária.
              </DialogDescription>
            </DialogHeader>

            {step === 1 ? (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right">
                    Valor
                  </Label>
                  <div className="col-span-3 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                    <Input
                      id="amount"
                      type="number"
                      min={10}
                      step={10}
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Alert className="mt-4">
                  <Shield className="h-4 w-4" />
                  <AlertTitle>Transação Segura</AlertTitle>
                  <AlertDescription>
                    Todas as transações são protegidas com criptografia de ponta a ponta.
                  </AlertDescription>
                </Alert>
              </div>
            ) : (
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label>Método de Recebimento</Label>
                  <RadioGroup
                    value={withdrawMethod}
                    onValueChange={setWithdrawMethod}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="pix" id="pix-withdraw" className="peer sr-only" />
                      <Label
                        htmlFor="pix-withdraw"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span>PIX</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="bank-transfer" id="bank-transfer" className="peer sr-only" />
                      <Label
                        htmlFor="bank-transfer"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span>Transferência Bancária</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Alert className="mt-4 bg-yellow-50 border-yellow-200">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-600">Prazo de Processamento</AlertTitle>
                  <AlertDescription className="text-yellow-700">
                    Saques via PIX são processados em até 1 hora. Transferências bancárias podem levar até 1 dia útil.
                  </AlertDescription>
                </Alert>
              </div>
            )}

            <DialogFooter>
              {step === 1 ? (
                <Button onClick={handleContinue}>Continuar</Button>
              ) : (
                <Button onClick={handleContinue} disabled={isProcessing}>
                  {isProcessing ? "Processando..." : "Confirmar Saque"}
                </Button>
              )}
            </DialogFooter>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">Saque Solicitado!</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Seu saque de R$ {amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} foi solicitado com sucesso.
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleClose}>Fechar</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export function DigitalWallet() {
  const [depositModalOpen, setDepositModalOpen] = useState(false)
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false)

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Carteira Digital</CardTitle>
          <CreditCard className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold">R$ 3.700,00</div>
              <p className="text-xs text-muted-foreground">Saldo total</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs font-medium flex items-center text-green-600">
                <ArrowDownToLine className="w-3 h-3 mr-1" />
                <span>+R$ 1.200 (30d)</span>
              </div>
              <div className="text-xs font-medium flex items-center text-red-600">
                <ArrowUpFromLine className="w-3 h-3 mr-1" />
                <span>-R$ 800 (30d)</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-0">
          <Button 
            size="sm" 
            variant="outline" 
            className="w-[48%]"
            onClick={() => setDepositModalOpen(true)}
          >
            <ArrowDownToLine className="w-4 h-4 mr-2" />
            Depositar
          </Button>
          <Button 
            size="sm" 
            className="w-[48%]"
            onClick={() => setWithdrawModalOpen(true)}
          >
            <ArrowUpFromLine className="w-4 h-4 mr-2" />
            Sacar
          </Button>
        </CardFooter>
      </Card>

      {/* Modais */}
      <DepositModal open={depositModalOpen} onOpenChange={setDepositModalOpen} />
      <WithdrawModal open={withdrawModalOpen} onOpenChange={setWithdrawModalOpen} />
    </>
  )
}

