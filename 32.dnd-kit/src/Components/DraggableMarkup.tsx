import Draggable from "./Draggable";

export default function DraggableMarkup() {
  return (
    <Draggable
      id="draggable"
      style={{ padding: '1rem 2rem', background: '#444', borderRadius: 10 }}
    >
      Elemento
    </Draggable>
  )
}
