import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import sanityClient from '../client.js'
import Header from 'components/general/Header'

const About = () => {
  const [aboutInformation, setAboutInformation] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'about'] {
          aboutText,
          images
      }`)
      .then((data) => setAboutInformation(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        {aboutInformation.aboutText && (
          <AboutText>
            {aboutInformation.aboutText}
          </AboutText>
        )}
       
        <div>
          {aboutInformation.images}
        </div>
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