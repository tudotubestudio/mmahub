import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/home/hero-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { AuthSection } from "@/components/home/auth-section"
import { Footer } from "@/components/home/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 to-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <AuthSection />
      </main>
      <Footer />
    </div>
  )
}

