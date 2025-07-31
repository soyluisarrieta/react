import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export default function Droppable({id='droppable', style, children}: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id })   
  return (
    <div 
      ref={setNodeRef} 
      style={{ 
        color: isOver ? 'green' : undefined,
        ...style
      }}
    >
      {children}
    </div>
  )
}
