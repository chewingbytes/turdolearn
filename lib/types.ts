export interface Student {
  id: string
  name: string
  email: string
  avatar: string
  modules: string[]
  interests: string[]
  availability: string[]
  learningStyle: string
  rating: number
  bio: string
}

export interface StudyGroup {
  id: string
  name: string
  description: string
  members: string[] // student IDs
  modules: string[]
  nextSession?: {
    date: string
    time: string
    location: string
  }
  tasks: GroupTask[]
}

export interface GroupTask {
  id: string
  groupId: string
  title: string
  completed: boolean
  assignedTo?: string
  dueDate?: string
}

export interface MatchRequest {
  fromStudentId: string
  toStudentId: string
  message: string
  status: 'pending' | 'accepted' | 'rejected'
}
