import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlaneTakeoff, TrendingUp } from "lucide-react"

export function OffersList() {
  // Mock data
  const offers = [
    {
      id: 1,
      airline: "LATAM",
      points: 10000,
      price: 290,
      pricePerThousand: 29,
      discount: 15,
      expiration: "31/12/2025",
      trending: true,
    },
    {
      id: 2,
      airline: "Azul",
      points: 5000,
      price: 140,
      pricePerThousand: 28,
      discount: 10,
      expiration: "31/12/2025",
      trending: false,
    },
    {
      id: 3,
      airline: "GOL",
      points: 7000,
      price: 189,
      pricePerThousand: 27,
      discount: 12,
      expiration: "31/12/2025",
      trending: true,
    },
    {
      id: 4,
      airline: "LATAM",
      points: 20000,
      price: 560,
      pricePerThousand: 28,
      discount: 20,
      expiration: "31/12/2025",
      trending: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {offers.map((offer) => (
        <Card key={offer.id} className="overflow-hidden">
          <div className="h-2 bg-primary" />
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg">{offer.airline}</h3>
                <p className="text-sm text-muted-foreground">{offer.points.toLocaleString()} milhas</p>
              </div>
              {offer.trending && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>Popular</span>
                </Badge>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Preço:</span>
                <span className="font-bold">
                  R$ {offer.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Milheiro:</span>
                <span className="font-medium">
                  R$ {offer.pricePerThousand.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Desconto:</span>
                <span className="text-green-600 font-medium">{offer.discount}%</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Validade:</span>
                <span className="text-sm">{offer.expiration}</span>
              </div>
            </div>

            <Button className="w-full mt-4">
              <PlaneTakeoff className="mr-2 h-4 w-4" />
              Comprar
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

