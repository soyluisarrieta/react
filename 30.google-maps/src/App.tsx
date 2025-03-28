import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useRef } from "react"

export default function App() {
  const mapRef = useRef<HTMLDivElement>()

  useEffect(()=>{
    const initMap = async () => {
      const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
        version: "quarterly",
        libraries: ["places"],
      })

      const { Map } = await loader.importLibrary("maps")
      const location = {
        lat: 40.73061,
        lng: -73.935242
      }
      
      const options: google.maps.MapOptions = {
        center: location,
        zoom: 13,
        mapId: "map",
      }

      new Map(mapRef.current as HTMLDivElement, options)
    }

    initMap()
  },[])
  
  return (
    <main>
      <h1>Google Maps in React</h1>
      <div ref={mapRef} />
    </main>
  )
}