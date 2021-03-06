import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import sanityClient from '../../client'

const ImageSliderMobile = () => {
  const [images, setImages] = useState([])
  const [current, setCurrent] = useState(0)
  const length = images.length
  const { slug } = useParams()

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  
  const previousImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

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
      <MainContainer>
        <CounterContainer>
          <Counter>{current+1}|{length}</Counter>
        </CounterContainer>     
        <ImageContainer>
          <BsChevronLeft onClick={previousImage} size={32}/>
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
          <BsChevronRight onClick={nextImage} size={32}/>
        </ImageContainer>
      </MainContainer>
    </>
  )  
}

const MainContainer = styled.section`
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
    @media(min-width: 1024px){
      height: 100%;
    }
`

const ImageContainer = styled.section`
  display: flex;
  margin: 10px 0 30px;
  justify-content: center;
  align-items: center;
  height: 60vh;
  position: relative;
`

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ImageTitle = styled.p`
  position: absolute;
`

const Counter = styled.h3`
  font-family:'Heebo', sans-serif;
  font-size: 14px;
    @media(min-width: 1024px){
      font-size: 22px;
    }
`

const ProjectImage = styled.img`
  max-height: 200px;
  max-width: 150px;
  height: auto;
  width: auto;
  @media(min-width: 768px){
    max-width: 230px;
    max-height: 280px;
  }
  @media(min-width: 1024px){
    width: 300px;
  }
`

export default ImageSliderMobile