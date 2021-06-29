import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import sanityClient from '../client'
import Header from 'components/general/Header'

const Contact = () => {
  const [contactData, setContactData] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'contact'] {
          email,
          phone,
          contactWords
        }`
      )
      .then((data) => setContactData(data[0]))
      .catch(console.error)
  }, [])
  return (
    <>
      <MainContainer>
        <Header />
        <ContentContainer>
          <ContactContainer>
            <Mail href="mailto:anina.schmid@gmx.ch">{contactData.email}</Mail>
            <p>{contactData.phone}</p>
          </ContactContainer>
          <GreetingContainer>
            <ProjectLine></ProjectLine>
            <MainTitle>
              {contactData.contactWords}
            </MainTitle>
          </GreetingContainer>
          <DottedLineContainer></DottedLineContainer>
        </ContentContainer>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  margin: 0 30px;
    @media(min-width: 768px){
      margin: 50px 100px;
    }
    @media(min-width: 1024px){
      margin: 50px 600px 0 100px;
    }
`

const ContactContainer = styled.div`
  font-family: 'Heebo', sans-serif;
  font-size: 12px;
  text-align: right;
  border-left: 1px solid black;
  height: 55vh;
  padding: 50px 10px 0 0;
    @media(min-width: 768px){
      font-size: 14px;
    }
    @media(min-width: 768px){
      font-size: 16px;
    }
`

const Mail = styled.a`
  text-decoration: none;
  color: black;
`

const GreetingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: 2px solid black;
  height: 1px;
`

const DottedLineContainer = styled.div`
  height: 150px;
  border-left: 2px dotted black;
    @media(min-width: 768px){
      border-left: 2px dotted black;
      }
`

const ProjectLine = styled.div`
  border-top: 1px solid black;
  width: 30%;
    @media(min-width: 768px){
      border-top: 2px solid black;
      }
`

const MainTitle = styled.h1`
  font-family: 'Heebo', sans-serif;
  font-size: 12px;
  margin-left: 8px;
    @media(min-width: 768px){
      font-size: 15px;
    }
    @media(min-width: 1024px){
      font-size: 16px;
    }
`

export default Contact