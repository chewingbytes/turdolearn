"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { Student } from "@/lib/types"

interface MatchModalProps {
  partner: Student | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (message: string) => void
}

export function MatchModal({ partner, open, onOpenChange, onSubmit }: MatchModalProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    onSubmit(message)
    setMessage("")
    onOpenChange(false)
  }

  if (!partner) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Send Match Request to {partner.name}</DialogTitle>
          <DialogDescription>
            Introduce yourself and let them know why you'd like to study together.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Hi! I noticed we're both taking Data Structures. Would love to study together and work through the problem sets..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Send Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
