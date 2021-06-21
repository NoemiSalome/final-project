import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import sanityClient from '../../client'

const ImageSliderMobile = () => {
  const [images, setImages] = useState([])
  const { slug } = useParams()
  const [current, setCurrent] = useState(0)
  const length = images.length

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

// if (!Array.isArray(images) || images.length <= 1) {
//   return null
// }

const nextImage = () => {
  setCurrent(current === length - 1 ? 0 : current + 1);
};

const previousImage = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
};

console.log(current)

  return (
    <>
      <CounterContainer>
        <Counter>{current+1}|{length}</Counter>
      </CounterContainer>     
      <ImageContainer>
      <BsChevronLeft className='left-arrow' onClick={previousImage} />
        {images.map((image, index) => (
          <div key={index}>
              {index === current && (
                <Image 
                src={image.asset.url}
                alt={image.alt}
                height='auto'
                width='300px'
                />
              )}
          </div>
        ))}
        <BsChevronRight className='right-forward' onClick={nextImage} />
      </ImageContainer>
    </>
  )  
}

const CounterContainer = styled.section`
  display: flex;
  justify-content: center;
`

const Counter = styled.h3`
  font-family: 'Abril Fatface', cursive;
  font-size: 14px;
`

const ImageContainer = styled.section`
  display: flex;
  margin: 10px 0 30px;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  margin: 12px;
`


export default ImageSliderMobile