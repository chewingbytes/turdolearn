"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { FilterX } from 'lucide-react'

interface FilterPanelProps {
  selectedModules: string[]
  onModuleToggle: (module: string) => void
  selectedAvailability: string[]
  onAvailabilityToggle: (time: string) => void
  onReset: () => void
}

export function FilterPanel({ 
  selectedModules, 
  onModuleToggle, 
  selectedAvailability, 
  onAvailabilityToggle,
  onReset 
}: FilterPanelProps) {
  const modules = [
    "Computer Science 101",
    "Data Structures",
    "Web Development",
    "Algorithms",
    "Database Systems",
    "Machine Learning"
  ]

  const availabilitySlots = [
    "Mon Morning",
    "Mon Afternoon",
    "Tue Morning",
    "Tue Afternoon",
    "Wed Morning",
    "Wed Afternoon",
    "Thu Morning",
    "Thu Afternoon",
    "Fri Morning",
    "Fri Afternoon"
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg">Filters</CardTitle>
        <Button variant="ghost" size="sm" onClick={onReset}>
          <FilterX className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Modules</Label>
          <div className="space-y-2">
            {modules.map((module) => (
              <div key={module} className="flex items-center space-x-2">
                <Checkbox
                  id={`module-${module}`}
                  checked={selectedModules.includes(module)}
                  onCheckedChange={() => onModuleToggle(module)}
                />
                <label
                  htmlFor={`module-${module}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {module}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-semibold">Availability</Label>
          <div className="space-y-2">
            {availabilitySlots.slice(0, 6).map((slot) => (
              <div key={slot} className="flex items-center space-x-2">
                <Checkbox
                  id={`availability-${slot}`}
                  checked={selectedAvailability.includes(slot)}
                  onCheckedChange={() => onAvailabilityToggle(slot)}
                />
                <label
                  htmlFor={`availability-${slot}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {slot}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
