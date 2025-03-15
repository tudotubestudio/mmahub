import { OffersList } from "@/components/dashboard/offers-list"
import { PointsOverview } from "@/components/dashboard/points-overview"
import { CreditsCard } from "@/components/dashboard/credits-card"
import { MilesSchedule } from "@/components/dashboard/miles-schedule"
import { SalesSchedule } from "@/components/dashboard/sales-schedule"
import { DigitalWallet } from "@/components/dashboard/digital-wallet"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PointsOverview />
        <CreditsCard />
        <DigitalWallet />
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Melhores Ofertas</h2>
        <OffersList />
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
        <MilesSchedule />
        <SalesSchedule />
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Transações Recentes</h2>
        <RecentTransactions />
      </div>
    </div>
  )
}

