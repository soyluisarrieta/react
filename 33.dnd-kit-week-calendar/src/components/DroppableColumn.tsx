import { cn } from '@/lib/utils'
import { useDroppable } from '@dnd-kit/core'
import type { ReactNode } from 'react'

interface DroppableColumnProps {
  id: string
  children: ReactNode
  isOver?: boolean
}

export function DroppableColumn ({ id, children, isOver: externalIsOver }: DroppableColumnProps) {
  const { isOver: internalIsOver, setNodeRef } = useDroppable({ id })

  // Usar el isOver externo si está disponible, sino usar el interno
  const isOver = externalIsOver !== undefined ? externalIsOver : internalIsOver

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
