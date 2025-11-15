import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from 'lucide-react'
import type { StudyGroup } from "@/lib/types"
import studentsData from "@/lib/data/students.json"

interface GroupCardProps {
  group: StudyGroup
  onClick: () => void
}

export function GroupCard({ group, onClick }: GroupCardProps) {
  const members = studentsData.filter(s => group.members.includes(s.id))

  return (
    <Card 
      className="cursor-pointer overflow-hidden transition-all hover:shadow-md"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{group.name}</CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {group.description}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1">
          {group.modules.map((module) => (
            <Badge key={module} variant="secondary" className="text-xs">
              {module}
            </Badge>
          ))}
        </div>

        <div className="flex -space-x-2">
          {members.slice(0, 4).map((member) => (
            <Avatar key={member.id} className="h-8 w-8 border-2 border-background">
              <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
              <AvatarFallback className="text-xs">
                {member.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          ))}
          {members.length > 4 && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
              +{members.length - 4}
            </div>
          )}
        </div>

        {group.nextSession && (
          <div className="space-y-1 rounded-md bg-primary/5 p-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Next Session</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {group.nextSession.date} at {group.nextSession.time}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {group.nextSession.location}
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{group.members.length} members</span>
        </div>
      </CardContent>
    </Card>
  )
}
