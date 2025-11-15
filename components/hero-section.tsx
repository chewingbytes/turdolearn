import { Button } from "@/components/ui/button";
import { Users, Calendar, CheckSquare } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="border-b border-border py-12 md:py-20 bg-no-repeat bg-size-[100%_100%] 
"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1184%26quot%3b)' fill='none'%3e%3cpath d='M -2430.908774151204%2c474 C -2142.91%2c406.6 -1566.91%2c134.6 -990.9087741512038%2c137 C -414.91%2c139.4 -37.09%2c501.8 449.09122584879617%2c486 C 935.27%2c470.2 1241.82%2c143.6 1440%2c58' stroke='rgba(57%2c 115%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1149.1440486749734%2c270 C -861.14%2c317.2 -285.14%2c510 290.8559513250266%2c506 C 866.86%2c502 1501.03%2c252 1730.8559513250266%2c250 C 1960.68%2c248 1498.17%2c446.8 1440%2c496' stroke='rgba(57%2c 115%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1184'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-6xl">
            Find Your Perfect Study Partner
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl z-99">
            Connect with students who share your courses, availability, and
            learning style. Join collaborative study groups and stay organized
            together.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/partners">Find Study Partners</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href="/groups">Browse Groups</Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-lg dark:bg-card bg-[#AADBFF] p-4 shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Smart Matching</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered partner recommendations
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg dark:bg-card bg-[#AADBFF] p-4 shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold">Session Scheduling</h3>
              <p className="text-sm text-muted-foreground">
                Coordinate study times effortlessly
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg dark:bg-card bg-[#AADBFF] p-4 shadow-2xl">
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
  );
}
