import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import imageUrlBuilder from '@sanity/image-url'

import sanityClient from '../client.js'
import Header from 'components/general/Header'
import Loader from 'components/general/Loader'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const About = () => {
  const [aboutInformation, setAboutInformation] = useState([])
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'about'] {
          aboutText,
          'images': images [] {
            alt,
            asset->{ url }
          }
      }`)
      .then((data) => setAboutInformation(data[0]))
      .catch(console.error)
  }, [])

  if (!aboutInformation) {
    return <Loader />;
  }

  return (
    <>
      <MainContainer>
        <Header />
        <ContentContainer>
          {aboutInformation.images && aboutInformation.images.map((image, index) => (
          <>
            {index === activeImage && (
              <Image
                src={urlFor(image).url()}
                alt={image.alt}
                key={image.url}
                onMouseEnter={() => {setActiveImage(1)}}
                onMouseLeave={() => {setActiveImage(0)}}
              />
            )}
          </>
          ))} 
          <AboutText>
            {aboutInformation.aboutText}
          </AboutText>
        </ContentContainer>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.section`
  height: 100vh
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 30px;
  height: 80vh;
    @media(min-width: 768px){
      margin-right: 100px;
    }
`

const AboutText = styled.p`
  font-family: 'Heebo', sans-serif;
  font-size: 12px;
  text-align: justify;
  width: 70%;
  margin-top: 8px;
    @media(min-width: 768px){
      font-size: 14px;
    }
    @media(min-width: 1024px){
      width: 620px;
      font-size: 16px;
    }
`

const Image = styled.img`
  height: 175px;
  width: auto;
    @media(min-width: 768px){
      height: 250px;
    }
    @media(min-width: 1024px){
      height: 250px;
    }
`

export default About