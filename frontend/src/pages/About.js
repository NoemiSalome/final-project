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
            alt,
            asset->{ url }
          }
      }`)
      .then((data) => setAboutInformation(data[0]))
      .catch(console.error)
  }, [])

  return (
    <>
      <MainContainer>
        <Header />
        <ContentContainer>
          <img
            src={urlFor(aboutInformation.images).url()}
            alt='portrait'
            height='150px'
            width='120px'
          />
          <AboutText>
            {aboutInformation.aboutText}
          </AboutText>
        </ContentContainer>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  height: 100vh
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 30px;
  height: 80vh
`

const AboutText = styled.p`
  font-family: 'Cormorant', serif;
  font-size: 13px;
  text-align: justify;
  width: 70%;
  margin-top: 8px;
`

export default About