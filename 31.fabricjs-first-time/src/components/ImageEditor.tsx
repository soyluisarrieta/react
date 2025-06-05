import { useEffect, useRef } from 'react'
import { Canvas, FabricImage, Textbox, FabricObject } from 'fabric'

const ImageEditor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fabricCanvas = useRef<Canvas | null>(null)

  // Configurar estilos por defecto para todos los objetos
  useEffect(() => {
    const defaultObjectStyles = {
      transparentCorners: false,
      padding: 10,
      borderColor: '#3d8eff',
      cornerStyle: 'circle',
      cornerColor: '#ffffff',
      cornerStrokeColor: '#3d8eff',
      cornerSize: 10
    }

    Object.assign(FabricObject.ownDefaults, defaultObjectStyles)
  }, [])

  useEffect(() => {
    const canvasWidth = 800
    const canvasHeight = 600

    const canvas = new Canvas(canvasRef.current!, {
      width: canvasWidth,
      height: canvasHeight,
      backgroundColor: '#f0f0f0',
    })
    fabricCanvas.current = canvas

    // ✅ Cargar imagen
    FabricImage.fromURL('pasto.jpg').then((img) => {
      const imgWidth = img.width!
      const imgHeight = img.height!

      const scale = Math.max(
        canvasWidth / imgWidth,
        canvasHeight / imgHeight
      )

      img.set({
        scaleX: scale,
        scaleY: scale,
        originX: 'center',
        originY: 'center',
        left: canvasWidth / 2,
        top: canvasHeight / 2,
        selectable: false,
        evented: false,
      })

      canvas.backgroundImage = img
      canvas.requestRenderAll()
    })

    // ✅ Agregar texto editable
    const textbox = new Textbox('Te amo J💚', {
      left: 522,
      top: 358,
      width: 350,
      fontSize: 70,
      scaleX: 0.7,
      scaleY: 0.7,
      fill: '#fff',
    })
    canvas.add(textbox)

    // 🔍 Imprimir ubicación/tamaño en tiempo real
    const logProperties = (obj: Textbox) => {
      console.clear()
      console.log('Left:', obj.left)
      console.log('Top:', obj.top)
      console.log('Width:', obj.width)
      console.log('Height:', obj.height)
      console.log('Font size:', obj.fontSize)
      console.log('ScaleX:', obj.scaleX)
      console.log('ScaleY:', obj.scaleY)
      console.log('Angle:', obj.angle)
    }

    canvas.on('object:moving', (e) => { if (e.target === textbox) logProperties(e.target as Textbox) })
    canvas.on('object:scaling', (e) => { if (e.target === textbox) logProperties(e.target as Textbox) })
    canvas.on('object:rotating', (e) => { if (e.target === textbox) logProperties(e.target as Textbox) })
    canvas.on('object:modified', (e) => { if (e.target === textbox) logProperties(e.target as Textbox) })

    return () => {
      canvas.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} />
}

export default ImageEditor
