import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  children?: React.ReactNode
}

export default function Droppable({children}: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id: 'droppable' })   
  return (
    <div 
      ref={setNodeRef} 
      style={{ 
        display: 'inline-block',
        color: isOver ? 'green' : undefined 
      }}
    >
      {children}
    </div>
  )
}
