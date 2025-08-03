import { cn } from '@/lib/utils'
import { useDroppable } from '@dnd-kit/core'
import type { ReactNode } from 'react'

interface DroppableColumnProps {
  id: string
  children: ReactNode
}

export function DroppableColumn ({ id, children }: DroppableColumnProps) {
  const { isOver, setNodeRef } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'transition-all duration-200 ease-in-out',
        isOver && 'ring-2 ring-blue-200 rounded-lg scale-[1.02] shadow-lg'
      )}
    >
      {children}
    </div>
  )
}
