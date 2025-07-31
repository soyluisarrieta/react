import { useDraggable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

interface DraggableProps {
  children?: React.ReactNode
}

export default function Draggable({children}: DraggableProps) {
  const {
    attributes, 
    listeners, 
    setNodeRef, 
    transform
  } = useDraggable({ id: 'draggable' })

  return (
    <div
      ref={setNodeRef} 
      style={{ 
        width: 'auto',
        display: 'inline-block',
        transform: CSS.Translate.toString(transform) 
      }}
      {...listeners} 
      {...attributes}
    >
      {children}
    </div>
  )
}
