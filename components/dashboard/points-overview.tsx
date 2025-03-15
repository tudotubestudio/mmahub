import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaneTakeoff } from "lucide-react"

export function PointsOverview() {
  // Mock data
  const pointsData = {
    total: 125000,
    latam: 75000,
    azul: 30000,
    gol: 20000,
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">Minhas Milhas</CardTitle>
        <PlaneTakeoff className="w-4 h-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{pointsData.total.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">Total de milhas disponíveis</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center">
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-medium">LATAM</span>
                <span className="text-xs font-medium">{pointsData.latam.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: `${(pointsData.latam / pointsData.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-medium">Azul</span>
                <span className="text-xs font-medium">{pointsData.azul.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(pointsData.azul / pointsData.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-xs font-medium">GOL</span>
                <span className="text-xs font-medium">{pointsData.gol.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${(pointsData.gol / pointsData.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

