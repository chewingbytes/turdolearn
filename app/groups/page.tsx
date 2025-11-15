"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GroupList } from "@/components/group-list";
import { TaskList } from "@/components/task-list";
import { AddTaskModal } from "@/components/add-task-modal";
import { SessionScheduler } from "@/components/session-scheduler";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users } from "lucide-react";
import type { StudyGroup, GroupTask } from "@/lib/types";
import groupsData from "@/lib/data/groups.json";
import studentsData from "@/lib/data/students.json";
import { toast } from "sonner";

export default function GroupsPage() {
  const [groups, setGroups] = useState<StudyGroup[]>(
    groupsData as StudyGroup[]
  );
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);

  const selectedGroup = groups.find((g) => g.id === selectedGroupId);

  const handleToggleTask = (taskId: string) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) => ({
        ...group,
        tasks: group.tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        ),
      }))
    );
  };

  const handleAddTask = (title: string, dueDate: string) => {
    if (!selectedGroup) return;

    const newTask: GroupTask = {
      id: `t${Date.now()}`,
      groupId: selectedGroup.id,
      title,
      completed: false,
      dueDate: dueDate || undefined,
    };

    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === selectedGroup.id
          ? { ...group, tasks: [...group.tasks, newTask] }
          : group
      )
    );

    toast("New task has been added to the group.");
  };

  const handleScheduleSession = (
    date: string,
    time: string,
    location: string
  ) => {
    if (!selectedGroup) return;

    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === selectedGroup.id
          ? { ...group, nextSession: { date, time, location } }
          : group
      )
    );

    toast("Session scheduled! All group members will be notified.");
  };

  if (selectedGroup) {
    const members = studentsData.filter((s) =>
      selectedGroup.members.includes(s.id)
    );

    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-muted/30">
          <div className="border-b border-border bg-background py-8">
            <div className="container mx-auto px-4">
              <Button
                variant="ghost"
                size="sm"
                className="mb-4"
                onClick={() => setSelectedGroupId(null)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Groups
              </Button>
              <h1 className="mb-2 text-3xl font-bold">{selectedGroup.name}</h1>
              <p className="text-muted-foreground">
                {selectedGroup.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedGroup.modules.map((module) => (
                  <Badge key={module} variant="secondary">
                    {module}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <TaskList
                  tasks={selectedGroup.tasks}
                  onToggleTask={handleToggleTask}
                  onAddTask={() => setAddTaskModalOpen(true)}
                />

                <Card>
                  <CardHeader>
                    <CardTitle>Group Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {members.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center gap-3 rounded-lg border border-border p-3"
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={member.avatar || "/placeholder.svg"}
                              alt={member.name}
                            />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="font-medium">{member.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {member.email}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <SessionScheduler
                  group={selectedGroup}
                  onSchedule={handleScheduleSession}
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />

        <AddTaskModal
          open={addTaskModalOpen}
          onOpenChange={setAddTaskModalOpen}
          onSubmit={handleAddTask}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/30">
        <div className="border-b border-border bg-background py-8">
          <div className="container mx-auto px-4">
            <h1 className="mb-2 text-3xl font-bold">My Study Groups</h1>
            <p className="text-muted-foreground">
              Manage your study groups, tasks, and sessions
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <GroupList groups={groups} onSelectGroup={setSelectedGroupId} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
