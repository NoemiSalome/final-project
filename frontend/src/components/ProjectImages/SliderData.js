import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import imageUrlBuilder from '@sanity/image-url'

import sanityClient from '../../client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const SliderData = () => {
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
  .then((data) => setImages(data[0]))
  .catch(console.error)
}, [slug])    

  return (
    <>
      <div>
        {images.images && images.images.map((image) => (
        <div key={image.index}>
            <img 
            src={urlFor(image).url()}
            alt={image.alt}
            height='150px'
            width='120px'
            />
        </div>
        ))}
      </div>
    </>
  )  
}

export default SliderData