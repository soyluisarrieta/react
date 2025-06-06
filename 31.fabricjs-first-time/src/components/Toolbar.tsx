import { useEffect, useRef, useState } from "react"
import {
  Circle,
  FabricImage,
  Rect,
  Textbox,
  Triangle,
  type Canvas,
  type TPointerEvent,
  type TPointerEventInfo,
} from "fabric"
import {
  CircleIcon,
  ImageIcon,
  MousePointer2Icon,
  SparklesIcon,
  SquareIcon,
  TriangleIcon,
  TypeIcon,
} from "lucide-react"

interface Props {
  canvas: Canvas | null
}

export default function Toolbar({ canvas }: Props) {
  const [activeTool, setActiveTool] = useState("select")
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!canvas) return

    const handleCanvasClick = (event: TPointerEventInfo<TPointerEvent>) => {
      const pointer = canvas.getPointer(event.e)
      const { x, y } = pointer

      switch (activeTool) {
        case "text":
          addText(x, y)
          break
        case "circle":
          addCircle(x, y)
          break
        case "square":
          addSquare(x, y)
          break
        case "triangle":
          addTriangle(x, y)
          break
        default:
          return
      }

      // Volver a la herramienta de selección
      setActiveTool("select")
    }

    canvas.on("mouse:down", handleCanvasClick)

    return () => {
      canvas.off("mouse:down", handleCanvasClick)
    }
  }, [canvas, activeTool])

  const addText = (x: number, y: number) => {
    if (!canvas) return

    const text = new Textbox("Texto editable", {
      width: 150,
      left: x,
      top: y,
      fontFamily: "Arial",
      fontSize: 24,
      fill: "#000000",
    })

    canvas.add(text)
    canvas.setActiveObject(text)
    canvas.renderAll()
  }

  const addCircle = (x: number, y: number) => {
    if (!canvas) return

    const circle = new Circle({
      left: x,
      top: y,
      radius: 50,
      fill: "#ff6b6b",
    })

    canvas.add(circle)
    canvas.setActiveObject(circle)
    canvas.renderAll()
  }

  const addTriangle = (x: number, y: number) => {
    if (!canvas) return

    const triangle = new Triangle({
      left: x,
      top: y,
      width: 80,
      height: 80,
      fill: "#4ecdc4",
    })

    canvas.add(triangle)
    canvas.setActiveObject(triangle)
    canvas.renderAll()
  }

  const addSquare = (x: number, y: number) => {
    if (!canvas) return

    const rect = new Rect({
      left: x,
      top: y,
      width: 80,
      height: 80,
      fill: "#45b7d1",
    })

    canvas.add(rect)
    canvas.setActiveObject(rect)
    canvas.renderAll()
  }

  const applyFilter = () => {
    if (!canvas) return

    const activeObject = canvas.getActiveObject()
    if (activeObject && activeObject.type === "image") {
      activeObject.set({
        opacity: activeObject.opacity === 1 ? 0.7 : 1,
      })
      canvas.renderAll()
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file || !canvas) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string
      FabricImage.fromURL(imageUrl).then((img) => {
        if (img && canvas) {
          const maxWidth = 200
          const maxHeight = 200
          const scale = Math.min(
            maxWidth / img.width!,
            maxHeight / img.height!
          )

          img.set({
            left: 100,
            top: 100,
            scaleX: scale,
            scaleY: scale,
          })
          canvas.add(img)
          canvas.renderAll()
        }
      })
    }
    reader.readAsDataURL(file)
    event.target.value = ""
  }

  const tools = [
    { id: "select", icon: MousePointer2Icon, label: "Seleccionar" },
    { id: "text", icon: TypeIcon, label: "Texto" },
    { id: "circle", icon: CircleIcon, label: "Círculo" },
    { id: "square", icon: SquareIcon, label: "Cuadrado" },
    { id: "triangle", icon: TriangleIcon, label: "Triángulo" },
    {
      id: "image",
      icon: ImageIcon,
      label: "Imagen",
      action: () => fileInputRef.current?.click(),
    },
    { id: "effects", icon: SparklesIcon, label: "Efectos", action: applyFilter },
  ]

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white rounded-2xl shadow-lg p-2 flex items-center gap-1">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <button
              key={tool.id}
              className={`w-10 h-10 p-0 rounded-xl flex items-center justify-center transition-colors ${
                activeTool === tool.id
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                if (tool.action) {
                  tool.action()
                } else {
                  setActiveTool(tool.id)
                }
              }}
              title={tool.label}
            >
              <Icon className="w-4 h-4" />
            </button>
          )
        })}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  )
}
