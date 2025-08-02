import type { Task } from '@/mocks/Tasks'

export function sortTasksByTime (tasks: Task[]): Task[] {
  return [...tasks].sort((a, b) => {
    const timeA = a.time.split(':').map(Number)
    const timeB = b.time.split(':').map(Number)
    const minutesA = timeA[0] * 60 + timeA[1]
    const minutesB = timeB[0] * 60 + timeB[1]
    return minutesA - minutesB
  })
}
