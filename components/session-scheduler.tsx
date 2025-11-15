"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, MapPin, Plus } from 'lucide-react'
import type { StudyGroup } from "@/lib/types"

interface SessionSchedulerProps {
  group: StudyGroup
  onSchedule: (date: string, time: string, location: string) => void
}

export function SessionScheduler({ group, onSchedule }: SessionSchedulerProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [date, setDate] = useState(group.nextSession?.date || "")
  const [time, setTime] = useState(group.nextSession?.time || "")
  const [location, setLocation] = useState(group.nextSession?.location || "")

  const handleSubmit = () => {
    if (date && time && location) {
      onSchedule(date, time, location)
      setIsEditing(false)
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle>Next Study Session</CardTitle>
        {!isEditing && (
          <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
            {group.nextSession ? 'Edit' : <><Plus className="mr-2 h-4 w-4" />Schedule</>}
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                placeholder="3:00 PM"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Library Room 205"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSubmit} className="flex-1">
                Save Session
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          </div>
        ) : group.nextSession ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-4">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">{group.nextSession.date}</div>
                <div className="text-sm text-muted-foreground">Date</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-accent/5 p-4">
              <Clock className="h-5 w-5 text-accent" />
              <div>
                <div className="font-medium">{group.nextSession.time}</div>
                <div className="text-sm text-muted-foreground">Time</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-chart-3/5 p-4">
              <MapPin className="h-5 w-5 text-chart-3" />
              <div>
                <div className="font-medium">{group.nextSession.location}</div>
                <div className="text-sm text-muted-foreground">Location</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="text-sm text-muted-foreground">No session scheduled yet</p>
            <p className="text-xs text-muted-foreground">Click schedule to set up your next meeting</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
