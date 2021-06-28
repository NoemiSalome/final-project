import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import sanityClient from '../../client'

const ImageFetch = () => {
  const [images, setImages] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}'] {
            'images': images [] {
              alt,
              asset->{ url }
            }
        }`)
  .then((data) => setImages(data[0].images))
  .catch(console.error)
}, [slug])    

  return (
    <>
      {images.map((image, index) => (
        <div key={index}>
          {index === current && (
            <>
              <ImageTitle>{image.title}</ImageTitle>
              <ProjectImage 
                src={image.asset.url}
                alt={image.alt}
              />
            </>
          )}
        </div>
      ))}
    </>
  )  
}

export default ImageFetch