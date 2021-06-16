import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import sanityClient from '../client'

import Header from 'components/general/Header'

const Contact = () => {
  const [contactData, setContactData] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'contact]{
          email,
          phone
        }`
      )
      .then((data) => setContactData(data))
      .catch(console.error)
  })
  return (
    <>
      <Header />
      <MainContainer>
        {contactData.email}
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

export default Contact