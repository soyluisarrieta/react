import { useDroppable } from '@dnd-kit/core'
import type { ReactNode } from 'react'

interface DroppableColumnProps {
  id: string
  children: ReactNode
}

export function DroppableColumn ({ id, children }: DroppableColumnProps) {
  const { setNodeRef } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={'transition-all duration-200 ease-in-out'}
    >
      {children}
    </div>
  )
}
