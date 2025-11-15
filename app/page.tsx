import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { RecommendedPartnersList } from "@/components/recommended-partners-list"
import { RecentActivityCard } from "@/components/recent-activity-card"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RecommendedPartnersList />
            </div>
            <div>
              <RecentActivityCard />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
