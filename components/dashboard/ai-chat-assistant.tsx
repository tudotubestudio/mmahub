"use client"

import { useState, useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, X } from "lucide-react"

// Componente de mensagem memoizado para evitar renderizações desnecessárias
const ChatMessage = memo(({ message }: { message: { role: string; content: string } }) => (
  <div
    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
  >
    <div
      className={`max-w-[80%] rounded-lg px-3 py-2 ${
        message.role === "user"
          ? "bg-primary text-primary-foreground"
          : "bg-muted"
      }`}
    >
      <p className="text-sm">{message.content}</p>
    </div>
  </div>
))

ChatMessage.displayName = "ChatMessage"

// Respostas pré-definidas para evitar processamento desnecessário
const AI_RESPONSES = [
  "Todas as transações no MMAHUB são protegidas com criptografia de ponta a ponta, garantindo a segurança dos seus dados.",
  "Para vender suas milhas, basta acessar a seção 'Milhas' e clicar em 'Vender'. O valor será creditado em sua carteira em até 7 dias após a confirmação.",
  "A compra de milhas é processada em até 7 dias para garantir a segurança de todos os envolvidos.",
  "Oferecemos as melhores taxas do mercado para compra e venda de milhas aéreas.",
  "Seu cadastro está protegido por múltiplas camadas de segurança, assim como um banco.",
]

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Olá! Sou o assistente virtual do MMAHUB. Como posso ajudar você hoje com suas dúvidas sobre milhas aéreas?",
    },
  ])
  const [input, setInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  // Função memoizada para evitar recriações a cada renderização
  const handleSend = useCallback(() => {
    if (!input.trim() || isProcessing) return

    setIsProcessing(true)
    
    // Adiciona a mensagem do usuário
    setMessages((prev) => [...prev, { role: "user", content: input }])
    
    // Limpa o input imediatamente para melhor UX
    setInput("")
    
    // Simula resposta do assistente após um pequeno delay
    setTimeout(() => {
      const randomResponse = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)]
      setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }])
      setIsProcessing(false)
    }, 500) // Reduzido para 500ms para parecer mais responsivo
  }, [input, isProcessing])

  // Se não estiver aberto, renderiza apenas o botão
  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg"
      >
        <Bot size={24} />
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 md:w-96 shadow-xl">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium">Assistente MMAHUB</CardTitle>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-80 overflow-y-auto space-y-4 mb-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="flex w-full items-center space-x-2">
          <Input
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
            disabled={isProcessing}
          />
          <Button size="icon" onClick={handleSend} disabled={isProcessing}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
} 