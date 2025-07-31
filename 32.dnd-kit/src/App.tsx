import { DndContext } from "@dnd-kit/core";
import Draggable from "./Components/Draggable";
import Droppable from "./Components/Droppable";

export default function App() {
  return (
    <DndContext>
      <Droppable>
        <div style={{width: 300, height: 300, border: 'dashed 1px'}} />
      </Droppable>
      <Draggable>
        <div style={{width: 100, height: 100, background: 'red'}} />
      </Draggable>
    </DndContext>
  )
}
