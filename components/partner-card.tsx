import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, UserPlus, Sparkles } from 'lucide-react'
import type { Student } from "@/lib/types"

interface PartnerCardProps {
  partner: Student
  onConnect: (partnerId: string) => void
}

export function PartnerCard({ partner, onConnect }: PartnerCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <Avatar className="h-14 w-14">
              <AvatarImage src={partner.avatar || "/placeholder.svg"} alt={partner.name} />
              <AvatarFallback>{partner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{partner.name}</h3>
              <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span>{partner.rating}</span>
                </div>
                <Badge variant="outline" className="h-5 text-xs">
                  <Sparkles className="mr-1 h-3 w-3" />
                  {partner.learningStyle}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {partner.bio}
        </p>

        <div className="space-y-2">
          <div className="text-xs font-semibold text-muted-foreground">Modules</div>
          <div className="flex flex-wrap gap-1">
            {partner.modules.map((module) => (
              <Badge key={module} variant="secondary" className="text-xs">
                {module}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-semibold text-muted-foreground">Availability</div>
          <div className="flex flex-wrap gap-1">
            {partner.availability.slice(0, 3).map((time) => (
              <div key={time} className="flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs">
                <Clock className="h-3 w-3" />
                {time}
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full" onClick={() => onConnect(partner.id)}>
          <UserPlus className="mr-2 h-4 w-4" />
          Send Match Request
        </Button>
      </CardContent>
    </Card>
  )
}
