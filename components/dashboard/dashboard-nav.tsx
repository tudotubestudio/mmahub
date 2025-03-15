"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, CreditCard, Home, PlaneTakeoff, Settings, ShoppingCart, Users, Wallet } from "lucide-react"

export function DashboardNav() {
  const pathname = usePathname()

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, href: "/dashboard" },
    { id: "offers", label: "Ofertas", icon: ShoppingCart, href: "/dashboard/ofertas" },
    { id: "miles", label: "Minhas Milhas", icon: PlaneTakeoff, href: "/dashboard/milhas" },
    { id: "wallet", label: "Carteira", icon: Wallet, href: "/dashboard/carteira" },
    { id: "transactions", label: "Transações", icon: CreditCard, href: "/dashboard/transacoes" },
    { id: "analytics", label: "Análises", icon: BarChart3, href: "/dashboard/analises" },
    { id: "referrals", label: "Indicações", icon: Users, href: "/dashboard/indicacoes" },
    { id: "settings", label: "Configurações", icon: Settings, href: "/dashboard/configuracoes" },
  ]

  return (
    <nav className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]">
      <div className="px-4 py-5">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-md group ${
                    isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon
                    className={`mr-3 h-5 w-5 ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-600"}`}
                  />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

