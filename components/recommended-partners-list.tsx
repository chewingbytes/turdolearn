import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, UserPlus } from 'lucide-react'
import type { Student } from "@/lib/types"
import studentsData from "@/lib/data/students.json"

export function RecommendedPartnersList() {
  // Get top 3 recommended partners
  const recommendedPartners = (studentsData as Student[])
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recommended Partners</h2>
        <Button variant="ghost" size="sm">View All</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recommendedPartners.map((partner) => (
          <Card key={partner.id} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={partner.avatar || "/placeholder.svg"} alt={partner.name} />
                  <AvatarFallback>{partner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-base">{partner.name}</CardTitle>
                  <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span>{partner.rating}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-1">
                {partner.modules.slice(0, 2).map((module) => (
                  <Badge key={module} variant="secondary" className="text-xs">
                    {module}
                  </Badge>
                ))}
              </div>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {partner.bio}
              </p>
              <Button className="w-full" size="sm">
                <UserPlus className="mr-2 h-4 w-4" />
                Connect
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
