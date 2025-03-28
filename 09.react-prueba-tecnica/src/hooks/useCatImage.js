import { useEffect, useState } from 'react'

const PREFIX_IMAGE_URL = 'https://fakeimg.pl/500x500/282828/eae0d0/?font_size=70&text='

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // Obtener primeras 3 palabras
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    setImageUrl(threeFirstWords)
  }, [fact])

  return { imageUrl: PREFIX_IMAGE_URL + imageUrl }
}
