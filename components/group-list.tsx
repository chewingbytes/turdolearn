import { GroupCard } from "@/components/group-card"
import type { StudyGroup } from "@/lib/types"

interface GroupListProps {
  groups: StudyGroup[]
  onSelectGroup: (groupId: string) => void
}

export function GroupList({ groups, onSelectGroup }: GroupListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">My Study Groups</h2>
      {groups.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-background py-12">
          <p className="text-muted-foreground">You haven't joined any groups yet</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              onClick={() => onSelectGroup(group.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
