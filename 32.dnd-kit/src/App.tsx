import { DndContext, type DragEndEvent, type UniqueIdentifier } from "@dnd-kit/core";
import Droppable from "./Components/Droppable";
import { useState } from "react";
import DraggableMarkup from "./Components/DraggableMarkup";

const CONTAINERS = ['A', 'B', 'C'];

export default function App() {
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  
  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    setParent(over ? over.id : null);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 100}}>
        {CONTAINERS.map((id) => (
          <Droppable 
            key={id} 
            id={id}
            style={{ width: 300, height: 300, border: 'dashed 2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {parent === id ? <DraggableMarkup /> : 'Vacío'}
          </Droppable>
        ))}
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 100}}>
        {parent === null && <DraggableMarkup />}
      </div>
    </DndContext>
  )
}
