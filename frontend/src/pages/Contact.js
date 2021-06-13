import React from 'react'
import styled from 'styled-components/macro'

import Header from 'components/general/Header'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  margin: 0 10px;
`

const Contact = () => {

  return (
    <>
      <Header />
      <MainContainer>
        Contact
      </MainContainer>
    </>
  )
}

export default Contact