import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import imageUrlBuilder from '@sanity/image-url'

import sanityClient from '../client.js'
import Header from 'components/general/Header'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const About = () => {
  const [aboutInformation, setAboutInformation] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'about'] {
          aboutText,
          images{
            asset->{
              _ref,
              _type,
              alt,
              url
            }
          }
      }`)
      .then((data) => setAboutInformation(data[0]))
      .catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        <img
          src={urlFor(aboutInformation.images).url()}
          alt='portrait'
          height='150px'
          width='120px'
        />
        <AboutText>
          {aboutInformation.aboutText}
        </AboutText>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  margin: 0 10px;
`

const AboutText = styled.p`
  font-family: 'Cormorant', serif;
  font-size: 12px;
  text-align: justify;
  width: 50%
`

export default About