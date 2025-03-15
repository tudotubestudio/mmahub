import type { LucideIcon } from "lucide-react"
import * as Icons from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface BenefitCardProps {
  icon: string
  title: string
  description: string
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  // Dynamically get the icon component
  const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

