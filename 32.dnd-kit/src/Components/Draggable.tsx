import { useDraggable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

interface DraggableProps {
  id?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export default function Draggable({id="draggable", style, children}: DraggableProps) {
  const {
    attributes, 
    listeners, 
    setNodeRef, 
    transform,
  } = useDraggable({ id })

  return (
    <div
      ref={setNodeRef} 
      style={{ 
        width:'auto',
        display: 'inline-block',
        transform: CSS.Translate.toString(transform),
        cursor: 'pointer',
        userSelect: 'none',
        ...style
      }}
      {...listeners} 
      {...attributes}
    >
      {children}
    </div>
  )
}
