import { useCatImage } from '../hooks/useCatImage'

function CatImage({ fact }) {
  const { imageUrl } = useCatImage({ fact })

  return (
    <>
      {imageUrl && (
        <img
          style={{
            height: 'auto',
            maxWidth: '20rem',
          }}
          src={imageUrl}
          alt={`Cat image from first word of ${fact}`}
        />
      )}
    </>
  )
}

export default CatImage
