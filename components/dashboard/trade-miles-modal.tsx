"use client"

import { useState, useEffect, memo } from "react"
import { Button } from "@/components/ui/button"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle2, Lock, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface TradeMilesModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  type: "buy" | "sell"
  airline?: string
  initialAmount?: number
}

// Componente memoizado para o conteúdo do primeiro passo
const StepOneContent = memo(({ 
  selectedAirline, 
  setSelectedAirline, 
  amount, 
  setAmount, 
  pricePerThousand, 
  totalValue 
}: {
  selectedAirline: string
  setSelectedAirline: (airline: string) => void
  amount: number
  setAmount: (amount: number) => void
  pricePerThousand: number
  totalValue: number
}) => (
  <div className="grid gap-4 py-4">
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="airline" className="text-right">
        Companhia
      </Label>
      <Select
        value={selectedAirline}
        onValueChange={setSelectedAirline}
      >
        <SelectTrigger className="col-span-3">
          <SelectValue placeholder="Selecione a companhia aérea" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="LATAM">LATAM</SelectItem>
          <SelectItem value="Azul">Azul</SelectItem>
          <SelectItem value="GOL">GOL</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="amount" className="text-right">
        Quantidade
      </Label>
      <Input
        id="amount"
        type="number"
        min={1000}
        step={1000}
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="col-span-3"
      />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label className="text-right">Valor</Label>
      <div className="col-span-3 font-medium">
        R$ {totalValue.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </div>
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label className="text-right">Milheiro</Label>
      <div className="col-span-3">
        R$ {pricePerThousand.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </div>
    </div>

    <Alert className="mt-4">
      <Lock className="h-4 w-4" />
      <AlertTitle>Transação Segura</AlertTitle>
      <AlertDescription>
        Todas as transações são protegidas com criptografia de ponta a ponta.
      </AlertDescription>
    </Alert>
  </div>
))

StepOneContent.displayName = "StepOneContent"

export function TradeMilesModal({ open, onOpenChange, type, airline = "", initialAmount = 1000 }: TradeMilesModalProps) {
  const [selectedAirline, setSelectedAirline] = useState(airline)
  const [amount, setAmount] = useState(initialAmount)
  const [paymentMethod, setPaymentMethod] = useState("pix")
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Atualiza os valores quando as props mudam
  useEffect(() => {
    if (open) {
      setSelectedAirline(airline || "")
      setAmount(initialAmount || 1000)
    }
  }, [open, airline, initialAmount])

  const pricePerThousand = type === "buy" ? 28 : 22
  const totalValue = (amount / 1000) * pricePerThousand

  const handleContinue = () => {
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      setIsProcessing(true)
      // Simula processamento
      setTimeout(() => {
        setIsProcessing(false)
        setIsComplete(true)
      }, 1000) // Reduzido para 1 segundo
    }
  }

  const handleClose = () => {
    // Reset state when closing
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
              <DialogTitle>{type === "buy" ? "Comprar Milhas" : "Vender Milhas"}</DialogTitle>
              <DialogDescription>
                {type === "buy"
                  ? "Compre milhas com as melhores taxas do mercado."
                  : "Converta suas milhas em dinheiro na sua conta."}
              </DialogDescription>
            </DialogHeader>

            {step === 1 ? (
              <StepOneContent 
                selectedAirline={selectedAirline}
                setSelectedAirline={setSelectedAirline}
                amount={amount}
                setAmount={setAmount}
                pricePerThousand={pricePerThousand}
                totalValue={totalValue}
              />
            ) : (
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label>Método de {type === "buy" ? "Pagamento" : "Recebimento"}</Label>
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
                      <RadioGroupItem value="transfer" id="transfer" className="peer sr-only" />
                      <Label
                        htmlFor="transfer"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span>Transferência</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Alert className="mt-4 bg-yellow-50 border-yellow-200">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <AlertTitle className="text-yellow-600">Prazo de Processamento</AlertTitle>
                  <AlertDescription className="text-yellow-700">
                    {type === "buy"
                      ? "As milhas serão creditadas em até 7 dias após a confirmação do pagamento."
                      : "O valor será creditado em sua conta em até 7 dias após a confirmação."}
                  </AlertDescription>
                </Alert>

                <Alert className="mt-2">
                  <Shield className="h-4 w-4" />
                  <AlertTitle>Garantia de Segurança</AlertTitle>
                  <AlertDescription>
                    Todas as transações são protegidas e garantidas pelo MMAHUB.
                  </AlertDescription>
                </Alert>
              </div>
            )}

            <DialogFooter>
              {step === 2 && (
                <Button variant="outline" onClick={() => setStep(1)} disabled={isProcessing}>
                  Voltar
                </Button>
              )}
              <Button onClick={handleContinue} disabled={isProcessing}>
                {isProcessing
                  ? "Processando..."
                  : step === 1
                  ? "Continuar"
                  : type === "buy"
                  ? "Finalizar Compra"
                  : "Finalizar Venda"}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <div className="py-6 flex flex-col items-center text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <DialogTitle className="text-xl mb-2">
              {type === "buy" ? "Compra Realizada com Sucesso!" : "Venda Realizada com Sucesso!"}
            </DialogTitle>
            <DialogDescription className="mb-6">
              {type === "buy"
                ? `Você comprou ${amount.toLocaleString()} milhas da ${selectedAirline}. Elas serão creditadas em até 7 dias.`
                : `Você vendeu ${amount.toLocaleString()} milhas da ${selectedAirline}. O valor será creditado em até 7 dias.`}
            </DialogDescription>
            <Button onClick={handleClose}>Fechar</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
} 