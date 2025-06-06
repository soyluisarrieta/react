import { useEffect, useRef, useState } from 'react'
import { Canvas, FabricObject } from 'fabric'
import Toolbar from './Toolbar'

const ImageEditor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [fabricCanvas, setFabricCanvas] = useState<Canvas | null>(null)

  // Configurar estilos por defecto para todos los objetos
  useEffect(() => {
    const defaultObjectStyles = {
      transparentCorners: false,
      padding: 5,
      borderColor: '#3d8eff',
      cornerStyle: 'circle',
      cornerColor: '#ffffff',
      cornerStrokeColor: '#3d8eff',
      cornerSize: 10
    }

    Object.assign(FabricObject.ownDefaults, defaultObjectStyles)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return
    
    const canvasWidth = 800
    const canvasHeight = 600

    const canvas = new Canvas(canvasRef.current, {
      width: canvasWidth,
      height: canvasHeight
    })
    setFabricCanvas(canvas)

    return () => {
      canvas.dispose()
    }
  }, [])

  return (
    <div>
      <Toolbar canvas={fabricCanvas} />
      <div className='w-fit mx-auto bg-white rounded-lg overflow-hidden shadow-lg'>
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}

export default ImageEditor
