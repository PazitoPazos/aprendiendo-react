import { useEffect, useState } from "react"
import { getCatImageFromFact } from '../services/facts'
import { CAT_PREFIX_IMAGE_URL } from '../utils/constants'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState(
    '/cat/0U4jE41oGuUWThFX/says/A'
  )

  useEffect(() => {
    if (!fact) return

    getCatImageFromFact(fact).then((newImageUrl) => setImageUrl(newImageUrl))
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
