import { cn } from '@/lib/utils'
import type { Task } from '@/mocks/Tasks'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface TaskCardProps {
  task: Task
  disabled?: boolean
}

export default function TaskCard ({ task, disabled = false }: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: task.id,
    disabled: disabled
  })

  const style = {
    transform: disabled ? 'none' : CSS.Transform.toString(transform),
    transition
  }

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'p-3 rounded-lg border-2 shadow-sm cursor-grab active:cursor-grabbing select-none',
        task.color,
        isDragging
          ? 'opacity-50 scale-105 shadow-lg z-50 rotate-1'
          : 'hover:shadow-md hover:-translate-y-0.5'
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
