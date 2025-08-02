import { cn } from '@/lib/utils'
import type { Task } from '@/mocks/Tasks'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface TaskCardProps {
  task: Task
}

export default function TaskCard ({ task }: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'p-3 rounded-lg border-2 shadow-sm cursor-grab active:cursor-grabbing select-none',
        task.color
      )}
      style={style}
      {...attributes}
      {...listeners}
    >
      <h4 className="font-medium text-sm line-clamp-2">{task.title}</h4>
      <time className="text-xs font-mono text-gray-500 bg-white/70 px-2 py-1 rounded inline-block mb-1">{task.time}</time>
      {task.description && (
        <p className="text-xs text-gray-600 line-clamp-2">{task.description}</p>
      )}
    </div>
  )
}
