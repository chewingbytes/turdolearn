import { Button } from "@/components/ui/button"
import { Users, Calendar, CheckSquare } from 'lucide-react'
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Find Your Perfect Study Partner
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Connect with students who share your courses, availability, and learning style. 
            Join collaborative study groups and stay organized together.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/partners">Find Study Partners</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/groups">Browse Groups</Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-lg bg-card p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Smart Matching</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered partner recommendations
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-card p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold">Session Scheduling</h3>
              <p className="text-sm text-muted-foreground">
                Coordinate study times effortlessly
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-card p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-chart-3/10">
                <CheckSquare className="h-6 w-6 text-chart-3" />
              </div>
              <h3 className="font-semibold">Shared Tasks</h3>
              <p className="text-sm text-muted-foreground">
                Keep everyone on track together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
