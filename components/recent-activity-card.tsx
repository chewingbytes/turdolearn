import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, CheckCircle2, Users, BookOpen } from 'lucide-react'

export function RecentActivityCard() {
  const activities = [
    {
      id: 1,
      type: "completed",
      icon: CheckCircle2,
      color: "text-chart-4",
      title: "Completed Binary Tree assignment",
      time: "2 hours ago",
      group: "Data Structures Masters"
    },
    {
      id: 2,
      type: "joined",
      icon: Users,
      color: "text-primary",
      title: "Joined Web Dev Wizards group",
      time: "5 hours ago"
    },
    {
      id: 3,
      type: "session",
      icon: Clock,
      color: "text-accent",
      title: "Study session with Marcus Johnson",
      time: "Yesterday",
      group: "Algorithms"
    },
    {
      id: 4,
      type: "module",
      icon: BookOpen,
      color: "text-chart-3",
      title: "Started new module: Software Engineering",
      time: "2 days ago"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.id} className="flex gap-3">
                <div className={`mt-0.5 flex-shrink-0 ${activity.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {activity.title}
                  </p>
                  {activity.group && (
                    <p className="text-xs text-muted-foreground">
                      {activity.group}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
