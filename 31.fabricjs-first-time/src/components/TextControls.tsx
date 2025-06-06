import { 
  Palette, 
  Bold, 
  Italic, 
  AlignLeft, 
  AlignCenter, 
  AlignRight 
} from "lucide-react"

interface TextFormatting {
  fontSize: number
  fontFamily: string
  textColor: string
  isBold: boolean
  isItalic: boolean
  textAlign: string
}

interface TextControlsProps {
  formatting: TextFormatting
  onUpdateFormatting: (property: keyof TextFormatting, value: TextFormatting[keyof TextFormatting]) => void
  onToggleBold: () => void
  onToggleItalic: () => void
  onTextAlign: (align: string) => void
  onToggleCase: () => void
}

export default function TextControls({
  formatting,
  onUpdateFormatting,
  onToggleBold,
  onToggleItalic,
  onTextAlign,
  onToggleCase,
}: TextControlsProps) {
  const fontFamilies = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Georgia",
    "Verdana",
    "Courier New",
    "Impact",
    "Comic Sans MS",
    "Trebuchet MS",
    "Palatino",
  ]

  return (
    <div className="space-y-4">
      {/* Font Family */}
      <div className="space-y-1">
        <label className="text-sm font-medium">Fuente</label>
        <select
          value={formatting.fontFamily}
          onChange={(e) => onUpdateFormatting("fontFamily", e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
        >
          {fontFamilies.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      {/* Font Size */}
      <div className="space-y-1">
        <label className="text-sm font-medium">Tamaño</label>
        <input
          type="number"
          value={formatting.fontSize}
          onChange={(e) => onUpdateFormatting("fontSize", Number.parseInt(e.target.value))}
          className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
          min="8"
          max="200"
        />
      </div>

      {/* Text Color */}
      <div className="space-y-1">
        <label className="text-sm font-medium flex items-center gap-1">
          <Palette className="w-4 h-4" /> Color
        </label>
        <input
          type="color"
          value={formatting.textColor}
          onChange={(e) => onUpdateFormatting("textColor", e.target.value)}
          className="w-full h-8 border border-gray-300 rounded cursor-pointer"
        />
      </div>

      {/* Text Style */}
      <div className="space-y-1">
        <label className="text-sm font-medium">Estilo</label>
        <div className="flex gap-2">
          <button
            onClick={onToggleBold}
            className={`flex-1 py-1 px-2 rounded flex items-center justify-center gap-1 ${
              formatting.isBold ? "bg-gray-800 text-white" : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            <Bold className="w-4 h-4" /> Negrita
          </button>
          <button
            onClick={onToggleItalic}
            className={`flex-1 py-1 px-2 rounded flex items-center justify-center gap-1 ${
              formatting.isItalic ? "bg-gray-800 text-white" : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            <Italic className="w-4 h-4" /> Cursiva
          </button>
        </div>
      </div>

      {/* Text Alignment */}
      <div className="space-y-1">
        <label className="text-sm font-medium">Alineación</label>
        <div className="flex gap-1">
          <button
            onClick={() => onTextAlign("left")}
            className={`flex-1 py-1 rounded flex items-center justify-center ${
              formatting.textAlign === "left" ? "bg-gray-800 text-white" : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            <AlignLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => onTextAlign("center")}
            className={`flex-1 py-1 rounded flex items-center justify-center ${
              formatting.textAlign === "center" ? "bg-gray-800 text-white" : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            <AlignCenter className="w-4 h-4" />
          </button>
          <button
            onClick={() => onTextAlign("right")}
            className={`flex-1 py-1 rounded flex items-center justify-center ${
              formatting.textAlign === "right" ? "bg-gray-800 text-white" : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            <AlignRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Toggle Case */}
      <button
        onClick={onToggleCase}
        className="w-full py-1 px-3 border border-gray-300 rounded text-sm hover:bg-gray-100"
      >
        Cambiar mayúsculas/minúsculas
      </button>
    </div>
  )
}
