import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServicesSection } from "@/components/services-section"
import { QuickApplyForm } from "@/components/quick-apply-form"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <QuickApplyForm />
      <AboutSection />
      <Footer />
    </main>
  )
}
